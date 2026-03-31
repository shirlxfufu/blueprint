"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneToOne = void 0;
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
exports.OneToOne = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "one-to-one", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 200A20 20 0 1 1 80 200A20 20 0 0 1 40 200M116.6 220H283.4A60.02 60.02 0 1 0 283.4 180H116.6A60.02 60.02 0 1 0 116.6 220M340 220A20 20 0 1 1 340 180A20 20 0 0 1 340 220" : "M40 160A20 20 0 1 1 80 160A20 20 0 0 1 40 160M116.6 180H203.4A60.02 60.02 0 1 0 203.4 140H116.6A60.02 60.02 0 1 0 116.6 180M260 180A20 20 0 1 1 260 140A20 20 0 0 1 260 180", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.OneToOne.displayName = `Blueprint6.Icon.OneToOne`;
exports.default = exports.OneToOne;
//# sourceMappingURL=one-to-one.js.map