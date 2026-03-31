"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clean = void 0;
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
exports.Clean = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "clean", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M140 400L100 300L0 260.04L100 220L140 120L180 220L280 259.9L180 300zM300 200L270 130.08L200 100.1L270 70.14L300 0L330 70.14L400 100L330 130.08z" : "M240 160L216 104.08L160 80.08L216 56.14L240 0L264 56.14L320 80L264 104.08zM100 320L70 250L0 220.1L70 190L100 120L130 190L200 220L130 250z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Clean.displayName = `Blueprint6.Icon.Clean`;
exports.default = exports.Clean;
//# sourceMappingURL=clean.js.map