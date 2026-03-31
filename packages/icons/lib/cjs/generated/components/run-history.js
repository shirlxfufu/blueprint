"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunHistory = void 0;
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
exports.RunHistory = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "run-history", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 360A160 160 0 1 1 324.9000000000001 100H300A20 20 0 1 0 300 140H380A20 20 0 0 0 400 120V40A20 20 0 1 0 360 40V79.98A199.8000000000001 199.8000000000001 0 0 0 200 0C89.54 0 0 89.54 0 200S89.54 400 200 400zM400.02 200L360.02 199.94A160 160 0 0 1 354.56 241.48L393.2 251.78A200 200 0 0 0 400.02 199.98M373.26 300L338.62 280A160 160 0 0 1 313.1600000000001 313.1L341.4400000000001 341.4A200 200 0 0 0 373.24 300M300 373.2200000000001L280 338.58A160 160 0 0 1 241.42 354.6L251.8 393.24A200 200 0 0 0 300 373.2M150.14 277.4A20 20 0 0 0 170.3 277.12L270.3 217.12A20 20 0 0 0 270.3 182.84L170.3 122.84A20 20 0 0 0 140 140V260A20 20 0 0 0 150.14 277.4" : "M40 160A120 120 0 0 0 160 280V320A160 160 0 1 1 280 54.16V40A20 20 0 1 1 320 40V100A20 20 0 0 1 300 120H240A20 20 0 1 1 240 80H249.44A119.6 119.6 0 0 0 160 40A120 120 0 0 0 40 160M320 161.4L280 161A120 120 0 0 1 275.64 192.14L314.2000000000001 202.78A160 160 0 0 0 320 161.38M297.9 241.2200000000001L263.44 220.9A120 120 0 0 1 244.14 245.56L272.14 274.1C282.06 264.38 290.74 253.3400000000001 297.9 241.2200000000001M238.78 299.24L219.06 264.44A120 120 0 0 1 190.04 276.2L200.06 314.92A160 160 0 0 0 238.78 299.24M151.1 216.64A20 20 0 0 1 120 200V120A20 20 0 0 1 151.1 103.36L211.1 143.36A20 20 0 0 1 211.1 176.64z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.RunHistory.displayName = `Blueprint6.Icon.RunHistory`;
exports.default = exports.RunHistory;
//# sourceMappingURL=run-history.js.map