"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderNew = void 0;
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
exports.FolderNew = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "folder-new", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M259.88 260C259.88 226.9 286.76 200 319.8400000000001 200A60 60 0 0 1 379.82 260H400V60C400 49 391 40 380 40H20.2C9.2 40 0.2 49 0.2 60V260zM215.2 280H0V340C0 351 9 360 20 360H99.96C105.56 360 110.56 357.8 114.16 354.2L148.3 320H199.88C199.88 304.64 205.68 290.62 215.18 280M379.7800000000001 340C390.7800000000001 340 399.7800000000001 331 399.7800000000001 320S390.7800000000001 300 379.7800000000001 300H339.82V260C339.82 249 330.82 240 319.82 240S299.82 249 299.82 260V300H259.86C248.86 300 239.86 309 239.86 320S248.86 340 259.86 340H299.8400000000001V380C299.8400000000001 391 308.8400000000001 400 319.8200000000001 400C330.82 400 339.82 391 339.82 380V340z" : "M203.3 180A60 60 0 0 1 259.84 140A60 60 0 0 1 316.38 180H320V40C320 29 311 20 300 20H20.2C9.2 20 0.2 29 0.2 40V180zM175.2 200H0V260C0 271 9 280 20 280H59.96C65.56 280 70.56 277.8 74.16 274.2L108.34 240H159.9C159.9 224.64 165.7 210.62 175.2 200M299.8 260C310.8 260 319.8 251 319.8 240S310.8 220 299.8 220H279.82V200C279.82 189 270.82 180 259.82 180C248.84 180 239.86 189 239.86 200V220H219.86C208.86 220 199.86 229 199.86 240S208.86 260 219.86 260H239.86V280C239.86 291 248.86 300 259.8400000000001 300C270.8400000000001 300 279.8400000000001 291 279.8400000000001 280V260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FolderNew.displayName = `Blueprint6.Icon.FolderNew`;
exports.default = exports.FolderNew;
//# sourceMappingURL=folder-new.js.map