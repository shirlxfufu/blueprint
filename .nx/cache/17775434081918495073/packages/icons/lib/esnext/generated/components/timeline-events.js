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
export const TimelineEvents = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "timeline-events", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M100 300C112 300 120 308 120 320V360C120 370 112 380 100 380S80 370 80 360V320C80 308 88 300 100 300M300 300C312 300 320 308 320 320V360C320 370 312 380 300 380S280 370 280 360V320C280 308 288 300 300 300M120 120H80V80H120zM340 340V320C340 298 322 280 300 280S260 298 260 320V340H140V320C140 298 122 280 100 280S60 298 60 320V340H40C30 340 20 330 20 320V40C20 30 30 20 40 20H360C370 20 380 30 380 40V320C380 330 370 340 360 340zM140 60H60V140H140zM140 160H60V240H140zM240 60H160V140H240zM240 160H160V240H240zM340 60H260V140H340zM340 160H260V240H340zM220 120H180V80H220zM320 220H280V180H320z" : "M160 100H140V80H160zM80 100H60V80H80zM220 260C232 260 240 270 240 280V300C240 310 232 320 220 320S200 310 200 300V280C200 270 210 260 220 260M80 260C90 260 100 270 100 280V300C100 310 90 320 80 320S60 310 60 300V280C60 270 70 260 80 260M280 300H260V280C260 258 242 240 220 240S180 258 180 280V300H120V280C120 258 102 240 80 240S40 258 40 280V300H20C10 300 0 290 0 280V40C0 30 10 20 20 20H280C292 20 300 30 300 40V280C300 290 292 300 280 300M100 60H40V120H100zM100 140H40V200H100zM180 60H120V120H180zM180 140H120V200H180zM260 60H200V120H260zM260 140H200V200H260zM240 180H220V160H240z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
TimelineEvents.displayName = `Blueprint6.Icon.TimelineEvents`;
export default TimelineEvents;
//# sourceMappingURL=timeline-events.js.map