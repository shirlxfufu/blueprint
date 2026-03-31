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
export const Outdated = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "outdated", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M200 400C310.4 400 400 310.4 400 200S310.4 0 200 0S0 89.6 0 200C0 211 9 220 20 220S40 211 40 200C40 111.6 111.6 40 200 40S360 111.6 360 200S288.4 360 200 360C149.4 360 104.4 336.6 75.2 300H100C111 300 120 291 120 280S111 260 100 260H20C9 260 0 269 0 280V360C0 371 9 380 20 380S40 371 40 360V319C76.4 368 134.2 400 200 400M220 80H180V120H220zM220 140H180V320H220z" : "M160 320C248.4 320 320 248.4 320 160C320 78.8 259.6 12 181.2 1.6C180.8 1.6 180.4 1.4 180 1.4C173.4 0.6 166.8 0 160 0C71.6 0 0 71.6 0 160C0 171 9 180 20 180S40 171 40 160C40 93.8 93.8 40 160 40C174.1999999999999 40 187.4 43 200 47.6V47.4C246.6 63.8 280 107.8 280 160C280 226.2 226.2 280 160 280C124.4 280 92.8 264.4000000000001 70.8 240H100C111 240 120 231 120 220S111 200 100 200H20C9 200 0 209 0 220V300C0 311 9 320 20 320S40 311 40 300V265.2A159 159 0 0 0 160 320M180 80H140V120H180zM180 140H140V240H180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Outdated.displayName = `Blueprint6.Icon.Outdated`;
export default Outdated;
//# sourceMappingURL=outdated.js.map