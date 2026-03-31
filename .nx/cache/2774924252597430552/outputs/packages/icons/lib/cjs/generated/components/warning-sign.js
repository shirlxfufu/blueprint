"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningSign = void 0;
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
exports.WarningSign = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "warning-sign", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M164.5 344.6600000000001C180.1 371.7800000000001 219.88 371.7800000000001 235.5 344.6600000000001L372.18 107.34C387.82 80.06 367.26 47.5 336.66 47.5H63.36C32.78 47.5 12.22 80.04 27.84 107.34H27.86zM209.52 329.7C205.44 336.7800000000001 194.58 336.7800000000001 190.5 329.7L53.84 92.4C50.32 86.24 54.5 77.48 63.34 77.48H336.68C345.52 77.48 349.68 86.24 346.16 92.3799999999999zM185 187.5V237.5A15 15 0 1 0 215 237.5V187.5A15 15 0 1 0 185 187.5M200 100A25 25 0 1 1 200 150A25 25 0 0 1 200 100" : "M130.32 279.3400000000001C144.8 300.9 177.8 300.2 191 277.2L300.3200000000001 87.38L300.3400000000001 87.34C314.06 63.4 295.98 35 269.3400000000001 35H50.66C24 35 5.92 63.4 19.64 87.34L19.66 87.38L128.98 277.2zM160 265C157.76 265 156 263.96 155 262.24L45.66 72.44C44.06 69.62 45.78 65 50.66 65H269.3200000000001C274.2200000000001 65 275.92 69.6 274.3200000000001 72.4L165 262.26A5.6 5.6 0 0 1 160 265M145 150V190A15 15 0 1 0 175 190V150A15 15 0 0 0 145 150M160 80A20 20 0 1 1 160 120A20 20 0 0 1 160 80", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.WarningSign.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.WarningSign.displayName = `Blueprint6.Icon.WarningSign`;
exports.default = exports.WarningSign;
//# sourceMappingURL=warning-sign.js.map