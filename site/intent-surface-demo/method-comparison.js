(() => {
  "use strict";

  const INTENTS = [
    { id: "neutral", label: "Neutral", palette: "Gray", shades: ["#5f6b7c", "#738091", "#8f99a8", "#abb3bf", "#c5cbd3"] },
    { id: "primary", label: "Primary", palette: "Blue", shades: ["#184a90", "#215db0", "#2d72d2", "#4c90f0", "#8abbff"] },
    { id: "success", label: "Success", palette: "Green", shades: ["#165a36", "#1c6e42", "#238551", "#32a467", "#72ca9b"] },
    { id: "warning", label: "Warning", palette: "Orange", shades: ["#77450d", "#935610", "#c87619", "#ec9a3c", "#fbb360"] },
    { id: "danger", label: "Danger", palette: "Red", shades: ["#8e292c", "#ac2f33", "#cd4246", "#e76a6e", "#fa999c"] },
  ];
  // Each tuple is one token family, its editor group, and trial light/dark alpha (%).
  // Palette colors are values inside these semantic tokens, not additional tokens.
  const METHODS = {
    p1: {
      label: "Separate fills", count: 52,
      description: "Replace each surface with its own hover or pressed fill.",
      schema: [
        ["fill.{intent}.subtle.rest", "Resting fills", 10, 15],
        ["fill.{intent}.strong.rest", "Resting fills", 20, 25],
        ["fill.{intent}.clear.hover", "Interaction fills", 15, 15],
        ["fill.{intent}.clear.pressed", "Interaction fills", 25, 25],
        ["fill.{intent}.subtle.hover", "Interaction fills", 15, 20],
        ["fill.{intent}.subtle.pressed", "Interaction fills", 25, 25],
        ["fill.{intent}.strong.hover", "Interaction fills", 25, 30],
        ["fill.{intent}.strong.pressed", "Interaction fills", 35, 35],
        ["fill.{intent}.selected.hover", "Selected controls", 20, 25],
        ["fill.{intent}.selected.pressed", "Selected controls", 25, 30],
      ],
    },
    p2: {
      label: "State overlays", count: 22,
      description: "Keep the resting fill and add one shared state overlay.",
      schema: [
        ["fill.{intent}.subtle.rest", "Resting fills", 10, 15],
        ["fill.{intent}.strong.rest", "Resting fills", 20, 25],
        ["overlay.{intent}.hover", "State overlays", 10, 10],
        ["overlay.{intent}.pressed", "State overlays", 15, 15],
      ],
    },
    p3: {
      label: "Fixed emphasis", count: 32,
      description: "Share final state fills; keep the compound key overlay fixed.",
      schema: [
        ["fill.{intent}.subtle.rest", "Resting fills", 10, 15],
        ["fill.{intent}.hover", "Interaction fills", 15, 20],
        ["fill.{intent}.pressed", "Interaction fills", 25, 25],
        ["fill.{intent}.selected.hover", "Selected controls", 20, 25],
        ["fill.{intent}.selected.pressed", "Selected controls", 25, 30],
        ["overlay.{intent}.emphasis", "Compound emphasis", 10, 10],
      ],
    },
  };
  const SHARED = [["opacity.disabled", "Shared opacity", 50, 50], ["opacity.outline", "Shared opacity", 60, 60]];
  const extraCases = window.BlueprintTransparencyCases;
  const totalCount = method => METHODS[method].count + extraCases.roles.length;
  const STATES = [
    ["rest", "Rest"], ["hover", "Hover"], ["pressed", "Pressed"], ["disabled", "Disabled"],
    ["selected", "Selected"], ["selected-hover", "Selected + hover"],
    ["selected-pressed", "Selected + press"], ["selected-disabled", "Selected + disabled"],
  ];
  const COMPONENTS = [
    { id: "minimal", filter: "buttons", label: "Clear button", referenceLabel: "Minimal button", selection: true },
    { id: "outlined", filter: "buttons", label: "Outlined button", selection: true },
    { id: "menu", filter: "menu", label: "Menu item", selection: true },
    { id: "tag", filter: "tag", label: "Tag", selection: false },
    { id: "compound", filter: "compound", label: "Compound tag", selection: false },
    { id: "callout", filter: "callout", label: "Callout", selection: false },
  ];
  const COMPONENT_NAV = [
    ["Browse", [["all", "All components"], ["additional", "Additional transparency"]]],
    ["Intent components", [["buttons", "Buttons"], ["menu", "Menu"], ["tag", "Tag"], ["compound", "Compound tag"], ["callout", "Callout"]]],
    ["Selection", [["selection", "All selection cases"], ["audit-tabs", "Tabs"], ["audit-range", "Date range"], ["audit-cells", "Table cells"], ["audit-header", "Table header"], ["audit-text", "Text selection"]]],
    ["Other surfaces", [["structural", "All other surfaces"], ["audit-rows", "Table rows"], ["audit-field", "Input"], ["audit-code", "Code / tooltip"], ["audit-scrim", "Dialog backdrop"], ["audit-progress", "Progress bar"], ["audit-skeleton", "Skeleton"], ["audit-switch", "Switch"], ["audit-divider", "Divider"], ["audit-scroll", "Scroll fade"]]],
  ];
  const STORAGE_KEY = "blueprint-method-comparison-v1";
  const clone = value => JSON.parse(JSON.stringify(value));
  const resolveName = (name, intent) => name.replace("{intent}", intent);
  const cssName = name => "--" + name.replaceAll(".", "-");
  const variable = name => name ? `var(${cssName(name)})` : "transparent";
  const round = value => Math.round(value * 1000) / 1000;
  const titleCase = value => value[0].toUpperCase() + value.slice(1);
  const intentFor = id => INTENTS.find(intent => intent.id === id);
  const rgb = hex => [1, 3, 5].map(offset => parseInt(hex.slice(offset, offset + 2), 16));
  const rgba = token => `rgba(${rgb(token.hex).join(", ")}, ${round(token.alpha)})`;
  const hexOf = channels => "#" + channels.map(n => Math.round(n).toString(16).padStart(2, "0")).join("");
  const PALETTE_NAMES = Object.fromEntries(INTENTS.flatMap(i => i.shades.map((hex, index) => [hex, `${i.palette} ${index + 1}`])));
  ["#1c2127", "#252a31", "#2f343c", "#383e47", "#404854"].forEach((hex, index) => { PALETTE_NAMES[hex] = `Dark Gray ${index + 1}`; });
  ["#d3d8de", "#dce0e5", "#e5e8eb", "#edeff2", "#f6f7f9"].forEach((hex, index) => { PALETTE_NAMES[hex] = `Light Gray ${index + 1}`; });
  PALETTE_NAMES["#ffffff"] = "White"; PALETTE_NAMES["#111418"] = "Black";
  PALETTE_NAMES["#000000"] = "Literal black"; PALETTE_NAMES["#7dbcff"] = "Selection blue (legacy)";

  function defaultTokens() {
    return Object.fromEntries(Object.entries(METHODS).map(([method, definition]) => [method,
      Object.fromEntries(["light", "dark"].map((theme, modeIndex) => {
        const tokens = {};
        for (const [name, , light, dark] of definition.schema) {
          for (const intent of INTENTS) {
            let shade = intent.id === "neutral" ? 1 : theme === "light" ? 2 : 4;
            if (intent.id === "warning" && name === "fill.{intent}.clear.hover") shade = 4;
            tokens[resolveName(name, intent.id)] = { hex: intent.shades[shade], alpha: [light, dark][modeIndex] / 100 };
          }
        }
        for (const [name, , light, dark] of SHARED) tokens[name] = [light, dark][modeIndex] / 100;
        Object.assign(tokens, extraCases.defaults(method, theme));
        return [theme, tokens];
      })),
    ]));
  }

  const DEFAULTS = defaultTokens();
  let tokens = clone(DEFAULTS);
  let theme = "light";
  let visibleMethods = ["p1", "p2", "p3"];
  let editMethod = "p2";
  let editIntent = "primary";
  let previewIntent = "primary";
  let componentFilter = "all";
  let inspection = null;
  let undo = null;
  let statusTimer;
  let editorOpener = null;
  let storageAvailable = true;

  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved) return;
      // Accept known tokens and bounded values only; stale/corrupt saved data cannot alter the inventory.
      for (const method of Object.keys(METHODS)) for (const mode of ["light", "dark"]) {
        const savedTokens = saved.tokens?.[method]?.[mode] || {};
        for (const [name, fallback] of Object.entries(DEFAULTS[method][mode])) {
          const value = savedTokens[name] ?? savedTokens[name.replace(".clear.", ".minimal.")];
          // Migrate the former Warning hover default; keep customized values and explicit clear tokens.
          if (name === "fill.warning.clear.hover" && mode === "light" && !savedTokens[name] && value?.hex === "#c87619" && value.alpha === .15) continue;
          if (typeof fallback === "number") {
            if (Number.isFinite(value) && value >= 0 && value <= 1) tokens[method][mode][name] = value;
          } else if (value && /^#[0-9a-f]{6}$/i.test(value.hex) && Number.isFinite(value.alpha) && value.alpha >= 0 && value.alpha <= 1) {
            tokens[method][mode][name] = { hex: value.hex.toLowerCase(), alpha: value.alpha };
          }
        }
      }
      if (["light", "dark"].includes(saved.theme)) theme = saved.theme;
      if (Array.isArray(saved.visibleMethods)) {
        const valid = [...new Set(saved.visibleMethods.filter(method => METHODS[method]))];
        if (valid.length) visibleMethods = Object.keys(METHODS).filter(method => valid.includes(method));
      }
      if (METHODS[saved.editMethod]) editMethod = saved.editMethod;
      if (saved.editIntent === "other" || intentFor(saved.editIntent)) editIntent = saved.editIntent;
      if (saved.previewIntent === "all" || intentFor(saved.previewIntent)) previewIntent = saved.previewIntent;
      if (COMPONENT_NAV.some(([, entries]) => entries.some(([id]) => id === saved.componentFilter))) componentFilter = saved.componentFilter;
    } catch (_) { storageAvailable = false; }
  }

  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ tokens, theme, visibleMethods, editMethod, editIntent, previewIntent, componentFilter }));
    } catch (_) {
      storageAvailable = false;
      tell("Browser storage is unavailable. Export tokens to keep your edits.");
    }
  }

  function tell(message, offerUndo = false) {
    document.getElementById("status-message").textContent = message;
    document.getElementById("undo-reset").hidden = !offerUndo;
    document.getElementById("status").hidden = false;
    clearTimeout(statusTimer);
    if (!offerUndo) statusTimer = setTimeout(() => { document.getElementById("status").hidden = true; }, 4000);
  }

  function icon(name) {
    const paths = {
      plus: '<path d="M8 3v10M3 8h10"/>',
      tick: '<path d="m3 8 3 3 7-7"/>',
      chevron: '<path d="m6 4 4 4-4 4"/>',
      info: '<circle cx="8" cy="8" r="6"/><path d="M8 7v4M8 4v1"/>',
      warning: '<path d="m8 2 6 12H2L8 2Z"/><path d="M8 6v4m0 1v1"/>',
    };
    return `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
  }

  function paintNames(method, kind, intent, state) {
    const selected = state.startsWith("selected");
    const disabled = state.includes("disabled");
    const phase = disabled ? "rest" : state.includes("pressed") ? "pressed" : state.includes("hover") ? "hover" : "rest";
    const role = selected ? "selected" : ["tag", "compound", "callout"].includes(kind) ? "subtle" : "clear";
    const restRole = selected ? "subtle" : role;
    const paintIntent = kind === "menu" && selected && !disabled && intent === "neutral" ? "primary" : intent;
    const name = (family, treatment, stage) => `${family}.${intent}.${treatment ? treatment + "." : ""}${stage}`;
    let base, overlay = null, keyBase = null, emphasis = null;
    if (method === "p1") {
      base = phase === "rest" && role === "clear" ? null : name("fill", phase === "rest" ? restRole : role, phase);
      if (kind === "compound") keyBase = name("fill", "strong", phase);
    } else if (method === "p2") {
      base = role === "clear" ? null : name("fill", restRole, "rest");
      if (phase !== "rest") overlay = name("overlay", "", phase);
      if (kind === "compound") keyBase = name("fill", "strong", "rest");
    } else {
      base = phase === "rest" ? role === "clear" ? null : name("fill", restRole, "rest") : name("fill", selected ? "selected" : "", phase);
      if (kind === "compound") emphasis = name("overlay", "", "emphasis");
    }
    if (kind === "menu" && (selected || disabled)) {
      base = disabled ? null : `fill.${paintIntent}.subtle.rest`;
      overlay = null;
    }
    return { base, overlay, keyBase, emphasis, disabled, outlined: kind === "outlined", intent: paintIntent };
  }

  function stateOf(sample) {
    if (sample.dataset.state !== "live") return sample.dataset.state;
    const prefix = sample.dataset.selected === "true" ? "selected" : "";
    const interaction = sample.dataset.pressed === "true" ? "pressed" : sample.dataset.hover === "true" ? "hover" : "";
    return [prefix, interaction].filter(Boolean).join("-") || "rest";
  }

  // Source-over composition, in paint order. Keep the RGB result when layers use different sources.
  function composite(layers) {
    let channels = [0, 0, 0], alpha = 0;
    for (const layer of layers.filter(Boolean)) {
      const nextAlpha = layer.alpha + alpha * (1 - layer.alpha);
      if (nextAlpha > 0) channels = rgb(layer.hex).map((value, index) => (value * layer.alpha + channels[index] * alpha * (1 - layer.alpha)) / nextAlpha);
      alpha = nextAlpha;
    }
    return { hex: hexOf(channels), channels, alpha };
  }

  function effectivePaints(method, names) {
    const values = tokens[method][theme];
    const base = names.base ? values[names.base] : null;
    const overlay = names.overlay ? values[names.overlay] : null;
    const value = composite([base, overlay]);
    const key = names.keyBase ? composite([values[names.keyBase], overlay]) : names.emphasis ? composite([base, values[names.emphasis]]) : null;
    const attenuation = names.disabled ? values["opacity.disabled"] : 1;
    return { value: { ...value, alpha: value.alpha * attenuation }, key: key ? { ...key, alpha: key.alpha * attenuation } : null };
  }

  function foreground(intent) {
    if (intent.id === "neutral") return theme === "light" ? "#1c2127" : "#f6f7f9";
    return intent.shades[theme === "light" ? 1 : 4];
  }

  function contrast(paint, intent) {
    const ground = rgb(theme === "light" ? "#ffffff" : "#252a31");
    const background = paint.channels.map((channel, index) => channel * paint.alpha + ground[index] * (1 - paint.alpha));
    const luminance = channels => channels.map(value => value / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4).reduce((sum, value, index) => sum + value * [.2126, .7152, .0722][index], 0);
    const a = luminance(rgb(foreground(intent))), b = luminance(background);
    return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
  }

  function recipeSummary(method, names) {
    const paints = effectivePaints(method, names);
    const describe = paint => `${round(paint.alpha * 100)}%`;
    const values = paints.key ? `Key ${describe(paints.key)} · value ${describe(paints.value)}` : `Fill ${describe(paints.value)}`;
    const outline = names.outlined ? ` · outline ${round(tokens[method][theme]["opacity.outline"] * (names.disabled ? tokens[method][theme]["opacity.disabled"] : 1) * 100)}%` : "";
    return values + outline;
  }

  function paintLabel(paint) {
    return paint.alpha === 0 ? "Transparent · 0%" : `${PALETTE_NAMES[paint.hex] || paint.hex.toUpperCase()} · ${round(paint.alpha * 100)}%`;
  }

  function paintCss(paint) {
    return `rgba(${paint.channels.map(round).join(", ")}, ${round(paint.alpha)})`;
  }

  function applySamplePaint(sample) {
    const { method, kind, intent: intentId } = sample.dataset;
    const state = stateOf(sample);
    const names = paintNames(method, kind, intentId, state);
    const intent = intentFor(names.intent);
    sample.dataset.renderState = state;
    sample.style.setProperty("--ink", foreground(intent));
    const paint = sample.querySelector(".paint-layer");
    const stateImage = names.overlay ? `linear-gradient(${variable(names.overlay)}, ${variable(names.overlay)})` : "none";
    paint.style.opacity = names.disabled ? variable("opacity.disabled") : "1";
    paint.style.backgroundColor = kind === "compound" && method !== "p3" ? "transparent" : variable(names.base);
    paint.style.backgroundImage = kind === "compound" ? "none" : stateImage;
    const outlineSource = intent.shades[intentId === "neutral" ? 1 : theme === "light" ? 2 : 4];
    paint.style.boxShadow = names.outlined ? `inset 0 0 0 1px rgb(${rgb(outlineSource).join(" ")} / ${variable("opacity.outline")})` : "none";
    if (kind === "compound") {
      const key = paint.querySelector(".paint-key"), value = paint.querySelector(".paint-value");
      key.style.backgroundColor = variable(method === "p3" ? names.emphasis : names.keyBase);
      value.style.backgroundColor = method === "p3" ? "transparent" : variable(names.base);
      key.style.backgroundImage = value.style.backgroundImage = method === "p2" ? stateImage : "none";
    }
    if (sample.dataset.state === "live" && ["minimal", "outlined", "menu"].includes(kind)) sample.setAttribute("aria-pressed", String(sample.dataset.selected === "true"));
    const paints = effectivePaints(method, names);
    const recipe = sample.closest(".sample-area").querySelector(".sample-recipe");
    const values = tokens[method][theme];
    const layers = [];
    const layer = (name, purpose) => `<span class="recipe-layer"><code>${name}</code><span>${purpose} · ${typeof values[name] === "number" ? `${round(values[name] * 100)}%` : paintLabel(values[name])}</span></span>`;
    if (names.keyBase) {
      layers.push(layer(names.keyBase, "Key fill"), layer(names.base, "Value fill"));
    } else if (names.base) {
      layers.push(layer(names.base, names.emphasis ? "Base pill · both halves" : "Base fill"));
    } else {
      layers.push('<span class="recipe-layer">No fill token · transparent base</span>');
    }
    if (names.overlay) layers.push(layer(names.overlay, names.keyBase ? "Overlay above both halves" : "Overlay above base"));
    if (names.emphasis) layers.push(layer(names.emphasis, "Fixed overlay · key only"));
    if (names.outlined) layers.push(layer("opacity.outline", `Outline · ${PALETTE_NAMES[outlineSource]}`));
    if (names.disabled) layers.push(layer("opacity.disabled", "After all paint · multiply by"));
    let result = paints.key ? `Result — Key: ${paintLabel(paints.key)}<br>Value: ${paintLabel(paints.value)}` : `Result: ${paintLabel(paints.value)}`;
    recipe.title = paints.key ? `Key: ${paintCss(paints.key)}\nValue: ${paintCss(paints.value)}` : paintCss(paints.value);
    if (names.outlined) {
      const outline = tokens[method][theme]["opacity.outline"];
      const alpha = outline * (names.disabled ? tokens[method][theme]["opacity.disabled"] : 1);
      result += `<br>Outline: ${round(alpha * 100)}%`;
      recipe.title += `\nOutline: opacity.outline (${round(outline * 100)}%)${names.disabled ? ` × opacity.disabled (${round(tokens[method][theme]["opacity.disabled"] * 100)}%)` : ""} = ${round(alpha * 100)}%`;
    }
    recipe.innerHTML = layers.join("") + `<span class="recipe-result">${result}</span>`;
    const used = [names.base, names.keyBase, names.overlay, names.emphasis].filter(Boolean);
    recipe.title += used.length ? `\nTokens: ${used.join(" + ")}` : "\nNo background fill";
    if (names.disabled) recipe.title += `\nPaint opacity: opacity.disabled = ${round(tokens[method][theme]["opacity.disabled"] * 100)}%`;
  }

  // The published stylesheet is isolated from proposal styles. Only selector scoping
  // and pointer-state selectors change, so frozen rows retain the upstream paints.
  const referenceSheet = new CSSStyleSheet();
  referenceSheet.replaceSync(window.blueprintReferenceCss.replace(/:root/g, ":host").replace(/\bbody\s*\{/g, ".reference-ground{").replace(/:hover/g, "[data-reference-hover]").replace(/:active/g, "[data-reference-pressed]"));
  const referenceCanvasSheet = new CSSStyleSheet();
  referenceCanvasSheet.replaceSync(":host{display:block}.reference-ground{background:var(--surface)}.reference-menu{list-style:none;padding:0;margin:0}");
  const colorCanvas = document.createElement("canvas");
  colorCanvas.width = colorCanvas.height = 1;
  const colorContext = colorCanvas.getContext("2d", { willReadFrequently: true });
  let referenceTimer;

  function readBackground(color) {
    const rgbaParts = color.match(/^rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)$/);
    const slash = color.match(/\/\s*([\d.]+)(%)?\s*\)$/);
    const alpha = rgbaParts ? Number(rgbaParts[4] ?? 1) : slash ? Number(slash[1]) / (slash[2] ? 100 : 1) : 1;
    // Resolve the opaque source first: reading a low-alpha pixel would quantize RGB.
    colorContext.clearRect(0, 0, 1, 1);
    colorContext.fillStyle = `rgb(from ${color} r g b / 1)`;
    colorContext.fillRect(0, 0, 1, 1);
    const channels = rgbaParts ? rgbaParts.slice(1, 4).map(Number) : [...colorContext.getImageData(0, 0, 1, 1).data].slice(0, 3);
    return { hex: hexOf(channels), channels, alpha };
  }

  function readReferencePaint(node, ground) {
    let paint = { hex: "#000000", channels: [0, 0, 0], alpha: 0 };
    // Walk from the segment outward, applying each ancestor's opacity once to
    // its whole paint group. The review backdrop is deliberately excluded.
    while (node && node !== ground) {
      const style = getComputedStyle(node);
      paint = composite([readBackground(style.backgroundColor), paint]);
      paint.alpha *= Number(style.opacity);
      node = node.parentElement;
    }
    return paint;
  }

  function updateReferenceRecipe(host) {
    const ground = host.shadowRoot.querySelector(".reference-ground");
    const control = host.shadowRoot.querySelector("[data-reference-control]");
    const nodes = host.dataset.kind === "compound" ? [...control.querySelectorAll(".bp6-compound-tag-left,.bp6-compound-tag-right")] : [control];
    const paints = nodes.map(node => readReferencePaint(node, ground));
    const recipe = host.closest(".sample-area").querySelector(".sample-recipe");
    recipe.textContent = paints.map((paint, index) => `${paints.length > 1 ? index === 0 ? "Key: " : "Value: " : ""}${paintLabel(paint)}`).join("\n");
    recipe.title = nodes.map(node => `CSS background: ${getComputedStyle(node).backgroundColor}`).join("\n") + "\nEffective paint: " + paints.map(paintCss).join(" / ");
  }

  function applyReferenceState(host) {
    const control = host.shadowRoot.querySelector("[data-reference-control]");
    const state = stateOf(host), disabled = state.includes("disabled");
    host.dataset.renderState = state;
    host.shadowRoot.querySelector(".reference-ground").classList.toggle("bp6-dark", theme === "dark");
    control.classList.toggle("bp6-active", state.startsWith("selected"));
    control.classList.toggle("bp6-disabled", disabled);
    control.toggleAttribute("data-reference-hover", !disabled && (state.includes("hover") || state.includes("pressed")));
    control.toggleAttribute("data-reference-pressed", !disabled && state.includes("pressed"));
    if (control.tagName === "BUTTON") control.disabled = disabled;
    if (disabled) control.setAttribute("aria-disabled", "true");
    else control.removeAttribute("aria-disabled");
    if (["minimal", "outlined", "menu"].includes(host.dataset.kind)) control.setAttribute("aria-pressed", String(state.startsWith("selected")));
    updateReferenceRecipe(host);
    clearTimeout(referenceTimer);
    referenceTimer = setTimeout(() => document.querySelectorAll("blueprint-method-reference").forEach(updateReferenceRecipe), 180);
  }

  function referenceControl(kind, intent) {
    const intentClass = intent.id === "neutral" ? "" : ` bp6-intent-${intent.id}`;
    const component = COMPONENTS.find(component => component.id === kind);
    const attrs = `data-reference-control aria-label="Current Blueprint ${intent.label} ${component.referenceLabel || component.label}"`;
    const bpIcon = name => `<span class="bp6-icon">${icon(name).replace("<svg ", '<svg width="16" height="16" ')}</span>`;
    if (["minimal", "outlined"].includes(kind)) return `<button type="button" ${attrs} class="bp6-button bp6-${kind}${intentClass}">${bpIcon("plus")}<span class="bp6-button-text">Button</span></button>`;
    if (kind === "menu") return `<ul class="reference-menu" role="menu"><li role="none"><a ${attrs} role="menuitem" tabindex="0" class="bp6-menu-item${intentClass}"><span class="bp6-menu-item-icon">${bpIcon("tick")}</span><span class="bp6-text-overflow-ellipsis bp6-fill">Menu item</span></a></li></ul>`;
    if (kind === "tag") return `<span ${attrs} role="button" tabindex="0" class="bp6-tag bp6-minimal bp6-round bp6-interactive${intentClass}"><span class="bp6-text-overflow-ellipsis bp6-fill">Category</span></span>`;
    if (kind === "compound") return `<span ${attrs} role="button" tabindex="0" class="bp6-tag bp6-compound-tag bp6-minimal bp6-round bp6-interactive${intentClass}"><span class="bp6-compound-tag-left"><span class="bp6-compound-tag-left-content bp6-fill bp6-text-overflow-ellipsis">Key</span></span><span class="bp6-compound-tag-right"><span class="bp6-compound-tag-right-content bp6-fill bp6-text-overflow-ellipsis">Value</span></span></span>`;
    return `<div ${attrs} class="bp6-callout bp6-callout-icon bp6-callout-has-body-content${intentClass}">${bpIcon(intent.id === "warning" ? "warning" : "info")}<h5 class="bp6-heading">${intent.label} callout</h5>Changes apply to the items in this view.</div>`;
  }

  function mountReferences() {
    for (const host of document.querySelectorAll("blueprint-method-reference")) {
      const root = host.attachShadow({ mode: "open" });
      root.adoptedStyleSheets = [referenceSheet, referenceCanvasSheet];
      root.innerHTML = `<div class="reference-ground">${referenceControl(host.dataset.kind, intentFor(host.dataset.intent))}</div>`;
      applyReferenceState(host);
      if (host.dataset.state !== "live") continue;
      const control = root.querySelector("[data-reference-control]");
      control.addEventListener("pointerenter", () => { host.dataset.hover = "true"; applyReferenceState(host); });
      control.addEventListener("pointerleave", () => { host.dataset.hover = "false"; host.dataset.pressed = "false"; applyReferenceState(host); });
      control.addEventListener("pointerdown", event => { if (event.button === 0) { host.dataset.pressed = "true"; applyReferenceState(host); } });
      control.addEventListener("keydown", event => {
        if ([" ", "Enter"].includes(event.key) && !event.repeat) {
          host.dataset.pressed = "true"; applyReferenceState(host);
          if (control.tagName !== "BUTTON") event.preventDefault();
        }
      });
      control.addEventListener("keyup", event => {
        host.dataset.pressed = "false"; applyReferenceState(host);
        if ([" ", "Enter"].includes(event.key) && control.tagName !== "BUTTON") { event.preventDefault(); control.click(); }
      });
      control.addEventListener("blur", () => { host.dataset.pressed = "false"; applyReferenceState(host); });
      control.addEventListener("click", () => {
        if (["minimal", "outlined", "menu"].includes(host.dataset.kind)) host.dataset.selected = String(host.dataset.selected !== "true");
        applyReferenceState(host);
      });
    }
  }

  function referenceMarkup(component, intent, state, label) {
    const unsupported = ["tag", "compound"].includes(component.id) && state.includes("disabled");
    const content = unsupported ? '<span class="reference-unavailable">No disabled treatment</span><span class="sample-recipe">Not provided by Blueprint</span>' : `<blueprint-method-reference data-kind="${component.id}" data-intent="${intent.id}" data-state="${state}" data-selected="false"></blueprint-method-reference><span class="sample-recipe"></span>`;
    return `<div class="state-row${state === "live" ? " live-row" : ""}${component.id === "callout" ? " callout-row" : ""}"><span class="state-label">${label}</span><div class="sample-area">${content}</div></div>`;
  }

  function sampleMarkup(method, component, intent, state, label) {
    const disabled = state.includes("disabled");
    let content;
    if (component.id === "compound") content = '<span class="sample-content">Key</span><span class="sample-content">Value</span>';
    else if (component.id === "tag") content = '<span class="sample-content">Category</span>';
    else if (component.id === "menu") content = `<span class="sample-content">${icon("tick")}Menu item<span class="menu-tail">${icon("chevron")}</span></span>`;
    else if (component.id === "callout") content = `<span class="sample-content">${icon(intent.id === "warning" ? "warning" : "info")}<span><strong>${intent.label} callout</strong><p>Changes apply to the items in this view.</p></span></span>`;
    else content = `<span class="sample-content">${icon("plus")}Button</span>`;
    const paint = `<span class="paint-layer" aria-hidden="true">${component.id === "compound" ? '<span class="paint-key"></span><span class="paint-value"></span>' : ""}</span>`;
    const live = state === "live";
    return `<div class="state-row${live ? " live-row" : ""}${component.id === "callout" ? " callout-row" : ""}"><span class="state-label">${label}</span><div class="sample-area"><button type="button" class="sample ${component.id}" data-method="${method}" data-kind="${component.id}" data-intent="${intent.id}" data-state="${state}" data-selected="false" aria-label="${METHODS[method].label}, ${intent.label} ${component.label}, ${label}"${disabled ? " disabled" : ""}>${paint}${content}</button><span class="sample-recipe"></span></div></div>`;
  }

  function componentMarkup(method, component, intent) {
    const states = component.id === "callout" ? [["rest", "Rest"]] : component.selection ? STATES : STATES.slice(0, 4);
    const row = (state, label) => method === "reference" ? referenceMarkup(component, intent, state, label) : sampleMarkup(method, component, intent, state, label);
    const live = component.id === "callout" ? "" : row("live", "Try it");
    const note = method === "reference" ? component.id === "menu" ? "Selected uses Blueprint active; Neutral active defaults to Primary." : component.selection ? "Selected uses Blueprint’s persistent active appearance." : component.id === "callout" ? "Published callout resting background." : "Published interactive tag styles; no built-in disabled treatment." : component.id === "callout" ? "Informational surface: no hover, pressed, or disabled treatment." : component.id === "menu" ? "Selection keeps its fill. Neutral selects Primary; disabled clears it." : component.selection ? "Click the live sample to toggle persistent selection." : component.id === "compound" ? method === "p3" ? "One pill underneath; a fixed emphasis overlay covers the key." : "Key uses strong rest; value uses subtle rest." : "Interactive tag: hover and press the live sample.";
    return `<section class="component-group" data-component="${component.id}"><h3>${method === "reference" ? component.referenceLabel || component.label : component.label}</h3>${live}${states.map(([state, label]) => row(state, label)).join("")}<p class="component-note">${note}</p></section>`;
  }

  function applyVariables() {
    for (const column of document.querySelectorAll(".method-column")) {
      for (const [name, value] of Object.entries(tokens[column.dataset.method][theme])) column.style.setProperty(cssName(name), typeof value === "number" ? value : rgba(value));
    }
    document.querySelectorAll(".sample").forEach(applySamplePaint);
    document.querySelectorAll("blueprint-method-reference").forEach(applyReferenceState);
    extraCases.update({ theme, tokens, composite, paintLabel, rgba, foreground, intentFor });
    renderInspector();
  }

  function renderComparison() {
    const shownIntents = previewIntent === "all" ? INTENTS : [intentFor(previewIntent)];
    const components = COMPONENTS.filter(component => componentFilter === "all" || component.filter === componentFilter);
    const comparison = document.getElementById("comparison");
    comparison.style.setProperty("--columns", visibleMethods.length + 1);
    const intentSections = method => (components.length ? shownIntents.map(intent => `<div class="intent-heading" style="--intent-dot:${intent.shades[intent.id === "neutral" ? 1 : 2]}"><span class="intent-dot"></span>${intent.label}</div>${components.map(component => componentMarkup(method, component, intent)).join("")}`).join("") : "") + extraCases.sections(method, componentFilter);
    comparison.innerHTML = `<article class="reference-column"><header class="method-header"><div class="method-title"><h2>Current Blueprint</h2><small>6.21.0</small></div><p>Published CSS for original components; source paint fixtures for additional cases.</p><span class="reference-version">Reference · values stay fixed</span></header>${intentSections("reference")}</article>` + visibleMethods.map(method => `<article class="method-column" data-method="${method}"><header class="method-header"><div class="method-title"><h2>${method.slice(1)} · ${METHODS[method].label}</h2><small>${totalCount(method)} tokens</small></div><p>${METHODS[method].description}</p><button type="button" class="edit-method-button" data-edit-method="${method}" aria-haspopup="dialog" aria-controls="editor">Edit tokens</button></header>${intentSections(method)}</article>`).join("");
    mountReferences();
    applyVariables();
    updateEditorButtons();
  }

  function renderEditor() {
    const groups = new Map();
    for (const entry of [...(editIntent === "other" ? extraCases.schema(editMethod) : METHODS[editMethod].schema), ...SHARED]) {
      if (!groups.has(entry[1])) groups.set(entry[1], []);
      groups.get(entry[1]).push(entry);
    }
    const intent = intentFor(editIntent);
    document.getElementById("edit-method").value = editMethod;
    document.getElementById("edit-intent").value = editIntent;
    document.getElementById("editing-mode").textContent = titleCase(theme);
    document.getElementById("method-token-count").textContent = totalCount(editMethod);
    const groupOrder = ["Resting fills", "Interaction fills", "State overlays", "Compound emphasis", "Selected controls", "Shared opacity"];
    document.getElementById("token-groups").innerHTML = [...groups].sort(([a], [b]) => groupOrder.indexOf(a) - groupOrder.indexOf(b)).map(([group, entries]) => `<details class="token-group" open><summary>${group}<small>${entries.length}</small></summary>${entries.map(([template]) => {
      const name = resolveName(template, editIntent), value = tokens[editMethod][theme][name];
      const isOpacity = typeof value === "number";
      const alpha = round((isOpacity ? value : value.alpha) * 100);
      const shades = editIntent === "other" ? extraCases.palette(name) : intent.shades;
      const color = isOpacity ? "" : `<div class="color-fields"><span class="color-swatch" style="background:${value.hex}" aria-hidden="true"></span><select data-field="palette" aria-label="${name} palette source">${shades.map(hex => `<option value="${hex}"${hex === value.hex ? " selected" : ""}>${PALETTE_NAMES[hex]} · ${hex.toUpperCase()}</option>`).join("")}${shades.includes(value.hex) ? "" : `<option value="${value.hex}" selected disabled>Saved color · ${value.hex.toUpperCase()}</option>`}</select></div>`;
      return `<div class="token-row" data-token="${name}" data-template="${template}"><code class="token-name">${template}</code>${color}<label class="alpha-fields"><span>${isOpacity ? "Token value" : "Fill opacity"}</span><input type="number" min="0" max="100" step="0.1" value="${alpha}" data-field="alpha" aria-label="${name} ${isOpacity ? "token value" : "opacity"} percent"><span>%</span></label><output class="token-css">${isOpacity ? `${name} = ${alpha}%` : rgba(value)}</output>${isOpacity ? `<p class="editor-note">${name === "opacity.disabled" ? "Multiplies the designated paint group once; the added switch example attenuates only its track." : "Sets outline alpha before disabled opacity is applied."} Editing this value updates every use in this approach and mode.</p>` : ""}</div>`;
    }).join("")}</details>`).join("");
    filterTokens();
    updateEditedCount();
    renderInspector();
  }

  function filterTokens() {
    const query = document.getElementById("token-search").value.trim().toLowerCase();
    let matches = 0;
    document.querySelectorAll(".token-row").forEach(row => {
      row.hidden = !row.dataset.token.includes(query);
      if (!row.hidden) matches++;
    });
    document.querySelectorAll(".token-group").forEach(group => {
      group.hidden = !group.querySelector(".token-row:not([hidden])");
      if (query && !group.hidden) group.open = true;
    });
    let empty = document.getElementById("no-tokens");
    if (!empty) {
      empty = document.createElement("p"); empty.id = "no-tokens"; empty.className = "editor-controls editor-note";
      empty.textContent = "No matching tokens. Try a state such as hover, or clear the search.";
      document.getElementById("token-groups").append(empty);
    }
    empty.hidden = matches > 0;
  }

  function updateEditedCount() {
    const changed = Object.entries(tokens[editMethod][theme]).filter(([name, value]) => JSON.stringify(value) !== JSON.stringify(DEFAULTS[editMethod][theme][name])).length;
    document.getElementById("edited-count").textContent = changed ? `${changed} edited · ${titleCase(theme)}` : "Proposal values";
  }

  function renderInspector() {
    document.querySelectorAll(".token-row").forEach(row => { row.dataset.used = "false"; });
    const target = document.getElementById("inspector");
    const names = inspection && paintNames(inspection.method, inspection.kind, inspection.intent, inspection.state);
    if (!inspection || inspection.method !== editMethod || names.intent !== editIntent) {
      target.innerHTML = '<h2>Paint recipe</h2><p>Click a component preview to inspect its tokens and combined alpha.</p>';
      return;
    }
    const { method, kind, intent, state } = inspection;
    const used = [names.base, names.keyBase, names.overlay, names.emphasis, names.disabled ? "opacity.disabled" : null, names.outlined ? "opacity.outline" : null].filter(Boolean);
    for (const row of document.querySelectorAll(".token-row")) row.dataset.used = String(used.includes(row.dataset.token));
    const paints = effectivePaints(method, names);
    const info = intentFor(names.intent);
    const ratios = [paints.value, paints.key].filter(Boolean).map(paint => contrast(paint, info));
    const minRatio = Math.min(...ratios);
    const describe = name => {
      const value = tokens[method][theme][name];
      return typeof value === "number" ? `${round(value * 100)}%` : `${PALETTE_NAMES[value.hex] || value.hex.toUpperCase()} · ${round(value.alpha * 100)}%`;
    };
    target.innerHTML = `<h2>${COMPONENTS.find(component => component.id === kind).label} · ${state.replaceAll("-", " + ")}</h2><p>${intentFor(intent).label}${names.intent !== intent ? ` → ${info.label} tokens` : ""} · ${titleCase(theme)} · Approach ${method.slice(1)}</p><ul>${used.length ? used.map(name => `<li><code>${name}</code><br>${describe(name)}</li>`).join("") : "<li>No paint · transparent</li>"}</ul><output>${recipeSummary(method, names)}</output><output>Composed source: ${paints.key ? `key ${paints.key.hex.toUpperCase()} / value ` : ""}${paints.value.hex.toUpperCase()}</output>${names.disabled ? '<p class="editor-note">Background and outline are attenuated together once. Content uses its separate disabled styling.</p>' : `<output${minRatio < 4.5 ? ' class="contrast-low"' : ""}>Text contrast: ${minRatio.toFixed(2)}:1${minRatio < 4.5 ? " · below 4.5:1" : ""}</output>`}<p class="editor-note">${kind === "menu" && names.disabled ? "This menu clears its background when disabled, including while selected." : kind === "menu" && state.startsWith("selected") ? "This menu keeps the same selected fill during hover and press. Neutral selection uses Primary tokens." : method === "p2" ? "Pressed replaces the hover overlay. Overlay alpha combines with the resting alpha; it is not a final target." : method === "p3" && kind === "compound" ? "The emphasis overlay stays fixed above the pill’s changing fill." : "State fills replace the prior fill."}</p>`;
  }

  function changeEditor(method, intent = editIntent) {
    editMethod = method; editIntent = intent;
    updateEditorButtons();
    renderEditor(); persist();
    extraCases.update({ theme, tokens, composite, paintLabel, rgba, foreground, intentFor });
    if (document.getElementById("editor").open) {
      const column = document.querySelector(`.method-column[data-method="${editMethod}"]`);
      const scroll = document.querySelector(".comparison-scroll");
      scroll.scrollLeft += column.getBoundingClientRect().right - scroll.getBoundingClientRect().right;
    }
  }

  function updateEditorButtons() {
    document.querySelectorAll(".method-column").forEach(column => {
      const editing = document.getElementById("editor").open && column.dataset.method === editMethod;
      column.dataset.editing = String(editing);
      column.querySelector(".edit-method-button").textContent = editing ? "Editing tokens" : "Edit tokens";
    });
  }

  function openEditor(button) {
    editorOpener = button;
    const editor = document.getElementById("editor");
    editor.showModal();
    editor.append(document.getElementById("status"));
    changeEditor(button.dataset.editMethod);
  }

  function updateToken(event) {
    const input = event.target.closest("[data-field]");
    if (!input) return;
    const row = input.closest(".token-row"), name = row.dataset.token;
    const value = tokens[editMethod][theme][name];
    const field = input.dataset.field;
    if (field === "alpha") {
      const percent = input.valueAsNumber;
      if (!Number.isFinite(percent) || percent < 0 || percent > 100) { input.setAttribute("aria-invalid", "true"); return; }
      input.removeAttribute("aria-invalid");
      if (typeof value === "number") tokens[editMethod][theme][name] = percent / 100;
      else value.alpha = percent / 100;
      row.querySelectorAll('[data-field="alpha"]').forEach(other => { if (other !== input) other.value = percent; });
    } else if (field === "palette") {
      const hex = input.value.toLowerCase();
      if (!(editIntent === "other" ? extraCases.palette(name) : intentFor(editIntent).shades).includes(hex)) return;
      value.hex = hex;
      row.querySelector(".color-swatch").style.background = hex;
      row.querySelector('option[disabled]')?.remove();
    } else return;
    const updated = tokens[editMethod][theme][name];
    row.querySelector(".token-css").textContent = typeof updated === "number" ? `${name} = ${round(updated * 100)}%` : rgba(updated);
    applyVariables(); updateEditedCount(); persist();
  }

  function syncControls() {
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll("[data-theme-choice]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme)));
    document.querySelectorAll('[name="visible-method"]').forEach(input => { input.checked = visibleMethods.includes(input.value); });
    document.getElementById("preview-intent").value = previewIntent;
    document.getElementById("component-filter").value = componentFilter;
    document.querySelectorAll("[data-component-filter]").forEach(button => {
      if (button.dataset.componentFilter === componentFilter) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    document.getElementById("backdrop-label").textContent = theme === "light" ? "White backdrop" : "Dark Gray 2 backdrop";
  }

  function exportData() {
    return {
      name: "Blueprint transparent intent token comparison", version: 1, status: "Editable trial values; not adopted system tokens",
      intents: INTENTS.map(intent => intent.id),
      scope: "Intent components plus 14 additional background/selection recipe families. Original intent schema is unchanged; 20 role tokens are added per method. Some existing roles have opaque endpoints. No general solid-intent fill system.",
      additionalCases: extraCases.cases,
      methods: Object.fromEntries(Object.entries(METHODS).map(([method, definition]) => [method, {
        name: definition.label, tokenCount: totalCount(method), originalTokenCount: definition.count, additionalRoleTokenCount: extraCases.roles.length, behavior: definition.description,
        modes: Object.fromEntries(["light", "dark"].map(mode => [mode, Object.fromEntries(Object.entries(tokens[method][mode]).map(([name, value]) => [name, typeof value === "number" ? { $type: "number", $value: value, cssVariable: cssName(name) } : { $type: "color", $value: { colorSpace: "srgb", components: rgb(value.hex).map(channel => channel / 255), alpha: value.alpha }, hex: value.hex, css: rgba(value), cssVariable: cssName(name) }]))])),
      }])),
      composition: { p1: "Replace fills by role and state; compound halves use strong/subtle independently.", p2: "Rest + one hover OR pressed overlay. Never stack both state overlays.", p3: "Change the pill fill; keep fixed emphasis on the compound key.", selection: "Selected buttons reuse subtle.rest. Selected hover/pressed keep their own fills in 1 and 3; method 2 adds the shared state overlay. Selected menu items retain subtle.rest through hover/press; Neutral uses Primary. Disabled menu backgrounds clear.", disabled: "Composite background layers and outline first, then apply opacity.disabled once. Foregrounds have separate existing rules." },
    };
  }

  loadSettings();
  document.getElementById("component-nav-items").innerHTML = COMPONENT_NAV.map(([group, entries]) => `<p class="nav-group-label">${group}</p>${entries.map(([id, label]) => `<button type="button" data-component-filter="${id}" aria-controls="comparison">${label}</button>`).join("")}`).join("");
  document.getElementById("component-filter").innerHTML = COMPONENT_NAV.map(([group, entries]) => `<optgroup label="${group}">${entries.map(([id, label]) => `<option value="${id}">${label}</option>`).join("")}</optgroup>`).join("");
  const options = INTENTS.map(intent => `<option value="${intent.id}">${intent.label}</option>`).join("");
  document.getElementById("edit-intent").innerHTML = options + '<option value="other">Other transparency roles</option>';
  document.getElementById("preview-intent").innerHTML = options + '<option value="all">All five intents</option>';
  syncControls(); renderComparison(); renderEditor();
  if (!storageAvailable) tell("Saved settings could not be loaded. Export tokens to keep your edits.");

  document.querySelectorAll('[name="visible-method"]').forEach(input => input.addEventListener("change", () => {
    const checked = [...document.querySelectorAll('[name="visible-method"]:checked')].map(item => item.value);
    if (!checked.length) { input.checked = true; tell("Keep at least one approach visible."); return; }
    visibleMethods = checked;
    if (!visibleMethods.includes(editMethod)) editMethod = visibleMethods[0];
    renderComparison(); renderEditor(); persist();
  }));
  document.querySelectorAll("[data-theme-choice]").forEach(button => button.addEventListener("click", () => {
    theme = button.dataset.themeChoice; syncControls(); applyVariables(); renderEditor(); persist();
  }));
  document.getElementById("edit-method").addEventListener("change", event => {
    const method = event.target.value;
    if (!visibleMethods.includes(method)) { visibleMethods = Object.keys(METHODS).filter(id => visibleMethods.includes(id) || id === method); syncControls(); renderComparison(); }
    changeEditor(method);
  });
  document.getElementById("edit-intent").addEventListener("change", event => {
    editIntent = event.target.value;
    renderEditor(); persist();
  });
  document.getElementById("preview-intent").addEventListener("change", event => {
    previewIntent = event.target.value;
    if (previewIntent !== "all") editIntent = previewIntent;
    renderComparison(); renderEditor(); persist();
  });
  function selectComponent(filter) {
    componentFilter = filter;
    syncControls(); renderComparison(); persist();
    const preview = document.getElementById("preview");
    if (preview.getBoundingClientRect().top < 0) preview.scrollIntoView({ block: "start" });
  }
  document.getElementById("component-nav").addEventListener("click", event => {
    const button = event.target.closest("[data-component-filter]");
    if (button) selectComponent(button.dataset.componentFilter);
  });
  document.getElementById("component-filter").addEventListener("change", event => selectComponent(event.target.value));
  document.getElementById("token-search").addEventListener("input", filterTokens);
  document.getElementById("close-editor").addEventListener("click", () => document.getElementById("editor").close());
  document.getElementById("editor").addEventListener("click", event => {
    const editor = event.currentTarget, rect = editor.getBoundingClientRect();
    if (event.target === editor && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) editor.close();
  });
  document.getElementById("editor").addEventListener("close", () => {
    document.body.append(document.getElementById("status"));
    extraCases.update({ theme, tokens, composite, paintLabel, rgba, foreground, intentFor });
    updateEditorButtons();
    const opener = editorOpener?.isConnected ? editorOpener : document.querySelector(`[data-edit-method="${editMethod}"]`);
    opener?.focus({ preventScroll: true });
  });
  document.getElementById("token-groups").addEventListener("input", updateToken);
  document.getElementById("token-groups").addEventListener("change", event => { if (event.target.dataset.field === "palette") updateToken(event); });
  document.getElementById("reset-method").addEventListener("click", () => {
    undo = { method: editMethod, tokens: clone(tokens[editMethod]) };
    tokens[editMethod] = clone(DEFAULTS[editMethod]); applyVariables(); renderEditor(); persist();
    tell(`Approach ${editMethod.slice(1)} reset in both modes.`, true);
  });
  document.getElementById("undo-reset").addEventListener("click", () => {
    if (!undo) return;
    tokens[undo.method] = undo.tokens; undo = null; applyVariables(); renderEditor(); persist(); tell("Reset undone.");
  });
  document.getElementById("export-tokens").addEventListener("click", () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(exportData(), null, 2)], { type: "application/json" }));
    const link = document.createElement("a"); link.href = url; link.download = "blueprint-three-method-tokens.json"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000); tell("All three approaches exported with light and dark values.");
  });

  const comparison = document.getElementById("comparison");
  const updateExtraRow = () => extraCases.update({ theme, tokens, composite, paintLabel, rgba, foreground, intentFor });
  const extraLiveRow = event => event.target.closest('.audit-row[data-state="live"]');
  comparison.addEventListener("pointerover", event => {
    const row = extraLiveRow(event);
    if (row && event.target.closest(".audit-interactive") && !event.target.closest(".audit-interactive").contains(event.relatedTarget)) { row.dataset.hover = "true"; updateExtraRow(row); }
  });
  comparison.addEventListener("pointerout", event => {
    const row = extraLiveRow(event), control = event.target.closest(".audit-interactive");
    if (row && control && !control.contains(event.relatedTarget)) { row.dataset.hover = "false"; row.dataset.pressed = "false"; updateExtraRow(row); }
  });
  comparison.addEventListener("pointerdown", event => {
    const row = extraLiveRow(event);
    if (row && event.button === 0 && event.target.closest(".audit-interactive")) { row.dataset.pressed = "true"; updateExtraRow(row); }
  });
  comparison.addEventListener("keydown", event => {
    const row = extraLiveRow(event);
    if (row && [" ", "Enter"].includes(event.key)) { row.dataset.pressed = "true"; updateExtraRow(row); }
  });
  window.addEventListener("resize", () => extraCases.update({ theme, tokens, composite, paintLabel, rgba, foreground, intentFor }));
  const liveSample = event => event.target.closest('.sample[data-state="live"]');
  comparison.addEventListener("pointerover", event => {
    const sample = liveSample(event);
    if (sample && !sample.contains(event.relatedTarget)) { sample.dataset.hover = "true"; applySamplePaint(sample); }
  });
  comparison.addEventListener("pointerout", event => {
    const sample = liveSample(event);
    if (sample && !sample.contains(event.relatedTarget)) { sample.dataset.hover = "false"; sample.dataset.pressed = "false"; applySamplePaint(sample); }
  });
  comparison.addEventListener("pointerdown", event => {
    const sample = liveSample(event);
    if (sample && event.button === 0) { sample.dataset.pressed = "true"; applySamplePaint(sample); }
  });
  function releaseSamples() {
    document.querySelectorAll('.audit-row[data-pressed="true"]').forEach(row => { row.dataset.pressed = "false"; updateExtraRow(row); });
    document.querySelectorAll('.sample[data-pressed="true"]').forEach(sample => { sample.dataset.pressed = "false"; applySamplePaint(sample); });
    document.querySelectorAll('blueprint-method-reference[data-pressed="true"]').forEach(host => { host.dataset.pressed = "false"; applyReferenceState(host); });
  }
  window.addEventListener("pointerup", releaseSamples);
  window.addEventListener("pointercancel", releaseSamples);
  window.addEventListener("blur", releaseSamples);
  comparison.addEventListener("keydown", event => {
    const sample = liveSample(event);
    if (sample && [" ", "Enter"].includes(event.key) && !event.repeat) { sample.dataset.pressed = "true"; applySamplePaint(sample); }
  });
  comparison.addEventListener("keyup", releaseSamples);
  comparison.addEventListener("focusout", releaseSamples);
  comparison.addEventListener("click", event => {
    const editButton = event.target.closest("[data-edit-method]");
    if (editButton) { openEditor(editButton); return; }
    const sample = event.target.closest(".sample");
    if (!sample || sample.disabled) return;
    if (sample.dataset.state === "live" && ["minimal", "outlined", "menu"].includes(sample.dataset.kind)) {
      sample.dataset.selected = String(sample.dataset.selected !== "true"); applySamplePaint(sample);
    }
    inspection = { method: sample.dataset.method, kind: sample.dataset.kind, intent: sample.dataset.intent, state: stateOf(sample) };
    changeEditor(sample.dataset.method, paintNames(sample.dataset.method, sample.dataset.kind, sample.dataset.intent, stateOf(sample)).intent);
  });

  // Read-only diagnostics also keep exports and the browser checks on the same token model.
  window.IntentTokenDemo = Object.freeze({ exportData, inventory: () => clone(METHODS), defaults: () => clone(DEFAULTS) });
})();
