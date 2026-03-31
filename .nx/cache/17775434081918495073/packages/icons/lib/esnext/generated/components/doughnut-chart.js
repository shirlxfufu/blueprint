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
export const DoughnutChart = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "doughnut-chart", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M320 200C320 133.8 266.2 80 200 80S80 133.8 80 200S133.8 320 200 320V400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200zM318.2 220H399C389.6 314.4 314.4000000000001 389.6 220 399V318A119.6 119.6 0 0 0 318.2 220" : "M237.2 180H318.2C309 252.2 252.2 309.6 180 318.6V237.2A80 80 0 0 0 237.2 180M240 160C240 115.8 204.2 80 160 80S80 115.8 80 160S115.8 240 160 240V320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
DoughnutChart.displayName = `Blueprint6.Icon.DoughnutChart`;
export default DoughnutChart;
//# sourceMappingURL=doughnut-chart.js.map