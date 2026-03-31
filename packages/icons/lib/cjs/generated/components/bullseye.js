"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bullseye = void 0;
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
exports.Bullseye = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "bullseye", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M394.14 394.14A20 20 0 0 0 394.14 365.86L214.14 185.86A20 20 0 0 0 185.86 214.14L365.86 394.14A20 20 0 0 0 394.14 394.14M292.5200000000001 377.36A199.2000000000001 199.2000000000001 0 0 1 200 400C89.54 400 0 310.46 0 200S89.54 0 200 0S400 89.54 400 200A199.2000000000001 199.2000000000001 0 0 1 377.36 292.52L347.3399999999999 262.48A160 160 0 1 0 262.48 347.3400000000001zM231.0800000000001 315.94A120 120 0 1 1 315.9400000000001 231.08L279.8400000000001 195A80 80 0 1 0 195 279.8400000000001z" : "M315.2 293A20 20 0 0 0 313 264.8L173 144.8A20 20 0 1 0 147 175.2L287 295.2A20 20 0 0 0 315.2000000000001 293M160 40A120 120 0 0 1 271.96 203.28L303.68 230.48A160 160 0 1 0 251.6 291.2L219.88 264A120 120 0 1 1 160 40M186.6 235.48A80 80 0 1 1 238.66 174.74L186.18 129.74Q184.38 128.2 182.38 126.86A40 40 0 0 0 143.9 123.38A40 40 0 0 0 127.84 136.22A39.8 39.8 0 0 0 123.6 176.62C126.06 182.02 129.7 186.78 134.2 190.56z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Bullseye.displayName = `Blueprint6.Icon.Bullseye`;
exports.default = exports.Bullseye;
//# sourceMappingURL=bullseye.js.map