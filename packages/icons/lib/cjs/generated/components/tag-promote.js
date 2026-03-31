"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagPromote = void 0;
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
exports.TagPromote = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "tag-promote", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M285.86 374.14C293.66 381.94 306.46 381.94 314.26 374.14L373.86 314.82C382.06 306.62 382.06 293.38 373.86 285.18L314.26 225.86C306.4599999999999 218.06 293.66 218.06 285.86 225.86A20 20 0 0 0 285.86 254.12L331.84 300L285.84 345.88A20 20 0 0 0 285.84 374.14M234.26 374.14L293.86 314.82C302.06 306.62 302.06 293.38 293.86 285.18L234.26 225.86C226.4599999999999 218.06 213.66 218.06 205.86 225.86A20 20 0 0 0 205.86 254.12L251.86 300L205.86 345.88A20 20 0 0 0 205.86 374.14C213.66 381.94 226.46 381.94 234.26 374.14M332.5 215.8L348.2200000000001 200.1A40 40 0 0 0 348.2200000000001 143.52L256.48 51.76A40 40 0 0 0 199.9 51.76L51.7 199.96A40 40 0 0 0 40 228.24V320A40 40 0 0 0 80 360H171.76A40 40 0 0 0 180 359.14C180.22 349.2 184.12 339.34 191.7 331.74H191.72L223.52 300L191.72 268.28L191.7 268.24A40 40 0 0 1 191.7 211.74C207.3 196.1 232.7600000000001 196.1 248.38 211.7L248.4 211.74L262.58 225.84A40.14 40.14 0 0 1 328.38 211.7L328.4000000000001 211.74zM79.88 290.24A29.9 29.9 0 1 1 139.68 290.24A29.9 29.9 0 0 1 79.88 290.24" : "M225.8 314.2C233.6 322 246.4 322 254.2 314.2L313.8 255C322 246.8 322 233.6 313.8 225.4L254.2 166.18C246.4 158.38 233.6 158.38 225.8 166.18A19.92 19.92 0 0 0 225.8 194.38L271.8 240.18L225.8 285.98A19.92 19.92 0 0 0 225.8 314.2M272.2 155.38C283.6 139.78 282.4 117.58 268.2 103.38L176.6 11.76C161 -3.84 135.6 -3.84 120 11.76L11.8 119.96C4.2 127.56 0 137.7600000000001 0 148.36V240C0 262 18 280 40 280H125.6C127.2 277 129.2 274.2 131.8 271.6L163.6 240L131.8 208.4A40.14 40.14 0 0 1 131.8 151.6C139.4 144.2 149.2 140 160 140S180.8 144.2 188.4 151.6L202.6 165.8A40 40 0 0 1 240 139.98C250.8 139.98 260.8 144.18 268.4 151.58zM69.8 180.18C86.4 180.18 99.8 193.58 99.8 210.18S86.4 240.18 69.8 240.18S39.8 226.78 39.8 210.18S53.2 180.18 69.8 180.18M174.2 314.2L233.8 255C242.0000000000001 246.8 242.0000000000001 233.6 233.8 225.4L174.2 166.16C166.4 158.36 153.6 158.36 145.8 166.16A19.92 19.92 0 0 0 145.8 194.36L191.8 240.16L145.8 285.96A19.92 19.92 0 0 0 145.8 314.18C153.6 321.98 166.4 321.98 174.2 314.18", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.TagPromote.displayName = `Blueprint6.Icon.TagPromote`;
exports.default = exports.TagPromote;
//# sourceMappingURL=tag-promote.js.map