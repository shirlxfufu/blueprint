"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowTopRight = void 0;
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
exports.ArrowTopRight = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "arrow-top-right", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M289.4000000000001 310.6A15 15 0 1 0 310.6 289.4L110.6 89.4A15 15 0 1 0 89.4 110.6zM285 137.5V285H137.5A15 15 0 0 0 137.5 315H300A15 15 0 0 0 315 300V137.5A15 15 0 1 0 285 137.5" : "M255 110A15 15 0 1 0 225 110V203.8L90.6 69.4A15 15 0 1 0 69.4 90.6L203.8 225H110A15 15 0 0 0 110 255H240A15 15 0 0 0 255 240z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ArrowTopRight.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ArrowTopRight.displayName = `Blueprint6.Icon.ArrowTopRight`;
exports.default = exports.ArrowTopRight;
//# sourceMappingURL=arrow-top-right.js.map