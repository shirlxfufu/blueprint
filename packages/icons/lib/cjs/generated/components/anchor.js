"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anchor = void 0;
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
exports.Anchor = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "anchor", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M220 283.4A60.02 60.02 0 1 1 180 283.4V260H120V220H180V41.66A120 120 0 0 0 80.3 151.42L85.86 145.86A20 20 0 0 1 114.14 174.1399999999999L74.14 214.1399999999999A20 20 0 0 1 45.86 214.1399999999999L5.86 174.1399999999999A20 20 0 1 1 34.14 145.86L40.2 151.92A160 160 0 0 1 359.8 151.92L365.86 145.86A20 20 0 0 1 394.14 174.1399999999999L354.14 214.1399999999999A20 20 0 0 1 325.86 214.1399999999999L285.86 174.1399999999999A20 20 0 0 1 314.14 145.86L319.7 151.42A120 120 0 0 0 220 41.66V220H280V260H220zM220 340A20 20 0 1 0 180 340A20 20 0 0 0 220 340" : "M200 280A40 40 0 0 0 180 245.36V220H220V180H180V42.52A80 80 0 0 1 239.52 111.24L234.14 105.84A20 20 0 0 0 205.86 134.14L245.86 174.14A20 20 0 0 0 274.14 174.14L314.14 134.14A20 20 0 0 0 285.86 105.86L279.74 111.98A120 120 0 0 0 40.26 111.98L34.14 105.86A20 20 0 0 0 5.86 134.14L45.86 174.14A20 20 0 0 0 74.14 174.14L114.14 134.14A20 20 0 0 0 85.86 105.86L80.46 111.26A80 80 0 0 1 140 42.5V180H100V220H140V245.36A40 40 0 1 0 200 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Anchor.displayName = `Blueprint6.Icon.Anchor`;
exports.default = exports.Anchor;
//# sourceMappingURL=anchor.js.map