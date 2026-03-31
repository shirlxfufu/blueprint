"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AimpointsTarget = void 0;
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
exports.AimpointsTarget = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "aimpoints-target", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M45.92 156.74A90 90 0 0 1 10.08 137.14A200 200 0 0 0 0 200C0 310.46 89.54 400 200 400A200 200 0 0 0 262.86 389.92A90 90 0 0 1 243.26 354.08A160 160 0 0 1 45.92 156.74M360 200C360 215 357.94 229.5 354.0800000000001 243.26A90 90 0 0 1 389.9200000000001 262.86C396.4600000000001 243.06 400.0000000000001 221.94 400.0000000000001 200C400.0000000000001 89.54 310.4600000000001 0 200.0000000000001 0A200 200 0 0 0 137.1600000000001 10.08A90 90 0 0 1 156.7600000000001 45.9200000000001A160 160 0 0 1 360 200M380 330A50 50 0 1 0 280 330A50 50 0 0 0 380 330M120 70A50 50 0 1 0 20 70A50 50 0 0 0 120 70M200 320A20 20 0 0 1 180 300V240A20 20 0 0 1 220 240V300A20 20 0 0 1 200 320M220 200A20 20 0 0 0 240 220H300A20 20 0 0 0 300 180H240A20 20 0 0 0 220 200M80 200A20 20 0 0 0 100 220H160A20 20 0 0 0 160 180H100A20 20 0 0 0 80 200M180 160A20 20 0 0 0 220 160V100A20 20 0 0 0 180 100z" : "M42 137.98A80 80 0 0 1 5.44 118.5A160 160 0 0 0 201.5 314.56A80 80 0 0 1 182 278A120 120 0 0 1 42 138M280 160A120 120 0 0 1 278 182.02A80 80 0 0 1 314.56 201.5A160 160 0 0 0 118.5 5.4399999999999A80 80 0 0 1 138 42Q148.7 40 160 40A120 120 0 0 1 280 160M160 260A20 20 0 0 1 140 240V200A20 20 0 0 1 180 200V240A20 20 0 0 1 160 260M180 160A20 20 0 0 0 200 180H240A20 20 0 0 0 240 140H200A20 20 0 0 0 180 160M60 160A20 20 0 0 0 80 180H120A20 20 0 0 0 120 140H80A20 20 0 0 0 60 160M140 120A20 20 0 0 0 180 120V80A20 20 0 0 0 140 80zM100 60A40 40 0 1 0 20 60A40 40 0 0 0 100 60M260 220A40 40 0 1 1 260 300A40 40 0 0 1 260 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.AimpointsTarget.displayName = `Blueprint6.Icon.AimpointsTarget`;
exports.default = exports.AimpointsTarget;
//# sourceMappingURL=aimpoints-target.js.map