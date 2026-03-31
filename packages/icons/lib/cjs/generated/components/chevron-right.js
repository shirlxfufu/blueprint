"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronRight = void 0;
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
exports.ChevronRight = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "chevron-right", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M274.2000000000001 214.2L154.2 334.2000000000001A20.06 20.06 0 0 1 125.8 305.8L231.8 200L126 94.2000000000001C122.2 90.6 120 85.6 120 80A20.06 20.06 0 0 1 154.2 65.8L274.2000000000001 185.8C277.8 189.4 280 194.4 280 200S277.8 210.6 274.2000000000001 214.2" : "M214.2 174.2L134.2 254.2A20.06 20.06 0 0 1 105.8 225.8L171.8 160L106 94.2C102.2 90.6 100 85.6 100 80A20.06 20.06 0 0 1 134.2 65.8L214.2 145.8C217.8 149.4 220 154.4 220 160S217.8 170.6 214.2 174.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ChevronRight.displayName = `Blueprint6.Icon.ChevronRight`;
exports.default = exports.ChevronRight;
//# sourceMappingURL=chevron-right.js.map