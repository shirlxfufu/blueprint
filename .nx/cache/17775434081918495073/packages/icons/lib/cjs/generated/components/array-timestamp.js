"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayTimestamp = void 0;
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
exports.ArrayTimestamp = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "array-timestamp", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 400A20 20 0 0 0 399.86 382.34L400 380V20A20 20 0 0 0 382.3400000000001 0.14L380 0H300A20 20 0 0 0 297.66 39.86L300 40H360V360H300A20 20 0 0 0 280.14 377.6600000000001L280 380A20 20 0 0 0 297.66 399.86L300 400zM100 400A20 20 0 0 0 102.34 360.14L100 360H40V40H100A20 20 0 0 0 119.86 22.34L120 20A20 20 0 0 0 102.34 0.14L100 0H20A20 20 0 0 0 0.14 17.66L0 20V380A20 20 0 0 0 17.66 399.86L20 400zM200 320A120 120 0 1 0 200 80A120 120 0 0 0 200 320M200 300A100 100 0 1 1 200 100A100 100 0 0 1 200 300M257.08 257.0800000000001A10 10 0 0 0 258.22 244.32L257.08 242.92L207.08 192.92A10 10 0 0 0 194.32 191.78L192.92 192.92L162.92 222.92A10 10 0 0 0 175.68 238.2200000000001L177.08 237.08L200 214.14L242.92 257.0800000000001A10 10 0 0 0 257.0800000000001 257.0800000000001" : "M300 320A20 20 0 0 0 319.86 302.34L320 300V20A20 20 0 0 0 302.3400000000001 0.14L300 0H240A20 20 0 0 0 237.66 39.86L240 40H280V280H240A20 20 0 0 0 220.14 297.6600000000001L220 300A20 20 0 0 0 237.66 319.86L240 320zM80 320A20 20 0 0 0 82.34 280.14L80 280H40V40H80A20 20 0 0 0 99.86 22.34L100 20A20 20 0 0 0 82.34 0.14L80 0H20A20 20 0 0 0 0.14 17.66L0 20V300A20 20 0 0 0 17.66 319.86L20 320zM160 260A100 100 0 1 0 160 60A100 100 0 0 0 160 260M160 240A80 80 0 1 1 160 80A80 80 0 0 1 160 240M207.08 207.08A10 10 0 0 0 208.22 194.32L207.08 192.92L167.08 152.92A10 10 0 0 0 154.32 151.78L152.92 152.92L132.92 172.92A10 10 0 0 0 145.68 188.22L147.08 187.08L160 174.14L192.92 207.08A10 10 0 0 0 207.08 207.08", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ArrayTimestamp.displayName = `Blueprint6.Icon.ArrayTimestamp`;
exports.default = exports.ArrayTimestamp;
//# sourceMappingURL=array-timestamp.js.map