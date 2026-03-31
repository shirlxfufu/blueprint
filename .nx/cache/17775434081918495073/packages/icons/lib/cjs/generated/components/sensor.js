"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
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
exports.Sensor = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "sensor", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M264.76 120C269.44 120 273.9600000000001 118.36 277.56 115.36L320 80H360V40H40V80H80L122.44 115.36A20 20 0 0 0 135.24 119.98zM200 180A20 20 0 1 0 200 140A20 20 0 0 0 200 180M125.38 227.2C164.36 269 231.34 272.78 274.52 227.4A20 20 0 0 0 273.7200000000001 199.2C265.72 191.6 253.12 192 245.32 199.8C218.72 227.8 178.34 225.6 154.56 200A19.94 19.94 0 1 0 125.38 227.2M200.04 339.92C254.02 339.92 306 313.92 335.98 271.92C337.98 267.92 339.98 263.92 339.98 259.92C339.98 253.92 337.98 247.92 331.98 243.92C321.98 235.94 309.98 237.94 303.98 247.94C281.98 279.94 240.02 299.94 200.04 299.94C158.04 299.94 122.06 281.94 96.08 247.94C90.08 237.94 76.08 237.94 68.08 243.94C58.08 249.94 58.1 263.94 64.1 271.94C98.1 315.92 144.06 341.72 200.04 339.92" : "M211.72 100A20 20 0 0 0 225.86 94.14L260 60H300V20H20V60H60L94.14 94.14A20 20 0 0 0 108.28 100zM160 160A20 20 0 1 0 160 120A20 20 0 0 0 160 160M104 196.94C125.4 225.5 188.76 229.5 215.36 197.74C222.36 189.14 221.16 176.54 212.76 169.54C204.16 162.54 191.56 163.74 184.56 172.14C175.16 183.54 142.36 181.54 135.96 172.94C129.36 164.14 116.76 162.34 107.96 168.94S97.38 188.14 103.98 196.94M46.04 234.44C108.44 295.2200000000001 211.6 295.2200000000001 273.78 234.24C281.7800000000001 226.64 281.7800000000001 214.04 274.18 206.04S253.78 197.86 245.98 205.66C199.2 251.44 120.82 251.44 74.02 205.66C66.02 198.06 53.22 198.46 45.62 206.26A19.92 19.92 0 0 0 46.02 234.46", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Sensor.displayName = `Blueprint6.Icon.Sensor`;
exports.default = exports.Sensor;
//# sourceMappingURL=sensor.js.map