const fs = require('fs');

// Load data
const mapping = require('./icon-name-mapping.json');
const blueprintIcons = require('@blueprintjs/icons/icons.json');

// Get command line arguments
const args = process.argv.slice(2);
const command = args[0];

function showHelp() {
  console.log(`
Icon Naming Review Tool
=======================

Commands:
  node review-icons.js search <pattern>     - Find icons matching pattern
  node review-icons.js renamed <pattern>    - Show renamed icons matching pattern
  node review-icons.js kept <pattern>       - Show kept-as-is icons matching pattern
  node review-icons.js suggest <old-name>   - Get suggestions for an icon
  node review-icons.js update <old> <new>   - Update a single icon name
  node review-icons.js batch <pattern>      - Show batch update suggestions

Examples:
  node review-icons.js search sort
  node review-icons.js renamed flow
  node review-icons.js suggest sort-asc
  node review-icons.js update sort-asc bars-arrow-up
  `);
}

function searchIcons(pattern) {
  const regex = new RegExp(pattern, 'i');
  const results = Object.entries(mapping)
    .filter(([name]) => regex.test(name))
    .map(([oldName, data]) => ({
      oldName,
      newName: data.newName,
      status: data.status,
      changed: oldName !== data.newName
    }));

  console.log(`\nFound ${results.length} icons matching "${pattern}":\n`);
  results.forEach(({ oldName, newName, status, changed }) => {
    const marker = changed ? '→' : '=';
    const statusTag = status === 'renamed' ? '[RENAMED]' : '[KEPT]';
    console.log(`  ${statusTag} ${oldName.padEnd(35)} ${marker} ${newName}`);
  });
}

function showRenamed(pattern) {
  const regex = new RegExp(pattern, 'i');
  const results = Object.entries(mapping)
    .filter(([name, data]) => regex.test(name) && data.status === 'renamed')
    .map(([oldName, data]) => ({ oldName, newName: data.newName }));

  console.log(`\nFound ${results.length} renamed icons matching "${pattern}":\n`);
  results.forEach(({ oldName, newName }) => {
    console.log(`  ${oldName.padEnd(35)} → ${newName}`);
  });
}

function showKept(pattern) {
  const regex = new RegExp(pattern, 'i');
  const results = Object.entries(mapping)
    .filter(([name, data]) => regex.test(name) && data.status === 'keep-as-is')
    .map(([oldName, data]) => ({ oldName, newName: data.newName }));

  console.log(`\nFound ${results.length} kept-as-is icons matching "${pattern}":\n`);
  results.forEach(({ oldName, newName }) => {
    console.log(`  ${oldName.padEnd(35)} = ${newName}`);
  });
}

function suggestName(oldName) {
  const current = mapping[oldName];
  if (!current) {
    console.log(`\n❌ Icon "${oldName}" not found`);
    return;
  }

  const icon = blueprintIcons.find(i => i.iconName === oldName);

  console.log(`\n📋 Current Mapping for "${oldName}":`);
  console.log(`   New Name: ${current.newName}`);
  console.log(`   Status:   ${current.status}`);

  if (icon) {
    console.log(`\n📖 Metadata:`);
    console.log(`   Display: ${icon.displayName}`);
    console.log(`   Tags:    ${icon.tags}`);
    console.log(`   Group:   ${icon.group}`);
  }

  // Find similar patterns
  const prefix = oldName.split('-')[0];
  const similar = Object.entries(mapping)
    .filter(([name]) => name.startsWith(prefix) && name !== oldName)
    .slice(0, 5);

  if (similar.length > 0) {
    console.log(`\n🔍 Similar Icons (same prefix "${prefix}"):`);
    similar.forEach(([name, data]) => {
      console.log(`   ${name.padEnd(35)} → ${data.newName}`);
    });
  }

  console.log(`\n💡 To update: node review-icons.js update ${oldName} <new-name>`);
}

function updateIcon(oldName, newName) {
  if (!mapping[oldName]) {
    console.log(`\n❌ Icon "${oldName}" not found`);
    return;
  }

  const oldMapping = mapping[oldName];
  mapping[oldName] = {
    newName: newName,
    status: newName === oldName ? 'keep-as-is' : 'renamed'
  };

  // Save updated mapping
  fs.writeFileSync('./icon-name-mapping.json', JSON.stringify(mapping, null, 2));

  console.log(`\n✅ Updated "${oldName}":`);
  console.log(`   Old: ${oldMapping.newName} [${oldMapping.status}]`);
  console.log(`   New: ${newName} [${mapping[oldName].status}]`);

  // Also update icon-name-changes.json
  const iconChanges = Object.entries(mapping).map(([oldName, data]) => ({
    oldName,
    newName: data.newName,
    tag: data.status
  }));

  iconChanges.sort((a, b) => {
    if (a.tag !== b.tag) return a.tag === 'renamed' ? -1 : 1;
    return a.oldName.localeCompare(b.oldName);
  });

  const stats = {
    total: iconChanges.length,
    renamed: iconChanges.filter(i => i.tag === 'renamed').length,
    keptAsIs: iconChanges.filter(i => i.tag === 'keep-as-is').length
  };

  const output = {
    metadata: {
      generatedAt: new Date().toISOString(),
      totalIcons: stats.total,
      renamedCount: stats.renamed,
      keptAsIsCount: stats.keptAsIs,
      renamedPercentage: `${(stats.renamed / stats.total * 100).toFixed(1)}%`,
      keptAsIsPercentage: `${(stats.keptAsIs / stats.total * 100).toFixed(1)}%`
    },
    icons: iconChanges
  };

  fs.writeFileSync('./icon-name-changes.json', JSON.stringify(output, null, 2));
  console.log(`\n📝 Files updated: icon-name-mapping.json, icon-name-changes.json`);
}

function showBatchSuggestions(pattern) {
  const regex = new RegExp(pattern, 'i');
  const matches = Object.entries(mapping)
    .filter(([name]) => regex.test(name));

  console.log(`\n🔄 Batch Review for "${pattern}" (${matches.length} icons):\n`);

  matches.forEach(([oldName, data]) => {
    const icon = blueprintIcons.find(i => i.iconName === oldName);
    const statusTag = data.status === 'renamed' ? '[RENAMED]' : '[KEPT]   ';

    console.log(`${statusTag} ${oldName.padEnd(35)} → ${data.newName}`);
    if (icon && icon.tags) {
      console.log(`          Tags: ${icon.tags.substring(0, 60)}...`);
    }
    console.log();
  });
}

// Main execution
if (args.length === 0 || command === 'help') {
  showHelp();
} else if (command === 'search' && args[1]) {
  searchIcons(args[1]);
} else if (command === 'renamed' && args[1]) {
  showRenamed(args[1]);
} else if (command === 'kept' && args[1]) {
  showKept(args[1]);
} else if (command === 'suggest' && args[1]) {
  suggestName(args[1]);
} else if (command === 'update' && args[1] && args[2]) {
  updateIcon(args[1], args[2]);
} else if (command === 'batch' && args[1]) {
  showBatchSuggestions(args[1]);
} else {
  console.log('❌ Invalid command');
  showHelp();
}
