"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeAdd = void 0;
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
exports.CubeAdd = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "cube-add", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M340 340H380A20 20 0 0 0 380 300H340V260A20 20 0 0 0 300 260V300H260A20 20 0 0 0 260 340H300V380A20 20 0 0 0 340 380zM260.62 251.3L200 215.6L39.06 310.4L187.26 390.8A26.8 26.8 0 0 0 212.76 390.8L239.36 376.38A60.02 60.02 0 0 1 260 260Q260 255.56 260.62 251.3M267 231.86A60 60 0 0 1 380 260V118.86C380 110.1 375.06 102.02 367.04 97.66L212.76 13.94Q211.42 13.2 210 12.66V198.28zM22.72 296.8L190 198.28V12.66A20 20 0 0 0 187.24 13.94L32.96 97.66A24.2 24.2 0 0 0 20 118.86V285.86C20 289.72 20.96 293.46 22.72 296.8" : "M280 280H300A20 20 0 0 0 300 240H280V220A20 20 0 0 0 240 220V240H220A20 20 0 0 0 220 280H240V300A20 20 0 0 0 280 300zM182.72 307A60.02 60.02 0 0 1 202.56 202.56Q203.1 200.82 203.74 199.12L160 171.8L36.12 249.2L150.08 314.34A20 20 0 0 0 169.92 314.34zM300 175.3V91.62A20 20 0 0 0 289.92 74.26L170 5.72V154.46L213.74 181.8A60 60 0 0 1 260 160C275.36 160 289.4000000000001 165.78 300 175.28M21.12 235L150 154.46V5.72L30.08 74.24A20 20 0 0 0 20 91.6V228.4A20 20 0 0 0 21.12 235", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.CubeAdd.displayName = `Blueprint6.Icon.CubeAdd`;
exports.default = exports.CubeAdd;
//# sourceMappingURL=cube-add.js.map