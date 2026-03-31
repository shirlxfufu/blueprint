"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flows = void 0;
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
exports.Flows = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "flows", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M350 241.4A50 50 0 0 1 301 201.4H255L174.8 281.4L159.8 266.4L225 201.4H99A50 50 0 1 1 99 181.4H225L159.8 116.4L174.8 101.4L255 181.4H301A50 50 0 1 1 350 241.4" : "M270 200A50 50 0 0 1 221 160H195L114.8 240L99.8 225L165 160H99A50 50 0 1 1 99 140H165L99.8 75L114.8 60L195 140H221A50 50 0 1 1 270 200", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Flows.displayName = `Blueprint6.Icon.Flows`;
exports.default = exports.Flows;
//# sourceMappingURL=flows.js.map