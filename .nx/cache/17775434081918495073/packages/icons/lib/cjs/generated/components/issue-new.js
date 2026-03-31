"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueNew = void 0;
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
exports.IssueNew = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "issue-new", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M263.34 389.76A60 60 0 0 1 260.72 379.28A60 60 0 0 1 223.76 358.24A160 160 0 1 1 358.24 223.76A60 60 0 0 1 379.28 260.72A60 60 0 0 1 389.76 263.32A200 200 0 0 0 400 200C400 89.54 310.46 0 200 0S0 89.54 0 200S89.54 400 200 400A200 200 0 0 0 263.34 389.76M220 80H180V120H220zM220 140H180V320H220zM340 340H370A20 20 0 0 0 370 300H340V270A20 20 0 0 0 300 270V300H270A20 20 0 0 0 270 340H300V370A20 20 0 0 0 340 370z" : "M211.36 311.58Q211.08 310.38 210.84 309.1600000000001A50.2 50.2 0 0 1 173.84 279.2200000000001A120 120 0 1 1 279.24 173.76A50.2 50.2 0 0 1 309.1600000000001 210.84L311.5800000000001 211.36A160 160 0 1 0 211.36 311.58M180 80H140V120H180zM180 140H140V240H180zM200 260C200 271 209 280 220 280H240V300C240 311 249 320 260 320S280 311 280 300V280H300C311 280 320 271 320 260S311 240 300 240H280V219.9C280 208.9 271 199.9 260 199.9S240 208.9 240 219.9V240H220C209 240 200 249 200 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.IssueNew.displayName = `Blueprint6.Icon.IssueNew`;
exports.default = exports.IssueNew;
//# sourceMappingURL=issue-new.js.map