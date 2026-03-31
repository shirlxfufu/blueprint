"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomaticUpdates = void 0;
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
exports.AutomaticUpdates = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "automatic-updates", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 40C111.6 40 40 111.6 40 200C40 250.4 63.6 295.2 100 324.4V300C100 289 109 280 120 280S140 289 140 300V380C140 391 131 400 120 400H40C29 400 20 391 20 380S29 360 40 360H81.2C32.2 323.6 0 265.8 0 200C0 89.6 89.6 0 200 0C211 0 220 9 220 20S211 40 200 40M200 360C232.8 360 263 350.2 288.4 333.2L317 361.8A197.4 197.4 0 0 1 200 400C189 400 180 391 180 380S189 360 200 360M400 200C400 222.6 396 244.2 389.2000000000001 264.4L356.8 232A159.2 159.2 0 0 0 300 75.6V100C300 111 291 120 280 120S260 111 260 100V20C260 9 269 0 280 0H360C371 0 380 9 380 20S371 40 360 40H318.8C367.8 76.4 400 134.2000000000001 400 200M400 340A20.06 20.06 0 0 1 365.8 354.2L240 228.2L194.2 274.2A20.06 20.06 0 0 1 165.8 245.8L225.8 185.8C229.4 182.2 234.4 180 240 180S250.6 182.2 254.2 185.8L394.2000000000001 325.8C397.8 329.4 400 334.4 400 340" : "M160 40C93.8 40 40 93.8 40 160C40 195.4 55.6 227.2 80 249.2V220C80 209 89 200 100 200S120 209 120 220V300C120 311 111 320 100 320H20C9 320 0 311 0 300S9 280 20 280H54.8A159 159 0 0 1 0 160C0 71.6 71.6 0 160 0C171 0 180 9 180 20S171 40 160 40M160 280A118 118 0 0 0 219 263.8L248.4 293.2A158 158 0 0 1 160 320C149 320 140 311 140 300S149 280 160 280M214.2 145.8L314.2000000000001 245.8A20.06 20.06 0 0 1 285.8 274.2L200 188.2L174.2 214.2A20.06 20.06 0 0 1 145.8 185.8L185.8 145.8C189.4 142.2 194.4 140 200 140S210.6 142.2 214.2 145.8M320 160C320 171 318.8 181.6 316.8 192L279.4 154.6A119.4 119.4 0 0 0 240 71V100C240 111 231 120 220 120S200 111 200 100V20C200 9 209 0 220 0H300C311 0 320 9 320 20S311 40 300 40H265.2A159 159 0 0 1 320 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.AutomaticUpdates.displayName = `Blueprint6.Icon.AutomaticUpdates`;
exports.default = exports.AutomaticUpdates;
//# sourceMappingURL=automatic-updates.js.map