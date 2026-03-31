"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallTick = void 0;
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
exports.SmallTick = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "small-tick", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 300C294.4000000000001 300 289.4000000000001 297.8 285.8 294.2L160 168.2L114.2 214.2A20.06 20.06 0 0 1 85.8 185.8L145.8 125.8C149.4 122.2000000000001 154.4 120.0000000000001 160 120.0000000000001S170.6 122.2000000000001 174.2 125.8L314.2000000000001 265.8A20.06 20.06 0 0 1 300 300" : "M240 220C234.4 220 229.4 217.8 225.8 214.2L140 128.2L94.2 174.2A20.06 20.06 0 0 1 65.8 145.8L125.8 85.8C129.4 82.2 134.4 80 140 80S150.6 82.2 154.2 85.8L254.2 185.8A20.06 20.06 0 0 1 240 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.SmallTick.displayName = `Blueprint6.Icon.SmallTick`;
exports.default = exports.SmallTick;
//# sourceMappingURL=small-tick.js.map