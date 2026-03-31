"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudServer = void 0;
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
exports.CloudServer = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "cloud-server", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M180 100H400V20H180zM240 60A20 20 0 1 1 200 60A20 20 0 0 1 240 60M280 80A20 20 0 0 1 280 40H360A20 20 0 0 1 360 80zM295.68 299.56C297.12 299.8 298.56 300 300 300A100.08 100.08 0 0 0 398 220H180A20 20 0 0 1 160 200V100H80C35.8 100 0 135.8 0 180A79.6 79.6 0 0 0 60.2 257.2L60.1 258.6L60 260C60 326.2 113.8 380 180 380C232.4000000000001 380 276.6 346.2 292.8 299.2zM180 200H400V120H180zM240 160A20 20 0 1 1 200 160A20 20 0 0 1 240 160M280 180A20 20 0 0 1 280 140H360A20 20 0 0 1 360 180z" : "M240 240A80 80 0 0 0 318.88 146.6A20 20 0 0 1 300 160H140A20 20 0 0 1 120 140V80H70C31.4 80 0 111.4 0 150C0 178 16.6 202.2 40.4 213.4C40.2 215.6 40 217.8 40 220A100 100 0 0 0 238 239.8C238.6 240 239.4 240 240 240M140 140H300V80H140zM200 110A10 10 0 0 1 210 100H270A10 10 0 0 1 270 120H210A10 10 0 0 1 200 110M180 110A10 10 0 1 1 160 110A10 10 0 0 1 180 110M140 60H300V0H140zM210 40A10 10 0 0 1 210 20H270A10 10 0 0 1 270 40zM180 30A10 10 0 1 1 160 30A10 10 0 0 1 180 30", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.CloudServer.displayName = `Blueprint6.Icon.CloudServer`;
exports.default = exports.CloudServer;
//# sourceMappingURL=cloud-server.js.map