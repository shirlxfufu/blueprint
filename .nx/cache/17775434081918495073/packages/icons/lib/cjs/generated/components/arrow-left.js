"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowLeft = void 0;
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
exports.ArrowLeft = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "arrow-left", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M360 220H88.2L174 305.8C177.8 309.4 180 314.4 180 320A20.06 20.06 0 0 1 145.8 334.2L25.8 214.2C22.2 210.6 20 205.6 20 200S22.2 189.4 25.8 185.8L145.8 65.8A20.06 20.06 0 0 1 174.2 94.2L88.2 180H360C371 180 380 189 380 200S371 220 360 220" : "M279.8 180.2H88.2L154 246A20.06 20.06 0 0 1 125.6 274.4L25.6 174.4A20.28 20.28 0 0 1 25.6 146L125.6 46A20.06 20.06 0 0 1 154 74.4L88.2 140.2H280C291 140.2 300 149.2 300 160.2S290.8 180.2 279.8 180.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ArrowLeft.displayName = `Blueprint6.Icon.ArrowLeft`;
exports.default = exports.ArrowLeft;
//# sourceMappingURL=arrow-left.js.map