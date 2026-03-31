"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowLinear = void 0;
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
exports.FlowLinear = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "flow-linear", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M264.4000000000001 285.6A15 15 0 0 0 285.6 285.6L360.6 210.6A15 15 0 0 0 360.6 189.4L285.6 114.4A15 15 0 1 0 264.4000000000001 135.6L328.8 200L264.4000000000001 264.4A15 15 0 0 0 264.4000000000001 285.6M350 215A15 15 0 0 0 350 185H50A15 15 0 1 0 50 215zM225 200A50 50 0 1 0 125 200A50 50 0 0 0 225 200M195 200A20 20 0 1 1 175 180V150A50 50 0 1 0 175 250A50 50 0 0 0 175 150V180A20 20 0 0 1 195 200" : "M209.4 230.6A15 15 0 0 0 230.6 230.6L290.6 170.6A15 15 0 0 0 290.6 149.4L230.6 89.4A15 15 0 1 0 209.4 110.6L258.8 160L209.4 209.4A15 15 0 0 0 209.4 230.6M280 175A15 15 0 0 0 280 145H40A15 15 0 1 0 40 175zM180 160A40 40 0 1 0 100 160A40 40 0 0 0 180 160M140 120A40 40 0 1 0 140 200A40 40 0 0 0 140 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FlowLinear.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.FlowLinear.displayName = `Blueprint6.Icon.FlowLinear`;
exports.default = exports.FlowLinear;
//# sourceMappingURL=flow-linear.js.map