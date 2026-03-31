"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Won = void 0;
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
exports.Won = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "won", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M80 280H150L170 360H230L250 280H320L340 360H400L378.76 280H380A20 20 0 1 0 380 240H368.12L362.82 220H380A20 20 0 1 0 380 180H352.2L315 40H255L217.8 180H182.2L145 40H85L47.8 180H20A20 20 0 1 0 20 220H37.2L31.88 240H20A20 20 0 0 0 20 280H21.26L0 360H60zM115 140L125 180H105zM275 180L285 140L295 180zM260 240L265 220H305L310 240zM95 220H135L140 240H90zM192.8 220H207.2L201.88 240H198.12z" : "M55 220H125L140 280H180L195 220H265L280 280H320L304.8400000000001 219.4A20 20 0 0 0 300 180H295L290 160H300A20 20 0 1 0 300 120H280L260 40H200L180 120H140L120 40H60L40 120H20A20 20 0 0 0 20 160H30L25 180H20A20 20 0 0 0 15.14 219.4L0 280H40zM90 80L100 120H80zM220 120L230 80L240 120zM205 180L210 160H250L255 180zM70 160H110L115 180H65zM150 160H170L165 180H155z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Won.displayName = `Blueprint6.Icon.Won`;
exports.default = exports.Won;
//# sourceMappingURL=won.js.map