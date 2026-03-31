"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderClose = void 0;
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
exports.FolderClose = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "folder-close", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M65 90H335V260H65zM365 86.12A26.1 26.1 0 0 0 338.88 60H61.48A26.6 26.6 0 0 0 35 86.48V275A15 15 0 0 0 50 290H337.5C343.88 290 350.0200000000001 287.78 354.92 283.76L356.96 281.96L358.76 279.92C362.76 275.02 365 268.88 365 262.5zM35 275V318.74C35 326.04 37.88 333.04 43.04 338.2L45.08 340.02C49.98 344.02 56.12 346.26 62.5 346.26H144.4C147.3 346.26 150.2 345.8 152.94 344.9L155.66 343.8400000000001L158.26 342.52Q162.06 340.32 164.98 337.02L211.2 284.9600000000001A15 15 0 1 0 188.8 265.04L143.3 316.24H65V275A15 15 0 0 0 35 275" : "M55 75H265V205H55zM55 235H126.62L113.28 250H55zM295 68.88A23.9 23.9 0 0 0 271.12 45H49.18A24.2 24.2 0 0 0 25 69.18V255A25 25 0 0 0 50 280H115.5Q119.5 280 123.3 278.76L125.76 277.82L128.12 276.62Q131.56 274.58 134.24 271.62L134.22 271.58L166.74 235H270C275.8 235 281.4 232.98 285.84 229.34L287.68 227.68L289.3400000000001 225.84C292.98 221.4 295 215.8 295 210z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FolderClose.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.FolderClose.displayName = `Blueprint6.Icon.FolderClose`;
exports.default = exports.FolderClose;
//# sourceMappingURL=folder-close.js.map