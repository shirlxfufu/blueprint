"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderOne = void 0;
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
exports.HeaderOne = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "header-one", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 180V80A20 20 0 1 0 0 80V340A20 20 0 0 0 40 340V220H180V340A20 20 0 1 0 220 340V80A20 20 0 1 0 180 80V180zM354.8000000000001 200C353.8 193.8 351.4 188.6 348.0000000000001 184.6C344.6 180.4 340.4000000000001 176.8 335.2000000000001 174.4C330.2000000000001 171.8 324.8000000000001 169.8 318.6 168.6C312.6 167.6 306.4000000000001 167 300.0000000000001 167V142.2000000000001H350V0H380V200z" : "M281.2 160C280.4000000000001 155.4 278.8 151.2 276.2 147.8S270.4000000000001 141.8 266.6 139.6C263 137.4 258.8 136 254.2 135C249.6 134.2 245 133.6 240 133.6V113H274.8V0H300V160zM140 280C128.8 280 120 271 120 260V180H40V260C40 271 31 280 20 280C8.8 280 0 271 0 260V60C0 49 9 40 20 40C31.2 40 40 49 40 60V140H120V60C120 49 129 40 140 40C151.2 40 160 49 160 60V260C160 270.8 151 280 140 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.HeaderOne.displayName = `Blueprint6.Icon.HeaderOne`;
exports.default = exports.HeaderOne;
//# sourceMappingURL=header-one.js.map