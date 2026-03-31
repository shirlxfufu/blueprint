"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locomotive = void 0;
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
exports.Locomotive = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "locomotive", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M199.76 360A20 20 0 0 0 219.74 340V260H299.64V300L276.74 322.92A10 10 0 0 0 283.8 340H355.42A10 10 0 0 0 362.48 322.92L339.58 300V260C399.5 233.34 429.46 180 359.56 120L382.4599999999999 97.08A10 10 0 0 0 375.3999999999999 80H325.48A10.6 10.6 0 0 0 316.5999999999999 85.04C298.0999999999999 113.7 254.3799999999999 146.72 202.86 83.88A10.4 10.4 0 0 0 194.88 80H185.12A10.6 10.6 0 0 0 176.72 84.36C155.5 112.94 109.5399999999999 145.22 63.0399999999999 84.2000000000001A10.4 10.4 0 0 0 54.7999999999999 80H20V340A20 20 0 0 0 39.96 360zM59.96 320L59.94 220H119.86V320zM179.8 320H139.84V220H179.8zM119.86 20A40 40 0 0 0 79.92 60A39.98 39.98 0 1 0 159.82 60A40 40 0 0 0 119.86 20M119.86 40A20.02 20.02 0 1 1 121.12 80.02A20.02 20.02 0 0 1 119.86 40M259.68 20A40 40 0 0 0 219.74 60A39.98 39.98 0 1 0 299.64 60A40 40 0 0 0 259.68 20M259.68 40A20.02 20.02 0 0 1 267.52 78.64A20.02 20.02 0 0 1 245.94 46.08A20 20 0 0 1 259.68 40" : "M0 280A20 20 0 0 0 20 300H140A20 20 0 0 0 160 280V200H220V240L197.08 262.92A10 10 0 0 0 204.14 280H275.86A10 10 0 0 0 282.92 262.92L260 240V200C296.6600000000001 180 348 128 260 80L289.76 50.24A6 6 0 0 0 285.52 40H265.88A10.6 10.6 0 0 0 257 45.06C239.04 73.52 199.92 106.26 162.98 45.14A10.4 10.4 0 0 0 154.12 40H145.88A10.6 10.6 0 0 0 137 45.06C119.04 73.52 79.92 106.26 42.98 45.14A10.4 10.4 0 0 0 34.12 40H0zM20 180H80V280H20zM140 180V280H100V180zM90 0A30 30 0 1 1 90 60A30 30 0 0 1 90 0M90 20A10 10 0 1 0 90 40A10 10 0 0 0 90 20M240 30A30 30 0 1 0 180 30A30 30 0 0 0 240 30M220 30A10 10 0 1 1 200 30A10 10 0 0 1 220 30", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Locomotive.displayName = `Blueprint6.Icon.Locomotive`;
exports.default = exports.Locomotive;
//# sourceMappingURL=locomotive.js.map