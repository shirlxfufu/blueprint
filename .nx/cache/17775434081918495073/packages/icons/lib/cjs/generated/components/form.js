"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
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
exports.Form = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "form", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 140V60H120V140zM20 180H140C151 180 160 171 160 160V40C160 29 151 20 140 20H20C9 20 0 29 0 40V160C0 171 9 180 20 180M240 320H380C391 320 400 311 400 300S391 280 380 280H240C229 280 220 289 220 300S229 320 240 320M160 380A20.06 20.06 0 0 0 174.2 345.8L74.2 225.8C70.6 222.2 65.6 220 60 220S49.4 222.2 45.8 225.8L5.8 265.8A20.06 20.06 0 0 0 34.2 294.2L60 268.2L145.8 374.2C149.4 377.8 154.4 380 160 380M240 120H380C391 120 400 111 400 100S391 80 380 80H240C229 80 220 89 220 100S229 120 240 120" : "M40 100V60H80V100zM20 140H100C111 140 120 131 120 120V40C120 29 111 20 100 20H20C9 20 0 29 0 40V120C0 131 9 140 20 140M200 260H300C311 260 320 251 320 240S311 220 300 220H200C189 220 180 229 180 240S189 260 200 260M120 300A20.06 20.06 0 0 0 134.2 265.8L74.2 185.8C70.6 182.2 65.6 180 60 180S49.4 182.2 45.8 185.8L5.8 225.8A20.06 20.06 0 0 0 34.2 254.2L60 228.2L105.8 294.2C109.4 297.8 114.4 300 120 300M200 100H300C311 100 320 91 320 80S311 60 300 60H200C189 60 180 69 180 80S189 100 200 100", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Form.displayName = `Blueprint6.Icon.Form`;
exports.default = exports.Form;
//# sourceMappingURL=form.js.map