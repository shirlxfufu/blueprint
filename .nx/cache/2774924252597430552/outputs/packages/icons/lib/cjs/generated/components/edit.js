"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edit = void 0;
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
exports.Edit = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "edit", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M334.4 302.56A31.84 31.84 0 0 1 280.04 325.08L88.06 133.14L74.88 74.92L133.1 88.1L325.08 280.04C331.0399999999999 286.02 334.4 294.12 334.4 302.56M364.4 302.56C364.4 286.16 357.88 270.44 346.28 258.84L151.24 63.8A15 15 0 0 0 143.96 59.78L58.32 40.3800000000001A15 15 0 0 0 40.36 58.32L59.76 143.96L60.38 145.98A15 15 0 0 0 63.78 151.26L258.82 346.3A61.86 61.86 0 0 0 364.4 302.5600000000001M229.6 317.06A15 15 0 0 0 250.8 317.06L317.0600000000001 250.8A15 15 0 0 0 295.86 229.6L229.6 295.8400000000001A15 15 0 0 0 229.6 317.04" : "M264.54 242.04A22.5 22.5 0 0 1 226.18 257.94L213.38 245.16L245.1600000000001 213.38L257.9600000000001 226.18C262.1600000000001 230.38 264.5200000000001 236.08 264.54 242.04M73.1800000000001 104.96L63.8800000000001 63.9L104.9800000000001 73.22L223.9400000000001 192.16L192.1600000000001 223.94zM294.54 242.04A52.4 52.4 0 0 0 279.1600000000001 204.96L123.1200000000001 48.92A15 15 0 0 0 115.8400000000001 44.9L47.3200000000001 29.36A15 15 0 0 0 29.38 47.3200000000001L44.9000000000001 115.82L45.5 117.86A15 15 0 0 0 48.92 123.12L204.94 279.1600000000001A52.5 52.5 0 0 0 294.54 242.04", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Edit.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Edit.displayName = `Blueprint6.Icon.Edit`;
exports.default = exports.Edit;
//# sourceMappingURL=edit.js.map