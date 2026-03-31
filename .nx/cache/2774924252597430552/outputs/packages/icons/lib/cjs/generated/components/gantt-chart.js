"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GanttChart = void 0;
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
exports.GanttChart = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "gantt-chart", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M35 325A15 15 0 0 0 65 325V90H350A15 15 0 0 0 350 60H50A15 15 0 0 0 35 75zM200 315A15 15 0 0 0 200 285H112.5A15 15 0 0 0 112.5 315zM275 240A15 15 0 0 0 275 210H175A15 15 0 0 0 175 240zM350 165A15 15 0 0 0 350 135H250A15 15 0 0 0 250 165z" : "M25 260A15 15 0 0 0 55 260V75H280A15 15 0 0 0 280 45H40A15 15 0 0 0 25 60zM280 135A15 15 0 0 0 280 105H200A15 15 0 0 0 200 135zM220 195A15 15 0 0 0 220 165H140A15 15 0 0 0 140 195zM160 255A15 15 0 0 0 160 225H90A15 15 0 0 0 90 255z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.GanttChart.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.GanttChart.displayName = `Blueprint6.Icon.GanttChart`;
exports.default = exports.GanttChart;
//# sourceMappingURL=gantt-chart.js.map