const fs = require('fs');
const path = require('path');

// Load the current mapping
const mapping = require('./icon-name-mapping.json');

// Transform to the desired format
const iconChanges = Object.entries(mapping).map(([oldName, data]) => ({
  oldName: oldName,
  newName: data.newName,
  tag: data.status
}));

// Sort by tag (renamed first) then alphabetically by oldName
iconChanges.sort((a, b) => {
  if (a.tag !== b.tag) {
    return a.tag === 'renamed' ? -1 : 1;
  }
  return a.oldName.localeCompare(b.oldName);
});

// Calculate statistics
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

// Write the file
const outputPath = path.join(__dirname, 'icon-name-changes.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log('Icon Name Changes Summary:');
console.log('========================');
console.log(`Total Icons: ${stats.total}`);
console.log(`Renamed: ${stats.renamed} (${(stats.renamed / stats.total * 100).toFixed(1)}%)`);
console.log(`Keep As-Is: ${stats.keptAsIs} (${(stats.keptAsIs / stats.total * 100).toFixed(1)}%)`);
console.log(`\nFile written to: ${outputPath}`);
