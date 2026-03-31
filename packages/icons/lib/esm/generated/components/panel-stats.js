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
export const PanelStats = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "panel-stats", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M20 380H380A20 20 0 0 0 400 360V60A20 20 0 0 0 380 40H20A20 20 0 0 0 0 60V360A20 20 0 0 0 20 380M40 340V80H360V340zM220 340H240V80H220zM260 200H339.04V180H260zM260 160H339.04V140H260zM260 120H339.04V100H260zM260 240H339.04V220H260zM260 280H339.04V260H260zM260 320H339.04V300H260z" : "M300 300C312 300 320 292 320 280V60C320 48 312 40 300 40H20C8 40 0 48 0 60V280C0 292 8 300 20 300zM40 260V80H160V260zM180 260V80H280V260zM260 100H200V120H260zM260 140H200V160H260zM260 180H200V200H260zM260 220H200V240H260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
PanelStats.displayName = `Blueprint6.Icon.PanelStats`;
export default PanelStats;
//# sourceMappingURL=panel-stats.js.map