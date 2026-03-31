"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedSquares = void 0;
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
exports.LinkedSquares = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "linked-squares", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M250 340L251.54 339.92A15 15 0 0 0 265 325V162.5A15 15 0 0 0 250 147.5H200A15 15 0 0 0 200 177.5H235V310H65V177.5H100A15 15 0 0 0 100 147.5H50A15 15 0 0 0 35 162.5V325A15 15 0 0 0 50 340zM150 60A15 15 0 0 0 135 75V237.5A15 15 0 0 0 150 252.5H200A15 15 0 0 0 200 222.5H165V90H335V222.5H300A15 15 0 0 0 300 252.5H350A15 15 0 0 0 365 237.5V75A15 15 0 0 0 350 60z" : "M160 205A15 15 0 0 0 160 175H135V75H265V175H240A15 15 0 0 0 240 205H280A15 15 0 0 0 295 190V60A15 15 0 0 0 280 45H120A15 15 0 0 0 105 60V190A15 15 0 0 0 120 205zM200 275L201.54 274.92A15 15 0 0 0 215 260V130A15 15 0 0 0 200 115H160A15 15 0 0 0 160 145H185V245H55V145H80A15 15 0 0 0 80 115H40A15 15 0 0 0 25 130V260A15 15 0 0 0 40 275z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LinkedSquares.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LinkedSquares.displayName = `Blueprint6.Icon.LinkedSquares`;
exports.default = exports.LinkedSquares;
//# sourceMappingURL=linked-squares.js.map