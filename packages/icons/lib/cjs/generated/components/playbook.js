"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playbook = void 0;
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
exports.Playbook = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "playbook", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M34.14 394.14A20 20 0 0 1 5.86 365.86L41.72 330L5.86 294.14A20 20 0 0 1 34.14 265.86L70 301.7200000000001L105.86 265.86A20 20 0 0 1 134.14 294.14L98.28 330L134.14 365.86A20 20 0 0 1 105.86 394.14L70 358.28zM320 0A80 80 0 1 1 320 160A80 80 0 0 1 320 0M320 40A40 40 0 1 1 320 120A40 40 0 0 1 320 40M365.8 286L320 331.8V240A60 60 0 0 0 260 180H80A20 20 0 0 1 60 160V20A20 20 0 1 0 20 20V160A60 60 0 0 0 80 220H260A20 20 0 0 1 280 240V331.8L234.2 285.8A20.06 20.06 0 0 0 205.8 314.2L285.8 394.2C289.4000000000001 397.8 294.4000000000001 400 300 400S310.6 397.8 314.2000000000001 394.2L394.2000000000001 314.2A20.06 20.06 0 0 0 380 280C374.4 280 369.4 282.2 365.8 286" : "M85.86 314.14A20 20 0 0 0 114.14 285.86L88.28 260L114.14 234.14A20 20 0 0 0 85.86 205.86L60 231.72L34.14 205.86A20 20 0 0 0 5.86 234.14L31.72 260L5.86 285.86A20 20 0 0 0 34.14 314.14L60 288.28zM285.8 225.8L260 251.8V200A60 60 0 0 0 200 140H80A20 20 0 0 1 60 120V20A20 20 0 1 0 20 20V120A60 60 0 0 0 80 180H200A20 20 0 0 1 220 200V251.8L194.2 226C190.6 222.2 185.6 220 180 220A20.06 20.06 0 0 0 165.8 254.2L225.8 314.2C229.4 317.8 234.4 320 240 320S250.6 317.8 254.2 314.2L314.2000000000001 254.2A20.06 20.06 0 0 0 285.8 225.8M320 60A60 60 0 1 0 200 60A60 60 0 0 0 320 60M280 60A20 20 0 1 0 240 60A20 20 0 0 0 280 60", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Playbook.displayName = `Blueprint6.Icon.Playbook`;
exports.default = exports.Playbook;
//# sourceMappingURL=playbook.js.map