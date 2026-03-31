"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobeNetworkAdd = void 0;
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
exports.GlobeNetworkAdd = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "globe-network-add", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M335 200A135 135 0 1 1 200 65A15 15 0 0 0 200 35A165 165 0 1 0 365 200A15 15 0 0 0 335 200M247.5 200C247.5 246.72 232.94 281.5 218.54 304.54A170 170 0 0 1 200 329.06C194.84 323.42 188.16 315.26 181.46 304.54C167.06 281.5 152.5 246.72 152.5 200S167.06 118.5 181.46 95.44A168 168 0 0 1 201.18 69.64A120 120 0 0 1 209.04 61.98L209.38 61.72L210.54 60.7A15.02 15.02 0 0 0 190.62 38.28L200.0200000000001 50C191.4 39.24 190.7000000000001 38.34 190.62 38.28L190.58 38.34L190.5 38.4L190.28 38.56L189.58 39.16L187.18 41.2600000000001A140 140 0 0 0 179.3000000000001 49.1200000000001A200 200 0 0 0 156.04 79.5400000000001C139.2 106.5 122.5 146.72 122.5 200S139.2 293.5 156.04 320.44C164.44 333.88 172.88 344.04 179.3 350.88A140 140 0 0 0 187.2 358.7200000000001Q188.7 360.0800000000001 189.58 360.82L190.28 361.42L190.48 361.6Q190.54 361.6 190.58 361.6600000000001L190.62 361.7L193.02 358.7200000000001L190.62 361.7200000000001A15 15 0 0 0 209.38 361.7200000000001L200 350L209.38 361.7200000000001L209.44 361.66L209.52 361.6L209.72 361.42L210.44 360.82Q211.32 360.08 212.82 358.7200000000001C214.78 356.92 217.5 354.3 220.7 350.88C227.12 344.02 235.56 333.88 243.96 320.44C260.82 293.5 277.5 253.28 277.5 200A15 15 0 0 0 247.5 200M341.4600000000001 265A15 15 0 0 0 341.4600000000001 235H58.54A15 15 0 1 0 58.54 265zM200 165A15 15 0 0 0 200 135H58.54A15 15 0 0 0 58.54 165zM285 50V150A15 15 0 0 0 315 150V50A15 15 0 0 0 285 50M350 115A15 15 0 0 0 350 85H250A15 15 0 0 0 250 115z" : "M95 160C95 168.76 95.6 177.1 96.6 185H58.08Q57.48 182.76 57 180.48A105 105 0 0 1 58.04 135H96.56A200 200 0 0 0 95 160M225 40V65H200A15 15 0 0 0 200 95H225V120A15 15 0 0 0 255 120V95H280A15 15 0 0 0 280 65H255V40A15 15 0 0 0 225 40M70.6 105A105 105 0 0 1 122.32 62L122.3 62.04A180 180 0 0 0 102.9 105zM265 160Q264.96 172.76 261.94 185H223.42C224.42 177.1 225.02 168.76 225.02 160A15 15 0 0 0 195.02 160C195.02 168.88 194.3 177.2 193.14 185H126.88A168 168 0 0 1 126.88 135H160A15 15 0 1 0 160 105H134.52C138.4 94.4 143.08 85.4 147.72 77.94C153.38 68.9 159 62.14 163.12 57.74A80 80 0 0 1 169.18 51.88L169.4200000000001 51.68A15 15 0 0 0 160 25A135 135 0 0 0 33.12 114Q32.9 114.52 32.72 115.06A135 135 0 0 0 32.9 205.52L33.08 205.98A135 135 0 0 0 133.68 292.4A140 140 0 0 0 160.16 294.98A135 135 0 0 0 272.26 235C278.3 225.94 283.18 216.22 286.86 206.1L287.24 205.04C292.32 190.64 295 175.44 295 160A15 15 0 0 0 265 160M197.72 257.92C204.86 246.52 211.92 232.2 217.1 215H249.36Q248.36 216.68 247.32 218.34A105 105 0 0 1 200.18 257.02zM160 258.74C156.38 254.54 152.06 248.98 147.72 242.06A146 146 0 0 1 134.52 215H185.5A146 146 0 0 1 172.3 242.04A140 140 0 0 1 160 258.74M122.28 257.94A105 105 0 0 1 70.6 215H102.9C108.06 232.2 115.12 246.52 122.26 257.92", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.GlobeNetworkAdd.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.GlobeNetworkAdd.displayName = `Blueprint6.Icon.GlobeNetworkAdd`;
exports.default = exports.GlobeNetworkAdd;
//# sourceMappingURL=globe-network-add.js.map