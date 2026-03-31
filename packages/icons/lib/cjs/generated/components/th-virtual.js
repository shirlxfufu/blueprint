"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThVirtual = void 0;
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
exports.ThVirtual = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "th-virtual", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M60 240A20 20 0 0 0 80 260H180A20 20 0 0 0 180 220H128.28L234.14 114.14A20 20 0 1 0 205.86 85.86L100 191.72V140A20 20 0 0 0 60 140zM400 40A20 20 0 0 0 380 20H20A20 20 0 0 0 0 40V360C0 370 8 380 20 380H380A20 20 0 0 0 400 360zM360 60V280H40V60z" : "M140 160A20 20 0 0 1 140 200H80A20 20 0 0 1 60 180V120A20 20 0 0 1 100 120V132.74L147.2 85.58A19.24 19.24 0 0 1 174.4 112.74L127.1 160zM20 300C8 300 0 290 0 280V40A20 20 0 0 1 20 20H300C312 20 320 28 320 40V280A20 20 0 0 1 300 300zM280 60H40V220H280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ThVirtual.displayName = `Blueprint6.Icon.ThVirtual`;
exports.default = exports.ThVirtual;
//# sourceMappingURL=th-virtual.js.map