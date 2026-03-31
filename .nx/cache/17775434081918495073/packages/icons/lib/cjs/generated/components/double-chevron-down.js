"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleChevronDown = void 0;
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
exports.DoubleChevronDown = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "double-chevron-down", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M185.8 185.8C189.4 182.2 194.4 180 200 180S210.6 182.2 214.2 185.8L334.2000000000001 305.8A20.06 20.06 0 0 1 305.8 334.2L200 228.2L94.2 334.2A20.06 20.06 0 0 1 65.8 305.8zM320 220C314.4000000000001 220 309.4000000000001 217.8 305.8 214.2L200 108.2L94.2 214.2A20.06 20.06 0 0 1 65.8 185.8L185.8 65.8C189.4 62.2 194.4 60 200 60S210.6 62.2 214.2 65.8L334.2000000000001 185.8A20.06 20.06 0 0 1 320 220" : "M145.8 145.8C149.4 142.2 154.4 140 160 140S170.6 142.2 174.2 145.8L254.2 225.8A20.06 20.06 0 0 1 225.8 254.2L160 188.2L94.2 254.2A20.06 20.06 0 0 1 65.8 225.8zM240 160C234.4 160 229.4 157.8 225.8 154.2L160 88.2L94.2 154.2A20.06 20.06 0 0 1 65.8 125.8L145.8 45.8C149.4 42.2 154.4 40.0000000000001 160 40.0000000000001S170.6 42.2 174.2 45.8L254.2 125.8A20.06 20.06 0 0 1 240 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.DoubleChevronDown.displayName = `Blueprint6.Icon.DoubleChevronDown`;
exports.default = exports.DoubleChevronDown;
//# sourceMappingURL=double-chevron-down.js.map