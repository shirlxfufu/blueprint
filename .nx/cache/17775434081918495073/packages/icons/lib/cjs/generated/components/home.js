"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
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
exports.Home = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "home", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 160V20C40 9 49 0 60 0H160V140H240V0H340C351 0 360 9 360 20V160L200 320zM394.2000000000001 214.2L340 268.2V340C340 351 331 360 320 360S300 351 300 340V308.2L214.2 394C210.6 397.8 205.6 400 200 400S189.4 397.8 185.8 394.2L5.8 214.2A20.06 20.06 0 0 1 34.2 185.8L200 351.8L365.8 186C369.4 182.2 374.4 180 380 180A20.06 20.06 0 0 1 394.2000000000001 214.2" : "M40 120V20C40 9 49 0 60 0H120V100H200V0H260C271 0 280 9 280 20V120L160 240zM314.2000000000001 174.2L280 208.2V280C280 291 271 300 260 300S240 291 240 280V248.2L174.2 314.2C170.6 317.8 165.6 320 160 320S149.4 317.8 145.8 314.2L5.8 174.2A20.06 20.06 0 0 1 34.2 145.8L160 271.8L285.8 146C289.4 142.2 294.4 140 300 140A20.06 20.06 0 0 1 314.2000000000001 174.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Home.displayName = `Blueprint6.Icon.Home`;
exports.default = exports.Home;
//# sourceMappingURL=home.js.map