"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrenchSnooze = void 0;
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
exports.WrenchSnooze = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "wrench-snooze", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 380H120A20 20 0 0 0 135.5 347.36L81.6 280H120A20 20 0 0 0 120 240H40A20 20 0 0 0 24.58 272.7200000000001L78.38 340H40A20 20 0 0 0 40 380M270 80C253.58 80 238 83.6 224 90.06L165.12 31.18A38.14 38.14 0 0 0 111.18 85.12L170.06 144A110 110 0 0 0 323.66 286.06L248.78 211.22A30 30 0 1 1 291.2200000000001 168.78L366.06 243.64A110 110 0 0 0 270 80" : "M20 320H100A20 20 0 0 0 115.5 287.36L61.6 220H100A20 20 0 0 0 100 180H20A20 20 0 0 0 4.58 212.72L58.38 280H20A20 20 0 1 0 20 320M191.7 68.54L132.1 8.94A30.52 30.52 0 0 0 88.94 52.1L148.54 111.7A90.04 90.04 0 0 0 268.8 231.24L208.8 171.22A30 30 0 0 1 251.2000000000001 128.78L311.24 188.8A90.04 90.04 0 0 0 191.7 68.54", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.WrenchSnooze.displayName = `Blueprint6.Icon.WrenchSnooze`;
exports.default = exports.WrenchSnooze;
//# sourceMappingURL=wrench-snooze.js.map