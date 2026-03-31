"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerInstall = void 0;
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
exports.ServerInstall = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "server-install", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M345.8 314.1A20.04 20.04 0 0 0 374.2000000000001 285.7200000000001L314.2000000000001 225.78A20.3 20.3 0 0 0 285.8 225.78L225.8 285.7200000000001A20.04 20.04 0 0 0 254.2 314.1L280 288.32V380A20 20 0 0 0 320 380V288.32zM265.34 400A40 40 0 0 1 260 380V334.6A40.04 40.04 0 0 1 211.66 271.56L271.86 211.44L272.06 211.24C279.24 204.44 289.06 199.98 300 199.98V125C300 111.2 288.8 99.9999999999999 275 99.9999999999999H125C111.2 100 100 111.2 100 125V375C100 388.8 111.2 400 125 400zM80 185.48L7.86 133.12A19.4 19.4 0 0 1 5.24 104.26L95.24 6.76C99.24 2.46 104.94 0 110.96 0H289.04C295.04 0 300.76 2.46 304.74 6.76L394.76 104.26A19.4 19.4 0 0 1 392.1600000000001 133.12L320 185.48V125A45 45 0 0 0 275 80H125A45 45 0 0 0 80 125z" : "M285.8 234.08A20.04 20.04 0 0 0 314.2 205.7L254.2 145.78A20.3 20.3 0 0 0 225.8 145.78L165.8 205.72A20.04 20.04 0 0 0 194.2 234.1L220 208.28V300A20 20 0 0 0 260 300V208.32zM151.66 191.56L211.86 131.44L212.06 131.24C219.24 124.44 229.06 119.98 240 119.98V100A20 20 0 0 0 220 80H100A20 20 0 0 0 80 100V300A20 20 0 0 0 100 320H205.36A40 40 0 0 1 200 300V254.6A40.04 40.04 0 0 1 151.66 191.56M260 125.28Q264.6 127.88 268.34 131.62L274.14 137.42L311.08 112.82A20 20 0 0 0 314.86 82.82L246.14 6.6199999999999C242.34 2.42 236.94 -1e-13 231.24 -1e-13H88.76C83.08 -1e-13 77.66 2.3999999999999 73.86 6.6199999999999L5.14 82.8199999999999A20 20 0 0 0 8.94 112.8199999999999L60 146.82V100A40 40 0 0 1 100 60H220A40 40 0 0 1 260 100z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ServerInstall.displayName = `Blueprint6.Icon.ServerInstall`;
exports.default = exports.ServerInstall;
//# sourceMappingURL=server-install.js.map