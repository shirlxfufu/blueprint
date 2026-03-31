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
export const Compass = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "compass", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200M256.6 276.28A15 15 0 0 0 276.3 256.58L238.8 169.08A15 15 0 0 0 230.92 161.2L143.4 123.7A15 15 0 0 0 123.7 143.4L161.2 230.9A15 15 0 0 0 169.06 238.78zM186.4 213.56L166.04 166.06L213.54 186.44L233.9 233.9400000000001z" : "M265 160A105 105 0 1 1 55 160A105 105 0 0 1 265 160M204.08 223.8A15 15 0 0 0 223.8 204.08L193.8 134.08A15 15 0 0 0 185.92 126.22L115.92 96.22A15 15 0 0 0 96.22 115.92L126.22 185.92A15 15 0 0 0 134.08 193.78zM151.42 168.56L138.56 138.56L168.56 151.42L181.42 181.42zM295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Compass.defaultProps = {
    size: IconSize.STANDARD,
};
Compass.displayName = `Blueprint6.Icon.Compass`;
export default Compass;
//# sourceMappingURL=compass.js.map