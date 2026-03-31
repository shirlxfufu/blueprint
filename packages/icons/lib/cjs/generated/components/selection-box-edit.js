"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionBoxEdit = void 0;
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
exports.SelectionBoxEdit = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "selection-box-edit", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M100 400H20A20 20 0 0 1 0 380V300H40V360H100zM360 100V40H300V0H380A20 20 0 0 1 400 20V100zM0 40V100H40V40H100V0H20A20 20 0 0 0 0 20zM160 400H240V360H160zM360 240V160H400V240zM0 160V240H40V160zM240 40H160V0H240zM390.96 390.96A30.86 30.86 0 0 1 347.32 390.96L325.5 369.14L369.14 325.5L390.96 347.3A30.86 30.86 0 0 1 390.96 390.96M310.96 354.6L354.58 310.94L194.56 150.92L150.92 194.56zM136.34 180L180 136.36L100 100z" : "M200 280H120V320H200zM0 200V120H40V200zM120 0H200V40H120zM280 200H320V120H280zM40 320H20A20 20 0 0 1 0 300V240H40V280H80V320zM0 20V80H40V40H80V0H20A20 20 0 0 0 0 20M280 0H300A20 20 0 0 1 320 20V80H280V40H240V0zM174.4 135.52L135.54 174.32L240.9000000000001 279.62L279.5800000000001 240.64zM160.7 121.84L100 100L122 160.2zM273.14 312C278.18 316.88 285.08 320.02 292.64 320.02C307.9 320.02 320.16 307.62 320 292.68C320 284.98 317 278.2200000000001 311.98 273.2L289.3400000000001 250.56L250.5 289.36z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.SelectionBoxEdit.displayName = `Blueprint6.Icon.SelectionBoxEdit`;
exports.default = exports.SelectionBoxEdit;
//# sourceMappingURL=selection-box-edit.js.map