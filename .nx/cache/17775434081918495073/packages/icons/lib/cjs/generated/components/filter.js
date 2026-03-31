"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
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
exports.Filter = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "filter", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M360 380H40A20.06 20.06 0 0 1 25.8 345.8L140 231.8V40A20.06 20.06 0 0 1 174.2 25.8L254.2 105.8C257.8 109.4 260 114.4 260 120V231.8L374.2000000000001 346C377.8 349.4 380 354.4 380 360C380 371 371 380 360 380" : "M279.8 300.2H39.8A20.06 20.06 0 0 1 25.6 266L119.8 171.8V40A20.06 20.06 0 0 1 154 25.8L194 65.8C197.6 69.4 199.8 74.4 199.8 80V171.8L294 266A20.06 20.06 0 0 1 279.8 300.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Filter.displayName = `Blueprint6.Icon.Filter`;
exports.default = exports.Filter;
//# sourceMappingURL=filter.js.map