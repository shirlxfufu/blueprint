"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pill = void 0;
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
exports.Pill = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "pill", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M100 300H200A20 20 0 0 0 220 280V120A20 20 0 0 0 200 100H100A100 100 0 0 0 100 300M240 285.46C240 293.48 246.52 300 254.54 300H300A100 100 0 0 0 300 100H254.54A14.54 14.54 0 0 0 240 114.54zM300 140A60 60 0 1 1 300 260H280V140z" : "M80 240H145.46C153.48 240 160 233.48 160 225.46V94.54A14.54 14.54 0 0 0 145.46 80H80A80 80 0 0 0 80 240M320 160A80 80 0 0 0 240 80H192.72A12.72 12.72 0 0 0 180 92.72V227.28C180 234.3 185.7 240 192.72 240H240A80 80 0 0 0 320 160M240 200H220V120H240A40 40 0 1 1 240 200", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Pill.displayName = `Blueprint6.Icon.Pill`;
exports.default = exports.Pill;
//# sourceMappingURL=pill.js.map