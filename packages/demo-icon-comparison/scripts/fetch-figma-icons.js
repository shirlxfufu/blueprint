#!/usr/bin/env node

/**
 * Script to fetch icon SVGs from Figma
 *
 * Usage:
 *   node scripts/fetch-figma-icons.js
 *
 * Requirements:
 *   - FIGMA_PERSONAL_ACCESS_TOKEN environment variable or in .env file
 *   - Node.js with fetch support (Node 18+)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const FIGMA_FILE_ID = '0PMDlW2PlJ1jDn37sRNmBu';
const FIGMA_NODE_ID = '19772:6471';  // Frame containing all icons
const OUTPUT_DIR = path.join(__dirname, '../public/new-icons');

// Load token from .env if it exists
let FIGMA_TOKEN = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const tokenMatch = envContent.match(/FIGMA_PERSONAL_ACCESS_TOKEN=(.+)/);
  if (tokenMatch) {
    FIGMA_TOKEN = tokenMatch[1].trim();
  }
}

if (!FIGMA_TOKEN) {
  console.error('❌ FIGMA_PERSONAL_ACCESS_TOKEN not found.');
  console.error('Please set it in .env file or as an environment variable.');
  console.error('Get your token from: https://www.figma.com/settings');
  process.exit(1);
}

// Helper to make Figma API requests
async function figmaRequest(endpoint) {
  const url = `https://api.figma.com/v1${endpoint}`;

  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      },
      rejectUnauthorized: false
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Figma API error: ${res.statusCode} - ${data}`));
        }
      });
    }).on('error', reject);
  });
}

// Helper to download file
async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, { rejectUnauthorized: false }, (res) => {
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('🎨 Fetching icons from Figma...\n');
  console.log(`File ID: ${FIGMA_FILE_ID}`);
  console.log(`Node ID: ${FIGMA_NODE_ID}\n`);

  try {
    // Step 1: Get the file structure to find all icon components
    console.log('📋 Step 1: Fetching file structure...');
    const fileData = await figmaRequest(`/files/${FIGMA_FILE_ID}?depth=2`);

    // Find the target node recursively
    let targetNode = null;
    function findNode(node) {
      if (node.id === FIGMA_NODE_ID.replace(':', '-')) {
        targetNode = node;
        return true;
      }
      if (node.children) {
        for (const child of node.children) {
          if (findNode(child)) return true;
        }
      }
      return false;
    }

    findNode(fileData.document);

    if (!targetNode) {
      // Try to get the specific node
      console.log('   Trying alternative method to fetch specific node...');
      const nodeData = await figmaRequest(`/files/${FIGMA_FILE_ID}/nodes?ids=${encodeURIComponent(FIGMA_NODE_ID)}`);
      const nodeKey = Object.keys(nodeData.nodes)[0];
      if (nodeKey && nodeData.nodes[nodeKey]) {
        targetNode = nodeData.nodes[nodeKey].document;
      }
    }

    if (!targetNode) {
      throw new Error(`Node ${FIGMA_NODE_ID} not found in file`);
    }

    // Find all icon components (assuming they're direct children or nested)
    const icons = [];
    function findIcons(node) {
      if (node.type === 'COMPONENT' || node.type === 'INSTANCE' || node.type === 'FRAME') {
        // Extract icon name from component name
        const name = node.name.toLowerCase().replace(/\s+/g, '-');
        icons.push({
          id: node.id,
          name: name
        });
      }
      if (node.children) {
        node.children.forEach(findIcons);
      }
    }

    findIcons(targetNode);

    console.log(`✅ Found ${icons.length} icons\n`);

    if (icons.length === 0) {
      console.log('⚠️  No icons found in the specified node.');
      console.log('Please verify the node-id contains icon components.');
      return;
    }

    // Step 2: Request SVG exports for all icons
    console.log('🖼️  Step 2: Requesting SVG exports...');
    const iconIds = icons.map(icon => icon.id).join(',');
    const imagesData = await figmaRequest(
      `/images/${FIGMA_FILE_ID}?ids=${iconIds}&format=svg&svg_include_id=true&svg_simplify_stroke=true`
    );

    if (!imagesData.images || Object.keys(imagesData.images).length === 0) {
      throw new Error('No images returned from Figma API');
    }

    console.log(`✅ Received ${Object.keys(imagesData.images).length} export URLs\n`);

    // Step 3: Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Step 4: Download all SVG files
    console.log('⬇️  Step 3: Downloading SVG files...');
    let downloadedCount = 0;

    for (const icon of icons) {
      const svgUrl = imagesData.images[icon.id];
      if (!svgUrl) {
        console.log(`⚠️  No SVG URL for ${icon.name}`);
        continue;
      }

      const filepath = path.join(OUTPUT_DIR, `${icon.name}.svg`);
      // Ensure directory exists for nested paths
      const dir = path.dirname(filepath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      try {
        await downloadFile(svgUrl, filepath);
        downloadedCount++;
        if (downloadedCount % 50 === 0) {
          console.log(`   Downloaded ${downloadedCount}/${icons.length}...`);
        }
      } catch (error) {
        console.error(`❌ Failed to download ${icon.name}: ${error.message}`);
      }
    }

    console.log(`\n✅ Successfully downloaded ${downloadedCount}/${icons.length} icons`);
    console.log(`📁 Icons saved to: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    if (error.message.includes('403')) {
      console.error('   Your Figma token may be invalid or expired.');
    } else if (error.message.includes('404')) {
      console.error('   The file or node ID may be incorrect.');
    }
    process.exit(1);
  }
}

main();
