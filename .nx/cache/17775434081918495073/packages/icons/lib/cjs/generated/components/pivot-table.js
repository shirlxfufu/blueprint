"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PivotTable = void 0;
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
exports.PivotTable = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "pivot-table", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M60 300H20C9 300 0 291 0 280V20C0 9 9 0 20 0H60C71 0 80 9 80 20V280C80 291 71 300 60 300M60 400H20C9 400 0 391 0 380V340C0 329 9 320 20 320H60C71 320 80 329 80 340V380C80 391 71 400 60 400M334.2000000000001 294.2C330.6 297.8 325.6 300 320 300S309.4000000000001 297.8 305.8 294.2L245.8 234.2A20.06 20.06 0 0 1 274.2 205.8L300 231.8V180C300 135.8 264.2000000000001 100 220 100H168.2L194 125.8C197.8 129.4 200 134.4 200 140A20.06 20.06 0 0 1 165.8 154.2L105.8 94.2000000000001C102.2 90.6 100 85.6 100 80S102.2 69.4 105.8 65.8L165.8 5.8A20.06 20.06 0 0 1 194.2 34.2L168.2 60H220C286.2 60 340 113.8 340 180V231.8L365.8 206C369.4 202.2 374.4 200 380 200A20.06 20.06 0 0 1 394.2000000000001 234.2zM380 400H120C109 400 100 391 100 380V340C100 329 109 320 120 320H380C391 320 400 329 400 340V380C400 391 391 400 380 400" : "M40 240H20C9 240 0 231 0 220V20C0 9 9 0 20 0H40C51 0 60 9 60 20V220C60 231 51 240 40 240M40 320H20C9 320 0 311 0 300V280C0 269 9 260 20 260H40C51 260 60 269 60 280V300C60 311 51 320 40 320M274.2000000000001 234.2C270.6 237.8 265.6 240 260 240S249.4 237.8 245.8 234.2L205.8 194.2A20.06 20.06 0 0 1 234.2 165.8L240 171.8V140C240 106.8 213.2 80 180 80H148.2L154 85.8C157.8 89.4 160 94.4 160 100A20.06 20.06 0 0 1 125.8 114.2L85.8 74.2C82.2 70.6 80 65.6 80 60S82.2 49.4 85.8 45.8L125.8 5.8A20.06 20.06 0 0 1 154.2 34.2L148.2 39.9999999999999H180C235.2 39.9999999999999 280 84.8 280 140V171.8L285.8 166C289.4 162.2 294.4 160 300 160A20.06 20.06 0 0 1 314.2000000000001 194.2zM300 320H100C89 320 80 311 80 300V280C80 269 89 260 100 260H300C311 260 320 269 320 280V300C320 311 311 320 300 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.PivotTable.displayName = `Blueprint6.Icon.PivotTable`;
exports.default = exports.PivotTable;
//# sourceMappingURL=pivot-table.js.map