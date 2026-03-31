"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotEqualTo = void 0;
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
exports.NotEqualTo = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "not-equal-to", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M189.74 260L200.38 323.92A20 20 0 0 0 239.62 316.0800000000001L230.26 260H320A20 20 0 0 0 320 220H223.6L216.94 180H320A20 20 0 0 0 320 140H210.26L199.62 76.08A20 20 0 0 0 160.38 83.92L169.74 140H80A20 20 0 0 0 80 180H176.4L183.06 220H80A20 20 0 1 0 80 260z" : "M151.6 220L160.4 263.92A20 20 0 0 0 199.6 256.08L192.4 220H260A20 20 0 0 0 260 180H184.4L176.4 140H260A20 20 0 0 0 260 100H168.4L159.6 56.08A20 20 0 0 0 120.4 63.92L127.6 100H60A20 20 0 0 0 60 140H135.6L143.6 180H60A20 20 0 1 0 60 220z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.NotEqualTo.displayName = `Blueprint6.Icon.NotEqualTo`;
exports.default = exports.NotEqualTo;
//# sourceMappingURL=not-equal-to.js.map