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
export const Crown = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "crown", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M40 240L120 200L200 300L280 200L360 240L340 100H60zM200 360A20 20 0 1 0 200 320A20 20 0 0 0 200 360M20 300A20 20 0 1 0 20 260A20 20 0 0 0 20 300M380 300A20 20 0 1 0 380 260A20 20 0 0 0 380 300M60 80H340V40H60z" : "M40 200L100 160L160 240L220 160L280 200L260 80H60zM160 300A20 20 0 1 0 160 260A20 20 0 0 0 160 300M20 260A20 20 0 1 0 20 220A20 20 0 0 0 20 260M300 260A20 20 0 1 0 300 220A20 20 0 0 0 300 260M60 60H260V20H60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Crown.displayName = `Blueprint6.Icon.Crown`;
export default Crown;
//# sourceMappingURL=crown.js.map