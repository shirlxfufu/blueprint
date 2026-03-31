"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
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
exports.Temperature = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "temperature", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M220 400A40 40 0 0 1 180 360V149.3A80 80 0 1 1 260 149.3V360A40 40 0 0 1 220 400M60 350A10 10 0 0 0 70 360H150A10 10 0 0 0 150 340H70A10 10 0 0 0 60 350M70 240A10 10 0 0 1 70 220H150A10 10 0 0 1 150 240zM100 290A10 10 0 0 0 110 300H150A10 10 0 0 0 150 280H110A10 10 0 0 0 100 290M110 180A10 10 0 0 1 110 160H150A10 10 0 0 1 150 180z" : "M170 320A30 30 0 0 1 140 290V133.26A70 70 0 1 1 200 133.26V290A30 30 0 0 1 170 320M40 210A10 10 0 0 0 50 220H110A10 10 0 0 0 110 200H50A10 10 0 0 0 40 210M50 300A10 10 0 0 1 50 280H110A10 10 0 0 1 110 300zM80 250A10 10 0 0 0 90 260H110A10 10 0 0 0 110 240H90A10 10 0 0 0 80 250M90 180A10 10 0 0 1 90 160H110A10 10 0 0 1 110 180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Temperature.displayName = `Blueprint6.Icon.Temperature`;
exports.default = exports.Temperature;
//# sourceMappingURL=temperature.js.map