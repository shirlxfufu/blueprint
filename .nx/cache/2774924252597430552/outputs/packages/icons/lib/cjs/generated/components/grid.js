"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
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
exports.Grid = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "grid", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M65 102.5H335V297.5H65zM365 100C365 84.8 352.68 72.5 337.5 72.5H62.5C47.3 72.5 35 84.82 35 100V300C35 315.2 47.32 327.5 62.5 327.5H337.5C352.7000000000001 327.5 365 315.18 365 300zM135 87.5V312.5A15 15 0 0 0 165 312.5V87.5A15 15 0 0 0 135 87.5M235 87.5V312.5A15 15 0 0 0 265 312.5V87.5A15 15 0 0 0 235 87.5M350 252.5A15 15 0 0 0 350 222.5H50A15 15 0 0 0 50 252.5zM350 177.5A15 15 0 0 0 350 147.5H50A15 15 0 0 0 50 177.5z" : "M215 85H265V115H215zM135 85H185V115H135zM55 85H105V115H55zM215 145H265V175H215zM135 145H185V175H135zM55 145H105V175H55zM215 205H265V235H215zM135 205H185V235H135zM55 205H105V235H55zM295 80C295 66.2 283.8 55 270 55H50C36.2 55 25 66.2 25 80V240C25 253.8 36.2 265 50 265H270C283.8 265 295 253.8 295 240z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Grid.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Grid.displayName = `Blueprint6.Icon.Grid`;
exports.default = exports.Grid;
//# sourceMappingURL=grid.js.map