"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobeNetworkAdd = void 0;
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
exports.GlobeNetworkAdd = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "globe-network-add", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M255 260L254.96 260.2Q257.48 260 260 260C260 244.9 265.2 229.22 277.2 217.2Q278.44 216 279.7 214.88Q280.86 187.36 277.8 160H354.4C357.8 172.8 360 186.2 360 200Q360 207.4 359.2000000000001 214.64A58.4 58.4 0 0 1 380 260Q385.28 260 390.52 260.98C396.68 241.76 400 221.26 400 200C400 89.6 310.4 0 200 0S0 89.6 0 200S89.6 400 200 400C221.2 400 241.68 396.7 260.86 390.56A66 66 0 0 1 260 380C239.02 380 222.4 370 212.04 355.92A22 22 0 0 1 200 360C178.6 360 155 319 145 260zM257.8 160C259.2000000000001 172.8 260 186.2 260 200S259.2000000000001 227.2 257.6 240H142.2A368 368 0 0 1 142.2 160zM124.8 260C131 299.8 143.2 333.2 159.2 354.6A160 160 0 0 1 52.2 260zM40 200C40 186.2 42.2 172.8 45.6 160H122.2A368 368 0 0 0 122.2 240H45.6C42.2 227.2 40 213.8 40 200M124.8 140H52.2C71 93.8 110.2 58.4 159.2 45.4C143.2 66.8 131 100.2 124.8 140M200 40C221.4 40 245 81 255 140H145C155 81 178.6 40 200 40M275.2 140C268.8 100.2 256.6 66.8 240.8 45.4A160 160 0 0 1 347.8 140zM260 300C248 300 240 308 240 320C240 330 248 340 260 340H300V380C300 392 308 400 320 400C330 400 340 392 340 380V340H380C390 340 400 332 400 320S390 300 380 300H340V260C340 248 330 240 320 240C308 240 300 248 300 260V300z" : "M133.86 220A48 48 0 0 1 149.2 200H122.4C121 187.8 120 174.6 120 160S121 132.2 122.4 120H197.6A360 360 0 0 1 199.82 149.44A48 48 0 0 1 219.1 134.24Q218.58 126.94 217.8 120H273C276.18 129.08 278.4 138.6 279.4000000000001 148.44A50.6 50.6 0 0 1 290 180V190H300C305.6 190 311.26 190.84 316.68 192.62Q319.98 176.82 320 160C320 71.6 248.4 0 160 0S0 71.6 0 160A159.96 159.96 0 0 0 192.62 316.68A54 54 0 0 1 190 300V290H180C149.52 290 130 264.6 130 240V239.04Q127.4 230.34 125.4 220zM105.4 220C109.4 242.2 115.6 260.6 123.6 273.8A120.6 120.6 0 0 1 56.6 220zM47 200C42.6 187.4 40 174 40 160S42.6 132.6 47 120H102.2C100.8 132.4 100 145.6 100 160S100.8 187.6 102.2 200zM105.4 100H56.6A120.6 120.6 0 0 1 123.6 46.2C115.6 59.4 109.6 77.8 105.4 100M125.4 100C132.8 62 146.6 40 160 40S187.2 62 194.6 100zM214.6 100C210.4 77.8 204.4 59.4 196.4 46.2A120.6 120.6 0 0 1 263.4 100zM180 220C168 220 160 228 160 240C160 250 168 260 180 260H220V300C220 312 228 320 240 320S260 312 260 300V260H300C312 260 320 252 320 240S312 220 300 220H260V180C260 168 252 160 240 160S220 168 220 180V220z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.GlobeNetworkAdd.displayName = `Blueprint6.Icon.GlobeNetworkAdd`;
exports.default = exports.GlobeNetworkAdd;
//# sourceMappingURL=globe-network-add.js.map