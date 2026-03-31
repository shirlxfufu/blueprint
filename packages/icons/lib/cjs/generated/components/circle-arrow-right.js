"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleArrowRight = void 0;
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
exports.CircleArrowRight = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "circle-arrow-right", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M314.2000000000001 214.2L234.2 294.2000000000001A20.06 20.06 0 0 1 205.8 265.8L251.8 220H100C89 220 80 211 80 200S89 180 100 180H251.8L206 134.2000000000001C202.2 130.6 200 125.6 200 120A20.06 20.06 0 0 1 234.2 105.8L314.2000000000001 185.8C317.8 189.4 320 194.4 320 200S317.8 210.6 314.2000000000001 214.2M200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40" : "M174.2 234.2A20.06 20.06 0 0 1 145.8 205.8L171.8 180H100C89 180 80 171 80 160S89 140 100 140H171.8L146 114.2C142.2 110.6 140 105.6 140 100A20.06 20.06 0 0 1 174.2 85.8L234.2 145.8C237.8 149.4 240 154.4 240 160S237.8 170.6 234.2 174.2zM160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320M160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.CircleArrowRight.displayName = `Blueprint6.Icon.CircleArrowRight`;
exports.default = exports.CircleArrowRight;
//# sourceMappingURL=circle-arrow-right.js.map