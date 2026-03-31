"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectView = void 0;
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
exports.ObjectView = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "object-view", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M100 400H20A20 20 0 0 1 0 380V300H40V360H100zM360 100V40H300V0H380A20 20 0 0 1 400 20V100zM0 100H40V40H100V0H20A20 20 0 0 0 0 20zM300 400H380A20 20 0 0 0 400 380V300H360V360H300zM191 357.5L74.84 294.9600000000001L200 220L325.18 294.9600000000001L210 357.5A19.2 19.2 0 0 1 191 357.5M190 200L62.12 280.08A18 18 0 0 1 60 271.58V146C60 139.2000000000001 63.84 132.9 70.08 129.5200000000001L187.86 61Q188.9 60.4400000000001 190 60zM337.88 280.08A18 18 0 0 0 340 271.58V146C340 139.2000000000001 336.16 132.9 329.92 129.5200000000001L212.14 61Q211.1 60.4400000000001 210 60V200z" : "M20 320A20 20 0 0 1 0 300V240H40V280H80V320zM0 20V80H40V40H80V0H20A20 20 0 0 0 0 20M300 0H240V40H280V80H320V20A20 20 0 0 0 300 0M320 300V240H280V280H240V320H300A20 20 0 0 0 320 300M160 180L250 230L167.84 278.14A16.4 16.4 0 0 1 152.64 278.14L71.4 232.12zM259.1 220Q259.9 217.76 259.9 215.32V118.64A14.2 14.2 0 0 0 252.76 106.36L168 60V163.06zM151.88 165.14L60.8 220A24 24 0 0 1 60 213.84V120.72C60 115.6400000000001 62.72 110.96 67.12 108.44L151.88 60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ObjectView.displayName = `Blueprint6.Icon.ObjectView`;
exports.default = exports.ObjectView;
//# sourceMappingURL=object-view.js.map