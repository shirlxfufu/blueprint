"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
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
exports.Header = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "header", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M120 180V80A20 20 0 1 0 80 80V340A20 20 0 0 0 120 340V220H280V340A20 20 0 1 0 320 340V80A20 20 0 1 0 280 80V180z" : "M240 280C229 280 220 271 220 260V180H100V260C100 271 91 280 80 280S60 271 60 260V60C60 49 69 40 80 40S100 49 100 60V140H220V60C220 49 229 40 240 40S260 49 260 60V260C260 271 251 280 240 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Header.displayName = `Blueprint6.Icon.Header`;
exports.default = exports.Header;
//# sourceMappingURL=header.js.map