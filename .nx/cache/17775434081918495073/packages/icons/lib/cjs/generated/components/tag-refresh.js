"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagRefresh = void 0;
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
exports.TagRefresh = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "tag-refresh", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M265.8 254.2A20.06 20.06 0 0 0 294.2 225.8L288.2 220H320C331 220 340 229 340 240S349 260 360 260S380 251 380 240C380 206.8 353.2 180 320 180H288.2L294.2000000000001 174.2A20.06 20.06 0 0 0 265.8 145.8L225.8 185.8A20 20 0 0 0 220 200C220 205.6 222.2 210.6 225.8 214.2zM334.2000000000001 265.8A20.06 20.06 0 0 0 305.8 294.2L311.8 300H280C269 300 260 291 260 280S251 260 240 260S220 269 220 280C220 313.2 246.8 340 280 340H311.8L305.8 345.8A20.06 20.06 0 0 0 334.2000000000001 374.2L374.2000000000001 334.2C377.8 330.6 380 325.6 380 320S377.8 309.4 374.2000000000001 305.8zM217.8800000000001 330.4600000000001A80 80 0 0 1 200 280C200 262.92 210.78 248.3 225.88 242.58L211.66 228.34A40 40 0 0 1 200 200C200 189.04 204.36 178.96 211.66 171.66L251.66 131.66A40.06 40.06 0 0 1 320 160A80 80 0 0 1 359.94 170.64C359.64 160.78 355.74 151.04 348.24 143.52L256.48 51.76A40 40 0 0 0 199.9 51.76L51.6999999999999 199.96A40 40 0 0 0 40 228.24V320A40 40 0 0 0 80 360H171.76A40 40 0 0 0 200.04 348.28zM79.88 290.2200000000001A29.9 29.9 0 1 1 139.68 290.2200000000001A29.9 29.9 0 0 1 79.88 290.2200000000001" : "M205.8 194.2A20.06 20.06 0 0 0 234.2 165.8L228.2 160H260C271 160 280 169 280 180S289 200 300 200S320 191 320 180C320 146.8 293.2 120 260 120H228.2L234.2 114.2A20.06 20.06 0 0 0 205.8 85.8L165.8 125.8A20 20 0 0 0 160 140C160 145.6 162.2 150.6 165.8 154.2zM274.2 205.8A20.06 20.06 0 0 0 245.8 234.2L251.8 240H220C209 240 200 231 200 220S191 200 180 200S160 209 160 220C160 253.2 186.8 280 220 280H251.8L245.8 285.8A20.06 20.06 0 0 0 274.2000000000001 314.2L314.2000000000001 274.2C317.8 270.6 320 265.6 320 260S317.8 249.4 314.2000000000001 245.8zM157.76 270.32A80 80 0 0 1 140 220C140 202.92 150.78 188.3 165.88 182.58L151.66 168.34A40 40 0 0 1 140 140C140 129.04 144.36 118.96 151.66 111.66L191.66 71.66A40 40 0 0 1 225.08 60.32L176.54 11.8A40 40 0 0 0 119.96 11.8L11.72 120.04A40 40 0 0 0 0 148.32V240A40 40 0 0 0 40 280H131.68A40 40 0 0 0 157.76 270.32M39.86 210.26A29.88 29.88 0 1 1 99.62 210.26A29.88 29.88 0 0 1 39.86 210.26", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.TagRefresh.displayName = `Blueprint6.Icon.TagRefresh`;
exports.default = exports.TagRefresh;
//# sourceMappingURL=tag-refresh.js.map