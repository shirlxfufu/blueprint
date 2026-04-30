const fs = require('fs');

// Read the files
const iconComparisonData = JSON.parse(fs.readFileSync('./icon-comparison-data.json', 'utf-8'));
const xinyiGregComparison = JSON.parse(fs.readFileSync('./xinyi-greg-comparison.json', 'utf-8'));

let fixedCount = 0;

// Fix the greg values from xinyi-greg-comparison
for (const [iconName, data] of Object.entries(iconComparisonData)) {
  if (data.greg === null && xinyiGregComparison[iconName]) {
    data.greg = xinyiGregComparison[iconName].greg;

    // Determine gregStatus based on whether Greg renamed it
    if (xinyiGregComparison[iconName].greg === iconName) {
      data.gregStatus = 'keep';
    } else {
      data.gregStatus = 'rename';
    }

    fixedCount++;
  }
}

// Write back
fs.writeFileSync('./icon-comparison-data.json', JSON.stringify(iconComparisonData, null, 2));

console.log(`Fixed ${fixedCount} icons with missing Greg data`);

// Generate summary
const stats = {
  total: Object.keys(iconComparisonData).length,
  gregHasName: Object.values(iconComparisonData).filter(d => d.greg !== null).length,
  gregNull: Object.values(iconComparisonData).filter(d => d.greg === null).length,
  namedDifferently: Object.values(iconComparisonData).filter(d => d.greg && d.xinyi !== d.greg).length,
  namesMatch: Object.values(iconComparisonData).filter(d => d.greg && d.xinyi === d.greg).length,
};

console.log(JSON.stringify(stats, null, 2));
