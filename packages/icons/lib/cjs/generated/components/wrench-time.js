"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrenchTime = void 0;
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
exports.WrenchTime = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "wrench-time", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M20 310C20 348.6 51.4 380 90 380S160 348.6 160 310S128.6 240 90 240S20 271.4 20 310M80 350V305.8L111.2 274.6C113.2 272.8 115.8 271.8 118.4 271.8C120.8 271.8 123.4 272.8 125.4 274.6C129.2 278.6 129.2 284.8 125.4 288.8L100 314.2V350C100 355.6 95.6 360 90 360S80 355.6 80 350M270 80C253.58 80 238 83.6 224 90.06L165.12 31.18A38.14 38.14 0 0 0 111.18 85.12L170.06 144A110 110 0 0 0 323.66 286.06L248.78 211.22A30 30 0 1 1 291.2200000000001 168.78L366.06 243.64A110 110 0 0 0 270 80" : "M0 250C0 288.6 31.4 320 70 320S140 288.6 140 250S108.6 180 70 180S0 211.4 0 250M60 290V245.8L91.2 214.6C93.2 212.8 95.8 211.8 98.4 211.8C100.8 211.8 103.4 212.8 105.4 214.6C109.2 218.6 109.2 224.8 105.4 228.8L80 254.2V290C80 295.6 75.6 300 70 300S60 295.6 60 290M191.7 68.54L132.1 8.94A30.52 30.52 0 0 0 88.94 52.1L148.54 111.7A90.04 90.04 0 0 0 268.8 231.24L208.8 171.22A30 30 0 0 1 251.2000000000001 128.78L311.24 188.8A90.04 90.04 0 0 0 191.7 68.54", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.WrenchTime.displayName = `Blueprint6.Icon.WrenchTime`;
exports.default = exports.WrenchTime;
//# sourceMappingURL=wrench-time.js.map