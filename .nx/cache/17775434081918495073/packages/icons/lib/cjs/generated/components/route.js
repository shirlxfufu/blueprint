"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
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
exports.Route = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "route", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M280.56 279.68C283.48 274.18 286.76 268.28 290.26 262.24C296.3400000000001 251.76 302.82 241.3 309.3 231.34L311.6600000000001 227.78L307.5 227.9L295.96 228C254.1 227.92 239.14 221.94 239.14 210.1C239.14 208.72 244.5600000000001 205.1400000000001 264.04 198.76L284.2000000000001 192.5C337.62 175.88 364.0000000000001 155.96 364.0000000000001 109.16C364.0000000000001 53.96 325.4400000000001 27.98 267.36 21.64C251.7200000000001 19.94 236.9600000000001 19.6800000000001 218.3200000000001 20.3200000000001L195.3200000000001 21.24H124.42L135.12 37.46A1360 1360 0 0 1 157.56 73.2H198.36L212.08 72.6C232.64 71.68 247.48 71.74 262.54 73.38C299.18 77.38 316 88.72 316 109.16C316 122.96 306.34 130.96 276.16 140.86L259.56 146C235.72 153.28 218.82 160 207.76 169.3C215.74 189.3 220 206.18 220 220.06A120 120 0 0 1 212.36 262.02C227.26 273.48 250.04 278.4600000000001 280.56 279.68M100 316C152.96 316 195.82 272.98 196 220.06C196 166.96 100 28 100 28L90 42.88C65.46 80.14 4 177.58 4 220.06A96 96 0 0 0 100 316M100 268A48 48 0 1 1 100.04 171.96A48 48 0 0 1 100 268M340 393.34A53.4 53.4 0 0 0 393.3400000000001 340.04C393.3400000000001 310.54 340 233.34 340 233.34L332.1800000000001 245.08C317.36 267.82 286.6600000000001 317.66 286.6600000000001 340.04A53.4 53.4 0 0 0 340 393.34" : "M233.38 218.68L235.36 214.9Q238.76 208.5 242.7000000000001 201.68C247.2200000000001 193.88 252.0600000000001 186.08 256.88 178.66L252.92 178.74L243.32 178.82C208.42 178.76 195.94 174.16 195.94 165.06C195.94 164 200.46 161.26 216.7 156.34L233.5 151.54C278 138.72 300 123.4 300 87.4C300 44.94 267.86 24.96 219.46 20.08C206.44 18.78 194.14 18.58 178.6 19.08L159.44 19.78H103.92L109.28 27.9A1120.0000000000002 1120.0000000000002 0 0 1 129.24 59.76H161.96L173.4 59.3C190.54 58.58 202.9 58.62 215.46 59.9C245.98 62.96 260 71.7 260 87.4C260 98.02 251.96 104.2 226.8 111.8L212.98 115.76C192.18 121.62 177.7 127 168.54 134.68C176 152.68 180 167.76 180 180.06A100 100 0 0 1 176.32 206.74C189.22 214.64 208.28 217.98 233.38 218.68M80 260A80.14 80.14 0 0 0 160 180.06C160 135.8 80 20 80 20L71.68 32.4C51.2 63.46 0 144.66 0 180.06A80 80 0 0 0 80 260M80 220A40 40 0 1 1 80.02 139.98A40 40 0 0 1 80 220M280 300C302.06 300 319.92 282.08 320 260.02C320 237.9 280 180 280 180L274.14 188.8C263 205.86 240 243.24 240 260.02C240 282.08 257.94 300 280 300", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Route.displayName = `Blueprint6.Icon.Route`;
exports.default = exports.Route;
//# sourceMappingURL=route.js.map