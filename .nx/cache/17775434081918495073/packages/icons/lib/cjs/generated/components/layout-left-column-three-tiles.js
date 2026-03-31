"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutLeftColumnThreeTiles = void 0;
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
exports.LayoutLeftColumnThreeTiles = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "layout-left-column-three-tiles", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M220 380A20 20 0 0 0 240 400H380A20 20 0 0 0 400 380V20A20 20 0 0 0 380 0H240A20 20 0 0 0 220 20zM0 380A20 20 0 0 0 20 400H160A20 20 0 0 0 180 380V320A20 20 0 0 0 160 300H20A20 20 0 0 0 0 320zM0 240A20 20 0 0 0 20 260H160A20 20 0 0 0 180 240V160A20 20 0 0 0 160 140H20A20 20 0 0 0 0 160zM0 80A20 20 0 0 0 20 100H160A20 20 0 0 0 180 80V20A20 20 0 0 0 160 0H20A20 20 0 0 0 0 20z" : "M140 180A20 20 0 0 1 120 200H20A20 20 0 0 1 0 180V140A20 20 0 0 1 20 120H120A20 20 0 0 1 140 140zM140 300A20 20 0 0 1 120 320H20A20 20 0 0 1 0 300V260A20 20 0 0 1 20 240H120A20 20 0 0 1 140 260zM140 60A20 20 0 0 1 120 80H20A20 20 0 0 1 0 60V20A20 20 0 0 1 20 0H120A20 20 0 0 1 140 20zM320 300A20 20 0 0 1 300 320H200A20 20 0 0 1 180 300V20A20 20 0 0 1 200 0H300A20 20 0 0 1 320 20z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LayoutLeftColumnThreeTiles.displayName = `Blueprint6.Icon.LayoutLeftColumnThreeTiles`;
exports.default = exports.LayoutLeftColumnThreeTiles;
//# sourceMappingURL=layout-left-column-three-tiles.js.map