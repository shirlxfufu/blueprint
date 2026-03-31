"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microphone = void 0;
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
exports.Microphone = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "microphone", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 400A80 80 0 0 1 120 320V220A80 80 0 0 1 280 220V320A80 80 0 0 1 200 400M80 260A20 20 0 0 0 100 240V220A100 100 0 0 1 300 220V240A20 20 0 1 0 340 240V220A140 140 0 0 0 220 81.4V40H240A20 20 0 1 0 240 0H160A20 20 0 1 0 160 40H180V81.4A140 140 0 0 0 60 220V240A20 20 0 0 0 80 260" : "M160 320A60 60 0 0 1 100 260V180A60 60 0 0 1 220 180V260A60 60 0 0 1 160 320M60 220A20 20 0 0 0 80 200V160A60 60 0 0 1 140 100H180A60 60 0 0 1 240 160V200A20 20 0 1 0 280 200V160A100 100 0 0 0 180 60V40H200A20 20 0 1 0 200 0H120A20 20 0 1 0 120 40H140V60A100 100 0 0 0 40 160V200A20 20 0 0 0 60 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Microphone.displayName = `Blueprint6.Icon.Microphone`;
exports.default = exports.Microphone;
//# sourceMappingURL=microphone.js.map