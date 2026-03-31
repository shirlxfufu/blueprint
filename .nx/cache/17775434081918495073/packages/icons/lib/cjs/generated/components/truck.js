"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
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
exports.Truck = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "truck", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M320 400A20 20 0 0 0 340 380V160A20 20 0 0 0 360 140V80H370A10 10 0 0 0 380 70V50A10 10 0 0 0 370 40H340V20A20 20 0 0 0 320 0H300A20 20 0 0 0 280 20V40H120V20A20 20 0 0 0 100 0H80A20 20 0 0 0 60 20V40H30A10 10 0 0 0 20 50V70A10 10 0 0 0 30 80H40V140A20 20 0 0 0 60 160V380A20 20 0 1 0 100 380V320A40 40 0 0 0 140 360H260A40 40 0 0 0 300 320V380A20 20 0 0 0 320 400M240 200H160A20 20 0 0 1 140 180V100A20 20 0 0 1 160 80H240A20 20 0 0 1 260 100V180A20 20 0 0 1 240 200M100 120H80A20 20 0 0 1 80 80H100A20 20 0 0 1 100 120M320 120H300A20 20 0 0 1 300 80H320A20 20 0 0 1 320 120M230 120A10 10 0 1 0 230 100H170L168.2 100.16A10 10 0 0 0 170 120zM230 150A10 10 0 1 0 230 130H170L168.2 130.16A10 10 0 0 0 170 150zM230 180A10 10 0 1 0 230 160H170L168.2 160.16A10 10 0 0 0 170 180zM280 300H120V240H280z" : "M250 320A10 10 0 0 0 260 310V140A20 20 0 0 0 280 120V80H290A10 10 0 0 0 300 70V50A10 10 0 0 0 290 40H260V20A20 20 0 0 0 220 20V40H100V20A20 20 0 0 0 60 20V40H30A10 10 0 0 0 20 50V70A10 10 0 0 0 30 80H40V120A20 20 0 0 0 60 140V310A10 10 0 0 0 80 310V260A40 40 0 0 0 120 300H200A40 40 0 0 0 240 260V310A10 10 0 0 0 250 320M180 160H140A20 20 0 0 1 120 140V100A20 20 0 0 1 140 80H180A20 20 0 0 1 200 100V140A20 20 0 0 1 180 160M250 100H230A10 10 0 1 1 230 80H250A10 10 0 1 1 250 100M90 100H70A10 10 0 1 1 70 80H90A10 10 0 1 1 90 100M180 140A10 10 0 0 0 190 130V110L189.84 108.2A10 10 0 0 0 180 100H140L138.2 100.16A10 10 0 0 0 130 110V130L130.16 131.8A10 10 0 0 0 140 140zM220 240H100V200H220z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Truck.displayName = `Blueprint6.Icon.Truck`;
exports.default = exports.Truck;
//# sourceMappingURL=truck.js.map