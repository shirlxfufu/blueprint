"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarEmpty = void 0;
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
exports.StarEmpty = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "star-empty", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 377.5C204.88 377.5 209.68 376.24 213.9 373.82L215.66 372.74L217.34 371.5C221.14 368.5 224.12 364.58 225.96 360.1L260.92 275.44L351.64 268.06H351.84C355.96 267.6600000000001 359.92 266.38 363.46 264.32L366.84 262L369.8399999999999 259.18Q372.64 256.1600000000001 374.5 252.48L376.04 248.68L377.02 244.68A28.2 28.2 0 0 0 367.82 218.74L367.72 218.68L298.5 159L319.66 69.8399999999999L320.06 67.8199999999999A28.14 28.14 0 0 0 277.72 39.1399999999999L277.64 39.1999999999999L200 86.96L122.36 39.2L122.28 39.14A28.12 28.12 0 0 0 80.38 69.84L101.48 158.92L32.3 218.6A28.2 28.2 0 0 0 23.9 248.64C25.6 253.9 28.82 258.58 33.14 262.04L34.82 263.26C38.82 265.98 43.42 267.64 48.26 268.06H48.36L139.08 275.46L174.04 360.1C176.16 365.24 179.74 369.64 184.36 372.74L186.14 373.82A28 28 0 0 0 200 377.5M163.3 255.52A15 15 0 0 0 150.66 246.28L55.12 238.54L128 175.68A15 15 0 0 0 132.8 160.86L110.56 67.16L192.16 117.32L194 118.3A15 15 0 0 0 207.8800000000001 117.32L289.4400000000001 67.16L267.24 160.94A15 15 0 0 0 272.0200000000001 175.76L344.7800000000001 238.54L249.3600000000001 246.28A15 15 0 0 0 236.7000000000001 255.52L200 344.4z" : "M160 305C163.78 305 167.5 304.1600000000001 170.9 302.54L174.18 300.68L177.16 298.34C179.92 295.82 182.1 292.7 183.56 289.2200000000001L210.78 223.22L281.56 217.44H281.76C285.48 217.08 289.06 215.92 292.28 214.04L295.34 211.94L298.08 209.4Q300.62 206.64 302.2800000000001 203.3L303.68 199.86L304.5600000000001 196.24A25.6 25.6 0 0 0 296.2200000000001 172.7600000000001L296.12 172.66L242.1200000000001 126.12L258.62 56.58L259.24 52.88A25.48 25.48 0 0 0 220.6200000000001 28.74L220.5400000000001 28.8L159.9800000000001 66.04L99.4600000000001 28.8L99.3800000000001 28.76A25.5 25.5 0 0 0 61.3800000000001 56.58L77.8400000000001 126.06L23.88 172.6A25.6 25.6 0 0 0 16.24 199.8L17.66 203.28A26 26 0 0 0 24.64 211.96L27.74 214.06A26 26 0 0 0 38.34 217.42H38.44L109.16 223.18L136.46 289.18C138.36 293.86 141.62 297.86 145.8 300.6600000000001L149.06 302.5200000000001C152.46 304.14 156.2 305 160 305M133.4 203.28A15 15 0 0 0 120.76 194.04L51.48 188.42L104.34 142.82A15 15 0 0 0 109.14 128.02L93.02 60.08L152.14 96.4L154 97.4A15 15 0 0 0 167.86 96.4L226.9400000000001 60.08L210.84 128.08A15 15 0 0 0 215.6400000000001 142.88L268.4400000000001 188.42L199.2400000000001 194.04A15 15 0 0 0 186.5800000000001 203.28L160 267.64z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.StarEmpty.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.StarEmpty.displayName = `Blueprint6.Icon.StarEmpty`;
exports.default = exports.StarEmpty;
//# sourceMappingURL=star-empty.js.map