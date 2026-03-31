"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minimize = void 0;
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
exports.Minimize = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "minimize", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M216.24 306.26A15 15 0 0 0 246.24 306.26V246.26H306.24A15 15 0 1 0 306.24 216.26H231.24A15 15 0 0 0 216.24 231.26zM314.4000000000001 335.6A15 15 0 1 0 335.6 314.4L241.86 220.64A15 15 0 1 0 220.66 241.84zM153.74 93.76V153.76H93.74A15 15 0 1 0 93.74 183.76H168.74A15 15 0 0 0 183.74 168.76V93.76A15 15 0 1 0 153.74 93.76M158.14 179.36A15 15 0 1 0 179.34 158.16L85.6 64.4A15 15 0 1 0 64.4 85.6z" : "M249.4 270.6A15 15 0 1 0 270.6 249.4L221.2 200H245A15 15 0 1 0 245 170H185A15 15 0 0 0 170 185V245A15 15 0 0 0 200 245V221.2zM150 75A15 15 0 1 0 120 75V98.8L70.6 49.4A15 15 0 1 0 49.4 70.6L98.8 120H75A15 15 0 1 0 75 150H135A15 15 0 0 0 150 135z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Minimize.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Minimize.displayName = `Blueprint6.Icon.Minimize`;
exports.default = exports.Minimize;
//# sourceMappingURL=minimize.js.map