"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterOpen = void 0;
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
exports.FilterOpen = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "filter-open", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 360C300 354.4 297.8 349.4 294.2000000000001 346L200 251.8V140C200 134.4 197.8 129.4 194.2 125.8L134.2 65.8A20.06 20.06 0 0 0 100 80V251.8L5.8 345.8A20.06 20.06 0 0 0 20 380H280C291 380 300 371 300 360M394.14 134.14A20 20 0 0 0 394.14 105.86L314.14 25.86C301.54 13.26 280 22.18 280 40V200C280 217.8 301.54 226.74 314.14 214.14z" : "M314.14 114.14A20 20 0 0 0 314.14 85.86L254.14 25.86C241.54 13.26 220 22.1800000000001 220 40.0000000000001V160C220 177.8 241.54 186.74 254.14 174.14zM240 280C240 274.4 237.8 269.4 234.2 266L160 191.8V120C160 114.4 157.8 109.4 154.2 105.8L114.2 65.8A20.06 20.06 0 0 0 80 80V191.8L5.8 265.8A20.06 20.06 0 0 0 20 300H220C231 300 240 291 240 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FilterOpen.displayName = `Blueprint6.Icon.FilterOpen`;
exports.default = exports.FilterOpen;
//# sourceMappingURL=filter-open.js.map