"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalBarChartAsc = void 0;
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
exports.VerticalBarChartAsc = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "vertical-bar-chart-asc", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M222.5 75V275A15 15 0 0 0 252.5 275V75A15 15 0 0 0 222.5 75M297.5 75V337.5A15 15 0 0 0 327.5 337.5V75A15 15 0 0 0 297.5 75M147.5 75V212.5A15 15 0 0 0 177.5 212.5V75A15 15 0 0 0 147.5 75M72.5 75V150A15 15 0 0 0 102.5 150V75A15 15 0 0 0 72.5 75" : "M55 60V120A15 15 0 0 0 85 120V60A15 15 0 0 0 55 60M115 60V170A15 15 0 0 0 145 170V60A15 15 0 0 0 115 60M175 60V220A15 15 0 0 0 205 220V60A15 15 0 0 0 175 60M235 60V270A15 15 0 0 0 265 270V60A15 15 0 0 0 235 60", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.VerticalBarChartAsc.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.VerticalBarChartAsc.displayName = `Blueprint6.Icon.VerticalBarChartAsc`;
exports.default = exports.VerticalBarChartAsc;
//# sourceMappingURL=vertical-bar-chart-asc.js.map