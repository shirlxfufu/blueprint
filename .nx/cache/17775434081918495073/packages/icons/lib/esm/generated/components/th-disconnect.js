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
export const ThDisconnect = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "th-disconnect", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M285 380H380C390 380 400 370 400 360V40C400 30 390 20 380 20H235.58L241.14 60H360V120H249.46L252.26 140H360V200H260.58L263.36 220H360V280H271.68L284.42 371.74Q285.02 375.92 285.02 380M164.42 380L150.54 280H40V220H142.2L139.42 200H40V140H131.1L128.3 120H40V60H119.98L115.58 28.26Q114.98 24.08 114.98 20H20C8 20 0 30 0 40V360C0 370 8 380 20 380zM205.2 382.76A20 20 0 0 0 244.8 377.24L194.8 17.24A20 20 0 0 0 155.2 22.76z" : "M240 300H300C312 300 320 290 320 280V40C320 28 312 20 300 20H200.6L206.32 60H280V100H212.04L214.9 120H280V160H220.6L223.46 180H280V220H229.18L239.38 291.52Q240 295.78 240 300M119.4 300L107.96 220H40V180H102.24L99.4 160H40V120H93.68L90.82 100H40V60H85.1L80.6 28.48Q80 24.22 80 20H20C8 20 0 28 0 40V280C0 290 8 300 20 300zM160.2 302.82A20 20 0 1 0 199.8 297.18L159.8 17.18A20 20 0 1 0 120.2 22.82z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ThDisconnect.displayName = `Blueprint6.Icon.ThDisconnect`;
export default ThDisconnect;
//# sourceMappingURL=th-disconnect.js.map