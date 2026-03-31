"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectHeight = void 0;
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
exports.RectHeight = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "rect-height", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M80 40H320V360H80zM40 380A20 20 0 0 0 60 400H340A20 20 0 0 0 360 380V20A20 20 0 0 0 340 0H60A20 20 0 0 0 40 20zM125.86 145.9A19.98 19.98 0 1 0 154.1 174.14L200 128.26L245.9 174.14A19.98 19.98 0 0 0 274.14 145.9L214.9 86.64A20 20 0 0 0 185.1 86.64zM125.86 225.86A20 20 0 0 0 125.86 254.1L185.1 313.36A20 20 0 0 0 214.9 313.36L274.14 254.1A19.98 19.98 0 0 0 245.9000000000001 225.86L200 271.74L154.1 225.86A20 20 0 0 0 125.86 225.86" : "M60 20H260V300H60zM60 0A20 20 0 0 0 40 20V300A20 20 0 0 0 60 320H260A20 20 0 0 0 280 300V20A20 20 0 0 0 260 0zM174.14 254.14L214.14 214.14A20 20 0 0 0 185.86 185.86L160 211.72L134.14 185.86A20 20 0 0 0 105.86 214.14L145.86 254.14A20 20 0 0 0 174.14 254.14M134.14 134.14L160 108.28L185.86 134.14A20 20 0 0 0 214.14 105.86L174.14 65.86A20 20 0 0 0 145.86 65.86L105.86 105.86A20 20 0 0 0 134.14 134.14", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.RectHeight.displayName = `Blueprint6.Icon.RectHeight`;
exports.default = exports.RectHeight;
//# sourceMappingURL=rect-height.js.map