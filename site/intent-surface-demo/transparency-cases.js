(() => {
  "use strict";

  // Background-only fixtures from the pinned October audit, not React component replicas.
  const paint = (hex, alpha) => ({ hex, alpha });
  const roles = [
    ["surface.field", "Inset surfaces", paint("#ffffff", 1), paint("#111418", .3)],
    ["surface.field.disabled", "Inset surfaces", paint("#d3d8de", 1), paint("#404854", 1)],
    ["surface.code", "Inset surfaces", paint("#ffffff", .7), paint("#111418", .3)],
    ["fill.row.stripe", "Table rows", paint("#8f99a8", .1), paint("#5f6b7c", .1)],
    ["fill.row.hover", "Table rows", paint("#8f99a8", .3), paint("#5f6b7c", .3)],
    ["fill.row.pressed", "Table rows", paint("#8f99a8", .4), paint("#5f6b7c", .4)],
    ["overlay.scrim", "Occlusion", paint("#111418", .7), paint("#111418", .7)],
    ["overlay.scroll.edge", "Occlusion", paint("#000000", .15), paint("#000000", .15)],
    ["fill.track", "Indicators", paint("#5f6b7c", .2), paint("#111418", .5)],
    ["fill.meter", "Indicators", paint("#5f6b7c", .8), paint("#8f99a8", 1)],
    ["overlay.stripe", "Indicators", paint("#ffffff", .2), paint("#ffffff", .2)],
    ["fill.switch.track", "Indicators", paint("#8f99a8", .3), paint("#8f99a8", .3)],
    ["fill.switch.thumb.disabled", "Indicators", paint("#ffffff", .8), paint("#ffffff", .8)],
    ["fill.skeleton.start", "Loading", paint("#d3d8de", .2), paint("#d3d8de", .2)],
    ["fill.skeleton.end", "Loading", paint("#5f6b7c", .2), paint("#5f6b7c", .2)],
    ["border.divider", "Boundaries", paint("#111418", .15), paint("#ffffff", .2)],
    ["selection.text", "Selection", paint("#7dbcff", .6), paint("#7dbcff", .6)],
    ["overlay.selection.region", "Selection", paint("#2d72d2", .1), paint("#4c90f0", .1)],
    ["fill.range.rest", "Selection", paint("#2d72d2", .1), paint("#2d72d2", .2)],
    ["fill.range.hover", "Selection", paint("#2d72d2", .2), paint("#2d72d2", .4)],
  ];
  const neutrals = ["#111418", "#ffffff", "#1c2127", "#252a31", "#2f343c", "#383e47", "#404854", "#5f6b7c", "#738091", "#8f99a8", "#abb3bf", "#c5cbd3", "#d3d8de", "#dce0e5", "#e5e8eb", "#edeff2", "#f6f7f9"];
  const blues = ["#184a90", "#215db0", "#2d72d2", "#4c90f0", "#8abbff"];
  const rowStateName = (method, state) => `${method === "p2" ? "overlay" : "fill"}.row.${state}`;
  const rangeStateName = method => `${method === "p2" ? "overlay" : "fill"}.range.hover`;

  function schema(method) {
    return roles.map(([name, group, light, dark]) => [method === "p2" && /fill\.(row\.(hover|pressed)|range\.hover)/.test(name) ? name.replace("fill.", "overlay.") : name, group, light, dark]);
  }

  function defaults(method, theme) {
    const values = Object.fromEntries(schema(method).map(([name, , light, dark]) => [name, { ...(theme === "light" ? light : dark) }]));
    if (method === "p2") {
      values["overlay.row.hover"].alpha = .2;
      values["overlay.row.pressed"].alpha = .3;
      values["overlay.range.hover"].alpha = theme === "light" ? .1 : .25;
    }
    return values;
  }

  function palette(name) {
    if (/selection|range/.test(name)) return name === "selection.text" ? ["#7dbcff", ...blues] : blues;
    return name === "overlay.scroll.edge" ? ["#000000", ...neutrals] : neutrals;
  }

  const cases = [
    { id: "tabs", label: "Selected vertical tab", group: "selection", source: ["core", 14386], note: "Reuses Primary subtle rest. This trial is lighter than Blueprint’s 20%; exact parity would need a tab-specific mapping.", states: [["selected", "Selected"]] },
    { id: "range", label: "Date range", group: "selection", source: ["datetime", 621], note: "Range preview and middle share rest. Approach 2 uses a range-specific overlay: 10% in light, 25% in dark. Endpoints remain solid and are outside this fill experiment.", states: [["live", "Try hover"], ["rest", "Range middle"], ["hover", "Middle + hover"]] },
    { id: "cells", label: "Intent cells + region selection", group: "selection", source: ["table", 802], note: "Cell fill is behind text; region selection covers both. Header region fill stays clear. The readout checks this composition on this backdrop only.", states: [["rest", "Intent cells"], ["selected", "Region selected"]] },
    { id: "header", label: "Selected table header", group: "selection", source: ["table", 367], note: "Header selection reuses Primary subtle rest behind text. Do not stack the body’s selection overlay on headers.", states: [["selected", "Selected"]] },
    { id: "text", label: "Native text selection", group: "selection", source: ["core", 306], note: "Preserve the existing literal blue #7DBCFF at 60%. This is a selection role, not an intent or a hover state. Drag across the sample to select text.", states: [["rest", "Selection"]] },
    { id: "rows", label: "Striped interactive table", group: "structural", source: ["core", 9192], note: "Trial: stripe 15% → 10%; light pressed 35% → 40%. A shared overlay keeps a difference between striped and plain rows; final fills remove it during interaction.", states: [["live", "Try hover / press"], ["rest", "Rest"], ["hover", "Hover"], ["pressed", "Pressed"]] },
    { id: "field", label: "Input / editable inset", group: "structural", source: ["core", 8127], note: "Dark mode needs a black inset. Disabled uses its own color source × opacity.disabled; multiplying the resting inset would produce a different fill. Focus and shadows are retained as separate library concerns.", states: [["rest", "Rest"], ["disabled", "Disabled"]] },
    { id: "code", label: "Code + inverted tooltip context", group: "structural", source: ["core", 3233], note: "One code token, resolved in the local context’s mode. The tooltip example uses the opposite mode, matching Blueprint’s inverted content treatment.", states: [["rest", "Regular context"], ["inverted", "Tooltip context"]] },
    { id: "scrim", label: "Dialog / drawer backdrop", group: "structural", source: ["core", 13160], note: "Black 70% covers the page, including its text. Dialog content sits above it. Preserve 70%; 60% makes a visible change.", states: [["rest", "Backdrop"]] },
    { id: "progress", label: "Progress bar", group: "structural", source: ["core", 13555], note: "Track → meter → stripe. The meter is 80% in light and solid in dark. Stripes are a spatial pattern, not a uniform state overlay.", states: [["rest", "Striped meter"]] },
    { id: "skeleton", label: "Skeleton", group: "structural", source: ["core", 13717], note: "Both endpoints use 20%, but different source colors. Keep both tokens or the animation disappears. Endpoints are shown without motion.", states: [["rest", "Animation endpoints"]] },
    { id: "switch", label: "Disabled unchecked switch", group: "structural", source: ["core", 7138], note: "Track 30% × opacity.disabled = 15%; thumb stays White 80%. Applying 50% to the whole control would be wrong. Checked and enabled state recipes remain separate follow-up work.", states: [["disabled", "Disabled"]] },
    { id: "divider", label: "Divider", group: "structural", source: ["core", 5747], note: "A boundary token, not a fill. Keep Black 15% / White 20%; no blanket rounding of strokes or focus rings.", states: [["rest", "Boundary"]] },
    { id: "scroll", label: "Table scroll-edge fade", group: "structural", source: ["table", 891], note: "Literal black #000000 at 15% fades to clear over the first 10% of the region. Preserve the gradient stops and clipping, not just the opacity.", states: [["rest", "Top edge"]] },
  ];
  const urls = {
    core: "https://unpkg.com/@blueprintjs/core@6.21.0/lib/css/blueprint.css",
    table: "https://unpkg.com/@blueprintjs/table@6.3.0/lib/css/table.css",
    datetime: "https://unpkg.com/@blueprintjs/datetime@6.3.0/lib/css/blueprint-datetime.css",
  };

  function sections(method, filter) {
    const shown = cases.filter(item => ["all", "additional"].includes(filter) || item.group === filter || `audit-${item.id}` === filter);
    if (!shown.length) return "";
    return `<div class="intent-heading">Additional transparency · once per approach</div>` + shown.map(item => `<section class="component-group audit-group" data-component="audit-${item.id}"><h3>${item.label}</h3><p class="audit-provenance">${method === "reference" ? "Source paint fixture" : "Token proposal"} · <a href="${urls[item.source[0]]}#L${item.source[1]}" target="_blank" rel="noreferrer">${item.source[0]}:${item.source[1]}</a></p>${item.states.map(([state, label]) => `<div class="audit-row" data-audit-case="${item.id}" data-method="${method}" data-state="${state}"><span class="state-label">${label}</span><div class="audit-visual"></div><div class="sample-recipe"></div></div>`).join("")}<p class="component-note">${item.note}</p></section>`).join("");
  }

  function updateRow(row, context) {
    const { theme, tokens, composite, paintLabel, rgba, foreground, intentFor } = context;
    const { method, auditCase: kind } = row.dataset;
    const reference = method === "reference";
    const values = reference ? defaults("p1", theme) : tokens[method][theme];
    const state = row.dataset.state === "live" ? row.dataset.pressed === "true" ? "pressed" : row.dataset.hover === "true" ? "hover" : "rest" : row.dataset.state;
    const dark = theme === "dark";
    const visual = row.querySelector(".audit-visual"), recipe = row.querySelector(".sample-recipe");
    const layers = [];
    const token = (name, role, original, mode = theme) => {
      const value = reference ? original : tokens[method][mode][name];
      layers.push(`<span class="recipe-layer">${reference ? "" : `<code>${name}</code>`}${role}${mode !== theme ? ` · ${mode} context` : ""} · ${paintLabel(value)}</span>`);
      return value;
    };
    const opacity = (name, role) => {
      const value = reference ? .5 : values[name];
      layers.push(`<span class="recipe-layer">${reference ? "" : `<code>${name}</code>`}${role} · ${Math.round(value * 1000) / 10}%</span>`);
      return value;
    };
    const result = (paint, label = "Result") => `<span class="recipe-result">${label}: ${paintLabel(paint)}</span>`;
    let html = "", ending = "";

    if (kind === "tabs" || kind === "header") {
      const fill = token("fill.primary.subtle.rest", "Selected fill · behind text", paint("#2d72d2", kind === "tabs" ? .2 : .1));
      html = kind === "tabs" ? `<div class="audit-tab" style="background:${rgba(fill)}">Overview</div>` : `<div class="audit-cell" style="background:${rgba(fill)}">Revenue <span>USD</span></div>`;
      ending = result(fill);
    } else if (kind === "range") {
      const rest = token("fill.range.rest", "Range fill", paint("#2d72d2", dark ? .2 : .1));
      let fill = rest;
      if (state === "hover" || state === "pressed") {
        const hover = token(rangeStateName(method), method === "p2" ? "Hover overlay above rest" : "Hover replaces rest", paint("#2d72d2", dark ? .4 : .2));
        fill = method === "p2" ? composite([rest, hover]) : hover;
      }
      html = `<div class="audit-range"><span style="background:${rgba(rest)}">14</span><button type="button" class="audit-interactive" style="background:${rgba(fill)}" aria-label="Date range middle">15</button><span style="background:${rgba(rest)}">16</span></div>`;
      ending = result(fill, "Middle cell");
    } else if (kind === "cells") {
      const overlay = state === "selected" ? token("overlay.selection.region", "Above cells AND text", paint(dark ? "#4c90f0" : "#2d72d2", .1)) : null;
      const cells = ["primary", "success", "warning", "danger"].map((id, index) => {
        const intent = intentFor(id);
        const fill = token(`fill.${id}.subtle.rest`, `${intent.label} cell · behind text`, paint(intent.shades[2], .1));
        // Preserve the published intent-cell foreground to expose background-only contrast regressions.
        const ink = intent.shades[dark ? 3 : 2];
        const base = composite([paint(dark ? "#252a31" : "#ffffff", 1), fill]);
        const background = composite([base, overlay]);
        const text = composite([paint(ink, 1), overlay]);
        const luminance = hex => [1, 3, 5].map(n => parseInt(hex.slice(n, n + 2), 16) / 255).map(n => n <= .04045 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4).reduce((sum, n, i) => sum + n * [.2126, .7152, .0722][i], 0);
        const a = luminance(background.hex), b = luminance(text.hex);
        const ratio = (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
        ending += `<span class="recipe-result">${intent.label}: ${Math.round(composite([fill, overlay]).alpha * 1000) / 10}% · text ${ratio.toFixed(2)}:1${ratio < 4.5 ? " · below 4.5" : ""}</span>`;
        return `<div class="audit-cell" style="background:${rgba(fill)};color:${ink}">${intent.label}<span>${[1250, 840, 320, 175][index]}</span></div>`;
      }).join("");
      if (overlay) layers.push(layers.shift());
      html = `<div class="audit-table">${cells}${overlay ? `<div class="audit-region" style="background:${rgba(overlay)};border-color:${overlay.hex}"></div>` : ""}</div>`;
    } else if (kind === "text") {
      const fill = token("selection.text", "Text selection background", paint("#7dbcff", .6));
      html = `<p class="audit-selectable" style="--selection-paint:${rgba(fill)}">Drag to select this text.<br><span style="background:${rgba(fill)}">Selection preview</span></p>`;
      ending = result(fill);
    } else if (kind === "rows") {
      const stripe = token("fill.row.stripe", "Striped row · resting fill", paint(dark ? "#5f6b7c" : "#8f99a8", .15));
      let striped = stripe, plain = paint("#000000", 0);
      if (state !== "rest") {
        const interaction = token(rowStateName(method, state), method === "p2" ? "Shared overlay on each row" : "Replaces both row fills", paint(dark ? "#5f6b7c" : "#8f99a8", state === "hover" ? .3 : dark ? .4 : .35));
        striped = method === "p2" ? composite([stripe, interaction]) : interaction;
        plain = interaction;
      }
      html = `<button type="button" class="audit-interactive audit-table" aria-label="Striped table rows"><span class="audit-cell" style="background:${rgba(striped)}">Striped row<span>1250</span></span><span class="audit-cell" style="background:${rgba(plain)}">Plain row<span>840</span></span></button>`;
      ending = result(striped, "Striped") + result(plain, "Plain");
    } else if (kind === "field") {
      let fill = state === "disabled" ? token("surface.field.disabled", "Disabled color source", paint(dark ? "#404854" : "#d3d8de", 1)) : token("surface.field", "Input inset", paint(dark ? "#111418" : "#ffffff", dark ? .3 : 1));
      if (state === "disabled") fill = { ...fill, alpha: fill.alpha * opacity("opacity.disabled", "Multiply disabled fill") };
      html = `<input class="audit-field" type="text" value="Search records" aria-label="${reference ? "Current" : method} input specimen" style="background:${rgba(fill)}"${state === "disabled" ? " disabled" : ""}>`;
      ending = result(fill);
    } else if (kind === "code") {
      const mode = state === "inverted" ? dark ? "light" : "dark" : theme;
      const fill = token("surface.code", "Code background", paint(mode === "dark" ? "#111418" : "#ffffff", mode === "dark" ? .3 : .7), mode);
      html = `<div class="audit-code-context" style="background:${mode === "dark" ? "#404854" : "#e5e8eb"};color:${mode === "dark" ? "#abb3bf" : "#5f6b7c"}">Run <code style="background:${rgba(fill)}">query()</code> to refresh.</div>`;
      ending = result(fill);
    } else if (kind === "scrim") {
      const fill = token("overlay.scrim", "Above the page; below dialog", paint("#111418", .7));
      html = `<div class="audit-scrim-scene">Underlying page<br>Records · Activity<div class="audit-region" style="background:${rgba(fill)}"></div><div class="audit-dialog">Dialog content</div></div>`;
      ending = result(fill, "Scrim");
    } else if (kind === "progress") {
      const track = token("fill.track", "1 · Track", paint(dark ? "#111418" : "#5f6b7c", dark ? .5 : .2));
      const meter = token("fill.meter", "2 · Meter above track", paint(dark ? "#8f99a8" : "#5f6b7c", dark ? 1 : .8));
      const stripe = token("overlay.stripe", "3 · Stripe above meter", paint("#ffffff", .2));
      html = `<div class="audit-progress" role="progressbar" aria-label="Import progress" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="background:${rgba(track)}"><span style="background-color:${rgba(meter)};background-image:linear-gradient(-45deg,${rgba(stripe)} 25%,transparent 25%,transparent 50%,${rgba(stripe)} 50%,${rgba(stripe)} 75%,transparent 75%)"></span></div>`;
      ending = result(composite([track, meter]), "Meter area") + result(composite([track, meter, stripe]), "Stripe area");
    } else if (kind === "skeleton") {
      const start = token("fill.skeleton.start", "Start endpoint", paint("#d3d8de", .2));
      const end = token("fill.skeleton.end", "End endpoint", paint("#5f6b7c", .2));
      html = `<div class="audit-skeletons"><span style="background:${rgba(start)}"></span><span style="background:${rgba(end)}"></span></div>`;
      ending = '<span class="recipe-result">Interpolate colors; do not stack endpoints.</span>';
    } else if (kind === "switch") {
      const base = token("fill.switch.track", "Unchecked track", paint("#8f99a8", .3));
      const track = { ...base, alpha: base.alpha * opacity("opacity.disabled", "Multiply track only") };
      const thumb = token("fill.switch.thumb.disabled", "Disabled thumb above track", paint("#ffffff", .8));
      html = `<div class="audit-switch" role="switch" aria-checked="false" aria-disabled="true" aria-label="Disabled switch" style="background:${rgba(track)}"><span style="background:${rgba(thumb)}"></span></div>`;
      ending = result(track, "Track") + result(composite([track, thumb]), "Thumb area");
    } else if (kind === "divider") {
      const fill = token("border.divider", "1px separator", paint(dark ? "#ffffff" : "#111418", dark ? .2 : .15));
      html = `<div class="audit-divider">First section<hr style="border-color:${rgba(fill)}">Next section</div>`;
      ending = result(fill, "Stroke");
    } else if (kind === "scroll") {
      const fill = token("overlay.scroll.edge", "Top gradient stop → clear at 10%", paint("#000000", .15));
      html = `<div class="audit-scroll">Record 01<br>Record 02<br>Record 03<div class="audit-region" style="background:linear-gradient(180deg,${rgba(fill)} 0%,transparent 10%)"></div></div>`;
      ending = result(fill, "Top endpoint");
    }
    // Retain live controls and focus while token edits update their paint.
    if (visual.innerHTML !== html) {
      if (row.dataset.state === "live" && visual.firstElementChild) {
        const parsed = document.createElement("template"); parsed.innerHTML = html;
        const current = [visual.firstElementChild, ...visual.firstElementChild.querySelectorAll("*")];
        const next = [parsed.content.firstElementChild, ...parsed.content.firstElementChild.querySelectorAll("*")];
        current.forEach((node, i) => { node.style.cssText = next[i].style.cssText; });
      } else visual.innerHTML = html;
    }
    recipe.innerHTML = layers.join("") + ending;
    row.dataset.renderState = state;
  }

  function update(context) {
    document.querySelectorAll("[data-audit-case]").forEach(row => updateRow(row, context));
    // Match heights after wrapping, including the four-intent table recipes.
    for (const kind of cases.map(item => item.id)) {
      const groups = [...document.querySelectorAll(`[data-component="audit-${kind}"]`)];
      if (!groups.length) continue;
      const rows = groups.map(group => [...group.querySelectorAll(".audit-row")]);
      rows[0].forEach((_, i) => {
        rows.forEach(list => { list[i].style.minHeight = "0"; });
        const height = Math.max(...rows.map(list => list[i].getBoundingClientRect().height));
        rows.forEach(list => { list[i].style.minHeight = `${Math.ceil(height)}px`; });
      });
      const notes = groups.map(group => group.querySelector(".component-note"));
      notes.forEach(note => { note.style.minHeight = "0"; });
      const height = Math.max(...notes.map(note => note.getBoundingClientRect().height));
      notes.forEach(note => { note.style.minHeight = `${Math.ceil(height)}px`; });
    }
  }

  window.BlueprintTransparencyCases = Object.freeze({ roles, schema, defaults, palette, sections, update, updateRow, cases });
})();
