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
export const SpellCheck = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "spell-check", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M177.8 388.8L277.8 188.8C279 186.2 280 183.2 280 180C280 169 271 160 260 160C252.2 160 245.6 164.6 242.2 171L217.6 220H102.4L77.8 171.2C74.4 164.6 67.8 160 60 160C49 160 40 169 40 180C40 183.2 41 186.2 42.4 188.8L89.4 283.4L107.4 319.6L142.2 388.8C145.6 395.4 152.2 400 160 400S174.4 395.4 177.8 388.8M122.4 260H197.6L160 335.2zM345.8 174.2A20.08 20.08 0 1 0 374.2000000000001 145.8L234.2 5.8C230.6 2.2 225.6 0 220 0S209.4 2.2 205.8 5.8L145.8 65.8A20.06 20.06 0 1 0 174.2 94.2L220 48.2z" : "M137.8 308.8L217.8 148.8C219 146.2 220 143.2 220 140C220 129 211 120 200 120C192.2 120 185.6 124.6 182.2 131H182L167.6 160H72.4L58 131.2H57.8C54.4 124.6 47.8 120 40 120C29 120 20 129 20 140C20 143.2 21 146.2 22.4 148.8L62 228.4L80 264.8L102.2 308.8C105.6 315.4 112.2 320 120 320S134.4 315.4 137.8 308.8M280 140C274.4000000000001 140 269.4000000000001 137.8 265.8 134.2L180 48.2L134.2 94.2A20.06 20.06 0 0 1 105.8 65.8L165.8 5.8C169.4 2.2 174.4 1e-13 180 1e-13S190.6 2.2 194.2 5.8L294.2000000000001 105.8A20.06 20.06 0 0 1 280 140M120 255.2L92.4 200H147.6z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SpellCheck.displayName = `Blueprint6.Icon.SpellCheck`;
export default SpellCheck;
//# sourceMappingURL=spell-check.js.map