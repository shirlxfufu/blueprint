"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RotatePage = void 0;
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
exports.RotatePage = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "rotate-page", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M280 360H248.2L254 365.8C257.8 369.4 260 374.4 260 380A20.06 20.06 0 0 1 225.8 394.2L185.8 354.2C182.2 350.6 180 345.6 180 340S182.2 329.4 185.8 325.8L225.8 285.8A20.06 20.06 0 0 1 254.2 314.2L248.2 320H280C302 320 320 302 320 280V220C320 209 329 200 340 200S360 209 360 220V280C360 324.2 324.2000000000001 360 280 360M240 260H60C49 260 40 251 40 240V20C40 9 49 0 60 0H240C251 0 260 9 260 20V240C260 251 251 260 240 260M220 40H80V220H220z" : "M160 200H40C29 200 20 191 20 180V20C20 9 29 0 40 0H160C171 0 180 9 180 20V180C180 191 171 200 160 200M140 40H60V160H140zM240 280H208.2L214 285.8C217.8 289.4 220 294.4 220 300A20.06 20.06 0 0 1 185.8 314.2L145.8 274.2C142.2 270.6 140 265.6 140 260S142.2 249.4 145.8 245.8L185.8 205.8A20.06 20.06 0 0 1 214.2 234.2L208.2 240H240C251 240 260 231 260 220V160C260 149 269 140 280 140S300 149 300 160V220C300 253.2 273.2 280 240 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.RotatePage.displayName = `Blueprint6.Icon.RotatePage`;
exports.default = exports.RotatePage;
//# sourceMappingURL=rotate-page.js.map