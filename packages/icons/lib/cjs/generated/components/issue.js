"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issue = void 0;
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
exports.Issue = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "issue", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 0C89.54 0 0 89.54 0 200S89.54 400 200 400S400 310.46 400 200S310.46 0 200 0M200 40A160 160 0 1 1 200 360A160 160 0 0 1 200 40M220 80H180V120H220zM220 140H180V320H220z" : "M160 0A160 160 0 1 0 160 320A160 160 0 0 0 160 0M160 40A120 120 0 1 1 160 280A120 120 0 0 1 160 40M180 80H140V120H180zM180 140H140V240H180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Issue.displayName = `Blueprint6.Icon.Issue`;
exports.default = exports.Issue;
//# sourceMappingURL=issue.js.map