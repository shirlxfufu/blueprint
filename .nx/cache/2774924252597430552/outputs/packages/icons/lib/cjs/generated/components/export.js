"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Export = void 0;
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
exports.Export = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "export", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M337.5 190A15 15 0 0 0 352.5 175V75A15 15 0 0 0 337.5 60H62.5A15 15 0 0 0 47.5 75V175A15 15 0 0 0 77.5 175V90H322.5V175A15 15 0 0 0 337.5 190M200 365Q201.36 365 202.64 364.76L202.96 364.7L203.76 364.48Q204.76 364.24 205.72 363.88Q206.6 363.4600000000001 207.38 362.98Q209.12 362.04 210.6 360.6L273.1 298.1A15 15 0 1 0 251.9 276.9L215 313.78V175A15 15 0 0 0 185 175V313.8L148.1 276.88A15 15 0 1 0 126.9 298.08L189.4 360.6A16 16 0 0 0 192.6 363Q193.34 363.46 194.16 363.82L194.36 363.9Q195.28 364.26 196.24 364.48L197.02 364.7L197.34 364.76A20 20 0 0 0 200 365" : "M270 155A15 15 0 0 0 285 140V60A15 15 0 0 0 270 45H50A15 15 0 0 0 35 60V140A15 15 0 0 0 65 140V75H255V140A15 15 0 0 0 270 155M160 295Q161.36 295 162.64 294.76L162.96 294.7L163.76 294.48Q164.76 294.24 165.72 293.88Q166.6 293.46 167.38 292.98Q169.12 292.04 170.6 290.6L220.6 240.6A15 15 0 1 0 199.4 219.4L175 243.8V140A15 15 0 0 0 145 140V243.8L120.6 219.4A15 15 0 1 0 99.4 240.6L149.4 290.6A16 16 0 0 0 152.6 293Q153.34 293.46 154.16 293.82L154.36 293.9Q155.28 294.26 156.24 294.48L157.02 294.7L157.34 294.76A20 20 0 0 0 160 295", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Export.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Export.displayName = `Blueprint6.Icon.Export`;
exports.default = exports.Export;
//# sourceMappingURL=export.js.map