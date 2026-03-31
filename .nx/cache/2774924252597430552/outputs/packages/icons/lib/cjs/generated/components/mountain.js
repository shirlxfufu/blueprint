"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mountain = void 0;
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
exports.Mountain = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "mountain", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M143.76 337.52C147.36 337.52 150.9 336.8 154.2 335.44L157.42 333.88L160.42 331.92Q163.26 329.7200000000001 165.46 326.9L167.46 323.94L167.84 323.28L282.04 104.44A15 15 0 0 0 268.74 82.5H18.76A15 15 0 0 0 5.48 104.44L119.68 323.28L120.06 323.94C122.48 328.08 125.94 331.5 130.1 333.88L133.32 335.44C136.62 336.8 140.18 337.52 143.78 337.52M43.5 112.5H244L143.76 304.58zM288.7200000000001 287.24Q292.26 286.76 295.54 285.42L298.74 283.88L301.74 281.9Q304.6 279.76 306.8 276.94L308.8 274L309.3 273.12L394.64 104.26A15 15 0 0 0 381.24 82.52L268.74 82.5000000000001A15 15 0 0 0 268.74 112.5000000000001H356.8599999999999L285.4599999999999 253.7400000000001L251.3999999999999 169.38A15 15 0 0 0 223.5999999999999 180.62L260.5 271.9600000000001L261.5 274C263.94 278.1 267.4 281.5200000000001 271.54 283.88L274.74 285.42C278.04 286.76 281.58 287.48 285.14 287.48zM202.46 225A15 15 0 0 0 202.46 195H85.06A15 15 0 1 0 85.06 225z" : "M115 273C118.28 273 121.5 272.38 124.5 271.14L127.42 269.7200000000001L130.14 267.92Q132.74 265.96 134.74 263.36L136.56 260.68L136.92 260L185.04 167.8L205.6 218.7A20 20 0 0 0 206.62 220.74C208.82 224.46 211.9800000000001 227.54 215.74 229.7L218.68 231.12Q223.22 232.96 228.12 232.98L231.36 232.78Q234.5600000000001 232.34 237.5800000000001 231.12L240.5000000000001 229.7L243.2000000000001 227.92Q245.8000000000001 225.98 247.8000000000001 223.4L249.6400000000001 220.74L250.1200000000001 219.86L318.3800000000001 84.78A15 15 0 0 0 305.0000000000001 62.98H15A15 15 0 0 0 1.7 84.96L93.1 260L93.44 260.68C95.64 264.44 98.8 267.56 102.58 269.7200000000001L105.52 271.14A26 26 0 0 0 115 273.02M203.9 134.42L203.22 133L224.1 93H280.62L228.7 195.76zM39.74 93.02H190.26L158.94 153.02H71.06zM86.74 183.02H143.28L115 237.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Mountain.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Mountain.displayName = `Blueprint6.Icon.Mountain`;
exports.default = exports.Mountain;
//# sourceMappingURL=mountain.js.map