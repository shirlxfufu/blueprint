const fs = require('fs');
const path = require('path');

// Load Blueprint icons
const blueprintIcons = require('@blueprintjs/icons/icons.json');

// Load existing AI suggestions (603 icons)
const aiSuggestions = require('./src/data/ai-suggested-names.json').icons;

// Additional transformations for the 101 missing icons
const additionalTransformations = {
  // Core action verbs → tools
  'search': 'magnifying-glass',
  'edit': 'pencil',
  'filter': 'funnel',
  'add': 'plus',
  'remove': 'minus',
  'minimize': 'arrows-in-corners',
  'maximize': 'arrows-out-corners',

  // Table abbreviations
  'th': 'table',
  'th-list': 'table-list',
  'th-add': 'table-plus',
  'th-filtered': 'table-filtered',
  'th-derived': 'table-derived',
  'th-disconnect': 'table-disconnect',

  // New/Add prefix patterns
  'new-text-box': 'text-box-plus',
  'new-person': 'person-plus',
  'new-object': 'object-plus',
  'new-link': 'link-plus',
  'new-layer': 'layer-plus',
  'new-layers': 'layers-plus',
  'new-drawing': 'drawing-plus',
  'new-grid-item': 'grid-item-plus',
  'new-prescription': 'prescription-plus',
  'folder-new': 'folder-plus',
  'add-to-folder': 'folder-plus',
  'add-to-artifact': 'artifact-plus',
  'add-row-top': 'row-plus-top',
  'add-row-bottom': 'row-plus-bottom',
  'add-column-left': 'column-plus-left',
  'add-column-right': 'column-plus-right',
  'add-location': 'location-plus',
  'add-clip': 'clip-plus',

  // Sort patterns
  'sort-asc': 'bars-arrow-up',
  'sort-desc': 'bars-arrow-down',
  'sort-alphabetical': 'letters-ascending',
  'sort-alphabetical-desc': 'letters-descending',
  'sort-numerical': 'numbers-ascending',
  'sort-numerical-desc': 'numbers-descending',

  // Layout patterns
  'layout-two-columns': 'columns-two',
  'layout-three-columns': 'columns-three',
  'layout-two-rows': 'rows-two',
  'layout-three-rows': 'rows-three',
  'one-column': 'column-one',
  'two-columns': 'columns-two',
  'three-columns': 'columns-three',
  'four-columns': 'columns-four',
  'multi-select': 'selection-multiple',
  'one-to-one': 'arrow-one-to-one',
  'one-to-many': 'arrow-one-to-many',
  'many-to-one': 'arrow-many-to-one',
  'many-to-many': 'arrow-many-to-many',

  // Kept as-is based on user feedback
  'lock': 'lock',
  'unlock': 'unlock',

  // Additional mappings
  'unresolve': 'resolution-undo',
  'ungroup-objects': 'objects-ungroup',
  'unarchive': 'archive-open',
  'undo': 'arrow-curved-left',
  'redo': 'arrow-curved-right',
  'trending-up': 'arrow-trending-up',
  'trending-down': 'arrow-trending-down',
  'take-action': 'hand-action',
  'step-forward': 'arrow-step-forward',
  'step-backward': 'arrow-step-backward',
  'step-chart': 'chart-step',
  'series-search': 'timeline-magnifying-glass',
  'series-filtered': 'timeline-filtered',
  'series-derived': 'timeline-derived',
  'series-configuration': 'timeline-settings',
  'series-add': 'timeline-plus',
  'send-to-map': 'map-receive',
  'send-to-graph': 'graph-receive',
  'send-to': 'arrow-send-to',
  'send-message': 'envelope-send',
  'scatter-plot': 'chart-scatter',
  'save': 'floppy-disk',
  'rotate-page': 'page-rotate',
  'rotate-document': 'document-rotate',
  'resolve': 'checkmark-resolve',
  'reset': 'arrow-reset',
  'repeat': 'arrows-repeat',
  'regression-chart': 'chart-regression',
  'record': 'circle-record',
  'play': 'triangle-right',
  'pause': 'bars-pause',
  'stop': 'square-stop',
  'predictive-analysis': 'chart-predictive',
  'office': 'building-office',
  'notifications-updated': 'bell-badge',
  'notifications-snooze': 'bell-snooze',
  'notifications': 'bell',
};

// Build the complete mapping
const iconMapping = {};
const allIconNames = blueprintIcons.map(icon => icon.iconName);

console.log(`Total Blueprint icons: ${allIconNames.length}`);

for (const iconName of allIconNames) {
  // Check if we have an AI suggestion
  if (aiSuggestions[iconName]) {
    const suggestion = aiSuggestions[iconName];
    const hasChanged = suggestion.newName !== iconName;

    iconMapping[iconName] = {
      newName: suggestion.newName,
      status: hasChanged ? 'renamed' : 'keep-as-is'
    };
  }
  // Check if we have an additional transformation
  else if (additionalTransformations[iconName]) {
    iconMapping[iconName] = {
      newName: additionalTransformations[iconName],
      status: additionalTransformations[iconName] !== iconName ? 'renamed' : 'keep-as-is'
    };
  }
  // Keep as-is
  else {
    iconMapping[iconName] = {
      newName: iconName,
      status: 'keep-as-is'
    };
  }
}

// Calculate statistics
const stats = {
  total: Object.keys(iconMapping).length,
  renamed: Object.values(iconMapping).filter(v => v.status === 'renamed').length,
  keptAsIs: Object.values(iconMapping).filter(v => v.status === 'keep-as-is').length
};

console.log('\nStatistics:');
console.log(`Total: ${stats.total}`);
console.log(`Renamed: ${stats.renamed} (${(stats.renamed / stats.total * 100).toFixed(1)}%)`);
console.log(`Keep As-Is: ${stats.keptAsIs} (${(stats.keptAsIs / stats.total * 100).toFixed(1)}%)`);

// Write the file
const outputPath = path.join(__dirname, 'icon-name-mapping.json');
fs.writeFileSync(outputPath, JSON.stringify(iconMapping, null, 2));

console.log(`\nWrote ${stats.total} icons to ${outputPath}`);
