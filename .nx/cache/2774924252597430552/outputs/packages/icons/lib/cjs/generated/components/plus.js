"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plus = void 0;
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
exports.Plus = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "plus", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M337.5 215A15 15 0 0 0 337.5 185H62.5A15 15 0 0 0 62.5 215zM185 62.5V337.5A15 15 0 0 0 215 337.5V62.5A15 15 0 0 0 185 62.5" : "M145 50V145H50A15 15 0 0 0 50 175H145V270A15 15 0 0 0 175 270V175H270A15 15 0 0 0 270 145H175V50A15 15 0 0 0 145 50", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Plus.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Plus.displayName = `Blueprint6.Icon.Plus`;
exports.default = exports.Plus;
//# sourceMappingURL=plus.js.map