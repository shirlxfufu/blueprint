"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heart = void 0;
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
exports.Heart = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "heart", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M400 275C400 333 353 380 295 380C274.6 380 256 373.8 240 363.6V364.4C238.2 363.2 236.6 362 234.8 360.6C234.0000000000001 360 233 359.4 232 358.6C218.4 348.4 207.2 335 200 319.4C192 336.6 179.2 350.8 164 361.4000000000001C163.2 361.8 162.6 362.4000000000001 162 363A140 140 0 0 1 150 369.6C147.4 370.4000000000001 145.4 371.6 143 372.6C142 373 141 373.6 140 374V373.6C129 377.4 117.4 380 105 380A105 105 0 0 1 0 275C0 273.2 0.2 271.6 0.2 270H0C0 268.8 0.2 267.6 0.4 266.4S0.6 264 0.8 262.8C2.6 242.2 8.8 220 21.4 196.6C44.6 153.4 82 117.8 140 69.4V69.1999999999999C158 54.1999999999999 177.8 38.1999999999999 200 19.9999999999999C214.2 31.5999999999999 227.6 42.4 240 52.5999999999999C309.6 109.7999999999999 352.8 148.1999999999999 378.6 196.1999999999999C391.2 219.5999999999999 397.4000000000001 241.5999999999999 399.2000000000001 262.2C399.4000000000001 263.5999999999999 399.4000000000001 264.9999999999999 399.6 266.3999999999999C399.6 267.5999999999999 399.8000000000001 268.5999999999999 400 269.7999999999999H399.8C399.8 271.5999999999999 400 273.2 400 274.9999999999999" : "M320 218.1C320 263.2 282.4000000000001 299.76 236 299.76C202.36 299.76 173.4 280.48 160 252.7200000000001A84.2 84.2 0 0 1 84 299.76C37.6 299.76 0 263.2 0 218.1C0 216.78 0.14 215.5 0.2 214.22H0.08C0.1 213.28 0.28 212.3 0.36 211.36L0.62 208.52C2.02 192.52 7.04 175.26 17.1 157.06C41.46 112.9 84.66 79.64 160 20C235.34 79.64 278.52 112.94 302.88 157.06C312.9 175.18 317.92 192.4 319.3400000000001 208.32Q319.54 209.98 319.6600000000001 211.6C319.7200000000001 212.46 319.9000000000001 213.36 319.92 214.2H319.8C319.86 215.52 320 216.8 320 218.1", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Heart.displayName = `Blueprint6.Icon.Heart`;
exports.default = exports.Heart;
//# sourceMappingURL=heart.js.map