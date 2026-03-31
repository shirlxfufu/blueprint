"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTile = void 0;
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
exports.AddTile = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "add-tile", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 380A20 20 0 0 0 20 400H160A20 20 0 0 0 180 380V20A20 20 0 0 0 160 0H20A20 20 0 0 0 0 20zM220 380A20 20 0 0 0 240 400H380A20 20 0 0 0 400 380V240A20 20 0 0 0 380 220H240A20 20 0 0 0 220 240zM310 180A18 18 0 0 0 328 162V108H382A18 18 0 0 0 382 71.9999999999999H328V18A18 18 0 0 0 292 18V71.9999999999999H238A18 18 0 1 0 238 108H292V162A18 18 0 0 0 310 180" : "M0 300A20 20 0 0 0 20 320H120A20 20 0 0 0 140 300V20A20 20 0 0 0 120 0H20A20 20 0 0 0 0 20zM180 300A20 20 0 0 0 200 320H300A20 20 0 0 0 320 300V200A20 20 0 0 0 300 180H200A20 20 0 0 0 180 200zM250 140C259.6600000000001 140 267.5 132.16 267.5 122.5V87.5H302.5A17.5 17.5 0 0 0 302.5 52.5H267.5V17.5A17.5 17.5 0 0 0 232.5 17.5V52.5H197.5A17.5 17.5 0 0 0 197.5 87.5H232.5V122.5C232.5 132.16 240.34 140 250 140", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.AddTile.displayName = `Blueprint6.Icon.AddTile`;
exports.default = exports.AddTile;
//# sourceMappingURL=add-tile.js.map