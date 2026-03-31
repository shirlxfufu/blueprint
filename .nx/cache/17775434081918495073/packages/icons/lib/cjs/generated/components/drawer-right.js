"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerRight = void 0;
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
exports.DrawerRight = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "drawer-right", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 400A20 20 0 0 0 400 380V20A20 20 0 0 0 380 0H220A20 20 0 0 0 200 20V380A20 20 0 0 0 220 400zM360 360H240V40H360zM200 220H68.2L114 265.8C117.8 269.4 120 274.4 120 280A20.06 20.06 0 0 1 85.8 294.2L5.8 214.2C2.2 210.6 0 205.6 0 200S2.2 189.4 5.8 185.8L85.8 105.8A20.06 20.06 0 0 1 114.2 134.2L68.2 180H200z" : "M300 320A20 20 0 0 0 320 300V20A20 20 0 0 0 300 0H180A20 20 0 0 0 160 20V300A20 20 0 0 0 180 320zM280 280H200V40H280zM160 180H68.2L94 205.8C97.8 209.4 100 214.4 100 220A20.06 20.06 0 0 1 65.8 234.2L5.8 174.2C2.2 170.6 0 165.6 0 160S2.2 149.4 5.8 145.8L65.8 85.8A20.06 20.06 0 0 1 94.2 114.2L68.2 140H160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.DrawerRight.displayName = `Blueprint6.Icon.DrawerRight`;
exports.default = exports.DrawerRight;
//# sourceMappingURL=drawer-right.js.map