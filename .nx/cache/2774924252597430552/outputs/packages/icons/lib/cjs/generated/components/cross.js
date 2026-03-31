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
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "cross", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M301.9000000000001 323.1A15 15 0 1 0 323.1 301.9L98.1 76.9A15 15 0 1 0 76.9 98.1zM76.9 323.1A15 15 0 0 0 98.1 323.1L323.1 98.1A15 15 0 1 0 301.9000000000001 76.9L76.9 301.9A15 15 0 0 0 76.9 323.1" : "M239.4 260.6A15 15 0 1 0 260.6 239.4L181.2 160L260.6 80.6A15 15 0 1 0 239.4 59.4L160 138.8L80.6 59.4A15 15 0 1 0 59.4 80.6L138.8 160L59.4 239.4A15 15 0 1 0 80.6 260.6L160 181.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Cross.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Cross.displayName = `Blueprint6.Icon.Cross`;
exports.default = exports.Cross;
//# sourceMappingURL=cross.js.map