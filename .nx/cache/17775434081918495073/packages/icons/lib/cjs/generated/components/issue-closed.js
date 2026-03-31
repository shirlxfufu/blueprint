"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueClosed = void 0;
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
exports.IssueClosed = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "issue-closed", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M307.2800000000001 282A20 20 0 0 0 293.14 287.86L250.72 330.3A20 20 0 1 0 279 358.58L307.28 330.3L363.8400000000001 386.86A20 20 0 0 0 392.12 358.58L321.42 287.86A20 20 0 0 0 307.2800000000001 282.02M235.6 396.86A60 60 0 0 1 206.86 359.86A160 160 0 1 1 348.86 258.76L349.7 259.6L379.14 289.04A199.2000000000001 199.2000000000001 0 0 0 400 200C400 89.54 310.46 0 200 0S0 89.54 0 200S89.54 400 200 400Q218.26 399.98 235.6 396.84M220 80H180V120H220zM220 140H180V320H220z" : "M185.92 317.92A60 60 0 0 1 165.86 304.64A60 60 0 0 1 150.86 279.64A120 120 0 1 1 276.4600000000001 189.1Q277.74 190.28 279 191.5L308.12 220.62A160 160 0 1 0 185.92 317.9M236.56 213.9A20 20 0 0 0 222.42 219.78L194.14 248.08A20 20 0 0 0 222.42 276.36L236.5600000000001 262.2200000000001L271.92 297.58A20 20 0 1 0 300.2000000000001 269.28L250.72 219.8A20 20 0 0 0 236.56 213.94M180 80H140V120H180zM180 140H140V240H180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.IssueClosed.displayName = `Blueprint6.Icon.IssueClosed`;
exports.default = exports.IssueClosed;
//# sourceMappingURL=issue-closed.js.map