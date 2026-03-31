"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeAction = void 0;
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
exports.TakeAction = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "take-action", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M100 260C105.6 260 110.6 262.2000000000001 114.2 265.8L214.2 365.8A20.06 20.06 0 0 1 185.8 394.2L85.8 294.2A20.06 20.06 0 0 1 100 260M220 140A20.06 20.06 0 0 1 254.2 125.8L354.2000000000001 225.8A20.06 20.06 0 0 1 325.8 254.2L225.8 154.2C222.2 150.6 220 145.6 220 140M380 40H360C360 51 351 60 340 60H200C189 60 180 51 180 40H160C149 40 140 31 140 20S149 0 160 0H380C391 0 400 9 400 20S391 40 380 40M200 160L320 280L294.2000000000001 305.8A20.06 20.06 0 0 1 265.8 334.2L240 360L120 240L145.8 214.2L5.8 74.2000000000001A20.06 20.06 0 0 1 34.2 45.8L174.2 185.8z" : "M180 100A20.06 20.06 0 0 1 214.2 85.8L294.2000000000001 165.8A20.06 20.06 0 0 1 265.8 194.2L185.8 114.2C182.2 110.6 180 105.6 180 100M80 200C85.6 200 90.6 202.2 94.2 205.8L174.2 285.8A20.06 20.06 0 0 1 145.8 314.2L65.8 234.2A20.06 20.06 0 0 1 80 200M160 120L260 220L244.2 235.8L254.2 245.8A20.06 20.06 0 0 1 225.8 274.2L215.8 264.2L200 280L100 180L115.8 164.2L5.8 54.2A20.06 20.06 0 0 1 34.2 25.8L144.2 135.8zM300 40H140C129 40 120 31 120 20S129 0 140 0H300C311 0 320 9 320 20S311 40 300 40", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.TakeAction.displayName = `Blueprint6.Icon.TakeAction`;
exports.default = exports.TakeAction;
//# sourceMappingURL=take-action.js.map