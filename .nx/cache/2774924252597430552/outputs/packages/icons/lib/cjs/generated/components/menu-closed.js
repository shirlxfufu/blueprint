"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuClosed = void 0;
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
exports.MenuClosed = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "menu-closed", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M123.1 135.6A15 15 0 1 0 101.9 114.4L26.9 189.4A15 15 0 0 0 26.9 210.6L101.9 285.6A15 15 0 1 0 123.1 264.4L58.7 200zM310 347.5V52.5H215V347.5zM312.5 22.5A27.52 27.52 0 0 1 340 50V350A27.5 27.5 0 0 1 312.5 377.5H212.5C205.2 377.5 198.2 374.62 193.04 369.46L191.24 367.42C187.24 362.52 185 356.38 185 350V50C185 43.62 187.22 37.48 191.22 32.58L193.04 30.54L195.08 28.74C199.98 24.74 206.12 22.5 212.48 22.5z" : "M175 45H245V275H175zM79.4 230.6A15 15 0 1 0 100.6 209.4L51.2 160L100.6 110.6A15 15 0 1 0 79.4 89.4L19.4 149.4A15 15 0 0 0 19.4 170.6zM275 40A25 25 0 0 0 250 15H170A25 25 0 0 0 145 40V280C145 286.64 147.64 293 152.32 297.68L154.16 299.34A25 25 0 0 0 170 305H250A25 25 0 0 0 275 280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.MenuClosed.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.MenuClosed.displayName = `Blueprint6.Icon.MenuClosed`;
exports.default = exports.MenuClosed;
//# sourceMappingURL=menu-closed.js.map