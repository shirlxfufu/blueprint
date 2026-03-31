"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divide = void 0;
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
exports.Divide = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "divide", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M225 275A25 25 0 1 0 175 275A25 25 0 0 0 225 275M120 220C109 220 100 211 100 200S109 180 120 180H280C291 180 300 189 300 200S291 220 280 220zM200 100A25 25 0 1 1 200 150A25 25 0 0 1 200 100" : "M180 220A20 20 0 1 0 140 220A20 20 0 0 0 180 220M100 180C89 180 80 171 80 160S89 140 100 140H220C231 140 240 149 240 160S231 180 220 180zM160 80A20 20 0 1 1 160 120A20 20 0 0 1 160 80", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Divide.displayName = `Blueprint6.Icon.Divide`;
exports.default = exports.Divide;
//# sourceMappingURL=divide.js.map