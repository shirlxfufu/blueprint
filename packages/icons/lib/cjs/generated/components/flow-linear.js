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
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "flow-linear", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M102.5 180.06H19.52C8.78 180.06 0 189.26 0 200S8.8 219.86 19.52 219.86H102.48A80.04 80.04 0 0 0 257.52 219.86H333.04L285.86 266.2A19.2 19.2 0 0 0 280.16 279.94C280.16 290.68 289.36 299.96 300.08 299.96A19.2 19.2 0 0 0 314.04 293.96L394.14 213.66C397.66 210.14 400 205.46 400 200A19.4 19.4 0 0 0 394.34 186.14L314.04 106A20 20 0 0 0 300.08 100.06C289.34 100.06 280.16 109.12 280.16 119.86C280.16 125.32 282.3 130.2 285.82 133.7L333.24 180.06H257.5A80.04 80.04 0 0 0 102.5 180.06" : "M83.2 139.96H19.54C8.8 139.96 0 149.36 0 160.12C0 170.86 8.8 179.92 19.56 179.92H83.16A60.2 60.2 0 0 0 139.9 220A60.2 60.2 0 0 0 196.68 179.92H256.28Q229.34 202.6 225.92 206.12A20.6 20.6 0 0 0 220.06 220.22C220.06 230.98 229.14 240 239.9000000000001 240A19 19 0 0 0 253.84 234.1200000000001Q257.38 230.4000000000001 314.12 173.8A19.2 19.2 0 0 0 319.98 160.12A19.6 19.6 0 0 0 314.3 146.22L253.94 85.6800000000001A19.4 19.4 0 0 0 240.06 80A19.92 19.92 0 0 0 225.92 114.1L256.28 139.96H196.66A60.2 60.2 0 0 0 139.92 100A60.2 60.2 0 0 0 83.2 139.96", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FlowLinear.displayName = `Blueprint6.Icon.FlowLinear`;
exports.default = exports.FlowLinear;
//# sourceMappingURL=flow-linear.js.map