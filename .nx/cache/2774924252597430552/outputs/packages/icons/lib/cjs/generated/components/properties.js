"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = void 0;
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
exports.Properties = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "properties", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M337.5 315A15 15 0 0 0 337.5 285H137.5A15 15 0 1 0 137.5 315zM337.5 215A15 15 0 0 0 337.5 185H137.5A15 15 0 0 0 137.5 215zM337.5 115A15 15 0 0 0 337.5 85H137.5A15 15 0 0 0 137.5 115zM68.76 175A25 25 0 1 1 68.76 225A25 25 0 0 1 68.76 175M68.76 275A25 25 0 1 1 68.76 325A25 25 0 0 1 68.76 275M68.76 75A25 25 0 1 1 68.76 125A25 25 0 0 1 68.76 75" : "M270 255A15 15 0 0 0 270 225H110A15 15 0 0 0 110 255zM270 175A15 15 0 0 0 270 145H110A15 15 0 0 0 110 175zM270 95A15 15 0 0 0 270 65H110A15 15 0 0 0 110 95zM55 140A20 20 0 1 1 55 180A20 20 0 0 1 55 140M55 220A20 20 0 1 1 55 260A20 20 0 0 1 55 220M55 60A20 20 0 1 1 55 100A20 20 0 0 1 55 60", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Properties.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Properties.displayName = `Blueprint6.Icon.Properties`;
exports.default = exports.Properties;
//# sourceMappingURL=properties.js.map