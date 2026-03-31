"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = void 0;
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
exports.Emoji = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "emoji", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 400C310.46 400 400 310.46 400 200S310.46 0 200 0S0 89.54 0 200S89.54 400 200 400M200 360A160 160 0 1 1 200 40A160 160 0 0 1 200 360M120 200L120.3 195.7C124.38 151.6 158.5 120 200 120A80 80 0 0 1 279.9000000000001 196L280 200H320L319.74 195.24C315.08 128.96 263.26 80 200 80A120 120 0 0 0 80.08 195.5L80 200zM150 280A30 30 0 1 0 150 220A30 30 0 0 0 150 280M250 280A30 30 0 1 0 250 220A30 30 0 0 0 250 280" : "M160 320A160 160 0 1 0 160 0A160 160 0 0 0 160 320M160 300A140 140 0 1 1 160 20A140 140 0 0 1 160 300M80 160C84.56 114.76 120 80 160 80C198.76 80 235.4 114.76 239.68 156L240 160H260C257.44 102.24 213.66 60 160 60A100 100 0 0 0 60.1 155.66L60 160zM120 220A20 20 0 1 0 120 180A20 20 0 0 0 120 220M200 220A20 20 0 1 0 200 180A20 20 0 0 0 200 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Emoji.displayName = `Blueprint6.Icon.Emoji`;
exports.default = exports.Emoji;
//# sourceMappingURL=emoji.js.map