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
export const HeatGrid = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "heat-grid", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M280 160H400V240H280zM0 160H120V240H0zM20 220H100V180H20zM0 80C0 69 9 60 20 60H120V140H0zM380 340H280V260H400V320C400 331 391 340 380 340M380 280H300V320H380zM0 320V260H120V340H20C9 340 0 331 0 320M140 260H260V340H140zM280 60H380C391 60 400 69 400 80V140H280zM140 60H260V140H140zM160 120H240V80H160zM140 160H260V240H140z" : "M0 120H100V180H0zM20 160H80V140H20zM300 260H220V200H320V240C320 251 311 260 300 260M300 220H240V240H300zM0 240V200H100V260H20C9 260 0 251 0 240M0 60C0 49 9 40 20 40H100V100H0zM120 200H200V260H120zM120 40H200V100H120zM140 80H180V60H140zM220 40H300C311 40 320 49 320 60V100H220zM220 120H320V180H220zM120 120H200V180H120z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
HeatGrid.displayName = `Blueprint6.Icon.HeatGrid`;
export default HeatGrid;
//# sourceMappingURL=heat-grid.js.map