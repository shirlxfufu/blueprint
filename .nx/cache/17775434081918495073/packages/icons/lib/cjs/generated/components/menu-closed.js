"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuClosed = void 0;
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
exports.MenuClosed = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "menu-closed", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M160 280H380C391 280 400 289 400 300S391 320 380 320H160C149 320 140 311 140 300S149 280 160 280M80 280C74.4 280 69.4 277.8 65.8 274.2L5.8 214.2C2.2 210.6 0 205.6 0 200S2.2 189.4 5.8 185.8L65.8 125.8A20.06 20.06 0 0 1 100 140V260C100 271 91 280 80 280M380 120H160C149 120 140 111 140 100S149 80 160 80H380C391 80 400 89 400 100S391 120 380 120M380 220H160C149 220 140 211 140 200S149 180 160 180H380C391 180 400 189 400 200S391 220 380 220" : "M299.8 180.2H119.8C108.8 180.2 99.8 171.2 99.8 160.2S108.8 140.2 119.8 140.2H299.8C310.8 140.2 319.8 149.2 319.8 160.2S310.8 180.2 299.8 180.2M59.8 220.2C54.2 220.2 49.2 218 45.6 214.4L5.6 174.4A20.28 20.28 0 0 1 5.6 146L45.6 106A20.06 20.06 0 0 1 79.8 120.2000000000001V200.2000000000001C79.8 211.2000000000001 70.8 220.2000000000001 59.8 220.2000000000001M119.8 240.2000000000001H299.8C310.8 240.2000000000001 319.8 249.2000000000001 319.8 260.2000000000001S310.8 280.2000000000001 299.8 280.2000000000001H119.8C108.8 280.2000000000001 99.8 271.2000000000001 99.8 260.2000000000001S108.8 240.2000000000001 119.8 240.2000000000001M299.8 80.2000000000001H119.8C108.8 80.2000000000001 99.8 71.2000000000001 99.8 60.2000000000001S108.8 40.2 119.8 40.2H299.8C310.8 40.2 319.8 49.2 319.8 60.2000000000001S310.8 80.2000000000001 299.8 80.2000000000001", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.MenuClosed.displayName = `Blueprint6.Icon.MenuClosed`;
exports.default = exports.MenuClosed;
//# sourceMappingURL=menu-closed.js.map