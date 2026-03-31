"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcement = void 0;
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
exports.Announcement = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "announcement", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M160 280H40A20 20 0 0 1 20 260V160A20 20 0 0 1 40 140H80V40A20 20 0 1 1 120 40V140H160L265.86 34.14C278.46 21.54 300 30.46 300 48.28V371.7200000000001C300 389.52 278.46 398.46 265.86 385.86zM330.74 124.96C361.36 141.08 380 169.24 380 200C380 230.54 361.2 258.66 330.7800000000001 274.94C325.7800000000001 277.62 320 273.78 320 268.1V131.8200000000001C320 126.16 325.7200000000001 122.3200000000001 330.74 124.96" : "M140 220C132.74 220.34 56.8 220.18 19.9 220.06A20 20 0 0 1 0 200.06V140A20 20 0 0 1 20 120H60V18.86C60 8.26 68.26 -0.06 78.86 -0.06H80.5A20 20 0 0 1 100.42 20.02L100 120H140L204.56 41.52C216.48 27.04 240 35.46 240 54.24V284.76C240 303.48 216.6 311.94 204.64 297.56zM300 160C300 139.64 287.68 119.08 270.86 106.6C266.12 103.08 260 106.84 260 112.72V204.62C260 210.54 266.2 214.3 271 210.86C287.68 198.9 300 180.18 300 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Announcement.displayName = `Blueprint6.Icon.Announcement`;
exports.default = exports.Announcement;
//# sourceMappingURL=announcement.js.map