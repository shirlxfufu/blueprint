"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Import = void 0;
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
exports.Import = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "import", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M185.8 85.8C189.4 82.2 194.4 80 200 80S210.6 82.2 214.2 85.8L314.2000000000001 185.8A20.06 20.06 0 0 1 285.8 214.2L220 148.2V380C220 391 211 400 200 400S180 391 180 380V148.2L114.2 214.2A20.06 20.06 0 0 1 85.8 185.8zM380 120C369 120 360 111 360 100V40H40V100C40 111 31 120 20 120S0 111 0 100V20C0 9 9 0 20 0H380C391 0 400 9 400 20V100C400 111 391 120 380 120" : "M145.8 85.8C149.4 82.2 154.4 80 160 80S170.6 82.2 174.2 85.8L254.2 165.8A20.06 20.06 0 0 1 225.8 194.2L180 148.2V300C180 311 171 320 160 320S140 311 140 300V148.2L94.2 194.2A20.06 20.06 0 0 1 65.8 165.8zM300 100C289 100 280 91 280 80V40H40V80C40 91 31 100 20 100S0 91 0 80V20C0 9 9 0 20 0H300C311 0 320 9 320 20V80C320 91 311 100 300 100", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Import.displayName = `Blueprint6.Icon.Import`;
exports.default = exports.Import;
//# sourceMappingURL=import.js.map