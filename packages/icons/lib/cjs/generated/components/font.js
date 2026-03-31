"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Font = void 0;
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
exports.Font = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "font", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M218.66 347.18A20 20 0 0 1 181.34 347.18L81.5 87.6A20 20 0 1 1 118.84 73.26L144.5 140H255.5L281.16 73.26A20 20 0 1 1 318.5 87.6zM240.1 180H159.9L200 284.28z" : "M160 280A20 20 0 0 0 178.56 267.42L258.4000000000001 67.84Q259.98 64.2 260.0000000000001 60.0000000000001A20 20 0 0 0 221.2600000000001 53.0000000000001L202.4600000000001 100H117.54L98.74 53.0000000000001A20 20 0 1 0 61.6 67.8400000000001L141.44 267.4400000000001A20 20 0 0 0 160 280M133.54 140H186.46L160 206.14z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Font.displayName = `Blueprint6.Icon.Font`;
exports.default = exports.Font;
//# sourceMappingURL=font.js.map