"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buggy = void 0;
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
exports.Buggy = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "buggy", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M316.7200000000001 379.7200000000001A20 20 0 0 0 337.8800000000001 368.94L387.5200000000001 269.7000000000001L387.92 269.78A10 10 0 0 0 400 259.98V169.98A10 10 0 0 0 390 159.98H311.4A30 30 0 0 1 286.44 146.64L258.32 104.44A10 10 0 0 0 250 100H160A10 10 0 0 0 152.92 102.92L104.64 151.22A30 30 0 0 1 83.44 160H10A10 10 0 0 0 0 170V230A10 10 0 0 0 10 240H26.46L61.44 327.4A20 20 0 0 0 76.72 339.7zM322.5 310.28L291.9600000000001 249.22L347.12 261.04zM290 334.7200000000001L237.26 325.94L253.76 285.08L258.8 272.32zM94.4 302.12L69.54 240H90A10 10 0 0 0 97.08 237.06L154.14 180H204.64L234.58 224.9L216.6 270.3L196.84 319.2000000000001zM60 20A60 60 0 1 0 60 140A60 60 0 0 0 60 20M340 20A60 60 0 1 0 340 140A60 60 0 0 0 340 20" : "M278.58 307.42L313.8400000000001 219.22A10 10 0 0 0 320 210V130A10 10 0 0 0 310 120H250A30 30 0 0 1 226 108L208 84A10 10 0 0 0 200 80H130A10 10 0 0 0 123.76 82.2L84.72 113.4A30 30 0 0 1 65.96 120H10A10 10 0 0 0 0 130V190A10 10 0 0 0 8.62 199.9L62.84 290.3A20 20 0 0 0 77.8 299.8800000000001L257.8 319.8800000000001A20 20 0 0 0 278.56 307.42M247.2 278.12L247.08 278.44L183.76 271.4L206.18 209.74zM256.54 254.8L223.56 199.84L273.76 211.72zM192.06 190.08L163.32 269.14L92.06 261.2200000000001L55.32 200H70A10 10 0 0 0 77.34 196.8L124.36 146H162.64L191.68 189.54zM50 0A50 50 0 1 0 50 100A50 50 0 0 0 50 0M270 0A50 50 0 1 0 270 100A50 50 0 0 0 270 0", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Buggy.displayName = `Blueprint6.Icon.Buggy`;
exports.default = exports.Buggy;
//# sourceMappingURL=buggy.js.map