"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterSortDesc = void 0;
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
exports.FilterSortDesc = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "filter-sort-desc", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M400 360C400 371 391 380 380 380H120A20.06 20.06 0 0 1 105.8 345.8L200 251.8V80A20.06 20.06 0 0 1 234.2 65.8L294.2000000000001 125.8C297.8 129.4 300 134.4 300 140V251.8L394.2000000000001 346C397.8 349.4 400 354.4 400 360M94.2 5.8C90.6 2.2 85.6 0 80 0S69.4 2.2 65.8 5.8L5.8 65.8A20.06 20.06 0 0 0 34.2 94.2L60 68.2V180C60 191 69 200 80 200S100 191 100 180V68.2L125.8 94C129.4 97.8 134.4 100 140 100A20.06 20.06 0 0 0 154.2 65.8z" : "M320 280C320 274.4 317.8 269.4 314.2000000000001 266L240 191.8V120C240 114.4 237.8 109.4 234.2 105.8L194.2 65.8A20.06 20.06 0 0 0 160 80V191.8L85.8 265.8A20.06 20.06 0 0 0 100 300H300C311 300 320 291 320 280M100 80.1C94.4 80.1 89.4 77.9 85.8 74.3L80 68.5000000000001V140.04C80 151.02 71 160 60 160S40 151 40 140V68.3L34.2 74.1A20.04 20.04 0 0 1 5.8 45.74L45.8 5.76C49.4 2.16 54.4 -0.0400000000001 60 -0.0400000000001S70.6 2.16 74.2 5.7599999999999L114.2 45.7199999999999C117.8 49.3199999999999 120 54.3199999999999 120 59.9199999999999C120 71.0799999999999 111 80.0799999999999 100 80.0799999999999", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FilterSortDesc.displayName = `Blueprint6.Icon.FilterSortDesc`;
exports.default = exports.FilterSortDesc;
//# sourceMappingURL=filter-sort-desc.js.map