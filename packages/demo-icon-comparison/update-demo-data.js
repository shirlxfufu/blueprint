const fs = require('fs');

// Load the icon-name-mapping
const mapping = JSON.parse(fs.readFileSync('./icon-name-mapping.json', 'utf-8'));

// Convert to the format expected by the demo
const icons = {};
for (const [oldName, newNameValue] of Object.entries(mapping)) {
  const newName = newNameValue === "" ? oldName : newNameValue;
  const status = newNameValue === "" ? 'keep-as-is' : 'renamed';

  icons[oldName] = {
    newName,
    reason: status === 'renamed'
      ? 'Renamed following visual naming rules'
      : 'Kept as-is',
    confidence: 'high',
    status
  };
}

// Calculate stats
const total = Object.keys(icons).length;
const renamed = Object.values(icons).filter(i => i.status === 'renamed').length;
const keptAsIs = total - renamed;

// Generate the output
const output = {
  metadata: {
    generatedAt: new Date().toISOString(),
    algorithmVersion: '2.0.0',
    totalIcons: total,
    renamedIcons: renamed,
    keptAsIs: keptAsIs,
    note: 'All icons with visual-first naming rules applied'
  },
  stats: {
    total,
    renamed,
    keptAsIs,
    confidence: {
      high: total,
      medium: 0,
      low: 0
    },
    categories: {
      'keep-as-is': keptAsIs,
      'visual-naming-rules': renamed
    },
    manualReview: 0
  },
  icons
};

// Write to the data file
fs.writeFileSync(
  './src/data/ai-suggested-names.json',
  JSON.stringify(output, null, 2)
);

console.log('✅ Updated ai-suggested-names.json');
console.log(`   Total icons: ${total}`);
console.log(`   Renamed: ${renamed} (${(renamed / total * 100).toFixed(1)}%)`);
console.log(`   Kept as-is: ${keptAsIs} (${(keptAsIs / total * 100).toFixed(1)}%)`);
