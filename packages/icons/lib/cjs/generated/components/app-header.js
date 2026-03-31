"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHeader = void 0;
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
exports.AppHeader = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "app-header", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 400A20 20 0 0 0 400 380V20A20 20 0 0 0 380 0H20A20 20 0 0 0 0 20V380A20 20 0 0 0 20 400zM160 280A20 20 0 0 1 120.14 282.3400000000001L120 280V120A20 20 0 0 1 159.86 117.66L160 120V180H240V120A20 20 0 0 1 279.86 117.66L280 120V280A20 20 0 0 1 240.14 282.3400000000001L240 280V220H160z" : "M300 320A20 20 0 0 0 320 300V20A20 20 0 0 0 300 0H20A20 20 0 0 0 0 20V300A20 20 0 0 0 20 320zM120 240A20 20 0 0 1 80.14 242.34L80 240V80A20 20 0 0 1 119.86 77.66L120 80V140H200V80A20 20 0 0 1 239.86 77.66L240 80V240A20 20 0 0 1 200.14 242.34L200 240V180H120z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.AppHeader.displayName = `Blueprint6.Icon.AppHeader`;
exports.default = exports.AppHeader;
//# sourceMappingURL=app-header.js.map