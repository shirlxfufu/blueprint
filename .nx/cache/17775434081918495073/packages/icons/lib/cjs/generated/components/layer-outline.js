"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerOutline = void 0;
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
exports.LayerOutline = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "layer-outline", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M190.28 317.48L10.28 217.48A20 20 0 0 1 10.28 182.52L190.28 82.52A20 20 0 0 1 209.72 82.52L389.7199999999999 182.52A20 20 0 0 1 389.7199999999999 217.48L209.72 317.48A20 20 0 0 1 190.28 317.48M200 277.12L338.8 200.02L200 122.9L61.18 200.02z" : "M150.08 257.36L10.08 177.36A20 20 0 0 1 10.08 142.64L150.08 62.64A20 20 0 0 1 169.92 62.64L309.92 142.64A20 20 0 0 1 309.92 177.36L169.92 257.36A20 20 0 0 1 150.08 257.36M160 216.96L259.6600000000001 160L160 103.06L60.32 160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LayerOutline.displayName = `Blueprint6.Icon.LayerOutline`;
exports.default = exports.LayerOutline;
//# sourceMappingURL=layer-outline.js.map