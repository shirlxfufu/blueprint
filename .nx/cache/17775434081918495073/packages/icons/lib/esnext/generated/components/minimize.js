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
export const Minimize = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "minimize", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M160 180H60C49 180 40 171 40 160S49 140 60 140H111.8L6 34.2C2.2 30.6 0 25.6 0 20A20.06 20.06 0 0 1 34.2 5.8L140 111.8V60C140 49 149 40 160 40S180 49 180 60V160C180 171 171 180 160 180M400 380A20.06 20.06 0 0 1 365.8 394.2L260 288.2V340C260 351 251 360 240 360S220 351 220 340V240C220 229 229 220 240 220H340C351 220 360 229 360 240S351 260 340 260H288.2L394 365.8C397.8 369.4 400 374.4 400 380" : "M319.8 300.2A20.06 20.06 0 0 1 285.6 314.4L219.8000000000001 248.6V280.2C219.8000000000001 291.2 210.8000000000001 300.2 199.8000000000001 300.2S179.8000000000001 291.2 179.8000000000001 280.2V200.2C179.8000000000001 189.2 188.8 180.2 199.8000000000001 180.2H279.8000000000001C290.8000000000001 180.2 299.8000000000001 189.2 299.8000000000001 200.2S290.8000000000001 220.2 279.8000000000001 220.2H248L314 286C317.6 289.6 319.8 294.6 319.8 300.2M119.8 140.2H39.8C28.8 140.2 19.8 131.2 19.8 120.2S28.8 100.2 39.8 100.2H71.6L5.8 34.4A20.06 20.06 0 0 1 34.2 6L100 71.8V40C100 29 109 20 120 20S140 29 140 40V120A20.4 20.4 0 0 1 119.8 140.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Minimize.displayName = `Blueprint6.Icon.Minimize`;
export default Minimize;
//# sourceMappingURL=minimize.js.map