"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreaterThanOrEqualTo = void 0;
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
exports.GreaterThanOrEqualTo = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "greater-than-or-equal-to", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M73.68 178.98A20 20 0 0 1 86.32 141.02L326.32 221.02C344.56 227.1 344.56 252.9 326.32 258.98L86.32 338.98A20 20 0 0 1 73.68 301.02L256.76 240zM80 100H320A20 20 0 1 0 320 60H80A20 20 0 0 0 80 100" : "M54.26 240.84A20 20 0 0 0 65.74 279.16L265.74 219.16C284.74 213.46 284.74 186.56 265.74 180.84L65.74 120.84A20 20 0 0 0 54.26 159.16L190.4 200zM60 80H260A20 20 0 0 0 260 40H60A20 20 0 0 0 60 80", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.GreaterThanOrEqualTo.displayName = `Blueprint6.Icon.GreaterThanOrEqualTo`;
exports.default = exports.GreaterThanOrEqualTo;
//# sourceMappingURL=greater-than-or-equal-to.js.map