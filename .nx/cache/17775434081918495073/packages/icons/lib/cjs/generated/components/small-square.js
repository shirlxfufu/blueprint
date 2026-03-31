"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallSquare = void 0;
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
exports.SmallSquare = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "small-square", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M100 300V100H300V300zM80 340H320A20 20 0 0 0 340 320V80A20 20 0 0 0 320 60H80A20 20 0 0 0 60 80V320A20 20 0 0 0 80 340" : "M100 220V100H220V220zM80 260H240A20 20 0 0 0 260 240V80A20 20 0 0 0 240 60H80A20 20 0 0 0 60 80V240A20 20 0 0 0 80 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.SmallSquare.displayName = `Blueprint6.Icon.SmallSquare`;
exports.default = exports.SmallSquare;
//# sourceMappingURL=small-square.js.map