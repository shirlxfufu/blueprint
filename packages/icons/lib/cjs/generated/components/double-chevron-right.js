"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleChevronRight = void 0;
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
exports.DoubleChevronRight = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "double-chevron-right", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M220 200C220 205.6 217.8 210.6 214.2 214.2L94.2 334.2000000000001A20.06 20.06 0 0 1 65.8 305.8L171.8 200L66 94.2000000000001C62.2 90.6 60 85.6 60 80A20.06 20.06 0 0 1 94.2 65.8L214.2 185.8C217.8 189.4 220 194.4 220 200M334.2000000000001 214.2L214.2 334.2000000000001A20.06 20.06 0 0 1 185.8 305.8L291.8 200L186 94.2000000000001C182.2 90.6 180 85.6 180 80A20.06 20.06 0 0 1 214.2 65.8L334.2000000000001 185.8C337.8 189.4 340 194.4 340 200S337.8 210.6 334.2000000000001 214.2" : "M180 160C180 165.6 177.8 170.6 174.2 174.2L94.2 254.2A20.06 20.06 0 0 1 65.8 225.8L131.8 160L66 94.2C62.2 90.6 60 85.6 60 80A20.06 20.06 0 0 1 94.2 65.8L174.2 145.8C177.8 149.4 180 154.4 180 160M274.2000000000001 174.2L194.2 254.2A20.06 20.06 0 0 1 165.8 225.8L231.8 160L166 94.2C162.2 90.6 160 85.6 160 80A20.06 20.06 0 0 1 194.2 65.8L274.2000000000001 145.8C277.8 149.4 280 154.4 280 160S277.8 170.6 274.2000000000001 174.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.DoubleChevronRight.displayName = `Blueprint6.Icon.DoubleChevronRight`;
exports.default = exports.DoubleChevronRight;
//# sourceMappingURL=double-chevron-right.js.map