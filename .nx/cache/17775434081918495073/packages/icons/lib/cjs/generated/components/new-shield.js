"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewShield = void 0;
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
exports.NewShield = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "new-shield", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M240 320C240 308 248 300 260 300H300V260C300 248 308 240 320 240C330 240 340 248 340 260V300H380C390 300 400 308 400 320S390 340 380 340H340V380C340 392 330 400 320 400C308 400 300 392 300 380V340H260C248 340 240 330 240 320M315.92 200.12C294.92 142.76 256.44 93.86 200 52.64V400Q80 314.28 20 314.28Q20 114.28 200 0Q339 88.26 370.68 227.66A61.4 61.4 0 0 0 315.92 200.12" : "M220 240H240V220C240 209 249 200 260 200S280 209 280 220V240H300C311 240 320 249 320 260S311 280 300 280H280V300C280 311 271 320 260 320S240 311 240 300V280H220C209 280 200 271 200 260S209 240 220 240M160 300Q66.68 235.72 20 235.72Q20 85.72 160 0Q273.92 69.74 295.14 182.04A80 80 0 0 0 254.04 161.24C238.8 113.36 207.64 73.04 160 39.48z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.NewShield.displayName = `Blueprint6.Icon.NewShield`;
exports.default = exports.NewShield;
//# sourceMappingURL=new-shield.js.map