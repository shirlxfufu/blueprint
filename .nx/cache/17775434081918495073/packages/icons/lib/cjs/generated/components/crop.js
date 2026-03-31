"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crop = void 0;
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
exports.Crop = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "crop", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M280 20A20 20 0 1 1 320 20V80H380A20 20 0 1 1 380 120H120V380A20 20 0 1 1 80 380V320H20A20 20 0 1 1 20 280H80V100A20 20 0 0 1 100 80H280zM300 320H160V280H280V160H320V300A20 20 0 0 1 300 320" : "M220 20A20 20 0 1 1 260 20V60H300A20 20 0 1 1 300 100H100V300A20 20 0 0 1 60 300V260H20A20 20 0 1 1 20 220H60V80A20 20 0 0 1 80 60H220zM240 260H120V220H220V120H260V240A20 20 0 0 1 240 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Crop.displayName = `Blueprint6.Icon.Crop`;
exports.default = exports.Crop;
//# sourceMappingURL=crop.js.map