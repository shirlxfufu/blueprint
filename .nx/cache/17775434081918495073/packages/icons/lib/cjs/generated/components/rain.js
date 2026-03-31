"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rain = void 0;
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
exports.Rain = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "rain", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M80 200A60 60 0 1 0 101.3 316.12A100.02 100.02 0 0 0 292.6 337.8Q300.96 339.9600000000001 310 339.98A70 70 0 1 0 310 199.98zM80 160A20 20 0 0 0 100 140V40A20 20 0 1 0 60 40V140A20 20 0 0 0 80 160M260 140A20 20 0 1 1 220 140V20A20 20 0 1 1 260 20zM320 160A20 20 0 0 0 340 140V80A20 20 0 1 0 300 80V140A20 20 0 0 0 320 160M180 140A20 20 0 1 1 140 140V80A20 20 0 1 1 180 80z" : "M70 160A50 50 0 1 0 82.16 258.52A80.04 80.04 0 0 0 229.8 279.12A60 60 0 1 0 240 160zM60 120A20 20 0 0 0 100 120V40A20 20 0 1 0 60 40zM200 140A20 20 0 0 1 180 120V20A20 20 0 1 1 220 20V120A20 20 0 0 1 200 140M240 120A20 20 0 1 0 280 120V80A20 20 0 1 0 240 80zM140 140A20 20 0 0 1 120 120V80A20 20 0 1 1 160 80V120A20 20 0 0 1 140 140", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Rain.displayName = `Blueprint6.Icon.Rain`;
exports.default = exports.Rain;
//# sourceMappingURL=rain.js.map