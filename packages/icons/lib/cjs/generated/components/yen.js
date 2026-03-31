"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yen = void 0;
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
exports.Yen = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "yen", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 229.08L280 360H340L242.2200000000001 200H300A20 20 0 1 0 300 160H230V140H300A20 20 0 1 0 300 100H230V20H170V100H100A20 20 0 0 0 100 140H170V160H100A20 20 0 0 0 100 200H157.78L60 360H120z" : "M160 171.66L220 280H260L191.42 160H220A20 20 0 1 0 220 120H180V100H220A20 20 0 1 0 220 60H180V20H140V60H100A20 20 0 1 0 100 100H140V120H100A20 20 0 0 0 100 160H128.58L60 280H100z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Yen.displayName = `Blueprint6.Icon.Yen`;
exports.default = exports.Yen;
//# sourceMappingURL=yen.js.map