"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hurricane = void 0;
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
exports.Hurricane = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "hurricane", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 120C32.96 104.5 60 100 80 100C60 120 40 162.24 40 200V200.9C40 296.6 124.02 380 223.44 380C287.56 380 361.4400000000001 366.66 400 280C367.04 295.5 340 300 320 300C340 280 360 237.76 360 200V199.1C360 103.4 275.98 20 176.56 20C112.44 20 38.56 33.34 0 120M200 260A60 60 0 1 1 200 140A60 60 0 0 1 200 260" : "M70 80Q72.8 80 75.54 80.1A119.6 119.6 0 0 0 40.12 159.9L40 160L40.02 162.78L40 165.34C40 188.02 46.28 209.2 57.2 227.3A140 140 0 0 0 180 300C229.88 300 300 290 320 220C301.5 229.26 272 238.52 254.08 239.84A119.4 119.4 0 0 0 279.88 160.08L280 160A140 140 0 0 0 140 20C90.12 20 20 30 0 100C20 90 52.8 80 70 80M160 200A40 40 0 1 1 160 120A40 40 0 0 1 160 200", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Hurricane.displayName = `Blueprint6.Icon.Hurricane`;
exports.default = exports.Hurricane;
//# sourceMappingURL=hurricane.js.map