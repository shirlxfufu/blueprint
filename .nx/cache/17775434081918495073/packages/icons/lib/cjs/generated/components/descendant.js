"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descendant = void 0;
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
exports.Descendant = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "descendant", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M60 120A20 20 0 0 0 40 140V380A20 20 0 0 1 0 380V140A60 60 0 0 1 60 80H117.44L71.58 34.14A20 20 0 1 1 99.86 5.86L184.16 90.16Q186.98 93 188.56 96.48V22A22 22 0 0 1 210.56 0H378A22 22 0 0 1 400 22V189.4200000000001A22 22 0 0 1 378 211.42H210.58A22 22 0 0 1 188.58 189.4200000000001V114.96A22 22 0 0 1 184.16 121.28L99.86 205.56A20 20 0 1 1 71.58 177.26L128.86 120zM228.58 40V171.42H360V40.02z" : "M182 160A22 22 0 0 1 160 138V80.04A20 20 0 0 1 153.44 94.82L152.72 95.5600000000001L94.14 154.16A20 20 0 0 1 65.86 125.8600000000001L91.72 100H60A20 20 0 0 0 40 120V300A20 20 0 1 1 0 300V120A60 60 0 0 1 60 60H91.72L65.86 34.14A20 20 0 1 1 94.14 5.86L152.74 64.46L153.44 65.18A20 20 0 0 1 160 79.96V22A22 22 0 0 1 182 0H298A22 22 0 0 1 320 22V138A22 22 0 0 1 298 160zM280 40H200V120H280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Descendant.displayName = `Blueprint6.Icon.Descendant`;
exports.default = exports.Descendant;
//# sourceMappingURL=descendant.js.map