"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitRebase = void 0;
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
exports.GitRebase = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "git-rebase", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M60 380A59.96 59.96 0 0 0 80 263.5V140C80 123.08 84.2 114.06 89.14 109.14C94.06 104.22 103.08 100 120 100H211.72L185.86 125.86A20 20 0 1 0 214.14 154.14L274.14 94.14L275.42 92.72A20 20 0 0 0 279.5200000000001 84.42L279.8 82.76Q279.94 81.86 279.98 80.96V79.04L279.88 78.14A20 20 0 0 0 275.88 67.9L275.5 67.38L274.14 65.86L214.14 5.86A20 20 0 0 0 185.86 34.14L211.72 60H120C96.92 60 75.94 65.8 60.86 80.86C45.78 95.94 40 116.92 40 140V263.5A59.96 59.96 0 0 0 60 380M185.86 394.14A20 20 0 1 0 214.14 365.86L188.28 340H280C303.08 340 324.06 334.2 339.14 319.14C354.22 304.06 360 283.08 360 260V136.52A59.96 59.96 0 0 0 340 20A60 60 0 0 0 320 136.52V260C320 276.92 315.8 285.94 310.86 290.86C305.94 295.78 296.92 300 280 300H188.28L214.14 274.14A20 20 0 1 0 185.86 245.86L125.86 305.86L124.5 307.38L124.1 307.92A20 20 0 0 0 120.1 318Q120.08 318.54 120.02 319.04V320.9600000000001Q120.06 321.86 120.2 322.76L120.48 324.42Q120.76 325.56 121.18 326.66A20 20 0 0 0 124.58 332.7200000000001L125.86 334.14zM340 100A20 20 0 1 1 340 60A20 20 0 0 1 340 100M60 340A20 20 0 1 1 60 300A20 20 0 0 1 60 340" : "M60 300A59.96 59.96 0 0 0 80 183.5V120C80 109.8 83.18 105.9 85.32 104.12C88.1 101.8 92.98 100 100 100H131.72L115.86 115.86A20 20 0 0 0 144.14 144.14L194.14 94.14L195.42 92.72A20 20 0 0 0 199.52 84.42L199.8 82.76Q199.94 81.86 199.98 80.96V79.04L199.86 78A20 20 0 0 0 196.24 68.36L195.5 67.38L194.14 65.86L144.14 15.86A20 20 0 0 0 115.86 44.14L131.72 60H100C87.02 60 71.9 63.2 59.68 73.38C46.82 84.1 40 100.18 40 120V183.5A59.96 59.96 0 0 0 60 300M175.86 304.14A20 20 0 1 0 204.14 275.86L188.28 260H220C232.98 260 248.1 256.8 260.32 246.62C273.18 235.9 280 219.82 280 200V136.52A59.96 59.96 0 0 0 260 20A60 60 0 0 0 240 136.52V200C240 210.2 236.82 214.1 234.68 215.88C231.9 218.2 227.02 220 220 220H188.28L204.14 204.14A20 20 0 1 0 175.86 175.86L125.86 225.86A20 20 0 0 0 120.12 238L120 239.04V241Q120.04 241.9 120.18 242.78L120.46 244.44A20 20 0 0 0 124.54 252.76L125.84 254.16zM260 100A20 20 0 1 1 260 60A20 20 0 0 1 260 100M60 260A20 20 0 1 1 60 220A20 20 0 0 1 60 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.GitRebase.displayName = `Blueprint6.Icon.GitRebase`;
exports.default = exports.GitRebase;
//# sourceMappingURL=git-rebase.js.map