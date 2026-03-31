"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBlock = void 0;
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
exports.CodeBlock = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "code-block", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M380 300H340V340C340 351 331 360 320 360H240C229 360 220 351 220 340V300H180V340C180 351 171 360 160 360H80C69 360 60 351 60 340V300H20C9 300 0 291 0 280V40C0 29 9 20 20 20H380C391 20 400 29 400 40V280C400 291 391 300 380 300M174.2 94.2000000000001A20.06 20.06 0 0 0 145.8 65.8L65.8 145.8C62.2 149.4 60 154.4 60 160S62.2 170.6 65.8 174.2L145.8 254.2A20.06 20.06 0 0 0 174.2 225.8L108.2 160zM334.2000000000001 145.8L254.2 65.8A20.06 20.06 0 0 0 225.8 94.2L291.8 160L226 225.8A19.4 19.4 0 0 0 220 240A20.06 20.06 0 0 0 254.2 254.2L334.2000000000001 174.2C337.8 170.6 340 165.6 340 160S337.8 149.4 334.2000000000001 145.8" : "M300 260H260V280C260 291 251 300 240 300H200C189 300 180 291 180 280V260H140V280C140 291 131 300 120 300H80C69 300 60 291 60 280V260H20C9 260 0 251 0 240V40C0 29 9 20 20 20H300C311 20 320 29 320 40V240C320 251 311 260 300 260M134.2 94.2A20.06 20.06 0 0 0 105.8 65.8L45.8 125.8C42.2 129.4 40 134.4 40 140S42.2 150.6 45.8 154.2L105.8 214.2A20.06 20.06 0 0 0 134.2 185.8L88.2 140zM274.2000000000001 125.8L214.2 65.8A20.06 20.06 0 0 0 185.8 94.2L231.8 140L185.8 185.8A20.06 20.06 0 0 0 214.2 214.2L274.2 154.2C277.8 150.6 280 145.6 280 140S277.8 129.4 274.2 125.8", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.CodeBlock.displayName = `Blueprint6.Icon.CodeBlock`;
exports.default = exports.CodeBlock;
//# sourceMappingURL=code-block.js.map