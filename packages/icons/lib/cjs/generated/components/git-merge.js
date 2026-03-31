"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitMerge = void 0;
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
exports.GitMerge = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "git-merge", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 240C274 240 252 223.2 243.6 200H220C170.2 200 129.2 236.6 121.6 284.2A59.9 59.9 0 0 1 100 400C66.8 400 40 373.2 40 340C40 314 56.8 292 80 283.8V116.4C56.8 108 40 86 40 60C40 26.8 66.8 0 100 0S160 26.8 160 60C160 86 143.2 108 120 116.4V202.8C145.4 176.6 180.6 160 220 160H243.6A59.92 59.92 0 0 1 360 180C360 213.2 333.2 240 300 240M100 40C89 40 80 49 80 60S89 80 100 80S120 71 120 60S111 40 100 40M100 320C89 320 80 329 80 340S89 360 100 360S120 351 120 340S111 320 100 320M300 160C289 160 280 169 280 180S289 200 300 200S320 191 320 180S311 160 300 160" : "M240 200C214 200 192 183.2 183.6 160H180C147.6 160 120 179.2 107.4 206.8C126.6 216.8 140 236.8 140 260C140 293.2 113.2 320 80 320S20 293.2 20 260C20 234 36.8 212 60 203.8V116.4C36.8 108 20 86 20 60C20 26.8 46.8 0 80 0S140 26.8 140 60C140 86 123.2 108 100 116.4V151.4A118 118 0 0 1 180 120H183.6A59.92 59.92 0 0 1 300 140C300 173.2 273.2 200 240 200M80 40C69 40 60 49 60 60S69 80 80 80S100 71 100 60S91 40 80 40M80 240C69 240 60 249 60 260S69 280 80 280S100 271 100 260S91 240 80 240M240 120C229 120 220 129 220 140S229 160 240 160S260 151 260 140S251 120 240 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.GitMerge.displayName = `Blueprint6.Icon.GitMerge`;
exports.default = exports.GitMerge;
//# sourceMappingURL=git-merge.js.map