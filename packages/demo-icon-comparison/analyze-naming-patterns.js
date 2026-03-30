const fs = require('fs');

// Load the mapping
const mapping = require('./icon-name-mapping.json');

// Analyze patterns
const patterns = {
  'Action verbs → Objects': [],
  'Prefix patterns': {
    'add/new → {object}-plus': [],
    'remove → {object}-minus': [],
    'text- prefix': [],
    'arrow- prefix': [],
  },
  'Suffix patterns': {
    '-plus suffix': [],
    '-minus suffix': [],
    'Directional suffixes': [],
  },
  'Compound transformations': {
    'flow- icons': [],
    'layout- icons': [],
    'array- icons': [],
    'th- (table) icons': [],
  },
  'Visual descriptors': {
    'Shapes': [],
    'Tools': [],
    'Objects': [],
  }
};

const renamed = Object.entries(mapping).filter(([_, v]) => v.status === 'renamed');

console.log(`Analyzing ${renamed.length} renamed icons...\n`);

// Pattern detection
for (const [oldName, data] of renamed) {
  const { newName } = data;

  // Action verbs → Objects
  if (['add', 'remove', 'edit', 'search', 'filter'].includes(oldName)) {
    patterns['Action verbs → Objects'].push({ oldName, newName });
  }

  // add/new → plus pattern
  if ((oldName.startsWith('add-') || oldName.startsWith('new-')) && newName.includes('-plus')) {
    patterns['Prefix patterns']['add/new → {object}-plus'].push({ oldName, newName });
  }

  // text- prefix
  if (newName.startsWith('text-')) {
    patterns['Prefix patterns']['text- prefix'].push({ oldName, newName });
  }

  // arrow- prefix
  if (newName.startsWith('arrow-')) {
    patterns['Prefix patterns']['arrow- prefix'].push({ oldName, newName });
  }

  // -plus suffix
  if (newName.endsWith('-plus') && !oldName.includes('plus')) {
    patterns['Suffix patterns']['-plus suffix'].push({ oldName, newName });
  }

  // -minus suffix
  if (newName.endsWith('-minus')) {
    patterns['Suffix patterns']['-minus suffix'].push({ oldName, newName });
  }

  // flow- icons
  if (oldName.startsWith('flow-')) {
    patterns['Compound transformations']['flow- icons'].push({ oldName, newName });
  }

  // layout- icons
  if (oldName.startsWith('layout-')) {
    patterns['Compound transformations']['layout- icons'].push({ oldName, newName });
  }

  // array- icons
  if (oldName.startsWith('array-')) {
    patterns['Compound transformations']['array- icons'].push({ oldName, newName });
  }

  // th- (table) icons
  if (oldName.startsWith('th-') || oldName === 'th') {
    patterns['Compound transformations']['th- (table) icons'].push({ oldName, newName });
  }
}

// Print patterns
console.log('═══════════════════════════════════════════════════════════\n');
console.log('NAMING PATTERN ANALYSIS\n');
console.log('═══════════════════════════════════════════════════════════\n');

for (const [category, items] of Object.entries(patterns)) {
  if (typeof items === 'object' && !Array.isArray(items)) {
    console.log(`\n${category}:`);
    console.log('─'.repeat(60));
    for (const [subCategory, examples] of Object.entries(items)) {
      if (examples.length > 0) {
        console.log(`\n  ${subCategory} (${examples.length} icons):`);
        examples.slice(0, 5).forEach(({ oldName, newName }) => {
          console.log(`    • ${oldName.padEnd(30)} → ${newName}`);
        });
        if (examples.length > 5) {
          console.log(`    ... and ${examples.length - 5} more`);
        }
      }
    }
  } else if (Array.isArray(items) && items.length > 0) {
    console.log(`\n${category}:`);
    console.log('─'.repeat(60));
    items.forEach(({ oldName, newName }) => {
      console.log(`  • ${oldName.padEnd(30)} → ${newName}`);
    });
  }
}

// Generate rule suggestions
console.log('\n\n═══════════════════════════════════════════════════════════');
console.log('EXTRACTED NAMING RULES');
console.log('═══════════════════════════════════════════════════════════\n');

const rules = [
  {
    rule: 'Rule 1: Action Verbs → Visual Objects',
    examples: [
      'search → magnifying-glass',
      'edit → pencil',
      'filter → funnel',
      'add → plus',
      'remove → minus'
    ],
    rationale: 'Name what you SEE, not what it DOES'
  },
  {
    rule: 'Rule 2: "add"/"new" Prefix → "{object}-plus" Suffix',
    examples: patterns['Prefix patterns']['add/new → {object}-plus'].slice(0, 5).map(p => `${p.oldName} → ${p.newName}`),
    rationale: 'Move action to end, make object primary'
  },
  {
    rule: 'Rule 3: Text Alignment → "text-" Prefix',
    examples: patterns['Prefix patterns']['text- prefix'].slice(0, 5).map(p => `${p.oldName} → ${p.newName}`),
    rationale: 'Clarify context for alignment icons'
  },
  {
    rule: 'Rule 4: "flow" → Use Specific Visual Pattern',
    examples: patterns['Compound transformations']['flow- icons'].slice(0, 5).map(p => `${p.oldName} → ${p.newName}`),
    rationale: 'Avoid generic "flow", describe the visual (circles-arrows, diagram, etc.)'
  },
  {
    rule: 'Rule 5: "array-{type}" → "brackets-square-{descriptor}"',
    examples: patterns['Compound transformations']['array- icons'].slice(0, 5).map(p => `${p.oldName} → ${p.newName}`),
    rationale: 'Use visual descriptor (brackets) not programming concept (array)'
  },
  {
    rule: 'Rule 6: "th" → "table"',
    examples: patterns['Compound transformations']['th- (table) icons'].map(p => `${p.oldName} → ${p.newName}`),
    rationale: 'No abbreviations - use full word'
  }
];

rules.forEach(({ rule, examples, rationale }, i) => {
  console.log(`${rule}`);
  console.log(`  Rationale: ${rationale}`);
  if (examples.length > 0) {
    console.log(`  Examples:`);
    examples.forEach(ex => console.log(`    • ${ex}`));
  }
  console.log();
});

// Save rules to a file
const rulesDoc = {
  generatedAt: new Date().toISOString(),
  totalRenamed: renamed.length,
  rules: rules.map(r => ({
    rule: r.rule,
    rationale: r.rationale,
    examples: r.examples
  }))
};

fs.writeFileSync('./naming-rules-extracted.json', JSON.stringify(rulesDoc, null, 2));
console.log('═══════════════════════════════════════════════════════════');
console.log('Saved extracted rules to naming-rules-extracted.json');
console.log('═══════════════════════════════════════════════════════════');
