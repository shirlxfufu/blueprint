"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddApplication = void 0;
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
exports.AddApplication = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "add-application", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 380A20 20 0 0 0 340 380V340H380A20 20 0 0 0 380 300H340V260A20 20 0 0 0 300 260V300H260A20 20 0 0 0 260 340H300zM260 380A60 60 0 0 1 200 320C200 304.6 205.84 290.62 215.38 280H40V60H360V215.38A60 60 0 0 1 380 260A60 60 0 0 1 400 263.5V40C400 29 391 20 380 20H20C9 20 0 29 0 40V360C0 371 9 380 20 380zM210 160C215.6 160 220 155.6 220 150S215.6 140 210 140H70C64.4 140 60 144.4 60 150S64.4 160 70 160zM170 200C175.6 200 180 195.6 180 190S175.6 180 170 180H70C64.4 180 60 184.4 60 190S64.4 200 70 200zM250 240C255.6 240 260 235.6 260 230S255.6 220 250 220H70C64.4 220 60 224.4 60 230S64.4 240 70 240z" : "M260 320A20 20 0 0 1 240 300V280H220A20 20 0 1 1 220 240H240V220A20 20 0 1 1 280 220V240H300A20 20 0 1 1 300 280H280V300A20 20 0 0 1 260 320M175.3 300A60 60 0 0 1 160 260C160 244.62 165.8 230.6 175.3 220H40V60H280V163.46A60 60 0 0 1 317.4000000000001 202.6L317.42 202.58L320 194.08V40C320 29 311 20 300 20H20C9 20 0 29 0 40V280C0 291 9 300 20 300zM170 120C175.6 120 180 115.6 180 110S175.6 100 170 100H70C64.4 100 60 104.4 60 110S64.4 120 70 120zM150 160C155.6 160 160 155.6 160 150S155.6 140 150 140H70C64.4 140 60 144.4 60 150S64.4 160 70 160zM203.48 200C205.96 193 209.68 186.6 214.42 181.06A10 10 0 0 0 210 180H70C64.4 180 60 184.4 60 190S64.4 200 70 200z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.AddApplication.displayName = `Blueprint6.Icon.AddApplication`;
exports.default = exports.AddApplication;
//# sourceMappingURL=add-application.js.map