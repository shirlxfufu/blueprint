"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
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
exports.Panel = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "panel", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M220 60H340V340H220zM20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0M40 360H360V40H40z" : "M20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0M40 280H280V40H40zM180 60H260V260H180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Panel.displayName = `Blueprint6.Icon.Panel`;
exports.default = exports.Panel;
//# sourceMappingURL=panel.js.map