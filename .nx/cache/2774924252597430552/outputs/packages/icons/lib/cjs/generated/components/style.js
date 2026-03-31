"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const React = tslib_1.__importStar(require("react"));
const iconTypes_1 = require("../../iconTypes");
const svgIconContainer_1 = require("../../svgIconContainer");
exports.Style = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "style", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M106.92 232.68A96.26 96.26 0 1 0 143.76 47.5H25A15 15 0 0 0 16.68 74.98L17.42 75.54A60 60 0 0 1 20.72 78.34C23.58 80.96 27.52 85.06 31.52 90.68C39.38 101.84 47.5 119.2 47.5 143.74A96.2 96.2 0 0 0 106.9 232.68M16.68 74.98L16.6 74.92zM77.5 143.76C77.5 114.76 68.56 92.8199999999999 58.7 77.5H143.76A66.24 66.24 0 1 1 77.5 143.74M350 365A15 15 0 0 0 365 350C365 339.12 363.14 328.4 359.94 318C349.54 284.12 324.54 251.86 298.98 225.5C273.14 198.88 245.32 176.86 227.44 163.6A15 15 0 1 0 209.56 187.7C226.78 200.46 253.18 221.38 277.44 246.38C301.98 271.68 322.98 299.78 331.26 326.78Q332.2199999999999 329.9 332.9 332.92C308.64 327.22 282.72 310.34 257.96 288.2200000000001C227.92 261.38 202.44 229.44 187.7 209.58A15 15 0 0 0 163.6 227.44C178.84 248 205.72 281.8 237.96 310.6C269.56 338.8400000000001 309.3 365 350 365.02M203.32 275.5A15 15 0 0 0 223.84 280.8400000000001A160 160 0 0 0 280.74 223.94A15 15 0 0 0 254.88 208.74A130 130 0 0 1 208.6400000000001 254.98A15 15 0 0 0 203.3200000000001 275.5" : "M280 295A15 15 0 0 0 295 280C295 270.96 293.44 262.08 290.82 253.52C282.3 225.7200000000001 261.88 199.52 241.32 178.32A460 460 0 0 0 192.4 135.08Q193 132.88 193.48 130.6A80 80 0 0 0 115.02 35H20A15 15 0 0 0 11.66 62.48L12.12 62.82Q12.92 63.42 14.56 64.88A60 60 0 0 1 22.76 74.28C28.76 82.78 35 96.08 35 115A80 80 0 0 0 130.6 193.46Q132.86 193 135.1 192.4A500 500 0 0 0 161.62 224.1L162.1 224.6A380 380 0 0 0 188.38 250.7C213.76 273.4 246.26 295 280 295M175.52 194.6C170.88 189.2 166.62 184 162.78 179.18A80 80 0 0 0 179.14 162.78C183.96 166.62 189.18 170.88 194.54 175.52A100 100 0 0 1 175.54 194.58M262.06 262.02C244.82 256.6600000000001 226.38 244.42 208.38 228.32Q202.02 222.6 196.0399999999999 216.6Q207.4599999999999 207.44 216.5999999999999 195.98Q218.1999999999999 197.54 219.8199999999999 199.18C239.2599999999999 219.22 255.58 241.18 262.06 262.02M65 115A100 100 0 0 0 52.26 65H115A50 50 0 1 1 65 115", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Style.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Style.displayName = `Blueprint6.Icon.Style`;
exports.default = exports.Style;
//# sourceMappingURL=style.js.map