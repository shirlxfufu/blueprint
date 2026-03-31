"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayTimestamp = void 0;
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
exports.ArrayTimestamp = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "array-timestamp", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M100 352.5A15 15 0 0 0 100 322.5H52.5V77.5H100A15 15 0 0 0 100 47.5H37.5A15 15 0 0 0 22.5 62.5V337.5A15 15 0 0 0 37.5 352.5zM362.5 352.5A15 15 0 0 0 377.5 337.5V62.5A15 15 0 0 0 362.5 47.5H300A15 15 0 0 0 300 77.5H347.5V322.5H300A15 15 0 0 0 300 352.5zM285 200A85 85 0 1 1 115 200A85 85 0 0 1 285 200M315 200A115 115 0 1 0 85 200A115 115 0 0 0 315 200M185 237.5A15 15 0 0 0 215 237.5V215H237.5A15 15 0 0 0 237.5 185H200A15 15 0 0 0 185 200z" : "M80 285A15 15 0 0 0 80 255H45V65H80A15 15 0 0 0 80 35H30A15 15 0 0 0 15 50V270A15 15 0 0 0 30 285zM290 285A15 15 0 0 0 305 270V50A15 15 0 0 0 290 35H240A15 15 0 0 0 240 65H275V255H240A15 15 0 0 0 240 285zM225 160A65 65 0 1 1 95 160A65 65 0 0 1 225 160M145 190A15 15 0 0 0 175 190V175H190A15 15 0 0 0 190 145H160A15 15 0 0 0 145 160zM255 160A95 95 0 1 0 65 160A95 95 0 0 0 255 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ArrayTimestamp.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.ArrayTimestamp.displayName = `Blueprint6.Icon.ArrayTimestamp`;
exports.default = exports.ArrayTimestamp;
//# sourceMappingURL=array-timestamp.js.map