"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
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
exports.Model = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "model", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M374.92 60H25.08A25 25 0 0 0 0 85.86C1.4 124.4 5.56 191.32 17.88 249.78C24.38 280.66 33.08 308.72 44.54 328.92Q62.16 359.98 84.98 360C102.58 360 115.8 352.86 126.6 341.6C137.54 330.18 145.82 314.7 153.14 298.5800000000001C155.2 294.06 157.34 289.04 159.48 284.06L159.54 283.94C164.44 272.54 169.18 261.54 173.66 253.46C180.42 241.28 189.36 230 203.08 230C224 230 236.14 243.34 246.02 254.9L246.08 254.96L248.78 258.1C254.44 264.5 260.1 270.42 267.2800000000001 274.8C274.2800000000001 279.06 282.98 282 294.94 282C307.5 282 319.7200000000001 274.8400000000001 331.5800000000001 261.1600000000001C343.32 247.64 353.86 228.7 363.1 207.4C380.1600000000001 168.06 392.26 121.96 399.38 90.4400000000001A25 25 0 0 0 374.92 60" : "M294.9 40H25.1A25 25 0 0 0 0 65.92C1.16 95.8 4.46 146.8 14 191.6C19.1 215.52 25.98 237.66 35.26 253.82C44.8 270.4 56.46 280 70.6 280C85.64 280 97.04 273.9 106.14 264.5C115.24 255.12 121.94 242.62 127.7 230.1C129.3 226.6 131.02 222.7 132.66 218.9L132.72 218.78C136.56 209.92 140.16 201.7 143.5 195.76C145.76 191.72 148.5 187.5 151.98 184.36C155.16 181.54 158.38 180 162.54 180C176.68 180 184.94 188.72 192.6400000000001 197.6L192.7000000000001 197.68L194.84 200.12C199.28 205.1 204.06 210.1 210.2600000000001 213.82C216.42 217.54 223.98 220 234.0600000000001 220C245.56 220 256.2 213.5 265.88 202.44C275.48 191.54 283.88 176.48 291.18 159.9C304.38 129.82 313.78 94.82 319.38 70.54A25 25 0 0 0 294.88 40", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Model.displayName = `Blueprint6.Icon.Model`;
exports.default = exports.Model;
//# sourceMappingURL=model.js.map