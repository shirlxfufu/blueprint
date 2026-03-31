"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeRing = void 0;
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
exports.RangeRing = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "range-ring", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 400Q186.74 400 173.9 398.32A20 20 0 0 1 179.08 358.64A160 160 0 0 0 220.92 358.64A20 20 0 0 1 226.1 398.32A200 200 0 0 1 200 400M102.6 326.96A20 20 0 1 1 78.24 358.68A200 200 0 0 1 41.32 321.76A20 20 0 1 1 73.04 297.4A160 160 0 0 0 102.6 326.96M321.76 358.68A20 20 0 0 1 297.4000000000001 326.96A160 160 0 0 0 326.9600000000001 297.4A20 20 0 1 1 358.6600000000001 321.76A200 200 0 0 1 321.7600000000001 358.68M41.36 220.92A20 20 0 1 1 1.68 226.1A200 200 0 0 1 1.68 173.9A20 20 0 1 1 41.36 179.08A160 160 0 0 0 41.36 220.92M398.32 226.1A20 20 0 1 1 358.6400000000001 220.92A160 160 0 0 0 358.6400000000001 179.08A20 20 0 0 1 398.3200000000001 173.9A200 200 0 0 1 398.3200000000001 226.1M73.04 102.6A20 20 0 0 1 41.32 78.24A200 200 0 0 1 78.24 41.34A20 20 0 0 1 102.6 73.04A160 160 0 0 0 73.04 102.6M358.66 78.24A20 20 0 0 1 326.96 102.6A160 160 0 0 0 297.4 73.04A20 20 0 1 1 321.76 41.3399999999999A200 200 0 0 1 358.66 78.2399999999999M179.06 41.3599999999999A20 20 0 0 1 173.9 1.68A200 200 0 0 1 226.1 1.68A20 20 0 1 1 220.92 41.36A160 160 0 0 0 179.08 41.36M200 260A60 60 0 1 0 200 140A60 60 0 0 0 200 260M300 200A100 100 0 1 1 100 200A100 100 0 0 1 300 200" : "M160 320Q149.4 320 139.12 318.64A20 20 0 1 1 144.32 278.98A120 120 0 0 0 175.7 278.98A20 20 0 0 1 180.88 318.64A160 160 0 0 1 160 320M86.96 255.2A20 20 0 1 1 62.58 286.94A160 160 0 0 1 33.06 257.4A20 20 0 0 1 64.8 233.04C71.2 241.36 78.66 248.84 86.98 255.22M257.44 286.96A20 20 0 1 1 233.06 255.24C241.38 248.84 248.86 241.38 255.24 233.06A20 20 0 1 1 286.9600000000001 257.44A160 160 0 0 1 257.44 286.9600000000001M318.66 180.9A20 20 0 1 1 279 175.7A120 120 0 0 0 279 144.32A20 20 0 0 1 318.66 139.14A160 160 0 0 1 318.66 180.9M41.04 175.7A20 20 0 0 1 1.38 180.9A160 160 0 0 1 1.38 139.14A20 20 0 1 1 41.04 144.34A120 120 0 0 0 41.04 175.72M64.8 87A20 20 0 1 1 33.08 62.62A160 160 0 0 1 62.6 33.1A20 20 0 0 1 86.98 64.82A120 120 0 0 0 64.8 87M286.9600000000001 62.62A20 20 0 0 1 255.24 87C248.84 78.68 241.38 71.2 233.06 64.82A20 20 0 1 1 257.44 33.1A160 160 0 0 1 286.96 62.62M180.9 1.4A20 20 0 1 1 175.7 41.06A120 120 0 0 0 144.32 41.06A20 20 0 0 1 139.14 1.4A160 160 0 0 1 180.9 1.4M160 200A40 40 0 1 0 160 120A40 40 0 0 0 160 200M240 160A80 80 0 1 1 80 160A80 80 0 0 1 240 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.RangeRing.displayName = `Blueprint6.Icon.RangeRing`;
exports.default = exports.RangeRing;
//# sourceMappingURL=range-ring.js.map