"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessThanOrEqualTo = void 0;
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
exports.LessThanOrEqualTo = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "less-than-or-equal-to", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M326.32 178.98L143.24 240L326.32 301.02A20 20 0 1 1 313.68 338.98L73.68 258.98C55.44 252.9 55.44 227.1 73.68 221.02L313.68 141.02A20 20 0 1 1 326.32 178.98M320 100H80A20 20 0 1 1 80 60H320A20 20 0 1 1 320 100" : "M265.74 240.84A20 20 0 0 1 254.2400000000001 279.16L54.24 219.16C35.24 213.46 35.24 186.56 54.24 180.84L254.2400000000001 120.84A20 20 0 0 1 265.74 159.16L129.6 200zM260 80H60A20 20 0 0 1 60 40H260A20 20 0 0 1 260 80", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LessThanOrEqualTo.displayName = `Blueprint6.Icon.LessThanOrEqualTo`;
exports.default = exports.LessThanOrEqualTo;
//# sourceMappingURL=less-than-or-equal-to.js.map