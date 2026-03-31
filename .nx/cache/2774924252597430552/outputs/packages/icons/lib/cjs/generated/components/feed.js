"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
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
exports.Feed = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "feed", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M322.5 100A222.48 222.48 0 0 1 100 322.5A15 15 0 0 0 100 352.5A252.5 252.5 0 0 0 352.5 100A15 15 0 0 0 322.5 100M210 100A110 110 0 0 1 100 210A15 15 0 0 0 100 240A140 140 0 0 0 240 100A15 15 0 0 0 210 100M106.26 81.24A25 25 0 1 1 106.26 131.24A25 25 0 0 1 106.26 81.24" : "M255 80A175 175 0 0 1 80 255A15 15 0 0 0 80 285A205 205 0 0 0 285 80A15 15 0 0 0 255 80M165 80A85 85 0 0 1 80 165A15 15 0 0 0 80 195A115 115 0 0 0 195 80A15 15 0 0 0 165 80M85 65A20 20 0 1 1 85 105A20 20 0 0 1 85 65", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Feed.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Feed.displayName = `Blueprint6.Icon.Feed`;
exports.default = exports.Feed;
//# sourceMappingURL=feed.js.map