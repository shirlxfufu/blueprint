"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tick = void 0;
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
exports.Tick = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "tick", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M339.4 298.1A15 15 0 1 0 360.6 276.9L160.6 76.9A15 15 0 0 0 139.4 76.9L51.9 164.4A15 15 0 1 0 73.1 185.6L150 108.72z" : "M269.4000000000001 240.6A15 15 0 1 0 290.6 219.4L130.6 59.4A15 15 0 0 0 109.4 59.4L39.4 129.4A15 15 0 1 0 60.6 150.6L120 91.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Tick.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Tick.displayName = `Blueprint6.Icon.Tick`;
exports.default = exports.Tick;
//# sourceMappingURL=tick.js.map