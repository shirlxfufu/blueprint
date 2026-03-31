"use strict";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStyles = void 0;
/* eslint-disable sort-keys */
const common_1 = require("../../common");
const NS = common_1.Classes.getClassNamespace();
/**
 * Runtime helper that converts <Box> style-props into utility class names.
 *
 * The implementation is intentionally simple:
 *   1. A prop key that exists in the `styles` map is considered a style prop.
 *      Its value is run through a converter (created via `appendValue` or
 *      `mapping`) which returns the corresponding class string, e.g.
 *      `display="flex"` → `"flex"`.
 *   2. Any prop that is *not* in the map is assumed to be a valid intrinsic
 *      DOM attribute (e.g. `id`, `title`) or a component-specific prop and is
 *      therefore forwarded untouched.
 *
 * Returns an object with two pieces of information:
 *   • `generatedClassNames` – an array of class names to apply to the element.
 *   • `passThroughProps`    – the remaining props to forward.
 *
 * @param props - The props object to convert.
 * @returns An object with `generatedClassNames` and `passThroughProps`.
 */
function buildStyles(props) {
    const classNames = new Set();
    const passThroughProps = {};
    for (const [key, value] of Object.entries(props)) {
        if (Object.prototype.hasOwnProperty.call(styles, key)) {
            const className = styles[key]?.(value);
            if (className != null) {
                classNames.add(className);
            }
        }
        else {
            passThroughProps[key] = value;
        }
    }
    return { generatedClassNames: Array.from(classNames), passThroughProps };
}
exports.buildStyles = buildStyles;
function appendValue(prefix) {
    return (value) => `${NS}-${prefix}-${value}`;
}
function mapping(styleMap) {
    return (value) => `${NS}-${styleMap[value]}`;
}
const gap = appendValue("gap");
const margin = appendValue("margin");
const marginX = appendValue("margin-inline");
const marginXStart = appendValue("margin-inline-start");
const marginXEnd = appendValue("margin-inline-end");
const marginY = appendValue("margin-block");
const marginYStart = appendValue("margin-block-start");
const marginYEnd = appendValue("margin-block-end");
const marginTop = appendValue("margin-top");
const marginRight = appendValue("margin-right");
const marginBottom = appendValue("margin-bottom");
const marginLeft = appendValue("margin-left");
const padding = appendValue("padding");
const paddingX = appendValue("padding-inline");
const paddingXStart = appendValue("padding-inline-start");
const paddingXEnd = appendValue("padding-inline-end");
const paddingY = appendValue("padding-block");
const paddingYStart = appendValue("padding-block-start");
const paddingYEnd = appendValue("padding-block-end");
const paddingTop = appendValue("padding-top");
const paddingRight = appendValue("padding-right");
const paddingBottom = appendValue("padding-bottom");
const paddingLeft = appendValue("padding-left");
const width = mapping({
    25: "width-25",
    50: "width-50",
    75: "width-75",
    100: "width-100",
    auto: "width-auto",
});
const height = mapping({
    25: "height-25",
    50: "height-50",
    75: "height-75",
    100: "height-100",
    auto: "height-auto",
});
const inset = appendValue("inset");
const insetX = appendValue("inset-inline");
const insetXStart = appendValue("inset-inline-start");
const insetXEnd = appendValue("inset-inline-end");
const insetY = appendValue("inset-block");
const insetYStart = appendValue("inset-block-start");
const insetYEnd = appendValue("inset-block-end");
const insetTop = appendValue("inset-top");
const insetRight = appendValue("inset-right");
const insetBottom = appendValue("inset-bottom");
const insetLeft = appendValue("inset-left");
const alignContent = mapping({
    start: "content-start",
    center: "content-center",
    end: "content-end",
    "space-between": "content-between",
    "space-around": "content-around",
    "space-evenly": "content-evenly",
    stretch: "content-stretch",
    normal: "content-normal",
    baseline: "content-baseline",
});
const alignItems = mapping({
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch",
});
const alignSelf = mapping({
    auto: "self-auto",
    start: "self-start",
    end: "self-end",
    center: "self-center",
    baseline: "self-baseline",
    stretch: "self-stretch",
});
const display = mapping({
    block: "block",
    "inline-block": "inline-block",
    inline: "inline",
    flex: "flex",
    "inline-flex": "inline-flex",
    grid: "grid",
    "inline-grid": "inline-grid",
    table: "table",
    "inline-table": "inline-table",
    "table-row": "table-row",
    "table-cell": "table-cell",
    none: "none",
});
const flex = mapping({
    "1": "flex-1",
    auto: "flex-auto",
    initial: "flex-initial",
    none: "flex-none",
});
const flexDirection = mapping({
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    column: "flex-column",
    "column-reverse": "flex-column-reverse",
});
const flexWrap = mapping({
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
});
const justifyContent = mapping({
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly",
    normal: "justify-normal",
    stretch: "justify-stretch",
});
const justifyItems = mapping({
    start: "justify-items-start",
    end: "justify-items-end",
    center: "justify-items-center",
    stretch: "justify-items-stretch",
});
const justifySelf = mapping({
    auto: "justify-self-auto",
    start: "justify-self-start",
    end: "justify-self-end",
    center: "justify-self-center",
    stretch: "justify-self-stretch",
});
const position = mapping({
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky",
});
const overflow = mapping({
    visible: "overflow-visible",
    hidden: "overflow-hidden",
    scroll: "overflow-scroll",
    auto: "overflow-auto",
});
const overflowX = mapping({
    visible: "overflow-x-visible",
    hidden: "overflow-x-hidden",
    scroll: "overflow-x-scroll",
    auto: "overflow-x-auto",
});
const overflowY = mapping({
    visible: "overflow-y-visible",
    hidden: "overflow-y-hidden",
    scroll: "overflow-y-scroll",
    auto: "overflow-y-auto",
});
// Look-up table of style-prop name → converter function
const styles = {
    gap,
    margin,
    marginX,
    marginXStart,
    marginXEnd,
    marginY,
    marginYStart,
    marginYEnd,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingX,
    paddingXStart,
    paddingXEnd,
    paddingY,
    paddingYStart,
    paddingYEnd,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    inset,
    insetX,
    insetXStart,
    insetXEnd,
    insetY,
    insetYStart,
    insetYEnd,
    insetTop,
    insetRight,
    insetBottom,
    insetLeft,
    width,
    height,
    alignContent,
    alignItems,
    alignSelf,
    display,
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    justifyItems,
    justifySelf,
    position,
    overflow,
    overflowX,
    overflowY,
};
//# sourceMappingURL=buildStyles.js.map