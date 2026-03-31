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
export const RefreshOff = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "refresh-off", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M120 140A20 20 0 1 0 120 100H86C112.06 73.6 155.66 60 200 60A140 140 0 0 1 266.62 76.9L295.82 47.6999999999999A180 180 0 0 0 200 20C151.22 20 96.36 34.34 60 69.4400000000001V40A20 20 0 1 0 20 40V120A20 20 0 0 0 40 140zM360 220A20 20 0 0 0 380 200A180 180 0 0 0 352.4000000000001 104.3L323.1600000000001 133.5A140 140 0 0 1 340 200A20 20 0 0 0 360 220M76.88 266.64A140 140 0 0 1 60 200A20 20 0 1 0 20 200C20 234.2 29.76 267.36 47.68 295.8400000000001zM360 380A20 20 0 0 0 380 360V280A20 20 0 0 0 360 260H280A20 20 0 1 0 280 300H314C287.94 326.4 244.34 340 200 340A140 140 0 0 1 133.4 323.14L104.2 352.36A180 180 0 0 0 200 380C248.78 380 303.64 365.66 340 330.56V360A20 20 0 0 0 360 380M40 380C45.6 380 50.6 377.8 54.2 374L374.2000000000001 54.2A20.06 20.06 0 0 0 360 20C354.4 20 349.4 22.2 345.8 26L25.8 345.8A20.06 20.06 0 0 0 40 380" : "M100 120A20 20 0 1 0 100 80H88.28C105.96 66.68 131.66 60 160 60C172.92 60 185.24 62.5 196.56 66.96L226.66 36.86A140 140 0 0 0 160 20C125.6 20 87.6 28.32 60 51.34V40A20 20 0 1 0 20 40V100A20 20 0 0 0 40 120zM280 180A20 20 0 0 0 300 160A140 140 0 0 0 283.2 93.48L253.1 123.56A100 100 0 0 1 260 160A20 20 0 0 0 280 180M66.94 196.6A100 100 0 0 1 60 160A20 20 0 0 0 20 160A140 140 0 0 0 36.84 226.68zM280 300A20 20 0 0 0 300 280V220A20 20 0 0 0 280 200H220A20 20 0 1 0 220 240H231.72C214.04 253.32 188.34 260 160 260C147.1 260 134.8 257.54 123.48 253.1L93.38 283.2A140 140 0 0 0 160 300C194.4 300 232.4000000000001 291.68 260 268.66V280A20 20 0 0 0 280 300M40 300A20.06 20.06 0 0 1 25.8 265.8L265.8 26C269.4 22.2 274.4 20 280 20A20.06 20.06 0 0 1 294.2000000000001 54.2L54.2 294A19.4 19.4 0 0 1 40 300", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
RefreshOff.displayName = `Blueprint6.Icon.RefreshOff`;
export default RefreshOff;
//# sourceMappingURL=refresh-off.js.map