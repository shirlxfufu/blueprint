"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Regex = void 0;
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
exports.Regex = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "regex", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 50A50 50 0 1 0 100 50A50 50 0 0 0 0 50M280 400A20 20 0 0 1 260 380V304.64L194.74 342.32A20 20 0 1 1 174.74 307.68L240 270L174.74 232.32A20 20 0 0 1 194.74 197.68L260 235.36V160A20 20 0 1 1 300 160V235.36L365.26 197.68A20 20 0 0 1 385.26 232.32L320 270L385.26 307.68A20 20 0 1 1 365.26 342.32L300 304.64V380A20 20 0 0 1 280 400" : "M0 40A40 40 0 1 0 80 40A40 40 0 0 0 0 40M220 320A20 20 0 0 1 200 300V244.64L152.06 272.32A20 20 0 1 1 132.06 237.68L180 210L132.06 182.32A20 20 0 0 1 152.06 147.68L200 175.36V120A20 20 0 1 1 240 120V175.36L287.94 147.68A20 20 0 1 1 307.94 182.32L260 210L307.94 237.68A20 20 0 1 1 287.94 272.32L240 244.64V300A20 20 0 0 1 220 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Regex.displayName = `Blueprint6.Icon.Regex`;
exports.default = exports.Regex;
//# sourceMappingURL=regex.js.map