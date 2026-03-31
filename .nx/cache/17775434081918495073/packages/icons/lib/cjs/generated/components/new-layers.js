"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLayers = void 0;
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
exports.NewLayers = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "new-layers", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M340 340H380A20 20 0 1 0 380 300H340V260A20 20 0 1 0 300 260V300H260A20 20 0 1 0 260 340H300V380A20 20 0 1 0 340 380zM314.96 220.32L210 162C206 160 204 160 200 160S194 160 190 162L10 262C4 266 0 272 0 280S4 294 10 298L190 398C194 400 196 400 200 400S206 400 210 398L278.4 360H260A40 40 0 1 1 260 280H280V260A40 40 0 0 1 314.96 220.32M356.36 243.32C358.7 248.4 360 254.04 360 260V280H380C387.0600000000001 280 393.68 281.82 399.4400000000001 285.02Q399.98 282.68 400 280C400 272 396 266 390 262zM380 220C392 220 400 212 400 200C400 192 396 186 390 182L210 82C206 80 204 80 200 80S194 80 190 82L10 182C4 186 0 192 0 200C0 212 8 220 20 220C24 220 26 220 30 218L200 122L370 218.0000000000001C374 220 376 220 380 220M380 140.0000000000001C392 140.0000000000001 400 132 400 120.0000000000001C400 112 396 106.0000000000001 390 102L210 2C206 0 204 0 200 0S194 0 190 2L10 102C4 106 0 112 0 120.0000000000001C0 132 8 140.0000000000001 20 140.0000000000001C24 140.0000000000001 26 140.0000000000001 30 136.0000000000001L200 42L370 138.0000000000001C374 140.0000000000001 376 140.0000000000001 380 140.0000000000001" : "M260 260H300A20 20 0 1 0 300 220H260V180A20 20 0 1 0 220 180V220H180A20 20 0 1 0 180 260H220V300A20 20 0 1 0 260 300zM200 299.6600000000001V280H180A40 40 0 1 1 180 200H200V180C200 174.42 201.14 169.12 203.2 164.3L169 147.2C166.2 145.8 163.2 145 160 145S153.8 145.8 151 147.2L11 217.2A19.84 19.84 0 0 0 12.4 253.4L152.2 313.4A20 20 0 0 0 168 313.4zM218.2 146.46A40 40 0 0 1 279.9000000000001 177.26L291 182.8C293.8 184.2 296.8 185 300 185C311 185 320 176 320 165C320 157.2 315.4 150.4 309 147.2L169 77.2C166.2 75.8 163.2 75 160 75S153.8 75.8 151 77.2L11 147.2C4.6 150.4 0 157.2 0 165C0 176 9 185 20 185C23.2 185 26.2 184.2 29 182.8L160 117.4zM300 115C311 115 320 106 320 95C320 87.2 315.4 80.4 309 77.2L169 7.2C166.2 5.8 163.2 5 160 5S153.8 5.8 151 7.2L11 77.2C4.6 80.4 0 87.2 0 95C0 106 9 115 20 115C23.2 115 26.2 114.2 29 113L160 47.4L291 112.8C293.8 114.2 296.8 115 300 115", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.NewLayers.displayName = `Blueprint6.Icon.NewLayers`;
exports.default = exports.NewLayers;
//# sourceMappingURL=new-layers.js.map