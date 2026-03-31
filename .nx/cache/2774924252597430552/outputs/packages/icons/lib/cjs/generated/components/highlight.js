"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Highlight = void 0;
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
exports.Highlight = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "highlight", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M126.88 210.6A15 15 0 1 0 148.08 189.4L65.28 106.56L145.94 79.66L201.88 135.6A15 15 0 0 0 223.0800000000001 114.4L160.6 51.9A15 15 0 0 0 145.24 48.26L32.74 85.76A15 15 0 0 0 26.88 110.6zM151.88 285.6A15 15 0 1 0 173.08 264.4L133.72 225L237.5200000000001 121.2L276.92 160.6A15 15 0 0 0 298.1200000000001 139.4L256.9600000000001 98.24A27.5 27.5 0 0 0 220.06 96.44L218.0600000000001 98.24L110.7600000000001 205.54A27.6 27.6 0 0 0 104.7600000000001 235.54L105.96 237.98Q107.86 241.58 110.7600000000001 244.46zM220.64 379.36A15 15 0 1 0 241.84 358.16L171.2 287.48L300 158.68L370.64 229.34A15 15 0 1 0 391.84 208.14L319.44 135.74A27.5 27.5 0 0 0 282.54 133.9L280.54 135.72L148.24 268.02A27.6 27.6 0 0 0 142.24 298.02L143.44 300.4599999999999Q145.34 304.06 148.24 306.94z" : "M174.4 305.6A15 15 0 1 0 195.6 284.4L141.2 230L240 131.22L294.4000000000001 185.62A15 15 0 0 0 315.6 164.42L257.68 106.48A25 25 0 0 0 240 99.14Q235.76 99.14 231.76 100.58L207.68 76.48A25 25 0 0 0 174.14 74.84L172.34 76.48L170 78.8L130.6 39.4A15 15 0 0 0 115.26 35.78L25.26 65.78A15 15 0 0 0 19.4 90.6L88.8 160L86.46 162.32A25 25 0 0 0 81.06 189.56L82.08 191.78Q83.82 195.06 86.48 197.68L110.52 221.8A26 26 0 0 0 109.24 227.56L109.14 230L109.26 232.48A26 26 0 0 0 111.06 239.58L112.08 241.8Q113.84 245.08 116.48 247.7zM57.78 86.6L115.96 67.2L148.78 100L110 138.8zM111.2 180L190 101.22L208.8 120.02L130 198.8z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Highlight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Highlight.displayName = `Blueprint6.Icon.Highlight`;
exports.default = exports.Highlight;
//# sourceMappingURL=highlight.js.map