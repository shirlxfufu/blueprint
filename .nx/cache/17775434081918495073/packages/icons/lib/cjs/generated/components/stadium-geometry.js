"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StadiumGeometry = void 0;
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
exports.StadiumGeometry = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "stadium-geometry", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 260H100A60 60 0 1 1 100 140H300A60 60 0 0 1 300 260M100 300H300A100 100 0 1 0 300 100H100A100 100 0 0 0 100 300" : "M240 200H80A40 40 0 1 1 80 120H240A40 40 0 1 1 240 200M80 240H240A80 80 0 0 0 240 80H80A80 80 0 0 0 80 240", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.StadiumGeometry.displayName = `Blueprint6.Icon.StadiumGeometry`;
exports.default = exports.StadiumGeometry;
//# sourceMappingURL=stadium-geometry.js.map