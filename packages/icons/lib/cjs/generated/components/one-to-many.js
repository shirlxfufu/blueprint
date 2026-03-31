"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneToMany = void 0;
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
exports.OneToMany = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "one-to-many", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M360 340A20 20 0 1 1 320 340A20 20 0 0 1 360 340M283.6 319.44A124 124 0 0 1 250.26 312.5C231.32 305.46 214.8 292.5 209.62 266.14C203.16 233.26 184.94 212.64 164.34 200C184.94 187.36 203.16 166.74 209.62 133.86C214.8 107.5 231.32 94.54 250.26 87.5C261.88 83.16 273.86 81.34 283.62 80.56A60.02 60.02 0 1 0 283.24 40.48C270.58 41.3200000000001 253.42 43.64 236.3 50C208.26 60.46 178.94 82.5 170.38 126.14C165.2 152.5 148.68 165.46 129.74 172.5A100 100 0 0 1 115.3 176.7A60 60 0 1 0 115.3 223.3Q122.5 224.8 129.74 227.5000000000001C148.68 234.5400000000001 165.2 247.5000000000001 170.38 273.86C178.94 317.5 208.26 339.54 236.3 350C253.42 356.36 270.58 358.68 283.24 359.5200000000001A60.02 60.02 0 1 0 283.6 319.4400000000001M80 200A20 20 0 1 1 80 199.96zM340 40A20 20 0 1 1 340 80A20 20 0 0 1 340 40" : "M280 260A20 20 0 1 1 240 260A20 20 0 0 1 280 260M205.48 234.92C192.9 230.28 182.84 222.24 179.62 206.08C175.3 184.56 164.32 169.88 151.36 160C164.32 150.14 175.3 135.44 179.62 113.92C182.84 97.76 192.9 89.72 205.48 85.08A60 60 0 1 0 202.08 44.3A100 100 0 0 0 191.88 47.46C170.36 55.34 147.14 72.3 140.38 106.06C137.16 122.24 127.1 130.28 114.52 134.92A60 60 0 1 0 114.52 185.08C127.1 189.72 137.16 197.76 140.38 213.92C147.14 247.72 170.36 264.66 191.88 272.52Q197 274.4 202.08 275.7A60.02 60.02 0 0 0 320 260A60 60 0 0 0 205.48 234.92M260 40A20 20 0 1 1 260 80A20 20 0 0 1 260 40M80 160A20 20 0 1 1 40 160A20 20 0 0 1 80 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.OneToMany.displayName = `Blueprint6.Icon.OneToMany`;
exports.default = exports.OneToMany;
//# sourceMappingURL=one-to-many.js.map