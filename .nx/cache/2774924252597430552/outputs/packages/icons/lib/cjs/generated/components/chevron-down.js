"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronDown = void 0;
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
exports.ChevronDown = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "chevron-down", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M314.4000000000001 260.6A15 15 0 1 0 335.6 239.4L210.6 114.4A15 15 0 0 0 189.4 114.4L64.4 239.4A15 15 0 1 0 85.6 260.6L200 146.2z" : "M249.4 210.6A15 15 0 1 0 270.6 189.4L170.6 89.4A15 15 0 0 0 149.4 89.4L49.4 189.4A15 15 0 1 0 70.6 210.6L160 121.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ChevronDown.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ChevronDown.displayName = `Blueprint6.Icon.ChevronDown`;
exports.default = exports.ChevronDown;
//# sourceMappingURL=chevron-down.js.map