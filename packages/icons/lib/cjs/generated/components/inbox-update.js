"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboxUpdate = void 0;
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
exports.InboxUpdate = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "inbox-update", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M201.66 340A120 120 0 0 1 201.68 299.82H93L39.6 179.9H100C111 179.9 120 170.9 120 159.92V139.92H280V159.92C280 170.92 289 179.92 300 179.92H360.4L349.8 203.72A120 120 0 0 1 386.28 219.94L400 189.1V59.98C400 48.98 391 40 380 40H20C9 40 0 49 0 60V189.1L61.6 327.6L61.8 328C64.8 335 71.8 340 80 340zM320 240A80 80 0 1 0 320 400A80 80 0 0 0 320 240" : "M162 280A100 100 0 0 1 162 240H73.2L39 160H80C91 160 100 151 100 140V120H220V140C220 151 229 160 240 160H281C295.1600000000001 160 308.04 164.82 319.1 172.9L320 170.8V60C320 49 311 40 300 40H20C9 40 0 49 0 60V170.8L41.6 267.8C44.6 275 51.8 280 60 280zM260 200A60 60 0 1 0 260 320A60 60 0 0 0 260 200", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.InboxUpdate.displayName = `Blueprint6.Icon.InboxUpdate`;
exports.default = exports.InboxUpdate;
//# sourceMappingURL=inbox-update.js.map