"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
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
exports.User = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "user", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200M247.5 212.5A47.5 47.5 0 1 1 152.5 212.5A47.5 47.5 0 0 1 247.5 212.5M277.5 212.5A77.5 77.5 0 1 0 122.5 212.5A77.5 77.5 0 0 0 277.5 212.5M200 165.06A127.6 127.6 0 0 0 313.68 95.26A15 15 0 0 0 286.92 81.7A97.48 97.48 0 0 1 113.06 81.7A15 15 0 0 0 86.3 95.28A127.6 127.6 0 0 0 200 165.08" : "M195 170A35 35 0 1 1 159.54 135.04H160.44A35 35 0 0 1 195 170M160 105L159.32 105.02A75 75 0 0 1 120.76 93.96A76 76 0 0 1 99.46 74.24C116.56 62.1399999999999 137.46 54.9999999999999 160 54.9999999999999S203.4 62.1399999999999 220.52 74.24A76 76 0 0 1 199.24 93.96A75 75 0 0 1 160.66 105.02zM295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160M225 170C225 152.16 217.8 136.04 206.16 124.3Q210.64 122.12 214.92 119.54C225.52 113.02 234.82 104.7 242.44 95.02A105 105 0 1 1 77.54 95.02A105 105 0 0 0 113.8 124.3A65 65 0 1 0 225 170", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.User.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.User.displayName = `Blueprint6.Icon.User`;
exports.default = exports.User;
//# sourceMappingURL=user.js.map