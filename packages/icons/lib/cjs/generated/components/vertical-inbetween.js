"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalInbetween = void 0;
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
exports.VerticalInbetween = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "vertical-inbetween", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 400H400V380A20 20 0 0 0 380 360H20A20 20 0 0 0 0 380zM125.86 174.14A20 20 0 0 1 125.86 145.9L185.1 86.64L185.86 85.84A20 20 0 0 1 200 80A20 20 0 0 1 214.9 86.64L274.14 145.9A19.98 19.98 0 0 1 245.9 174.14L200 128.26L154.1 174.14A20 20 0 0 1 125.86 174.14M125.86 254.1A19.98 19.98 0 1 1 154.1 225.86L200 271.74L245.9 225.86A19.98 19.98 0 1 1 274.14 254.1L214.9 313.36L214.14 314.16A20 20 0 0 1 200 320A20 20 0 0 1 185.1 313.36zM400 20V0H0V20A20 20 0 0 0 20 40H380A20 20 0 0 0 400 20" : "M320 320H0V300A20 20 0 0 1 20 280H300A20 20 0 0 1 320 300zM0 20V0H320V20A20 20 0 0 1 300 40H20A20 20 0 0 1 0 20M174.14 254.14A20 20 0 0 1 145.86 254.14L105.86 214.14A20 20 0 0 1 134.14 185.86L160 211.72L185.86 185.86A20 20 0 0 1 214.14 214.14zM134.14 134.14A20 20 0 0 1 105.86 105.86L145.86 65.86A20 20 0 0 1 174.14 65.86L214.14 105.86A20 20 0 0 1 185.86 134.14L160 108.28z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.VerticalInbetween.displayName = `Blueprint6.Icon.VerticalInbetween`;
exports.default = exports.VerticalInbetween;
//# sourceMappingURL=vertical-inbetween.js.map