"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListColumns = void 0;
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
exports.ListColumns = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "list-columns", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 340.54V359.26C0 370.64 9.2 379.8 20.58 380H159.4C170.82 380 180 370.64 180 359.46V340.54C180 329.16 170.6 320 159.42 320H20.6C9.18 320 0 329.16 0 340.54M0 240.54V259.26C0 270.64 9.2 279.8 20.58 280H159.4C170.82 280 180 270.64 180 259.4600000000001V240.54C180 229.16 170.6 220 159.42 220H20.6C9.18 220 0 229.16 0 240.54M0 140.54V159.26C0 170.64 9.2 179.8 20.58 180H159.4C170.82 180 180 170.64 180 159.46V140.54C180 129.16 170.6 120 159.42 120H20.6C9.18 120 0 129.16 0 140.54M0 40.54V59.26C0 70.64 9.2 79.8 20.58 80H159.4C170.82 80 180 70.64 180 59.46V40.54C180 29.16 170.6 20 159.42 20H20.6C9.18 20 0 29.16 0 40.54M220 340.54V359.26C220 370.6400000000001 229.2 379.8 240.58 380H379.42C390.82 380 400 370.64 400 359.46V340.54C400 329.16 390.6 320 379.42 320H240.6C229.18 320 220 329.16 220 340.54M220 240.54V259.26C220 270.64 229.2 279.8 240.58 280H379.42C390.82 280 400 270.64 400 259.4600000000001V240.54C400 229.16 390.6 220 379.42 220H240.6C229.18 220 220 229.16 220 240.54M220 140.54V159.26C220 170.64 229.2 179.8 240.58 180H379.42C390.82 180 400 170.64 400 159.46V140.54C400 129.16 390.6 120.0000000000001 379.42 120.0000000000001H240.6C229.2 120.0000000000001 220.02 129.16 220.02 140.54M220.02 40.54V59.26C220.02 70.64 229.22 79.8000000000001 240.6 80H379.4400000000001C390.8400000000001 80 400.0200000000001 70.64 400.0200000000001 59.46V40.54C400.0200000000001 29.16 390.6200000000001 19.9999999999999 379.4400000000001 19.9999999999999H240.6C229.2 19.9999999999999 220.02 29.1599999999999 220.02 40.54" : "M120 300C131 300 140 291 140 280S131 260 120 260H20C9 260 0 269 0 280S9 300 20 300zM120 220C131 220 140 211 140 200S131 180 120 180H20C9 180 0 189 0 200S9 220 20 220zM120 140C131 140 140 131 140 120S131 100 120 100H20C9 100 0 109 0 120S9 140 20 140zM120 60C131 60 140 51 140 40S131 20 120 20H20C9 20 0 29 0 40S9 60 20 60zM300 300C311 300 320 291 320 280S311 260 300 260H200C189 260 180 269 180 280S189 300 200 300zM300 220C311 220 320 211 320 200S311 180 300 180H200C189 180 180 189 180 200S189 220 200 220zM300 140C311 140 320 131 320 120S311 100 300 100H200C189 100 180 109 180 120S189 140 200 140zM300 60C311 60 320 51 320 40S311 20 300 20H200C189 20 180 29 180 40S189 60 200 60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ListColumns.displayName = `Blueprint6.Icon.ListColumns`;
exports.default = exports.ListColumns;
//# sourceMappingURL=list-columns.js.map