"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axle = void 0;
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
exports.Axle = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "axle", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 100H80V90A10 10 0 0 1 100 90V310A10 10 0 0 1 80 310V300H40zM360 300H320V310A10 10 0 0 1 300 310V90A10 10 0 0 1 320 90V100H360zM100 240L135.78 222.12A20 20 0 0 1 144.72 220H255.28A20 20 0 0 1 264.22 222.12L300 240V160L264.2200000000001 177.88A20 20 0 0 1 255.2800000000001 180H144.72A20 20 0 0 1 135.78 177.88L100 160zM0 220H40V180H0zM0 240H20V160H0zM380 240H400V160H380zM400 180H360V220H400zM160 220A20 20 0 0 0 180 240H220A20 20 0 0 0 240 220V180A20 20 0 0 0 220 160H180A20 20 0 0 0 160 180z" : "M270 280A10 10 0 0 0 280 270V260H300V180A20 20 0 1 0 300 140V60H280V50A10 10 0 0 0 260 50V120L224.2 137.9A20 20 0 0 1 215.3 140H200A20 20 0 0 0 180 120H140A20 20 0 0 0 120 140H104.72C101.62 140 98.56 139.28 95.78 137.9L60 120V50A10 10 0 0 0 40 50V60H20V140A20 20 0 0 0 20 180V260H40V270A10 10 0 0 0 60 270V200L95.8 182.1A20 20 0 0 1 104.72 180H120A20 20 0 0 0 140 200H180A20 20 0 0 0 200 180H215.28A20 20 0 0 1 224.22 182.1L260 200V270A10 10 0 0 0 270 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Axle.displayName = `Blueprint6.Icon.Axle`;
exports.default = exports.Axle;
//# sourceMappingURL=axle.js.map