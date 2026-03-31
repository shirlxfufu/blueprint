"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LowVoltagePole = void 0;
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
exports.LowVoltagePole = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "low-voltage-pole", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 400A20 20 0 0 1 180 380V340H100V360A20 20 0 0 1 60 360V340H40A20 20 0 0 1 40 300H60V260H40A20 20 0 0 1 40 220H120A20 20 0 0 1 120 260H100V300H180V20A20 20 0 1 1 220 20V300H300V260H280A20 20 0 1 1 280 220H360A20 20 0 1 1 360 260H340V300H360A20 20 0 1 1 360 340H340V360A20 20 0 1 1 300 360V340H220V380A20 20 0 0 1 200 400" : "M160 320A20 20 0 0 1 140 300V280H60V290A10 10 0 0 1 40 290V280A20 20 0 0 1 40 240V220H30A10 10 0 0 1 30 200H70A10 10 0 0 1 70 220H60V240H140V20A20 20 0 1 1 180 20V240H260V220H250A10 10 0 0 1 250 200H290A10 10 0 0 1 290 220H280V240A20 20 0 1 1 280 280V290A10 10 0 0 1 260 290V280H180V300A20 20 0 0 1 160 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LowVoltagePole.displayName = `Blueprint6.Icon.LowVoltagePole`;
exports.default = exports.LowVoltagePole;
//# sourceMappingURL=low-voltage-pole.js.map