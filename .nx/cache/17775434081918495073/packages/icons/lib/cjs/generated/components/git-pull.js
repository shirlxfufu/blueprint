"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPull = void 0;
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
exports.GitPull = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "git-pull", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M340 116.4V260C340 304.2 304.2000000000001 340 260 340H208.2L234 365.8C237.8 369.4 240 374.4 240 380A20.06 20.06 0 0 1 205.8 394.2L145.8 334.2C142.2 330.6 140 325.6 140 320S142.2 309.4 145.8 305.8L205.8 245.8A20.06 20.06 0 0 1 234.2 274.2L208.2 300H260C282 300 300 282 300 260V116.4A59.92 59.92 0 0 1 320 0C353.2 0 380 26.8 380 60C380 86 363.2 108 340 116.4M320 40C309 40 300 49 300 60S309 80 320 80S340 71 340 60S331 40 320 40M80 380C46.8 380 20 353.2 20 320C20 294 36.8 272 60 263.6V116.2C36.8 108 20 86 20 60C20 26.8 46.8 0 80 0S140 26.8 140 60C140 86 123.2 108 100 116.4V263.6C123.2 272 140 294 140 320C140 353.2 113.2 380 80 380M80 40C69 40 60 49 60 60S69 80 80 80S100 71 100 60S91 40 80 40M80 300C69 300 60 309 60 320S69 340 80 340S100 331 100 320S91 300 80 300" : "M60 300C26.8 300 0 273.2 0 240C0 214 16.8 192 40 183.6V116.2C16.8 108 0 86 0 60C0 26.8 26.8 0 60 0S120 26.8 120 60C120 86 103.2 108 80 116.4V183.6C103.2 192 120 214 120 240C120 273.2 93.2 300 60 300M60 40C49 40 40 49 40 60S49 80 60 80S80 71 80 60S71 40 60 40M60 220C49 220 40 229 40 240S49 260 60 260S80 251 80 240S71 220 60 220M280 116.4V200C280 233.2 253.2 260 220 260H188.2L214 285.8C217.8 289.4 220 294.4 220 300A20.06 20.06 0 0 1 185.8 314.2L125.8 254.2C122.2 250.6 120 245.6 120 240S122.2 229.4 125.8 225.8L185.8 165.8A20.06 20.06 0 0 1 214.2 194.2L188.2 220H220C231 220 240 211 240 200V116.4A59.92 59.92 0 0 1 260 0C293.2 0 320 26.8 320 60C320 86 303.2 108 280 116.4M260 40C249 40 240 49 240 60S249 80 260 80S280 71 280 60S271 40 260 40", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.GitPull.displayName = `Blueprint6.Icon.GitPull`;
exports.default = exports.GitPull;
//# sourceMappingURL=git-pull.js.map