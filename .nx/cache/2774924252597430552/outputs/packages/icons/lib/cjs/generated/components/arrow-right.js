"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowRight = void 0;
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
exports.ArrowRight = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "arrow-right", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M337.5 215A15 15 0 0 0 337.5 185H62.5A15 15 0 1 0 62.5 215zM214.4 323.1A15 15 0 0 0 235.6 323.1L348.1 210.6A15 15 0 0 0 348.1 189.4L235.6 76.9A15 15 0 1 0 214.4 98.1L316.3 200L214.4 301.9A15 15 0 0 0 214.4 323.1" : "M169.4 260.6A15 15 0 0 0 190.6 260.6L280.6 170.6A15 15 0 0 0 280.6 149.4L190.6 59.4A15 15 0 1 0 169.4 80.6L233.8 145H50A15 15 0 1 0 50 175H233.8L169.4 239.4A15 15 0 0 0 169.4 260.6", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ArrowRight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ArrowRight.displayName = `Blueprint6.Icon.ArrowRight`;
exports.default = exports.ArrowRight;
//# sourceMappingURL=arrow-right.js.map