"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManyToOne = void 0;
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
exports.ManyToOne = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "many-to-one", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M60 360A20 20 0 1 1 60 320A20 20 0 0 1 60 360M60 280A60 60 0 1 0 116.76 359.52C129.42 358.68 146.58 356.36 163.7 350C191.74 339.54 221.06 317.5 229.62 273.86C234.8 247.5 251.32 234.54 270.26 227.5Q277.32 224.86 284.7 223.3A60 60 0 1 0 284.7 176.7C279.94 175.66 275.06 174.3 270.26 172.5C251.32 165.46 234.8 152.5 229.62 126.14C221.04 82.4999999999999 191.74 60.46 163.7 50C146.58 43.64 129.42 41.32 116.76 40.48A60.02 60.02 0 1 0 116.38 80.56A124 124 0 0 1 149.74 87.5C168.68 94.54 185.2000000000001 107.5 190.3800000000001 133.86C196.84 166.74 215.06 187.36 235.6600000000001 200C215.06 212.64 196.84 233.26 190.3800000000001 266.14C185.2000000000001 292.5 168.68 305.4600000000001 149.7400000000001 312.5A124 124 0 0 1 116.4 319.44A60 60 0 0 0 60 280M320 200A20 20 0 1 1 360 200A20 20 0 0 1 320 200M40 60A20 20 0 1 1 80 60A20 20 0 0 1 40 60" : "M60 280A20 20 0 1 1 60 240A20 20 0 0 1 60 280M60 320C87.7 320 111.02 301.2 117.92 275.7Q122.98 274.38 128.12 272.54C149.64 264.6600000000001 172.86 247.7 179.62 213.94C182.84 197.76 192.9 189.72 205.48 185.08A60 60 0 1 0 205.48 134.92C192.9 130.28 182.84 122.24 179.62 106.08C172.86 72.28 149.64 55.34 128.12 47.48A100 100 0 0 0 117.92 44.3A60.02 60.02 0 0 0 0 60A60 60 0 0 0 114.52 85.08C127.1 89.72 137.16 97.76 140.38 113.92C144.7 135.44 155.68 150.12 168.64 160C155.68 169.86 144.7 184.56 140.38 206.08C137.16 222.24 127.1 230.28 114.52 234.92A60 60 0 1 0 60 320M80 60A20 20 0 1 1 40 60A20 20 0 0 1 80 60M240 160A20 20 0 1 1 280 160A20 20 0 0 1 240 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ManyToOne.displayName = `Blueprint6.Icon.ManyToOne`;
exports.default = exports.ManyToOne;
//# sourceMappingURL=many-to-one.js.map