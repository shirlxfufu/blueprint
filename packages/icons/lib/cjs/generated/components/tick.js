"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tick = void 0;
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
exports.Tick = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "tick", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M340 320C334.4 320 329.4 317.8 325.8 314.2L140 128.2L74.2 194A19.4 19.4 0 0 1 60 200A20.06 20.06 0 0 1 45.8 165.8L125.8 85.8C129.4 82.2 134.4 80 140 80S150.6 82.2 154.2 85.8L354.2000000000001 285.8A20.06 20.06 0 0 1 340 320" : "M280 260C274.4000000000001 260 269.4000000000001 257.8 265.8 254.2L120 108.2L54.2 174.2A20.06 20.06 0 0 1 25.8 145.8L105.8 65.8C109.4 62.2 114.4 60 120 60S130.6 62.2 134.2 65.8L294.2000000000001 225.8A20.06 20.06 0 0 1 280 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Tick.displayName = `Blueprint6.Icon.Tick`;
exports.default = exports.Tick;
//# sourceMappingURL=tick.js.map