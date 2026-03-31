"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
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
exports.Modal = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "modal", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 380A20 20 0 0 0 400 360V40A20 20 0 0 0 380 20H20A20 20 0 0 0 0 40V360A20 20 0 0 0 20 380zM360 300H40V60H360zM300 360H260V320H300zM360 360H320V320H360z" : "M300 300A20 20 0 0 0 320 280V40A20 20 0 0 0 300 20H20A20 20 0 0 0 0 40V280A20 20 0 0 0 20 300zM280 220H40V60H280zM220 280H180V240H220zM280 280H240V240H280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Modal.displayName = `Blueprint6.Icon.Modal`;
exports.default = exports.Modal;
//# sourceMappingURL=modal.js.map