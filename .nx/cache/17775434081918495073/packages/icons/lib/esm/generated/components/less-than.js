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
export const LessThan = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "less-than", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M143.24 200L326.32 138.96A20 20 0 0 0 313.68 101.02L73.68 181.02C55.44 187.1 55.44 212.9 73.68 218.96L313.68 298.9600000000001A20 20 0 0 0 326.32 261.02z" : "M265.74 200.84A20 20 0 0 1 254.26 239.16L54.26 179.16C35.26 173.46 35.26 146.54 54.26 140.84L254.26 80.84A20 20 0 0 1 265.74 119.16L129.6 160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
LessThan.displayName = `Blueprint6.Icon.LessThan`;
export default LessThan;
//# sourceMappingURL=less-than.js.map