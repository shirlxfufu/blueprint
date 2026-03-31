"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pulse = void 0;
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
exports.Pulse = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "pulse", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 200H332.4000000000001L298 269H297.8C294.4000000000001 275.4 287.8 280 280 280C271.4 280 264.2000000000001 274.4 261.4 266.8H261.2L206.2 115.4L159.6 363.6H159.2A19.6 19.6 0 0 1 140 380C131.2 380 124 374.2 121.2 366.2H121L65.6 200H20C9 200 0 191 0 180S9 160 20 160H80C88.8 160 96 165.8 98.8 173.8H99L134.6 280.6L180.4 36.4H180.8C182.4 27.2 190.2 20 200 20C208.6 20 215.8 25.6 218.6 33.2H218.8L283 209.6L302.2 171.2H302.4C305.6 164.6 312.2 160 320 160H380C391 160 400 169 400 180S391 200 380 200" : "M300 160H270.8L236.8 211L236.4 210.8A19.6 19.6 0 0 1 220 220C211.4 220 204.2 214.6 201.4 207H201.2L167.4 116.8L139.8 283.2H139.4A19.8 19.8 0 0 1 120 300C111.8 300 104.6 295 101.6 287.8L46.8 160H20C9 160 0 151 0 140S9 120 20 120H60C68.2 120 75.4 125 78.4 132.2L111.4 209.4L140.2 36.8H140.6C142.2 27.4 150 19.9999999999999 160 19.9999999999999C168.6 19.9999999999999 175.8 25.4 178.6 33H178.8L225 156.4L243.4 128.8L243.8 129C247.2 123.8 253 120 260 120H300C311 120 320 129 320 140S311 160 300 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Pulse.displayName = `Blueprint6.Icon.Pulse`;
exports.default = exports.Pulse;
//# sourceMappingURL=pulse.js.map