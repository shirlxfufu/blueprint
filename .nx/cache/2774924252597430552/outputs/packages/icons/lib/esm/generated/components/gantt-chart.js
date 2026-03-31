import { jsx as _jsx } from "react/jsx-runtime";
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
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const GanttChart = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "gantt-chart", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M35 325A15 15 0 0 0 65 325V90H350A15 15 0 0 0 350 60H50A15 15 0 0 0 35 75zM200 315A15 15 0 0 0 200 285H112.5A15 15 0 0 0 112.5 315zM275 240A15 15 0 0 0 275 210H175A15 15 0 0 0 175 240zM350 165A15 15 0 0 0 350 135H250A15 15 0 0 0 250 165z" : "M25 260A15 15 0 0 0 55 260V75H280A15 15 0 0 0 280 45H40A15 15 0 0 0 25 60zM280 135A15 15 0 0 0 280 105H200A15 15 0 0 0 200 135zM220 195A15 15 0 0 0 220 165H140A15 15 0 0 0 140 195zM160 255A15 15 0 0 0 160 225H90A15 15 0 0 0 90 255z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
GanttChart.defaultProps = {
    size: IconSize.STANDARD,
};
GanttChart.displayName = `Blueprint6.Icon.GanttChart`;
export default GanttChart;
//# sourceMappingURL=gantt-chart.js.map