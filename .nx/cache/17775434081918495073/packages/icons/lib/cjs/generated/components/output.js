"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
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
exports.Output = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "output", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M0 200C0 89.8 89.8 0 200 0C223.4 0 246.4 4 268.4 12C278.8 15.8000000000001 284.2000000000001 27.2 280.4 37.6A20 20 0 0 1 254.8 49.6000000000001C237.2 43.2 218.8 40.0000000000001 200 40.0000000000001C111.8 40.0000000000001 40 111.8000000000001 40 200.0000000000001S111.8 360.0000000000001 200 360.0000000000001C218.8 360.0000000000001 237.2 356.8000000000001 254.8 350.4000000000001A20 20 0 0 1 280.4 362.4000000000001A20 20 0 0 1 268.4 388.0000000000001C246.4 396 223.4 400 200 400C89.8 400 0 310.2 0 200M394.2000000000001 214.2L314.2000000000001 294.2000000000001A20.06 20.06 0 0 1 285.8 265.8L331.8 220H100A20 20 0 0 1 100 180H331.8L286 134.2000000000001C282.2000000000001 130.6 280 125.6 280 120A20.06 20.06 0 0 1 314.2000000000001 105.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200S397.8 210.6 394.2000000000001 214.2" : "M160 0C71.8 0 0 71.64 0 160.1S71.8 320 160 320C178.8 320 197.2 316.8 214.8 310.4C225.2 306.6 230.6 295.2 226.8 284.78S211.6 268.98 201.2 272.78A120.14 120.14 0 0 1 40.2 159.9A120.14 120.14 0 0 1 201.2 47.04A19.94 19.94 0 0 0 226.8 35.04A20 20 0 0 0 214.8 9.4C197.2 3 178.8 0 160 0M314.2000000000001 174.1C317.8 170.5 320 165.5 320 159.9S317.8 149.3000000000001 314.2000000000001 145.7L254.2 85.66A20.06 20.06 0 0 0 220 99.86C220 105.46 222.2 110.46 226 114.0600000000001L251.8 139.8800000000001H100C89 139.8800000000001 80 148.8800000000001 80 159.9000000000001S89 179.9000000000001 100 179.9000000000001H251.8L225.8 205.7200000000001A20.06 20.06 0 0 0 254.2 234.1200000000001z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Output.displayName = `Blueprint6.Icon.Output`;
exports.default = exports.Output;
//# sourceMappingURL=output.js.map