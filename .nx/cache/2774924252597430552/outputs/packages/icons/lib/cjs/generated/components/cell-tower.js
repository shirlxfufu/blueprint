"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellTower = void 0;
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
exports.CellTower = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "cell-tower", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 271.26A15 15 0 0 0 213.34 263.12L325.8400000000001 44.36A15 15 0 0 0 299.1600000000001 30.66L200 223.46L100.84 30.66A15 15 0 0 0 74.16 44.36L186.66 263.12A15 15 0 0 0 200 271.26M287.5 96.26A15 15 0 0 0 287.5 66.2600000000001H112.5A15 15 0 0 0 112.5 96.2600000000001zM199.2 333.8A77.6 77.6 0 0 0 269.3200000000001 290.92A15 15 0 1 0 242.48 277.52A47.48 47.48 0 0 1 157.08 276.64A15 15 0 0 0 129.96 289.48A77.6 77.6 0 0 0 199.2 333.8M200 389.98A140 140 0 0 0 318.8 175.9A15 15 0 0 0 293.3400000000001 191.78A110 110 0 1 1 106.66 191.78A15 15 0 0 0 81.2000000000001 175.9A140 140 0 0 0 200 390M257.86 158.76A15 15 0 0 0 257.86 128.76H142.14A15 15 0 0 0 142.14 158.76z" : "M160 220A15 15 0 0 0 173.34 211.86L263.34 36.86A15 15 0 0 0 236.66 23.14L160 172.2L83.34 23.14A15 15 0 0 0 56.66 36.86L146.66 211.86A15 15 0 0 0 160 220M230 80A15 15 0 0 0 230 50H90A15 15 0 0 0 90 80zM159.32 270A65 65 0 0 0 218.16 234.06A15 15 0 0 0 191.3 220.66A35 35 0 0 1 128.36 220.02A15 15 0 0 0 101.26 232.84A65 65 0 0 0 159.32 270.02M160 314.98A115 115 0 0 0 257.6 139.14A15 15 0 0 0 232.12 155A85 85 0 0 1 160 285A85.02 85.02 0 0 1 87.86 155A15 15 0 0 0 62.4 139.14A115.04 115.04 0 0 0 160 314.98M206.28 130A15 15 0 0 0 206.28 100H113.72A15 15 0 0 0 113.72 130z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.CellTower.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.CellTower.displayName = `Blueprint6.Icon.CellTower`;
exports.default = exports.CellTower;
//# sourceMappingURL=cell-tower.js.map