"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lightning = void 0;
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
exports.Lightning = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "lightning", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M180 180H120A20 20 0 0 0 100 200L118.2 382A20 20 0 0 0 138.1 400H263.24A16.8 16.8 0 0 0 278.8 377L224 240H283.56A16.44 16.44 0 0 0 298.52 216.76L203.24 7.14A12.16 12.16 0 0 0 180 12.16z" : "M140 140H100A20 20 0 0 0 80 160L97.8 302.48A20 20 0 0 0 117.68 320H203.08A16.94 16.94 0 0 0 218.94 297.12L182.5 200H223.5A16.5 16.5 0 0 0 238.58 176.8L163.2 7.2A12.12 12.12 0 0 0 140 12.12z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Lightning.displayName = `Blueprint6.Icon.Lightning`;
exports.default = exports.Lightning;
//# sourceMappingURL=lightning.js.map