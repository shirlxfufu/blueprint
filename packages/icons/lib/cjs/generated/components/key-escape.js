"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyEscape = void 0;
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
exports.KeyEscape = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "key-escape", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 240C51 240 60 249 60 260V311.8L185.8 186C189.4 182.2 194.4 180 200 180A20.06 20.06 0 0 1 214.2 214.2L88.2 340H140C151 340 160 349 160 360S151 380 140 380H40C29 380 20 371 20 360V260C20 249 29 240 40 240M220 378.8V338C287.8 328.2 340 270.4 340 200C340 122.6 277.4000000000001 60 200 60C129.6 60 71.8 112.2 62 180H21.2C31.2 90 107.4 20 200 20A180 180 0 0 1 380 200C380 292.6 310 368.8 220 378.8" : "M40 180C51 180 60 189 60 200V231.8L145.8 146C149.4 142.2 154.4 140 160 140A20.06 20.06 0 0 1 174.2 174.2L88.2 260H120C131 260 140 269 140 280S131 300 120 300H40C29 300 20 291 20 280V200C20 189 29 180 40 180M180 298V258A100 100 0 1 0 62 140H22C31.8 72.2 89.6 20 160 20C237.4000000000001 20 300 82.6 300 160C300 230.4 247.8 288.2 180 298", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.KeyEscape.displayName = `Blueprint6.Icon.KeyEscape`;
exports.default = exports.KeyEscape;
//# sourceMappingURL=key-escape.js.map