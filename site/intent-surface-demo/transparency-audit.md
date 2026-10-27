# Blueprint transparency beyond intent fills

26 October 2026 · proposal for review · [Open the demo](https://shirlxfufu.github.io/blueprint/intent-surface-demo/method-comparison.html)

The historical research attachments named below are local research files and are not included in this published demo. The published Blueprint CSS references and token tables remain available here.

**All three methods can be extended to cover these roles. None of the current intent-only inventories covers every transparent color in Blueprint.** Keep component mappings flexible, give structural surfaces independent source colors, and treat strokes, text and effects as separate kinds of tokens.

The demo adds **14 specimen families and 20 role tokens per method**, without changing the existing intent inventory. These are an editable working set for the added cases, not a claim that 20 tokens replace every transparency declaration in the library. No opacity scale has been added. Ordinary colors contain an editable alpha; `opacity.disabled` and `opacity.outline` remain the shared numeric tokens.

## Evidence recovered from the earlier work

The October 14–16 research is the baseline, rather than a new audit from memory:

- Complete library inventory (local research) and raw source records (local research): 3,661 records across 65 components. Records are source uses, not rendered component counts.
- Neutral transparency study (local research): 966 distinct background declaration/mode/property entries; 409 neutral or explicit Default entries; 61 distinct translucent mode/paint recipes across nine bases.
- Low-opacity follow-up (local research): preserves the distinction between disabled and disabled-selected backgrounds instead of rounding both to one value.
- Intent contrast study (local research): eight layered table-selection scenarios remained below 4.5:1 in that proposal. Those results do not automatically describe today's different demo values.

The old six-step opacity-scale recommendation is **superseded by the current decision to keep percentages inside semantic color tokens**. Its source measurements and contrast findings remain useful evidence.

I cross-checked representative declarations against the bundled Core 6.21.0 stylesheet and freshly retrieved Table 6.3.0 / Datetime 6.3.0 stylesheets. Their SHA-256 hashes match the October inventory:

| Package | SHA-256 |
| --- | --- |
| Core 6.21.0 | `51b99f3334662c49e0fbb2c7ed2c199c1cc1bd86045fcbc776f291665f613f1b` |
| Table 6.3.0 | `053c0e0cbb033e53b36665f391f3a554017e4857c69a6139f8aa2117c75466a4` |
| Datetime 6.3.0 | `40ea2109888ee9e62b4017d4c3f4c26773a1cb2513ef171b136b2689d58108d9` |

## What the three methods can cover

| Case | 1 · Separate fills | 2 · State overlays | 3 · Fixed emphasis |
| --- | --- | --- | --- |
| Ordinary transparent intent buttons, tags, callouts | Existing inventory | Existing inventory | Existing inventory |
| Selected vertical tab / selected header | Can alias Primary rest; own mapping if its strength must differ | Same | Same |
| Intent table cells | Alias `fill.{intent}.subtle.rest` | Same | Same |
| Table selection over colored cells | Add independent region overlay; keep it separate from press | Same | Same |
| Date-range middle and hover | Add range rest + final hover | Add range rest + range-specific hover overlay | Add range rest + final hover |
| Striped and plain rows with identical hovered appearance | Final fill replaces either rest | **One overlay cannot give the same final result over two different rests** | Final fill replaces either rest |
| Black inset / White code background / scrim | Dedicated role color; no interaction method needed | Same | Same |
| Progress and disabled switch | Separate track/indicator/stripe paints; apply disabled opacity only to the intended part | Same | Same |
| Skeleton / scroll-edge fade | Two endpoints or a spatial gradient, not a uniform fill | Same | Same |
| Text, borders, focus rings, shadows | Separate foreground/stroke/effect recipes | Same | Same |

These “additions” are not reasons to abandon a method. They show that the methods describe **how an interaction changes a fill**, rather than a complete color system.

My recommendation is to keep **Approach 3 for the current compound-tag construction**, use component mappings for special selection behavior, and add only the role groups needed by the components you adopt. Approach 1 remains the simplest choice for independent final-state targets. Approach 2 is useful where preserving the underlying surface is intentional; it cannot guarantee a common final color over different bases.

### The overlay constraint, with actual numbers

For the same source color, final alpha is `rest + overlay × (1 − rest)`.

- A 10% striped row + 20% hover overlay becomes **28%**.
- A clear row + the same overlay becomes **20%**.
- To make both rows exactly 30%, the striped row needs **22.222…%** overlay and the clear row needs **30%**. That requires different mappings or a replacement fill.
- A date-range rest of 10% + 10% overlay becomes **19%**, not 20%.
- A dark date-range rest of 20% + 25% overlay becomes **40%**.

Different source colors also change RGB, so alpha alone is insufficient. Overlaying Orange 5 on Orange 3 must use source-over color composition, not add the percentages or silently switch the base color. Hover and pressed overlays replace one another; they do not accumulate.

## Token counts by group

Counts include all five intents where `{intent}` appears. A token with light/dark values is counted once. Shared opacity tokens are counted once per approach, not once per component.

| Group | 1 · Separate fills | 2 · State overlays | 3 · Fixed emphasis |
| --- | ---: | ---: | ---: |
| Existing intent resting fills | 10 | 10 | 5 |
| Existing intent interaction fills / overlays | 30 | 10 | 10 |
| Existing selected-control interactions | 10 | 0 | 10 |
| Existing compound emphasis | 0 | 0 | 5 |
| Existing shared opacity | 2 | 2 | 2 |
| **Existing subtotal** | **52** | **22** | **32** |
| New inset surfaces | 3 | 3 | 3 |
| New table-row paints | 3 | 3 | 3 |
| New occlusion paints | 2 | 2 | 2 |
| New indicator paints | 5 | 5 | 5 |
| New loading endpoints | 2 | 2 | 2 |
| New boundary paint | 1 | 1 | 1 |
| New selection/range paints | 4 | 4 | 4 |
| **Added subtotal** | **20** | **20** | **20** |
| **Expanded demo total** | **72** | **42** | **52** |

No generic `selected.rest` token has been reinstated. The range and region tokens have specific purposes and do not force selected buttons, tags and table cells to share one darkness.

## Complete added token list and proposed values

Values below are **source color × opacity**, before any listed layering. Black is Blueprint Black `#111418`; literal black `#000000` is explicitly distinguished. Sources are editable palette choices, not new palette primitives.

| Group | Token | Light | Dark | Construction / consumers |
| --- | --- | --- | --- | --- |
| Inset | `surface.field` | White 100% | Black 30% | Input; editable inset background |
| Inset | `surface.field.disabled` | Light Gray 1 100% | Dark Gray 5 100% | Multiply by existing `opacity.disabled` → 50% at default |
| Inset | `surface.code` | White 70% | Black 30% | Code / code block; inverted tooltip resolves the opposite context mode |
| Rows | `fill.row.stripe` | Gray 3 10% | Gray 1 10% | Trial reduction from 15% |
| Rows, methods 1/3 | `fill.row.hover` | Gray 3 30% | Gray 1 30% | Replaces the row background |
| Rows, method 2 | `overlay.row.hover` | Gray 3 20% | Gray 1 20% | Above resting row: 28% striped, 20% plain |
| Rows, methods 1/3 | `fill.row.pressed` | Gray 3 40% | Gray 1 40% | Replaces the row background; light was 35% |
| Rows, method 2 | `overlay.row.pressed` | Gray 3 30% | Gray 1 30% | Replaces hover overlay: 37% striped, 30% plain |
| Occlusion | `overlay.scrim` | Black 70% | Black 70% | Page underneath; dialog/drawer content above |
| Occlusion | `overlay.scroll.edge` | Literal black 15% | Literal black 15% | Preserve gradient: 15% at top → clear at 10% of region |
| Indicator | `fill.track` | Gray 1 20% | Black 50% | Progress track; same paints can be consumed by Spinner track strokes |
| Indicator | `fill.meter` | Gray 1 80% | Gray 3 100% | Progress meter; Spinner head has compatible neutral paints |
| Indicator | `overlay.stripe` | White 20% | White 20% | Gradient stripe over meter, not full-area overlay |
| Indicator | `fill.switch.track` | Gray 3 30% | Gray 3 30% | Disabled unchecked track uses × `opacity.disabled` → 15% |
| Indicator | `fill.switch.thumb.disabled` | White 80% | White 80% | Disabled unchecked thumb; do not multiply the complete switch by 50% |
| Loading | `fill.skeleton.start` | Light Gray 1 20% | Light Gray 1 20% | First animation endpoint |
| Loading | `fill.skeleton.end` | Gray 1 20% | Gray 1 20% | Second animation endpoint; interpolate, do not stack |
| Boundary | `border.divider` | Black 15% | White 20% | Divider stroke; not an outline-opacity consumer |
| Selection | `selection.text` | Literal `#7DBCFF` 60% | Literal `#7DBCFF` 60% | Native text-selection background |
| Selection | `overlay.selection.region` | Blue 3 10% | Blue 4 10% | Table body overlay covers text and backgrounds; clear over headers |
| Selection | `fill.range.rest` | Blue 3 10% | Blue 3 20% | Date-range preview and range middle |
| Selection, methods 1/3 | `fill.range.hover` | Blue 3 20% | Blue 3 40% | Replaces range-middle fill |
| Selection, method 2 | `overlay.range.hover` | Blue 3 10% | Blue 3 25% | Combined result: 19% light / 40% dark |

Rows marked by method are alternatives, not additional simultaneous tokens. That is why this table represents **20 tokens per method**.

### Existing tokens reused by the new components

| Consumer | Existing token | Consequence |
| --- | --- | --- |
| Selected vertical tab | `fill.primary.subtle.rest` | Default trial is Blue 3 10% light / Blue 5 15% dark; Blueprint uses Blue 3 20% in both. Own mapping is needed if exact parity is required. |
| Selected table header | `fill.primary.subtle.rest` | Blueprint uses Blue 3 10% in both modes; dark trial differs. The body region overlay must stay clear over headers. |
| Colored table cell | `fill.{intent}.subtle.rest` | Existing colored cell backgrounds use shade 3 at 10% in both modes; dark proposal uses shade 5 at 15%. Every colored intent is shown together for comparison. |
| Disabled input and unchecked switch track | `opacity.disabled` | Reuse 50% as a multiplier on their own source. It does not imply all disabled paint has the same source or final alpha. |

Neutral table cells can stay clear; they do not need an invented neutral tint. The neutral preview intent does not change blue selection roles. Additional cases render once per approach rather than five times.

## Rounding proposals and exceptions

The following changes are proposed, not adopted in Blueprint or the historical audit.

| Case | Original | Proposed / decision | Demo status |
| --- | --- | --- | --- |
| HTML table stripe | Gray 3 light / Gray 1 dark, 15% | **10%** for a quieter stripe; keep its base | Applied to new proposal columns; source column stays 15% |
| HTML table pressed, light | Gray 3 35% | **40%** final fill in methods 1/3, matching the dark alpha | Applied; method 2 explicitly shows 37% striped / 30% plain |
| Date middle hover, light, method 2 | Target final Blue 3 20% | **10% overlay → 19% final**, instead of 11.111…% overlay | Applied and labeled; a deliberate approximation |
| Input inset border | Gray 1 12% light | **10% is a candidate**, but review its visibility on actual inset surfaces first | Not applied; stroke is outside this background trial |
| Minimal neutral button hover | Dark Gray 5 8% light | Prior study: 10%; follow-up considered **Gray 1 10%** for closer appearance | Evidence only; current intent-demo values unchanged |
| Minimal neutral button pressed | Dark Gray 4 16% light | Prior same-base candidate: 20% | Evidence only; requires visual review |
| Minimal neutral button dark states | Gray 1 24% / 49% | Prior candidates: 20% / 50% | Evidence only |
| Tag / callout 15% | Several different bases | Earlier 15→10 semantic reduction differs from nearest-step 15→20 rounding | No global rule; keep current intent trial values |
| Dark disabled / disabled-selected button | Gray 3 4% / 7% | **Preserve distinction**; do not round both to 10% | Existing evidence, not new filled-button demos |
| Low-opacity alternative for that pair | Gray 3 4% / 7% | Earlier candidate: Dark Gray 5 10% / 20% | Candidate only; changes base as well as alpha |
| Dark Primary compound key pressed | Blue 3 55% | **Do not blindly round to 60%**: earlier background-only change reduced text contrast 4.65→4.42 | Preserve existing proposal; historical warning retained |
| Scrim / code | 70% / 30% depending on role | **Keep**; do not cap all transparency at 60% | Kept |
| Progress meter / disabled switch thumb | 80% | **Keep**; these are indicator roles | Kept |
| Intent focus ring | 75.2% | **Keep** pending focus-specific review | Not changed |
| Divider / scroll fade | 15% | **Keep** for this pass; strokes and gradient geometry need separate checks | Kept |
| Clear / solid endpoints | 0% / 100% | **Keep** | No forced conversion into a tint |

The older neutral study found no new contrast failures from its same-base rounding experiment across its modeled translucent cases, but it still lost a state distinction and produced two large color changes. That is evidence against a blanket rounding policy, not approval of every row above.

## Other transparent colors: what still needs separate tokens

The full source inventory includes text, strokes, inset effects and elevation as well as backgrounds. The demo's 20-role addition does not count a complete typography or shadow system. These are the remaining families to preserve or introduce if the existing design system does not already provide them:

| Family to keep / propose | Evidence and purpose | Treatment |
| --- | --- | --- |
| `text.disabled`, `text.placeholder`, `icon.disabled` | Neutral text commonly uses Gray 1 60% light / Gray 4 60% dark; some controls have distinct derived sources or 50%/60% rules | Own semantic foreground tokens. Do not assume `opacity.disabled = 50%` reproduces every existing text value. Share aliases only after checking each context. |
| `text.inverted.disabled`, `icon.inverted.disabled` | Tooltip inversion and white disabled control marks use different sources | Resolve local context; retain separate values where inversion is insufficient. |
| `border.field.rest`, `border.field.hover`, `border.control.*` | Thin inset boundaries and control borders have different values from the 60% button outline | Preserve actual stroke recipes; the 12→10 candidate is not automatically approved. |
| `focus.{intent}` | Input focus includes derived colors at 75.2% and multiple inset/outside rings | Keep the color plus ring width/placement. A background token alone cannot express it. |
| `shadow.inset.*`, `shadow.elevation.*` | Buttons, Cards, Dialogs, Drawers, Popovers, Tooltips and Sliders use layered Black/White effects | Tokens should store whole shadow lists or alias existing elevation tokens, including blur, offset, spread and inset. Do not manufacture an opacity token for every shadow alpha. |
| `indicator.switch.*` states | Enabled unchecked track is Gray 3 30/40/50%; disabled unchecked thumb is White 80%; checked disabled thumb is White 50% | Demo covers the unchecked disabled case. Full switch support needs independent rest/hover/pressed/checked mappings; current generic intent state targets are insufficient for exact parity. |
| Table region/fade mappings | Unselected region Gray 3 10%, selected body Blue 3/4 10%, headers clear, fades depend on backdrop | Selection-region token is added. General region can trial Neutral subtle rest; exact parity needs its own mapping. Header text truncation fades need resolved opaque endpoints and spatial stops. |
| Browser/system color rules | Forced-colors uses system colors; vendor DatePicker styles have additional rules | Preserve these overrides. Do not replace them with fixed alpha colors. |

These are **families for the broader token audit, not an additional counted token list with invented completeness**. The raw inventory retains all declarations, mode/context overrides, gradients and shadow recipes. A source inventory cannot establish every effective rendered state.

## Demo boundaries and verification

Use **Components → Additional transparency**, or filter to **Blue selection / ranges** and **Non-intent surfaces**. Open **Edit tokens → Editing family → Other transparency roles** to edit the new tokens. To edit a colored cell or selected tab/header, select its intent family instead. Source colors come from named Blueprint palettes and two preserved literals; there is no arbitrary color picker or numeric opacity scale.

Original Button/Menu/Tag/CompoundTag/Callout references still use the untouched bundled published CSS. New examples are explicitly labeled **source paint fixtures**: simplified geometry with copied background/stroke recipes, not full React components or a claim of pixel-equivalent typography, borders, focus and interaction. Date fixtures isolate preview/middle fill; range endpoints stay outside this trial. Code fixtures use explicit backdrops so White transparency remains visible.

Table region specimens put the overlay above the actual text and show composed text contrast. They preserve published intent-cell foregrounds (shade 3 light / shade 4 dark) on this demo's White / Dark Gray 2 backdrop, so existing failures and background-only regressions remain visible. They do not resolve the older report's different foreground/backdrop failures or validate application-specific overrides.

Chrome checks passed for all token inventories and modes, source-over calculations, layer order, source-reference stability during edits, shared disabled-opacity propagation, live pointer/keyboard states, role palette choices, persistence, reset/undo, and export data. Comparison rows align at 1440, 1040 and 390px without page overflow or runtime errors. Desktop and mobile captures were visually reviewed. This is a prototype validation, not a complete accessibility audit or a library migration.
