"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Train = void 0;
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
exports.Train = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "train", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M320 40H280L320 0H80L82.4 2.4L120 40H80C58 40 40 58 40 80V360C40 382 111.6 400 200 400S360 382 360 360V80C360 58 342 40 320 40M110 100C126.6 100 140 113.4 140 130S126.6 160 110 160S80 146.6 80 130S93.4 100 110 100M180 340H80V220H180zM320 340H220V220H320zM290 160C273.4 160 260 146.6 260 130S273.4 100 290 100S320 113.4 320 130S306.6 160 290 160" : "M260 40H240L260 0H60L80 40H60C38 40 20 58 20 80V280C20 302 82.6 320 160 320S300 302 300 280V80C300 58 282 40 260 40M220 80H260V120H220zM180 180H260V260H180zM60 80H100V120H60zM60 180H140V260H60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Train.displayName = `Blueprint6.Icon.Train`;
exports.default = exports.Train;
//# sourceMappingURL=train.js.map