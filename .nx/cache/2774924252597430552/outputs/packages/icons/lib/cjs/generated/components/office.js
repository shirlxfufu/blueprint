"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Office = void 0;
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
exports.Office = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "office", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M350 65A15 15 0 0 0 350 35H50A15 15 0 0 0 50 65zM166.66 294.16A15 15 0 0 0 166.66 264.16H150A15 15 0 1 0 150 294.16zM166.66 227.5A15 15 0 0 0 166.66 197.5H150A15 15 0 1 0 150 227.5zM250 294.16A15 15 0 0 0 250 264.16H233.34A15 15 0 0 0 233.34 294.16zM250 227.5A15 15 0 0 0 250 197.5H233.34A15 15 0 1 0 233.34 227.5zM237.5 152.48A15 15 0 0 0 252.5 137.36L251.68 49.86A15 15 0 0 0 221.68 50.14L222.36 122.48H177.36L176.68 49.86A15 15 0 0 0 146.68 50.14L147.48 137.6400000000001A15 15 0 0 0 162.48 152.4800000000001zM331.68 50A15 15 0 0 0 301.68 50V335Q200 335.04 98.34 335V50A15 15 0 0 0 68.34 50V337.5C68.34 352.7 80.66 365 95.84 365H304.18C319.38 365 331.68 352.68 331.68 337.5z" : "M280 55A15 15 0 1 0 280 25H40A15 15 0 0 0 40 55zM133.34 238.34L134.86 238.26A15 15 0 0 0 134.86 208.42L133.34 208.34H120A15 15 0 0 0 120 238.3400000000001zM133.34 185L134.86 184.92A15 15 0 0 0 134.86 155.0800000000001L133.34 155H120A15 15 0 0 0 120 185zM200 238.34L201.52 238.26A15 15 0 0 0 201.52 208.42L200 208.34H186.66A15 15 0 0 0 186.66 238.34zM200 185L201.52 184.92A15 15 0 0 0 201.52 155.0800000000001L200 155H186.66A15 15 0 0 0 186.66 185zM190 125A15 15 0 0 0 205 109.86L204.32 39.86A15 15 0 1 0 174.34 40.14L174.86 95H144.86L144.32 39.86A15 15 0 1 0 114.34 40.14L115 110.14L115.08 111.68A15 15 0 0 0 130 125zM268.32 40A15 15 0 1 0 238.32 40V265H81.66V40L81.58 38.46A15 15 0 0 0 51.74 38.46L51.66 40.02V270C51.66 283.8 62.86 295 76.66 295H243.34C257.14 295 268.34 283.8 268.34 270z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Office.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Office.displayName = `Blueprint6.Icon.Office`;
exports.default = exports.Office;
//# sourceMappingURL=office.js.map