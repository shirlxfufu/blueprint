"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutLinear = void 0;
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
exports.LayoutLinear = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "layout-linear", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M85 87.5A22.5 22.5 0 1 1 40 87.5A22.5 22.5 0 0 1 85 87.5M115 87.5A52.5 52.5 0 1 0 10 87.5A52.5 52.5 0 0 0 115 87.5M172.5 250A22.5 22.5 0 1 1 127.5 250A22.5 22.5 0 0 1 172.5 250M202.5 250A52.5 52.5 0 1 0 97.5 250A52.5 52.5 0 0 0 202.5 250M272.5 150A22.5 22.5 0 1 1 227.5 150A22.5 22.5 0 0 1 272.5 150M302.5 150A52.5 52.5 0 1 0 197.5 150A52.5 52.5 0 0 0 302.5 150M360 312.5A22.5 22.5 0 1 1 315 312.5A22.5 22.5 0 0 1 360 312.5M390 312.5A52.5 52.5 0 1 0 285 312.5A52.5 52.5 0 0 0 390 312.5M119 224.08A15 15 0 1 0 145.4 209.88L93.5 113.4A15 15 0 1 0 67.1 127.62zM165.9 234.1A15 15 0 0 0 187.12 234.1L234.1 187.12A15 15 0 0 0 212.88 165.92L165.9 212.86A15 15 0 0 0 165.9 234.0600000000001M306.52 286.6A15 15 0 1 0 332.92 272.38L280.98 175.9A15 15 0 1 0 254.58 190.12z" : "M65 70A15 15 0 1 1 35 70A15 15 0 0 1 65 70M215 120A15 15 0 1 1 185 120A15 15 0 0 1 215 120M135 200A15 15 0 1 1 105 200A15 15 0 0 1 135 200M285 250A15 15 0 1 1 255 250A15 15 0 0 1 285 250M315 250A45 45 0 0 0 270 205A40 40 0 0 0 263.1 205.6L233.3 150.2A45 45 0 1 0 159.42 139.38L139.36 159.44C133.48 156.64 126.94 155 120 155A40 40 0 0 0 113.1 155.6L83.3 100.2A45 45 0 1 0 56.88 114.44L86.68 169.84A45 45 0 1 0 165 200C165 193.04 163.38 186.5 160.56 180.62L180.62 160.6A44.8 44.8 0 0 0 206.88 164.46L236.6800000000001 219.86A45 45 0 1 0 315 250", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LayoutLinear.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.LayoutLinear.displayName = `Blueprint6.Icon.LayoutLinear`;
exports.default = exports.LayoutLinear;
//# sourceMappingURL=layout-linear.js.map