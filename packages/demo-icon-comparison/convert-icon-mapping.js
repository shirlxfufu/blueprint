/**
 * Convert icon-name-changes.json to icon-name-mapping.json format
 * This script transforms the array-based format from icon-name-changes.json
 * into the object-based format expected by the demo app.
 */

const fs = require('fs');
const path = require('path');

// Read the icon-name-changes.json file
const iconChangesPath = path.join(__dirname, 'icon-name-changes.json');
const iconChanges = JSON.parse(fs.readFileSync(iconChangesPath, 'utf8'));

// Convert the array format to object format
const iconMapping = {};

iconChanges.icons.forEach(icon => {
  iconMapping[icon.oldName] = {
    newName: icon.newName,
    status: icon.tag
  };
});

// Write to icon-name-mapping.json
const outputPath = path.join(__dirname, 'icon-name-mapping.json');
fs.writeFileSync(outputPath, JSON.stringify(iconMapping, null, 2));

console.log(`✅ Successfully converted ${iconChanges.icons.length} icons to icon-name-mapping.json`);
console.log(`   Renamed: ${iconChanges.metadata.renamedCount} (${iconChanges.metadata.renamedPercentage})`);
console.log(`   Keep As-Is: ${iconChanges.metadata.keptAsIsCount} (${iconChanges.metadata.keptAsIsPercentage})`);
