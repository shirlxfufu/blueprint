"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tank = void 0;
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
exports.Tank = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "tank", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M347.5 150A35 35 0 0 1 312.5 185H87.5A35 35 0 1 1 87.5 115H312.5A35 35 0 0 1 347.5 150M377.5 150A65 65 0 0 0 312.5 85H87.5A65 65 0 0 0 87.5 215H312.5A65 65 0 0 0 377.5 150M200 323.3400000000001A15 15 0 0 0 213.6 314.62L263.6 206.28A15 15 0 0 0 236.4 193.7L190.4 293.3400000000001H129.56L114.84 197.74A15 15 0 0 0 85.2 202.28L101.86 310.62L102.52 313.26A15 15 0 0 0 116.68 323.3400000000001zM362.5 290A15 15 0 0 0 362.5 260H225A15 15 0 0 0 225 290z" : "M275 120C275 133.8 263.8 145 250 145H70A25 25 0 0 1 70 95H250C263.8 95 275 106.2 275 120M97.48 175H176.56L150.42 231.66H106.2zM305 120A55 55 0 0 0 250 65H70A54.96 54.96 0 0 0 67.1 174.86L78.5 248.96L79.16 251.6A15 15 0 0 0 93.34 261.6600000000001H160L162.16 261.52A15 15 0 0 0 173.62 252.96L181.9 235H290A15 15 0 0 0 290 205H195.74L209.58 175H250A55 55 0 0 0 305 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Tank.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Tank.displayName = `Blueprint6.Icon.Tank`;
exports.default = exports.Tank;
//# sourceMappingURL=tank.js.map