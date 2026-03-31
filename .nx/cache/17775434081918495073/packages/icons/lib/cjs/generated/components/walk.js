"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Walk = void 0;
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
exports.Walk = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "walk", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M320 200H280C275.4 200 271.6 201.8 268.2 204.2L268 204L234.2 229.4L221.6 166.6L274 114.2000000000001C277.8 110.6 280 105.6 280 100V20C280 9 271 0 260 0S240 9 240 20V91.8L187.8 144L138.8 13H138.6C135.8 5.4 128.6 0 120 0C109 0 100 9 100 20C100 22.4 100.6 24.8 101.4 27H101.2L188.6 260H130.6L96.6 209L96.4 209.2C92.8 203.8 87 200 80 200C69 200 60 209 60 220C60 224.2 61.6 227.8 63.6 230.8L63.4 231L103.4 291L103.8 290.8C107.2 296.2 113 300 120 300H203.6L210.8 319.2C204.2 327.8 200 338.4 200 350A50 50 0 0 0 300 350A50 50 0 0 0 250 300C248.8 300 247.6 300.2 246.4 300.4L237.6 276.8L286.6 240H320C331 240 340 231 340 220S331 200 320 200" : "M260 160H220C216.8 160 213.8 161 211.2 162.2V162L190.8 172.2L183.4 135L211 116.6L210.8 116.2C216.2 112.8 220 107 220 100V20C220 9 211.0000000000001 0 200 0S180 9 180 20V89.2L154.6000000000001 106.2L118.6000000000001 12.8H118.4000000000001A19.6 19.6 0 0 0 100 0C89 0 80 9 80 20C80 22.6 80.6 25 81.4 27.2H81.2L147.8 200H112.4L97.8 171H97.6C94.4 164.6 87.8 160 80 160C69 160 60 169 60 180C60 183.2 61 186.2 62.2 188.8H62L82 228.8H82.2C85.6 235.4 92.2 240 100 240H163.2L169 255C163.4 262 160 270.6 160 280C160 302 178 320 200 320S240 302 240 280C240 260 225.4 243.6 206.2 240.6L196.2 214.2L224.8 200H260C271 200 280 191 280 180S271 160 260 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Walk.displayName = `Blueprint6.Icon.Walk`;
exports.default = exports.Walk;
//# sourceMappingURL=walk.js.map