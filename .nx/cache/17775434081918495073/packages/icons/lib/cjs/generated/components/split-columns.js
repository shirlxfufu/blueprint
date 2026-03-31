"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitColumns = void 0;
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
exports.SplitColumns = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "split-columns", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 140A20.06 20.06 0 0 1 334.2000000000001 125.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200S397.8 210.6 394.2000000000001 214.2L334.2000000000001 274.2000000000001A20.06 20.06 0 0 1 305.8 245.8L331.8 220H220V360H320V320C335.4 320 349.4 314 360 304.4V380C360 391 351 400 340 400H60C49 400 40 391 40 380V304.4C50.6 314 64.6 320 80 320V360H180V220H68.2L94 245.8C97.8 249.4 100 254.4 100 260A20.06 20.06 0 0 1 65.8 274.2L5.8 214.2C2.2 210.6 0 205.6 0 200S2.2 189.4 5.8 185.8L65.8 125.8A20.06 20.06 0 0 1 94.2 154.2L68.2 180H180V40H80V80C64.6 80 50.6 86 40 95.6V20C40 9 49 0 60 0H340C351 0 360 9 360 20V95.6C349.4 86 335.4 80 320 80V40H220V180H331.8L306 154.2C302.2000000000001 150.6 300 145.6 300 140" : "M240 120A20.06 20.06 0 0 1 274.2000000000001 105.8L314.2000000000001 145.8C317.8 149.4 320 154.4 320 160S317.8 170.6 314.2000000000001 174.2L274.2000000000001 214.2A20.06 20.06 0 0 1 245.8 185.8L251.8000000000001 180H180V280H240V245.8C246.2 248.4 252.8 250 260 250S273.8 248.4 280 245.8V300C280 311 271 320 260 320H60C49 320 40 311 40 300V245.8C46.2 248.4 52.8 250 60 250S73.8 248.4 80 245.8V280H140V180H68.2L74 185.8C77.8 189.4 80 194.4 80 200A20.06 20.06 0 0 1 45.8 214.2L5.8 174.2C2.2 170.6 0 165.6 0 160S2.2 149.4 5.8 145.8L45.8 105.8A20.06 20.06 0 0 1 74.2 134.2L68.2 140H140V40H80V74.2C73.8 71.6 67.2 70 60 70S46.2 71.6 40 74.2V20C40 9 49 0 60 0H260C271 0 280 9 280 20V74.2C273.8 71.6 267.2 70 260 70S246.2 71.6 240 74.2V40H180V140H251.8L246 134.2C242.2 130.6 240 125.6 240 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.SplitColumns.displayName = `Blueprint6.Icon.SplitColumns`;
exports.default = exports.SplitColumns;
//# sourceMappingURL=split-columns.js.map