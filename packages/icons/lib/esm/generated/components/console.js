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
export const Console = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "console", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M380 20H20C9 20 0 29 0 40V360C0 371 9 380 20 380H380C391 380 400 371 400 360V40C400 29 391 20 380 20M360 280H40V60H360zM80 240C85.6 240 90.6 237.8 94.2 234.2L134.2 194.2C137.8 190.6 140 185.6 140 180S137.8 169.4 134.2 165.8L94.2 125.8A20.06 20.06 0 0 0 65.8 154.2L91.8 180L65.8 205.8A20.06 20.06 0 0 0 80 240M180 160H240C251 160 260 151 260 140S251 120 240 120H180C169 120 160 129 160 140S169 160 180 160" : "M300 20H20C9 20 0 29 0 40V280C0 291 9 300 20 300H300C311 300 320 291 320 280V40C320 29 311 20 300 20M280 220H40V60H280zM80 200C85.6 200 90.6 197.8 94.2 194.2L134.2 154.2C137.8 150.6 140 145.6 140 140S137.8 129.4 134.2 125.8L94.2 85.8A20.06 20.06 0 0 0 65.8 114.2L91.8 140L65.8 165.8A20.06 20.06 0 0 0 80 200M180 120H240C251 120 260 111 260 100S251 80 240 80H180C169 80 160 89 160 100S169 120 180 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Console.displayName = `Blueprint6.Icon.Console`;
export default Console;
//# sourceMappingURL=console.js.map