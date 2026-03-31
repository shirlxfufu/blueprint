"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapMarker = void 0;
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
exports.MapMarker = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "map-marker", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 400C122.6 400 60 340.4 60 266.6C60 193 200 0 200 0S340 193 340 266.6S277.2 400 200 400M200 200C166.8 200 140 226.8 140 260S166.8 320 200 320S260 293.2 260 260S233.2 200 200 200" : "M160 320C99.2 320 49.8 272.2 49.8 213.4C49.8 154.4 160 0 160 0S270.2 154.4 270.2 213.4C270 272.2 220.8 320 160 320M160 160A50 50 0 0 0 160 260A50 50 0 0 0 160 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.MapMarker.displayName = `Blueprint6.Icon.MapMarker`;
exports.default = exports.MapMarker;
//# sourceMappingURL=map-marker.js.map