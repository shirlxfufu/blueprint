"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BringForward = void 0;
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
exports.BringForward = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "bring-forward", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M185.86 394.14A20 20 0 0 0 214.14 394.14L294.14 314.14A20 20 0 0 0 265.86 285.86L220 331.7200000000001V220H380A20 20 0 1 0 380 180H220V120H380A20 20 0 0 0 400 100V40A20 20 0 0 0 380 20H20A20 20 0 0 0 0 40V100A20 20 0 0 0 20 120H180V180H20A20 20 0 1 0 20 220H180V331.7200000000001L134.14 285.86A20 20 0 0 0 105.86 314.14z" : "M173.94 314.2A20 20 0 0 1 159.94 320C154.54 320 149.34 317.8 145.74 314.2L85.8 254.4A20.06 20.06 0 0 1 114.2 226L139.96 251.8L140 180H20A20 20 0 0 1 20 140H140V100H20A20 20 0 0 1 0 80V40A20 20 0 0 1 20 20H300A20 20 0 0 1 320 40V80A20 20 0 0 1 300 100H180V140H300A20 20 0 1 1 300 180H180V251.72H179.94V251.8L205.74 226C209.32 222.4 214.32 220.2 219.72 220.2A20.06 20.06 0 0 1 233.92 254.4z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.BringForward.displayName = `Blueprint6.Icon.BringForward`;
exports.default = exports.BringForward;
//# sourceMappingURL=bring-forward.js.map