#!/usr/bin/env node

/**
 * Debug script to explore Figma file structure
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const FIGMA_FILE_ID = '0PMDlW2PlJ1jDn37sRNmBu';
const FIGMA_NODE_ID = '19772:6471';

// Load token from .env
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
  process.exit(1);
}

async function figmaRequest(endpoint) {
  const url = `https://api.figma.com/v1${endpoint}`;
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'X-Figma-Token': FIGMA_TOKEN },
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

function printNodeStructure(node, depth = 0) {
  const indent = '  '.repeat(depth);
  console.log(`${indent}${node.type} - "${node.name}" (id: ${node.id})`);

  if (node.children && depth < 4) {
    node.children.slice(0, 5).forEach(child => printNodeStructure(child, depth + 1));
    if (node.children.length > 5) {
      console.log(`${indent}  ... and ${node.children.length - 5} more children`);
    }
  }
}

async function main() {
  console.log('🔍 Exploring Figma file structure...\n');

  try {
    // Get specific node
    console.log('Fetching specific node...');
    const nodeData = await figmaRequest(`/files/${FIGMA_FILE_ID}/nodes?ids=${encodeURIComponent(FIGMA_NODE_ID)}`);

    console.log('\nNode structure:');
    const nodeKey = Object.keys(nodeData.nodes)[0];
    if (nodeKey && nodeData.nodes[nodeKey]) {
      const targetNode = nodeData.nodes[nodeKey].document;
      printNodeStructure(targetNode);

      // Save full structure to file for inspection
      const outputPath = path.join(__dirname, 'figma-structure-debug.json');
      fs.writeFileSync(outputPath, JSON.stringify(targetNode, null, 2));
      console.log(`\n✅ Full structure saved to: ${outputPath}`);
    } else {
      console.log('❌ Node not found');
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
