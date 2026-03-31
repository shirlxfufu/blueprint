"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cube = void 0;
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
exports.Cube = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "cube", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M39.06 310.38L187.26 390.78A26.8 26.8 0 0 0 212.76 390.78L360.94 310.38L200 215.6zM22.72 296.78L190 198.3V12.68A20 20 0 0 0 187.24 13.96L32.96 97.68A24.2 24.2 0 0 0 20 118.86V285.86C20 289.72 20.96 293.46 22.72 296.8M377.2800000000001 296.8C379.04 293.48 380 289.74 380 285.88V118.88C380 110.12 375.06 102.04 367.04 97.68L212.76 13.96Q211.42 13.22 210 12.68V198.3z" : "M283.88 249.2L160 171.8L36.12 249.2L150.08 314.34A20 20 0 0 0 169.92 314.34zM298.88 235A20 20 0 0 0 300 228.4V91.6A20 20 0 0 0 289.92 74.24L170 5.72V154.46zM21.12 235L150 154.46V5.72L30.08 74.24A20 20 0 0 0 20 91.6V228.4A20 20 0 0 0 21.12 235", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Cube.displayName = `Blueprint6.Icon.Cube`;
exports.default = exports.Cube;
//# sourceMappingURL=cube.js.map