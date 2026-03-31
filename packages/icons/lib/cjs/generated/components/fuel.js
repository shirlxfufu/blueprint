"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuel = void 0;
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
exports.Fuel = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "fuel", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M43.92 360H0V320H40C46.34 320 52.38 317.2200000000001 56.5 312.4L126.36 230.9L88.9 205.94A20 20 0 0 1 80 189.3V40C80 30 90 20 100 20H380C390 20 400 30 400 40V258Q400 259 399.92 260H400V340S400 360 380 360H220C210 360 200 350 200 340V280L162.4 254.92L89.26 339.3A60 60 0 0 1 43.92 360M360 320V280H240V320z" : "M38.98 300H0V260H40C46.2 260 52 256.78 55.24 251.48L94.54 187.62L67.5 166.02A20 20 0 0 1 60 150.36V42C60 29.86 68.96 20 80 20H300C311.04 20 320 29.84 320 42V280S320 300 300 300H180C170 300 160 290 160 280V240L127.76 214.2L89.1 273A60 60 0 0 1 39 300M280 260V240H200V260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Fuel.displayName = `Blueprint6.Icon.Fuel`;
exports.default = exports.Fuel;
//# sourceMappingURL=fuel.js.map