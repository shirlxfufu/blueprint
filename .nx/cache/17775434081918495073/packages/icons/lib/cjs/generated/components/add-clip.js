"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddClip = void 0;
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
exports.AddClip = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "add-clip", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 400A20 20 0 0 0 320 380V320H380A20 20 0 1 0 380 280H320V220A20 20 0 1 0 280 220V280H220A20 20 0 1 0 220 320H280V380A20 20 0 0 0 300 400M20 320A20 20 0 0 1 0 300V220A20 20 0 0 1 40 220V280H100A20 20 0 0 1 100 320zM0 20A20 20 0 0 1 20 0H100A20 20 0 1 1 100 40H40V100A20 20 0 1 1 0 100zM300 0H220A20 20 0 1 0 220 40H280V100A20 20 0 1 0 320 100V20A20 20 0 0 0 300 0M160 100A60 60 0 1 1 160 220A60 60 0 0 1 160 100" : "M240 320A20 20 0 0 1 220 300V260H180A20 20 0 0 1 180 220H220V180A20 20 0 1 1 260 180V220H300A20 20 0 1 1 300 260H260V300A20 20 0 0 1 240 320M0 240A20 20 0 0 0 20 260H90A20 20 0 0 0 90 220H40V180A20 20 0 0 0 0 180zM20 0A20 20 0 0 0 0 20V80A20 20 0 1 0 40 80V40H90A20 20 0 1 0 90 0zM240 0A20 20 0 0 1 260 20V80A20 20 0 1 1 220 80V40H180A20 20 0 1 1 180 0zM130 80A50 50 0 1 1 130 180A50 50 0 0 1 130 80", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.AddClip.displayName = `Blueprint6.Icon.AddClip`;
exports.default = exports.AddClip;
//# sourceMappingURL=add-clip.js.map