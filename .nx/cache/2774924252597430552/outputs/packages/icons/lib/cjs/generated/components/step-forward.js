"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepForward = void 0;
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
exports.StepForward = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "step-forward", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M297.5 62.5V337.5A15 15 0 0 0 327.5 337.5V62.5A15 15 0 0 0 297.5 62.5M102.5 79.6L295.02 200L102.5 320.4zM327.5 200A27.2 27.2 0 0 0 314.64 176.9L314.66 176.88L114.5 51.7L114.42 51.64A27.5 27.5 0 0 0 72.5 74.5V325.5A27.5 27.5 0 0 0 100.72 352.4L104.32 352.08Q107.92 351.48 111.22 350.02L114.42 348.32L114.5 348.26L314.66 223.1A27.2 27.2 0 0 0 327.5 200" : "M235 50V127.52L93.2 38.82L93.1 38.76A25 25 0 0 0 68.02 38.1A25 25 0 0 0 55 59.54V260.44A25 25 0 0 0 58.64 272.92L60.52 275.62A26 26 0 0 0 68.02 281.9L71.02 283.3A26 26 0 0 0 80.64 284.94L83.92 284.62Q87.18 284.1 90.2 282.78L93.1 281.24L93.18 281.18L235 192.5V270A15 15 0 0 0 265 270V50A15 15 0 0 0 235 50M85 69.1L230.36 160L85 250.92z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.StepForward.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.StepForward.displayName = `Blueprint6.Icon.StepForward`;
exports.default = exports.StepForward;
//# sourceMappingURL=step-forward.js.map