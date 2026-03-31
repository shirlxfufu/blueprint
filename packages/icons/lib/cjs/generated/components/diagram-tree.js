"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagramTree = void 0;
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
exports.DiagramTree = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "diagram-tree", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 200V100H340V180H220V100H180V180H60V100H20V200A20 20 0 0 0 40 220H180V300H220V220H360A20 20 0 0 0 380 200M20 80H60A20 20 0 0 0 80 60V20A20 20 0 0 0 60 0H20A20 20 0 0 0 0 20V60A20 20 0 0 0 20 80M340 80H380A20 20 0 0 0 400 60V20A20 20 0 0 0 380 0H340A20 20 0 0 0 320 20V60A20 20 0 0 0 340 80M180 80H220A20 20 0 0 0 240 60V20A20 20 0 0 0 220 0H180A20 20 0 0 0 160 20V60A20 20 0 0 0 180 80M180 400H220A20 20 0 0 0 240 380V340A20 20 0 0 0 220 320H180A20 20 0 0 0 160 340V380A20 20 0 0 0 180 400" : "M300 160V100H260V140H180V100H140V140H60V100H20V160A20 20 0 0 0 40 180H140V220H180V180H280A20 20 0 0 0 300 160M20 80H60A20 20 0 0 0 80 60V20A20 20 0 0 0 60 0H20A20 20 0 0 0 0 20V60A20 20 0 0 0 20 80M260 80H300A20 20 0 0 0 320 60V20A20 20 0 0 0 300 0H260A20 20 0 0 0 240 20V60A20 20 0 0 0 260 80M140 80H180A20 20 0 0 0 200 60V20A20 20 0 0 0 180 0H140A20 20 0 0 0 120 20V60A20 20 0 0 0 140 80M140 320H180A20 20 0 0 0 200 300V260A20 20 0 0 0 180 240H140A20 20 0 0 0 120 260V300A20 20 0 0 0 140 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.DiagramTree.displayName = `Blueprint6.Icon.DiagramTree`;
exports.default = exports.DiagramTree;
//# sourceMappingURL=diagram-tree.js.map