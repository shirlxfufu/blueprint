"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyTab = void 0;
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
exports.KeyTab = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "key-tab", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 140H88.2L134 185.8C137.8 189.4 140 194.4 140 200A20.06 20.06 0 0 1 105.8 214.2L40 148.2V200C40 211 31 220 20 220S0 211 0 200V40C0 29 9 20 20 20S40 29 40 40V91.8L105.8 26C109.4 22.2 114.4 20 120 20A20.06 20.06 0 0 1 134.2 54.2L88.2 100H380C391 100 400 109 400 120S391 140 380 140M380 380C369 380 360 371 360 360V308.2L294.2000000000001 374A19.4 19.4 0 0 1 280 380A20.06 20.06 0 0 1 265.8 345.8L311.8 300H20C9 300 0 291 0 280S9 260 20 260H311.8L266 214.2C262.2000000000001 210.6 260 205.6 260 200A20.06 20.06 0 0 1 294.2000000000001 185.8L360 251.8V200C360 189 369 180 380 180S400 189 400 200V360C400 371 391 380 380 380" : "M300 120H88.2L114 145.8C117.8 149.4 120 154.4 120 160A20.06 20.06 0 0 1 85.8 174.2L40 128.2V160C40 171 31 180 20 180S0 171 0 160V40C0 29 9 20 20 20S40 29 40 40V71.8L85.8 26C89.4 22.2 94.4 20 100 20A20.06 20.06 0 0 1 114.2 54.2L88.2 80H300C311 80 320 89 320 100S311 120 300 120M300 300C289 300 280 291 280 280V248.2L234.2 294A19.4 19.4 0 0 1 220 300A20.06 20.06 0 0 1 205.8 265.8L231.8 240H20C9 240 0 231 0 220S9 200 20 200H231.8L206 174.2C202.2 170.6 200 165.6 200 160A20.06 20.06 0 0 1 234.2 145.8L280 191.8V160C280 149 289 140 300 140S320 149 320 160V280C320 291 311 300 300 300", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.KeyTab.displayName = `Blueprint6.Icon.KeyTab`;
exports.default = exports.KeyTab;
//# sourceMappingURL=key-tab.js.map