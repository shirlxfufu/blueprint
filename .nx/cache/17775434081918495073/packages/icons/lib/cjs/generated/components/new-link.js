"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLink = void 0;
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
exports.NewLink = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "new-link", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M290 160A50 50 0 0 1 241 120H99A50 50 0 1 1 99 100H241A50 50 0 1 1 290 160M380 300H340V340C340 351 331 360 320 360S300 351 300 340V300H260C249 300 240 291 240 280S249 260 260 260H300V220C300 209 309 200 320 200S340 209 340 220V260H380C391 260 400 269 400 280S391 300 380 300" : "M300 260H280V280C280 291 271 300 260 300S240 291 240 280V260H220C209 260 200 251 200 240S209 220 220 220H240V200C240 189 249 180 260 180S280 189 280 200V220H300C311 220 320 229 320 240S311 260 300 260M230 140A50 50 0 0 1 181 100H99A50 50 0 1 1 99 80H181A50 50 0 1 1 230 140", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.NewLink.displayName = `Blueprint6.Icon.NewLink`;
exports.default = exports.NewLink;
//# sourceMappingURL=new-link.js.map