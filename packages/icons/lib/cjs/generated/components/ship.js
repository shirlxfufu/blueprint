"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
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
exports.Ship = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "ship", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M136.8 383.92L130 350H70A20 20 0 0 1 50 330V232.14L18.4 223.12A19.8 19.8 0 0 1 4.58 199.28C13.78 162.88 27.84 112.16 38.6 87.86Q32.06 87.4999999999999 25 87.4999999999999A12.5 12.5 0 0 1 25 62.5C76.66 62.5 110.36 76.1 129.04 85.42C142.78 76.1 166.64 62.5 200 62.5C233 62.5 256.74 75.82 270.56 85.14L270.6600000000001 85.08C275.54 82.46 282.6600000000001 79.08 292.0600000000001 75.72C310.8200000000001 69.0199999999999 338.4800000000001 62.4999999999999 375 62.4999999999999A12.48 12.48 0 1 1 375 87.4999999999999Q365.32 87.4999999999999 356.56 88.12A20 20 0 0 1 360.24 94.8L393.6400000000001 198.16A20 20 0 0 1 380.1 223.56L350.0000000000001 232.16V330A20 20 0 0 1 330.0000000000001 350H270.0000000000001L263.2 383.92A20 20 0 0 1 243.6 400H156.4A20 20 0 0 1 136.8 383.92M100 246.42V300H175V267.86zM225 267.86V300H300V246.4zM124.1 61A12.6 12.6 0 0 0 137.26 60.16C148.64 52.02 169.2 37.48 200 37.48S251.36 52.02 262.74 60.16A12.5 12.5 0 0 0 277.2200000000001 60.18L277.36 60.08L278.26 59.5Q279.5800000000001 58.66 282.4600000000001 57.1A132 132 0 0 1 300.4600000000001 49.26C316.68 43.46 341.52 37.48 375 37.48A12.48 12.48 0 1 0 375 12.48C338.48 12.48 310.8 19.0000000000001 292.04 25.7A160 160 0 0 0 270.6600000000001 35.0600000000001L270.56 35.1200000000001C256.74 25.8000000000001 233 12.48 200 12.48C166.66 12.48 142.78 26.08 129.04 35.4000000000001C110.36 26.0600000000001 76.66 12.48 25 12.48A12.5 12.5 0 1 0 25 37.48C78.2 37.48 109.6 53.22 124.1 61" : "M108.8 303.92A20 20 0 0 0 128.4 320H191.6A20 20 0 0 0 211.2 303.92L216 280H260A20 20 0 0 0 280 260V185.72L300.1 179.98A20 20 0 0 0 313.64 154.58L289.48 79.78A20 20 0 0 0 283.32 70.64Q291.16 70.02 300 70A10 10 0 0 0 300 49.9999999999999C270.8 49.9999999999999 248.64 55.22 233.64 60.6A120 120 0 0 0 216.52 68.06L216.44 68.1C205.4 60.66 186.4 49.9999999999999 160 49.9999999999999C133.32 49.9999999999999 114.22 60.88 103.22 68.34C88.28 60.86 61.34 49.9999999999999 20 49.9999999999999A10 10 0 0 0 20 70Q25.66 70 30.88 70.28L30.78 70.52C22.54 89.2 11.92 127.06 4.6 155.7A19.8 19.8 0 0 0 18.4 179.54L40 185.72V260A20 20 0 0 0 60 280H104zM80 197.14L140 214.28V240H80zM180 214.28L240 197.14V240H180zM99.28 48.82A10 10 0 0 0 109.82 48.14C118.92 41.64 135.36 30 160 30S201.08 41.64 210.2 48.14A10 10 0 0 0 221.78 48.16L221.9 48.08L222.62 47.62Q223.64 46.94 225.98 45.68C229.06 44.04 233.86 41.74 240.38 39.42C253.36 34.78 273.22 30 300 30A10 10 0 0 0 300 10C270.8 10 248.64 15.22 233.64 20.6A120 120 0 0 0 216.52 28.0599999999999L216.44 28.1C205.4 20.66 186.4 10 160 10C133.32 10 114.22 20.88 103.22 28.34C88.28 20.86 61.34 10 20 10A10 10 0 0 0 20 30C62.58 30 87.68 42.6 99.28 48.8", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Ship.displayName = `Blueprint6.Icon.Ship`;
exports.default = exports.Ship;
//# sourceMappingURL=ship.js.map