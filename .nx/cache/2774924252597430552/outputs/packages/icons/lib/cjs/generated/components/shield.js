"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shield = void 0;
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
exports.Shield = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "shield", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M203.94 23.02A15 15 0 0 0 196.06 23.02L200 37.5zM322.5 310H77.5V225C77.5 155.34 109.14 112.46 140.74 86.6A200 200 0 0 1 199.06 53.56L200 53.26L200.94 53.56C204.34 54.76 209.28 56.64 215.28 59.36C227.2800000000001 64.82 243.3 73.56 259.26 86.6C290.86 112.46 322.5 155.34 322.5 225zM352.5 225C352.5 144.66 315.38 93.8 278.24 63.4A232.0000000000001 232.0000000000001 0 0 0 227.7 32.04A200 200 0 0 0 205.98 23.64L204.58 23.2L204.0199999999999 23.04H203.94L200 37.48L196.06 23L196.02 23.02H195.98L195.42 23.18L194.02 23.6199999999999A200 200 0 0 0 172.3 32.02A232.0000000000001 232.0000000000001 0 0 0 121.76 63.38C84.62 93.78 47.5 144.64 47.5 224.98V312.5C47.5 319.8 50.38 326.8 55.54 331.96L57.58 333.76C62.48 337.76 68.62 340 75 340H325C331.38 340 337.5200000000001 337.78 342.42 333.76L344.46 331.96L346.26 329.92C350.26 325.02 352.5 318.88 352.5 312.5zM191.4 224.8A15 15 0 0 0 208.6 224.8L324.2000000000001 143.88A15 15 0 0 0 306.98 119.28L199.98 194.2L93.02 119.3A15 15 0 0 0 75.82 143.9z" : "M163.94 15.52A15 15 0 0 0 156.06 15.52L160 30zM153.42 183.48A15 15 0 0 0 168.6 182.28L246.18 128A148 148 0 0 1 255 180V245H65V180C65 159.94 68.36 142.74 73.8 128L151.4 182.28zM87.58 101A136 136 0 0 1 114.5 71.6A160 160 0 0 1 149.02 50.2C153.58 48.12 157.38 46.7 160 45.76C162.62 46.68 166.4 48.12 170.98 50.2A160 160 0 0 1 205.5 71.6A136 136 0 0 1 232.4 101L160 151.7zM285 180C285 147.12 277.32 120.3 265.86 98.6L265.22 97.44A164 164 0 0 0 224.5 48.4A190 190 0 0 0 169.7 17.36A120 120 0 0 0 164.5 15.68L164.14 15.58L164.02 15.54H163.94L160 30L156.06 15.52L156.02 15.54H155.98L155.86 15.58L155.5 15.68L154.34 16.04A160 160 0 0 0 136.6 22.92A190 190 0 0 0 95.5 48.4A164 164 0 0 0 54.12 98.6C42.66 120.3 35 147.12 35 180V250A25 25 0 0 0 60 275H260A25 25 0 0 0 285 250z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Shield.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Shield.displayName = `Blueprint6.Icon.Shield`;
exports.default = exports.Shield;
//# sourceMappingURL=shield.js.map