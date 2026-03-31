"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUndo = void 0;
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
exports.TagUndo = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "tag-undo", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 360A20 20 0 0 0 320 380C353.2 380 380 353.2 380 320S353.2 260 320 260H288.2L294.2000000000001 254.2A20.06 20.06 0 0 0 265.8 225.8L225.8 265.8A20 20 0 0 0 220 280C220 285.6 222.2 290.6 225.8 294.2L265.8 334.2A20.06 20.06 0 0 0 294.2 305.8L288.2 300H320C331 300 340 309 340 320S331 340 320 340A20 20 0 0 0 300 360M318.64 229.68L348.24 200.08A40 40 0 0 0 348.24 143.52L256.48 51.76A40 40 0 0 0 199.9 51.76L51.6999999999999 199.96A40 40 0 0 0 40 228.24V320A40 40 0 0 0 80 360H171.76A40 40 0 0 0 200.04 348.28L225.82 322.5L211.66 308.3400000000001A40 40 0 0 1 200 280C200 269.04 204.36 258.9600000000001 211.66 251.66L251.66 211.66A40.08 40.08 0 0 1 318.66 229.6600000000001M79.88 290.2A29.9 29.9 0 1 1 139.68 290.2A29.9 29.9 0 0 1 79.88 290.2" : "M240 300A20 20 0 0 0 260 320C293.2 320 320 293.2 320 260S293.2 200 260 200H228.2L234.2 194.2A20.06 20.06 0 0 0 205.8 165.8L165.8 205.8A20 20 0 0 0 160 220C160 225.6 162.2 230.6 165.8 234.2L205.8 274.2A20.06 20.06 0 0 0 234.2 245.8L228.2 240H260C271 240 280 249 280 260S271 280 260 280A20 20 0 0 0 240 300M258.64 169.62L268.24 160.02A40 40 0 0 0 268.24 103.46L176.52 11.8A40 40 0 0 0 119.94 11.8L11.72 120.04A40 40 0 0 0 0 148.32V240A40 40 0 0 0 40 280H131.68A40 40 0 0 0 159.96 268.28L165.78 262.48L151.66 248.34A40 40 0 0 1 140 220C140 209.04 144.36 198.96 151.66 191.66L191.66 151.66A40.08 40.08 0 0 1 258.64 169.62M39.84 210.26A29.88 29.88 0 1 1 99.64 210.26A29.88 29.88 0 0 1 39.84 210.26", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.TagUndo.displayName = `Blueprint6.Icon.TagUndo`;
exports.default = exports.TagUndo;
//# sourceMappingURL=tag-undo.js.map