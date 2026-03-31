"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layers = void 0;
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
exports.Layers = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "layers", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M342.44 137.94A15 15 0 1 0 357.56 112.04L207.56 24.54A15 15 0 0 0 192.44 24.54L42.44 112.04A15 15 0 1 0 57.56 137.94L200 54.86zM342.44 212.94A15 15 0 1 0 357.56 187.04L207.56 99.54A15 15 0 0 0 192.44 99.54L42.44 187.04A15 15 0 1 0 57.56 212.94L200 129.86zM192.44 375.44A15 15 0 0 0 207.56 375.44L357.56 287.94A15 15 0 0 0 357.56 262.04L207.56 174.54A15 15 0 0 0 192.44 174.54L42.44 262.04A15 15 0 0 0 42.44 287.94zM79.74 275L200 204.86L320.24 275L200 345.16z" : "M272.44 112.94A15 15 0 1 0 287.56 87.04L167.56 17.04A15 15 0 0 0 152.44 17.04L32.44 87.04A15 15 0 1 0 47.56 112.94L160 47.36zM272.44 172.94A15 15 0 1 0 287.56 147.04L167.56 77.04A15 15 0 0 0 152.44 77.04L32.44 147.04A15 15 0 1 0 47.56 172.94L160 107.36zM152.44 302.94A15 15 0 0 0 167.56 302.94L287.56 232.94A15 15 0 0 0 287.56 207.04L167.56 137.04A15 15 0 0 0 152.44 137.04L32.44 207.04A15 15 0 0 0 32.44 232.94zM69.74 220L160 167.36L250.24 220L160 272.66z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Layers.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Layers.displayName = `Blueprint6.Icon.Layers`;
exports.default = exports.Layers;
//# sourceMappingURL=layers.js.map