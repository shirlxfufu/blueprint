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
export const LengthenText = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "lengthen-text", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M16.66 80H183.34C192.5 80 200 89 200 100S192.5 120 183.34 120H16.66C7.5 120 0 111 0 100S7.5 80 16.66 80M20 180H380C391 180 400 189 400 200S391 220 380 220H20C9 220 0 211 0 200S9 180 20 180M320 140C320 134.4 322.2 129.4 325.8 125.8L331.8 120H260C249 120 240 111 240 100S249 80 260 80H331.8L326 74.2000000000001C322.2 70.6 320 65.6 320 60A20.06 20.06 0 0 1 354.2000000000001 45.8L394.2000000000001 85.8C397.8 89.6 400 94.6 400 100C400 105.6 397.8 110.6 394.2000000000001 114.2000000000001L354.2000000000001 154.2A20 20 0 0 1 340 160A19.8 19.8 0 0 1 320 140M20 280H380C391 280 400 289 400 300S391 320 380 320H20C9 320 0 311 0 300S9 280 20 280" : "M20 140H300C311 140 320 149 320 160S311 180 300 180H20C9 180 0 171 0 160S9 140 20 140M100 80H20C9 80 0 71 0 60S9 40 20 40H100C111 40 120 49 120 60S111 80 100 80M240 100C240 94.4 242.2 89.4 245.8 85.8L251.8 80H180C169 80 160 71 160 60S169 40 180 40H251.8L246 34.2C242.2 30.6 240 25.6 240 20A20.06 20.06 0 0 1 274.2000000000001 5.8L314.2000000000001 45.8C317.8 49.4 320 54.4 320 60S317.8 70.6 314.2000000000001 74.2L274.2000000000001 114.2A20.06 20.06 0 0 1 240 100M20 240H300C311 240 320 249 320 260S311 280 300 280H20C9 280 0 271 0 260S9 240 20 240", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
LengthenText.displayName = `Blueprint6.Icon.LengthenText`;
export default LengthenText;
//# sourceMappingURL=lengthen-text.js.map