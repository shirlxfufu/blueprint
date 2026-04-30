# Xinyi vs Greg Icon Naming Differences

## Summary

Out of the icon set, **464 icons** have different names between Xinyi's and Greg's naming approaches.

### Breakdown by Category

1. **Greg kept original name (310 icons)**
   - Xinyi renamed the icon, but Greg kept the original Blueprint name
   - Example: `graph-remove` → Xinyi: `circle-x`, Greg: `graph-remove`

2. **Xinyi kept original name (45 icons)**
   - Greg renamed the icon, but Xinyi kept the original Blueprint name
   - Example: `style` → Xinyi: `style`, Greg: `brush`

3. **Both renamed differently (109 icons)**
   - Both Xinyi and Greg renamed the icon, but chose different names
   - Example: `add-application` → Xinyi: `window-plus`, Greg: `application-plus`

## Key Observations

### Greg's Approach
- More conservative - kept 310 original names (66.8% of differences)
- Tends to preserve domain-specific terminology (e.g., `aimpoints-target`, `add-to-artifact`)
- Often keeps compound names that describe the icon's purpose

### Xinyi's Approach
- More aggressive renaming - only kept 45 original names (9.7% of differences)
- Favors descriptive visual names (e.g., `circle-crosshair-dots` instead of `aimpoints-target`)
- Tends to use more generic, reusable naming patterns

### Examples of Naming Philosophy Differences

#### Greg kept original, Xinyi renamed:
- `add` → Xinyi: `circle-plus`, Greg: `add`
- `graph-remove` → Xinyi: `circle-x`, Greg: `graph-remove`
- `alignment-bottom` → Xinyi: `items-align-bottom`, Greg: `alignment-bottom`

#### Both renamed differently:
- `add-application` → Xinyi: `window-plus`, Greg: `application-plus`
- `add-child` → Xinyi: `box-plus-below`, Greg: `row-plus-top`
- `add-to-folder` → Xinyi: `folder-arrow-in-plus`, Greg: `folder-arrow-up-right-alt`

## Files Generated

- `xinyi-greg-naming-differences.json` - Simple list of all 464 differences
- `xinyi-greg-differences-categorized.json` - All differences with category labels
- `XINYI-GREG-NAMING-DIFFERENCES-REPORT.json` - Complete report with summary and categorized lists

## Next Steps

Review the differences to determine:
1. Which naming approach better fits the design system goals
2. Whether to create a hybrid approach
3. Icons that need visual review to determine the most accurate name
