"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThAdd = void 0;
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
exports.ThAdd = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "th-add", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 380A20 20 0 0 0 340 380V340H380A20 20 0 0 0 380 300H340V260A20 20 0 0 0 300 260V300H260A20 20 0 0 0 260 340H300zM380 260V40A20 20 0 0 0 360 20H20A20 20 0 0 0 0 40V360C0 370 8 380 20 380H260A60 60 0 0 1 215.28 280H160V220H275.28A59.8 59.8 0 0 1 341.56 204L343.36 204.72A60 60 0 0 1 380 260M320 200H160V140H340V200zM140 220V280H40V220zM40 200V140H140V200zM40 120V60H140V120zM340 120H160V60H340z" : "M260 320A20 20 0 0 1 240 300V280H220A20 20 0 1 1 220 240H240V220A20 20 0 1 1 280 220V240H300A20 20 0 1 1 300 280H280V300A20 20 0 0 1 260 320M175.28 220H140V180H215.28A60.02 60.02 0 0 1 317.44 202.58L320 203.4V40C320 28 312 20 300 20H20C8 20 0 28 0 40V280C0 290 8 300 20 300H175.28A60 60 0 0 1 160 260C160 244.64 165.78 230.6 175.28 220M120 220H40V180H120zM120 160H40V120H120zM140 120H280V160H140zM120 100H40V60H120zM140 60H280V100H140z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ThAdd.displayName = `Blueprint6.Icon.ThAdd`;
exports.default = exports.ThAdd;
//# sourceMappingURL=th-add.js.map