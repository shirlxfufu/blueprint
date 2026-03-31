"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAddress = void 0;
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
exports.IpAddress = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "ip-address", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M120 326.8C120 286.2 200 180 200 180S280 286.2 280 326.8C279.8 367.2 244.2 400 200 400S120 367.2 120 326.8M160 320C160 342 178 360 200 360S240 342 240 320S222 280 200 280S160 298 160 320M280 130V140H200V120H260V80H220V60H280zM60 160H340C351 160 360 151 360 140V20C360 9 351 0 340 0H60C49 0 40 9 40 20V140C40 151 49 160 60 160M140 140V20H160V140zM200 120V20H220V120z" : "M100 266.8C100 237.2 160 160 160 160S220 237.2 220 266.8C219.8 296 193.2 320 160 320S100 296 100 266.8M140 260C140 271 149 280 160 280S180 271 180 260S171 240 160 240S140 249 140 260M210 120H160V20H180V100H200V80H180V60H220V120zM40 140H280C291 140 300 131 300 120V20C300 9 291 0 280 0H40C29 0 20 9 20 20V120C20 131 29 140 40 140M120 120V20H140V120z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.IpAddress.displayName = `Blueprint6.Icon.IpAddress`;
exports.default = exports.IpAddress;
//# sourceMappingURL=ip-address.js.map