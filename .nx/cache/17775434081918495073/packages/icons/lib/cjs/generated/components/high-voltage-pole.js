"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighVoltagePole = void 0;
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
exports.HighVoltagePole = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "high-voltage-pole", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M140 400H260A20 20 0 0 0 280 380V320H320V360A20 20 0 1 0 320 400H380A20 20 0 1 0 380 360H360V320H380A20 20 0 1 0 380 280H360V240H380A20 20 0 1 0 380 200H320A20 20 0 1 0 320 240V280H280V20A20 20 0 0 0 241.46 12.48L200 109.2000000000001L158.56 12.52A20 20 0 0 0 120 20V280H80V240A20 20 0 0 0 80 200H20A20 20 0 0 0 20 240H40V280H20A20 20 0 0 0 20 320H40V360H20A20 20 0 0 0 20 400H80A20 20 0 0 0 80 360V320H120V380A20 20 0 0 0 140 400M160 360V320H240V360zM240 117.44V202.56L221.76 160zM170.32 280L200 210.76L229.6600000000001 280zM178.24 160L160 202.56V117.44z" : "M120 320H200A20 20 0 0 0 220 300V240H260V260H250A10 10 0 0 0 250 280H290A10 10 0 0 0 290 260H280V240A20 20 0 1 0 280 200V180H290A10 10 0 0 0 290 160H250A10 10 0 0 0 250 180H260V200H220V20A20 20 0 1 0 180 20V200H140V20A20 20 0 1 0 100 20V200H60V180H70A10 10 0 0 0 70 160H30A10 10 0 0 0 30 180H40V200A20 20 0 0 0 40 240V260H30A10 10 0 0 0 30 280H70A10 10 0 0 0 70 260H60V240H100V300A20 20 0 0 0 120 320M140 280V240H180V280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.HighVoltagePole.displayName = `Blueprint6.Icon.HighVoltagePole`;
exports.default = exports.HighVoltagePole;
//# sourceMappingURL=high-voltage-pole.js.map