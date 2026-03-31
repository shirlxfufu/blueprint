"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseAll = void 0;
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
exports.CollapseAll = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "collapse-all", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M185.8 225.8C189.4 222.2 194.4 220 200 220S210.6 222.2 214.2 225.8L334.2000000000001 345.8A20.06 20.06 0 0 1 305.8 374.2L200 268.2L94.2 374.2A20.06 20.06 0 0 1 65.8 345.8zM214.2 174.2C210.6 177.8 205.6 180 200 180S189.4 177.8 185.8 174.2L65.8 54.2A20.06 20.06 0 0 1 94.2 25.8L200 131.8L305.8 26C309.4 22.2 314.4 20 320 20A20.06 20.06 0 0 1 334.2000000000001 54.2z" : "M145.8 185.8C149.4 182.2 154.4 180 160 180S170.6 182.2 174.2 185.8L254.2 265.8A20.06 20.06 0 0 1 225.8 294.2L160 228.2L94.2 294.2A20.06 20.06 0 0 1 65.8 265.8zM174.2 134.2C170.6 137.8 165.6 140 160 140S149.4 137.8 145.8 134.2L65.8 54.2A20.06 20.06 0 0 1 94.2 25.8L160 91.8L225.8 26C229.4 22.2 234.4 20 240 20A20.06 20.06 0 0 1 254.2 54.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.CollapseAll.displayName = `Blueprint6.Icon.CollapseAll`;
exports.default = exports.CollapseAll;
//# sourceMappingURL=collapse-all.js.map