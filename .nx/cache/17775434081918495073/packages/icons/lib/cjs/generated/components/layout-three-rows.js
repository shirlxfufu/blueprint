"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutThreeRows = void 0;
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
exports.LayoutThreeRows = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "layout-three-rows", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 380A20 20 0 0 0 20 400H380A20 20 0 0 0 400 380V320A20 20 0 0 0 380 300H20A20 20 0 0 0 0 320zM0 240A20 20 0 0 0 20 260H380A20 20 0 0 0 400 240V160A20 20 0 0 0 380 140H20A20 20 0 0 0 0 160zM0 80A20 20 0 0 0 20 100H380A20 20 0 0 0 400 80V20A20 20 0 0 0 380 0H20A20 20 0 0 0 0 20z" : "M300 80A20 20 0 0 0 320 60V20A20 20 0 0 0 300 0H20A20 20 0 0 0 0 20V60A20 20 0 0 0 20 80zM300 200A20 20 0 0 0 320 180V140A20 20 0 0 0 300 120H20A20 20 0 0 0 0 140V180A20 20 0 0 0 20 200zM300 320A20 20 0 0 0 320 300V260A20 20 0 0 0 300 240H20A20 20 0 0 0 0 260V300A20 20 0 0 0 20 320z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LayoutThreeRows.displayName = `Blueprint6.Icon.LayoutThreeRows`;
exports.default = exports.LayoutThreeRows;
//# sourceMappingURL=layout-three-rows.js.map