"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cross = void 0;
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
exports.Cross = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "cross", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M228.2 200L314 285.8C317.8 289.4 320 294.4 320 300A20.06 20.06 0 0 1 285.8 314.2L200 228.2L114.2 314.2A20.06 20.06 0 0 1 85.8 285.8L171.8 200L86 114.2000000000001C82.2 110.6 80 105.6 80 100A20.06 20.06 0 0 1 114.2 85.8L200 171.8L285.8 86C289.4 82.2000000000001 294.4 80 300 80A20.06 20.06 0 0 1 314.2000000000001 114.2000000000001z" : "M188.2 160L254 225.8C257.8 229.4 260 234.4 260 240A20.06 20.06 0 0 1 225.8 254.2L160 188.2L94.2 254.2A20.06 20.06 0 0 1 65.8 225.8L131.8 160L66 94.2C62.2 90.6 60 85.6 60 80A20.06 20.06 0 0 1 94.2 65.8L160 131.8L225.8 66C229.4 62.2000000000001 234.4 60 240 60A20.06 20.06 0 0 1 254.2 94.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Cross.displayName = `Blueprint6.Icon.Cross`;
exports.default = exports.Cross;
//# sourceMappingURL=cross.js.map