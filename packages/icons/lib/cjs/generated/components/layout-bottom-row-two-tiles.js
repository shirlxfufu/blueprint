"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutBottomRowTwoTiles = void 0;
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
exports.LayoutBottomRowTwoTiles = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "layout-bottom-row-two-tiles", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 160A20 20 0 0 0 20 180H160A20 20 0 0 0 180 160V20A20 20 0 0 0 160 0H20A20 20 0 0 0 0 20zM220 160A20 20 0 0 0 240 180H380A20 20 0 0 0 400 160V20A20 20 0 0 0 380 0H240A20 20 0 0 0 220 20zM0 380A20 20 0 0 0 20 400H380A20 20 0 0 0 400 380V240A20 20 0 0 0 380 220H20A20 20 0 0 0 0 240z" : "M120 140A20 20 0 0 0 140 120V20A20 20 0 0 0 120 0H20A20 20 0 0 0 0 20V120A20 20 0 0 0 20 140zM300 140A20 20 0 0 0 320 120V20A20 20 0 0 0 300 0H200A20 20 0 0 0 180 20V120A20 20 0 0 0 200 140zM300 320A20 20 0 0 0 320 300V200A20 20 0 0 0 300 180H20A20 20 0 0 0 0 200V300A20 20 0 0 0 20 320z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LayoutBottomRowTwoTiles.displayName = `Blueprint6.Icon.LayoutBottomRowTwoTiles`;
exports.default = exports.LayoutBottomRowTwoTiles;
//# sourceMappingURL=layout-bottom-row-two-tiles.js.map