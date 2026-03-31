"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronLeft = void 0;
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
exports.ChevronLeft = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "chevron-left", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M239.4 335.6A15 15 0 1 0 260.6 314.4L146.2 200L260.6 85.6A15 15 0 1 0 239.4 64.4L114.4 189.4A15 15 0 0 0 114.4 210.6000000000001z" : "M189.4 270.6A15 15 0 1 0 210.6 249.4L121.2 160L210.6 70.6A15 15 0 1 0 189.4 49.4L89.4 149.4A15 15 0 0 0 89.4 170.6z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ChevronLeft.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ChevronLeft.displayName = `Blueprint6.Icon.ChevronLeft`;
exports.default = exports.ChevronLeft;
//# sourceMappingURL=chevron-left.js.map