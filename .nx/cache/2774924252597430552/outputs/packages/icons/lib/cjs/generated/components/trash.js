"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trash = void 0;
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
exports.Trash = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "trash", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M337.5 321.24A15 15 0 0 0 337.5 291.24H62.5A15 15 0 0 0 62.5 321.24zM147.5 137.5V237.5A15 15 0 0 0 177.5 237.5V137.5A15 15 0 0 0 147.5 137.5M222.5 137.5V237.5A15 15 0 0 0 252.5 237.5V137.5A15 15 0 0 0 222.5 137.5M327.5 75A27.52 27.52 0 0 0 300 47.5H100A27.52 27.52 0 0 0 72.5 75V306.24A15 15 0 0 0 102.5 306.24V77.5H297.5V306.24A15 15 0 0 0 327.5 306.24zM247.5 306.24V343.74A10 10 0 0 1 239.46 353.54L237.5 353.74H162.5A10 10 0 0 1 152.5 343.74V306.26A15 15 0 0 0 122.5 306.26V343.74A40 40 0 0 0 162.5 383.74H237.5A40 40 0 0 0 277.5 343.74V306.2200000000001A15 15 0 0 0 247.5 306.2200000000001" : "M85 65H235V230H85zM115 110V190A15 15 0 0 0 145 190V110A15 15 0 0 0 115 110M175 110V190A15 15 0 0 0 205 190V110A15 15 0 0 0 175 110M195 275A5 5 0 0 1 190.98 279.9L190 280H130A5 5 0 0 1 125 275V260H195zM225 260H270A15 15 0 0 0 270 230H265V60A25 25 0 0 0 240 35H80A25 25 0 0 0 55 60V230H50A15 15 0 0 0 50 260H95V275A35 35 0 0 0 130 310H190A35 35 0 0 0 225 275z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Trash.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Trash.displayName = `Blueprint6.Icon.Trash`;
exports.default = exports.Trash;
//# sourceMappingURL=trash.js.map