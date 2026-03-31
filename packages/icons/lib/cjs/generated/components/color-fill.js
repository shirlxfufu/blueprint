"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorFill = void 0;
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
exports.ColorFill = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "color-fill", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M43.76 220C48.1 230.4 56.22 239.6600000000001 68.28 251.72L160 343.44L283.44 220zM160 400L131.72 371.7200000000001L40 280C20 260 0 237.8 0 200C0 160 20 140 40 120L60 100C80 80 100 60 140 60C180.18 60 198.36 78.26 217.36 97.34L220 100L311.7200000000001 191.72L340 220L311.7200000000001 248.28L188.28 371.72zM370 130L340 180L310 130C303.64 119.4 300 110 300 100C300 80 310 60 340 60S380 80 380 100C380 110 376.36 119.4 370 130M20 40A20 20 0 1 1 20 0H380A20 20 0 1 1 380 40z" : "M61.86 180Q62.36 181.5 63.02 183C65.14 187.96 67.52 190.94 68.28 191.72L140 263.44L223.44 180zM130 60C150 60 180 80 190 90L251.72 151.72L280 180L251.72 208.28L168.28 291.72L140 320L111.72 291.7200000000001L40 220C30 210 20 190 20 170S30 130 40 120L80 80C90 70 110 60 130 60M270 140L292.5 106.66C297.26 99.6 300 93.34 300 86.66C300 73.34 292.5 60 270 60S240 73.34 240 86.66C240 93.34 242.74 99.6 247.5 106.66zM0 20A20 20 0 0 0 20 40H300A20 20 0 1 0 300 0H20A20 20 0 0 0 0 20", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ColorFill.displayName = `Blueprint6.Icon.ColorFill`;
exports.default = exports.ColorFill;
//# sourceMappingURL=color-fill.js.map