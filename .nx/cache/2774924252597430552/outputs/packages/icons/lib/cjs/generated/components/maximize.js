"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maximize = void 0;
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
exports.Maximize = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "maximize", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M310 250V310H250A15 15 0 0 0 250 340H325A15 15 0 0 0 340 325V250A15 15 0 0 0 310 250M314.4000000000001 335.6A15 15 0 1 0 335.6 314.4L241.86 220.64A15 15 0 1 0 220.66 241.84zM60 150A15 15 0 0 0 90 150V90H150A15 15 0 0 0 150 60H75A15 15 0 0 0 60 75zM158.14 179.36A15 15 0 1 0 179.34 158.16L85.6 64.4A15 15 0 1 0 64.4 85.6z" : "M124.4 145.6A15 15 0 1 0 145.6 124.4L96.2 75H120A15 15 0 0 0 120 44.9999999999999H60A15 15 0 0 0 45 59.9999999999999V120A15 15 0 0 0 75 120V96.2zM275 200A15 15 0 0 0 245 200V223.8L195.6 174.4A15 15 0 1 0 174.4 195.6L223.8 245H200A15 15 0 0 0 200 275H260A15 15 0 0 0 275 260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Maximize.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Maximize.displayName = `Blueprint6.Icon.Maximize`;
exports.default = exports.Maximize;
//# sourceMappingURL=maximize.js.map