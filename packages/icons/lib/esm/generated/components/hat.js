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
export const Hat = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "hat", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M370 140C392.36 140 399.3200000000001 129.32 399.9600000000001 112.68L400 110V100C400 61.1 286.2 40 200 40S0 61.1 0 100V110C0 128.16 6.46 140 30 140C47.9 140 100 116 200 116L208.22 116.06C302.86 117.32 352.62 140 370 140M270 340Q321.74 340 343.76 176.28C314.66 171.02 267.66 161.88 215.92 160.26L207.24 160.06L200 160C142.08 160 88.3 170.48 56.22 176.28Q78.26 340 130 340C172 340 166.58 290 200 290S230 340 270 340" : "M300 120C309.9 120 318.66 112.42 319.86 102.36L320 100V89.9C320 60.68 249.52 40.9 165.86 40.04L160 40C73.8 40 0 60 0 89.9V100C0 111.22 9.32 120 20 120C37.9 120 80 100 160 100L167.62 100.06C242.7 101.26 282.68 120 300 120M220 280Q253.9 280 273.42 150.8C252.16 145.48 220.54 137.76 175.68 136.26L167.62 136.06L160 136C106.72 136 70.24 144.88 46.54 150.8Q66.12 280 100 280C140 280 126.58 240 160 240S180 280 220 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Hat.displayName = `Blueprint6.Icon.Hat`;
export default Hat;
//# sourceMappingURL=hat.js.map