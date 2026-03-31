"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcludeRow = void 0;
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
exports.ExcludeRow = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "exclude-row", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M20 340H380C391 340 400 349 400 360S391 380 380 380H20C9 380 0 371 0 360S9 340 20 340M0 140A20.06 20.06 0 0 1 34.2 125.8L80 171.8L125.8 126C129.4 122.2000000000001 134.4 120 140 120A20.06 20.06 0 0 1 154.2 154.2L108.2 200L154 245.8C157.8 249.4 160 254.4 160 260A20.06 20.06 0 0 1 125.8 274.2L80 228.2L34.2 274.2A20.06 20.06 0 0 1 5.8 245.8L51.8 200L6 154.2C2.2 150.6 0 145.6 0 140M360 240H220C198 240 180 222 180 200S198 160 220 160H360C382 160 400 178 400 200S382 240 360 240M380 60H20C9 60 0 51 0 40S9 20 20 20H380C391 20 400 29 400 40S391 60 380 60" : "M0 120A20.06 20.06 0 0 1 34.2 105.8L60 131.8L85.8 106C89.4 102.2 94.4 100 100 100A20.06 20.06 0 0 1 114.2 134.2L88.2 160L114 185.8C117.8 189.4 120 194.4 120 200A20.06 20.06 0 0 1 85.8 214.2L60 188.2L34.2 214.2A20.06 20.06 0 0 1 5.8 185.8L31.8 160L5.8 134.2C2.2 130.6 0 125.6 0 120M20 260H300C311 260 320 269 320 280S311 300 300 300H20C9 300 0 291 0 280S9 260 20 260M300 60H20C9 60 0 51 0 40S9 20 20 20H300C311 20 320 29 320 40S311 60 300 60M280 200H180C158 200 140 182 140 160S158 120 180 120H280C302 120 320 138 320 160S302 200 280 200", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ExcludeRow.displayName = `Blueprint6.Icon.ExcludeRow`;
exports.default = exports.ExcludeRow;
//# sourceMappingURL=exclude-row.js.map