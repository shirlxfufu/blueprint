"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerLeftFilled = void 0;
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
exports.DrawerLeftFilled = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "drawer-left-filled", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M20 400H180A20 20 0 0 0 200 380V20A20 20 0 0 0 180 0H20A20 20 0 0 0 0 20V380A20 20 0 0 0 20 400M200 220H331.8L286 265.8A19.4 19.4 0 0 0 280 280A20.06 20.06 0 0 0 314.2000000000001 294.2L394.2000000000001 214.2C397.8 210.6 400 205.6 400 200S397.8 189.4 394.2000000000001 185.8L314.2000000000001 105.8A20.06 20.06 0 0 0 285.8 134.2L331.8 180H200z" : "M20 320H140A20 20 0 0 0 160 300V20A20 20 0 0 0 140 0H20A20 20 0 0 0 0 20V300A20 20 0 0 0 20 320M160 180H251.8L226 205.8A19.4 19.4 0 0 0 220 220A20.06 20.06 0 0 0 254.2 234.2L314.2000000000001 174.2C317.8 170.6 320 165.6 320 160S317.8 149.4 314.2000000000001 145.8L254.2 85.8A20.06 20.06 0 0 0 225.8 114.2L251.8 140H160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.DrawerLeftFilled.displayName = `Blueprint6.Icon.DrawerLeftFilled`;
exports.default = exports.DrawerLeftFilled;
//# sourceMappingURL=drawer-left-filled.js.map