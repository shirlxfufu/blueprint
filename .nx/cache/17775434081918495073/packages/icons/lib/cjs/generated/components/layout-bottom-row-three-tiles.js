"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutBottomRowThreeTiles = void 0;
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
exports.LayoutBottomRowThreeTiles = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "layout-bottom-row-three-tiles", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 380A20 20 0 0 0 20 400H380A20 20 0 0 0 400 380V240A20 20 0 0 0 380 220H20A20 20 0 0 0 0 240zM0 160A20 20 0 0 0 20 180H80A20 20 0 0 0 100 160V20A20 20 0 0 0 80 0H20A20 20 0 0 0 0 20zM140 160A20 20 0 0 0 160 180H240A20 20 0 0 0 260 160V20A20 20 0 0 0 240 0H160A20 20 0 0 0 140 20zM300 160A20 20 0 0 0 320 180H380A20 20 0 0 0 400 160V20A20 20 0 0 0 380 0H320A20 20 0 0 0 300 20z" : "M140 140A20 20 0 0 1 120 120V20A20 20 0 0 1 140 0H180A20 20 0 0 1 200 20V120A20 20 0 0 1 180 140zM20 140A20 20 0 0 1 0 120V20A20 20 0 0 1 20 0H60A20 20 0 0 1 80 20V120A20 20 0 0 1 60 140zM260 140A20 20 0 0 1 240 120V20A20 20 0 0 1 260 0H300A20 20 0 0 1 320 20V120A20 20 0 0 1 300 140zM20 320A20 20 0 0 1 0 300V200A20 20 0 0 1 20 180H300A20 20 0 0 1 320 200V300A20 20 0 0 1 300 320z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LayoutBottomRowThreeTiles.displayName = `Blueprint6.Icon.LayoutBottomRowThreeTiles`;
exports.default = exports.LayoutBottomRowThreeTiles;
//# sourceMappingURL=layout-bottom-row-three-tiles.js.map