"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepBackward = void 0;
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
exports.StepBackward = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "step-backward", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M72.5 62.5V337.5A15 15 0 0 0 102.5 337.5V62.5A15 15 0 0 0 72.5 62.5M302.9 352.28A27.48 27.48 0 0 0 327.5 325.48V74.48A27.52 27.52 0 0 0 285.58 51.64L285.48 51.7L85.32 176.88V176.9A27.2 27.2 0 0 0 85.32 223.1L285.48 348.3L285.58 348.3400000000001C289.7200000000001 350.88 294.44 352.3 299.2800000000001 352.42zM104.96 200L297.5 79.6V320.4z" : "M55 50V270A15 15 0 0 0 85 270V192.5L226.8 281.18L226.9 281.24C230.64 283.54 234.9600000000001 284.8400000000001 239.36 284.94L242.64 284.8Q245.92 284.4600000000001 248.98 283.28L251.98 281.88L254.74 280.14Q257.4000000000001 278.2 259.48 275.62L261.36 272.92L262.9 270C264.2200000000001 267 264.94 263.74 265 260.44V59.54A25.06 25.06 0 0 0 239.36 35.06A25 25 0 0 0 226.9 38.76L226.82 38.82L85 127.52V50A15 15 0 0 0 55 50M89.62 160L235 69.1V250.9z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.StepBackward.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.StepBackward.displayName = `Blueprint6.Icon.StepBackward`;
exports.default = exports.StepBackward;
//# sourceMappingURL=step-backward.js.map