"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Target = void 0;
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
exports.Target = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "target", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200M162.5 214.96A15 15 0 0 0 162.5 184.96H112.5A15 15 0 0 0 112.5 214.96zM185 162.46A15 15 0 0 0 215 162.46V112.46A15 15 0 0 0 185 112.46zM185 287.46A15 15 0 0 0 215 287.46V237.46A15 15 0 0 0 185 237.46zM287.5 214.96A15 15 0 0 0 287.5 184.96H237.5A15 15 0 0 0 237.5 214.96z" : "M265 160A105 105 0 1 1 55 160A105 105 0 0 1 265 160M145 89.96V129.96A15 15 0 0 0 175 129.96V89.96A15 15 0 0 0 145 89.96M130 174.96A15 15 0 0 0 130 144.96H90A15 15 0 0 0 90 174.96zM230 174.96A15 15 0 0 0 230 144.96H190A15 15 0 0 0 190 174.96zM145 189.96V229.9600000000001A15 15 0 0 0 175 229.9600000000001V189.96A15 15 0 0 0 145 189.96M295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Target.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Target.displayName = `Blueprint6.Icon.Target`;
exports.default = exports.Target;
//# sourceMappingURL=target.js.map