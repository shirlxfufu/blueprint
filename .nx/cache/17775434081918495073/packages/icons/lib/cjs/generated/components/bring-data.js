"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BringData = void 0;
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
exports.BringData = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "bring-data", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M360 40A20 20 0 0 0 360 0H40A20 20 0 0 0 40 40zM199.9 339.9C210.9 339.9 219.9 330.9 219.9 319.92V128.24L245.7 154A20.04 20.04 0 0 0 274.1 125.62L214.1 65.7A20.3 20.3 0 0 0 185.7 65.7L125.7 125.64A20.04 20.04 0 0 0 154.1 154.02L179.9 128.22V319.74C179.9 330.74 188.9 339.92 199.9 339.92M320 400A20 20 0 1 0 320 360A20 20 0 0 0 320 400M260 400A20 20 0 1 0 260 360A20 20 0 0 0 260 400M200 400A20 20 0 1 0 200 360A20 20 0 0 0 200 400M140 400A20 20 0 1 0 140 360A20 20 0 0 0 140 400M80 400A20 20 0 1 0 80 360A20 20 0 0 0 80 400" : "M280 40A20 20 0 0 0 280 0H40A20 20 0 0 0 40 40zM159.9 259.9C170.9 259.9 179.9 250.9 179.9 239.92V128.24L205.7 154A20.04 20.04 0 0 0 234.1 125.62L174.1 65.7A20.3 20.3 0 0 0 145.7 65.7L85.7 125.64A20.04 20.04 0 0 0 114.1 154L139.9 128.2V239.74C139.9 250.74 148.9 259.92 159.9 259.92M280 320A20 20 0 1 0 280 280A20 20 0 0 0 280 320M220 320A20 20 0 1 0 220 280A20 20 0 0 0 220 320M160 320A20 20 0 1 0 160 280A20 20 0 0 0 160 320M100 320A20 20 0 1 0 100 280A20 20 0 0 0 100 320M40 320A20 20 0 1 0 40 280A20 20 0 0 0 40 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.BringData.displayName = `Blueprint6.Icon.BringData`;
exports.default = exports.BringData;
//# sourceMappingURL=bring-data.js.map