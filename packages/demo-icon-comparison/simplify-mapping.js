const fs = require('fs');

// Load the current mapping
const currentMapping = JSON.parse(fs.readFileSync('./icon-name-mapping.json', 'utf-8'));

// Convert to simplified format
const simplifiedMapping = {};

for (const [oldName, data] of Object.entries(currentMapping)) {
  // If renamed, show the new name. If same, show empty string
  simplifiedMapping[oldName] = oldName === data.newName ? "" : data.newName;
}

// Write the simplified mapping
fs.writeFileSync('./icon-name-mapping.json', JSON.stringify(simplifiedMapping, null, 2));

// Count stats
const renamed = Object.values(simplifiedMapping).filter(v => v !== "").length;
const keptAsIs = Object.values(simplifiedMapping).filter(v => v === "").length;

console.log('✅ Simplified icon-name-mapping.json');
console.log(`   Total icons: ${Object.keys(simplifiedMapping).length}`);
console.log(`   Renamed: ${renamed} (non-empty values)`);
console.log(`   Kept as-is: ${keptAsIs} (empty strings)`);
