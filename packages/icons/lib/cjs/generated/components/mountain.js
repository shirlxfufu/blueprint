"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mountain = void 0;
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
exports.Mountain = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "mountain", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M400 80H80L220 300H240L280 260H300zM320 180L290 240H270L250 260L230 280L160 170L220 200L240 180L260 200zM161.1 240L55.8 80H0L140 240z" : "M320 60H60L180 240H200L240 200H260zM270 130L250 180H230L190 220L130 130L180 160L200 140L220 160zM118.8 180L36.36 60H0L100 180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Mountain.displayName = `Blueprint6.Icon.Mountain`;
exports.default = exports.Mountain;
//# sourceMappingURL=mountain.js.map