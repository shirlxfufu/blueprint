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
export const Updated = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "updated", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M200 400C134.2 400 76.4 368 40 319V360C40 371 31 380 20 380S0 371 0 360V280C0 269 9 260 20 260H100C111 260 120 269 120 280S111 300 100 300H75.2C104.4 336.6 149.4 360 200 360C288.4 360 360 288.4 360 200S288.4 40 200 40S40 111.6 40 200C40 211 31 220 20 220S0 211 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M280 260C274.4000000000001 260 269.4000000000001 257.8 265.8 254.2L180 168.4L134.2 214.2A20.06 20.06 0 0 1 105.8 185.8L165.8 125.8C169.4 122.2000000000001 174.4 120.0000000000001 180 120.0000000000001S190.6 122.2000000000001 194.2 125.8L294.2000000000001 225.8A20.06 20.06 0 0 1 280 260" : "M160 320A159 159 0 0 1 40 265.2V300C40 311 31 320 20 320S0 311 0 300V220C0 209 9 200 20 200H100C111 200 120 209 120 220S111 240 100 240H70.8C92.8 264.4 124.4 280 160 280C226.2 280 280 226.2 280 160C280 107.8 246.6 63.8 200 47.4C187.4 43 174.2 40.0000000000001 160 40.0000000000001C93.8 40.0000000000001 40 93.8 40 160C40 171 31 180 20 180S0 171 0 160C0 71.6 71.6 1e-13 160 1e-13C166.8 1e-13 173.4 0.6 180 1.4C180.4 1.4 180.8 1.6 181.2 1.6C259.6 12 320 78.8 320 160C320 248.4 248.4 320 160 320M220 220C214.4 220 209.4 217.8 205.8 214.2L140 148.4L114.2 174.2A20.06 20.06 0 0 1 85.8 145.8L125.8 105.8C129.4 102.2 134.4 100 140 100S150.6 102.2 154.2 105.8L234.2 185.8A20.06 20.06 0 0 1 220 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Updated.displayName = `Blueprint6.Icon.Updated`;
export default Updated;
//# sourceMappingURL=updated.js.map