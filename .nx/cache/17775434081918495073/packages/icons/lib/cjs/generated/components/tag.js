"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
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
exports.Tag = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "tag", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 320A40 40 0 0 0 80 360H171.76A40 40 0 0 0 200.04 348.28L348.24 200.08A40 40 0 0 0 348.24 143.52L256.48 51.76A40 40 0 0 0 199.9 51.76L51.6999999999999 199.96A40 40 0 0 0 40 228.24zM109.78 320.12A29.9 29.9 0 1 1 109.78 260.32A29.9 29.9 0 0 1 109.78 320.12" : "M20 260A40 40 0 0 0 60 300H151.68A40 40 0 0 0 179.96 288.28L288.22 180.04A40 40 0 0 0 288.22 123.46L196.54 31.8A40 40 0 0 0 139.96 31.8L31.72 140.04A40 40 0 0 0 20 168.32zM89.74 260.14A29.88 29.88 0 1 1 89.74 200.38A29.88 29.88 0 0 1 89.74 260.14", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Tag.displayName = `Blueprint6.Icon.Tag`;
exports.default = exports.Tag;
//# sourceMappingURL=tag.js.map