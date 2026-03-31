"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentation = void 0;
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
exports.Presentation = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "presentation", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 380H220C220 391 211 400 200 400S180 391 180 380H20C9 380 0 371 0 360S9 340 20 340H40V120C40 109 49 100 60 100H151.8L86 34.2C82.2 30.6 80 25.6 80 20A20.06 20.06 0 0 1 114.2 5.8L180 71.8V20C180 9 189 0 200 0S220 9 220 20V71.8L285.8 6C289.4 2.2 294.4 0 300 0A20.06 20.06 0 0 1 314.2000000000001 34.2L248.2 100H340C351 100 360 109 360 120V340H380C391 340 400 349 400 360S391 380 380 380M320 140H80V340H320z" : "M300 300H180C180 311 171 320 160 320S140 311 140 300H20C9 300 0 291 0 280S9 260 20 260V100C20 89 29 80 40 80H111.8L66 34.2C62.2 30.6 60 25.6 60 20A20.06 20.06 0 0 1 94.2 5.8L140 51.8V20C140 9 149 0 160 0S180 9 180 20V51.8L225.8 6C229.4 2.2 234.4 0 240 0A20.06 20.06 0 0 1 254.2 34.2L208.2 80H280C291 80 300 89 300 100V260C311 260 320 269 320 280S311 300 300 300M260 120H60V260H260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Presentation.displayName = `Blueprint6.Icon.Presentation`;
exports.default = exports.Presentation;
//# sourceMappingURL=presentation.js.map