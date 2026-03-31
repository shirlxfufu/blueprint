"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Percentage = void 0;
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
exports.Percentage = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "percentage", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 200C266.8 200 240 173.2 240 140V100C240 66.8 266.8 40 300 40S360 66.8 360 100V140C360 173.2 333.2 200 300 200M320 100C320 89 311 80 300 80S280 89 280 100V140C280 151 289 160 300 160S320 151 320 140zM160 260V300C160 333.2 133.2 360 100 360S40 333.2 40 300V260C40 226.8 66.8 200 100 200S160 226.8 160 260M80 260V300C80 311 89 320 100 320S120 311 120 300V260C120 249 111 240 100 240S80 249 80 260M300 340A20.06 20.06 0 0 1 262.4000000000001 349.6L102.8 70.2000000000001A20.06 20.06 0 1 1 137.6 50.4000000000001L297.4000000000001 329.8000000000001C299 332.8000000000001 300.0000000000001 336.2000000000001 300.0000000000001 340.0000000000001" : "M120 200V240C120 262 102 280 80 280H60C38 280 20 262 20 240V200C20 178 38 160 60 160H80C102 160 120 178 120 200M70 200C64.4 200 60 204.4 60 210V230C60 235.6 64.4 240 70 240S80 235.6 80 230V210C80 204.4 75.6 200 70 200M260 160H240C218 160 200 142 200 120V80C200 58 218 40 240 40H260C282 40 300 58 300 80V120C300 142 282 160 260 160M260 90C260 84.4 255.6 80 250 80S240 84.4 240 90V110C240 115.6 244.4 120 250 120S260 115.6 260 110zM240 260A20.06 20.06 0 0 1 202.6 270L82.8 70.4C81 67.4 80 63.8 80 60A20.06 20.06 0 0 1 117.4 50L237.2 249.6C239 252.6 240 256.2 240 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Percentage.displayName = `Blueprint6.Icon.Percentage`;
exports.default = exports.Percentage;
//# sourceMappingURL=percentage.js.map