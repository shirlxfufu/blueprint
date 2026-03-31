"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateCw = void 0;
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
exports.RotateCw = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "rotate-cw", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M34.14 208.2A15.2 15.2 0 0 1 34.9 187.5L121.42 100.98A15.2 15.2 0 0 0 99.9 79.46L13.38 165.98A45.66 45.66 0 0 0 11.1 228.1L77.4 304.9H49.8A15.2 15.2 0 1 0 49.8 335.32H110.66C119.06 335.32 125.86 328.52 125.86 320.12V259.24A15.2 15.2 0 1 0 95.44 259.24V279.2zM382.32 217.68A25 25 0 0 0 382.32 182.32L276.26 76.26A25 25 0 0 0 240.9 76.26L134.84 182.32A25 25 0 0 0 134.84 217.68L240.9 323.74A25 25 0 0 0 276.26 323.74z" : "M27.3 166.56A12.2 12.2 0 0 1 27.9 150L97.12 80.8A12.18 12.18 0 1 0 79.92 63.56L10.7 132.8A36.52 36.52 0 0 0 8.88 182.5L61.92 243.94H39.82A12.18 12.18 0 0 0 39.82 268.28H88.52C95.24 268.28 100.7 262.8400000000001 100.7 256.1V207.4A12.18 12.18 0 1 0 76.34 207.4V223.36zM305.86 174.14A20 20 0 0 0 305.86 145.86L221 61A20 20 0 0 0 192.72 61L107.86 145.86A20 20 0 0 0 107.86 174.14L192.72 259A20 20 0 0 0 221 259z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.RotateCw.displayName = `Blueprint6.Icon.RotateCw`;
exports.default = exports.RotateCw;
//# sourceMappingURL=rotate-cw.js.map