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
export const Shapes = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "shapes", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M157.6 177.6A19.2 19.2 0 0 0 183.14 171L257.52 46.86C259.14 44.14 260 41.06 260 37.92C260 28.02 251.62 20 241.28 20H98.72A20 20 0 0 0 90 22.0600000000001A17.6 17.6 0 0 0 82.16 46.2600000000001L150.34 170.4200000000001A18 18 0 0 0 157.58 177.62M300 300A80 80 0 1 0 300 140A80 80 0 0 0 300 300M160 380A20 20 0 0 0 180 360V240A20 20 0 0 0 160 220H40A20 20 0 0 0 20 240V360A20 20 0 0 0 40 380z" : "M118.4 157.22C127.2 162.86 138.52 159.64 143.68 150.06L197.46 50.3C199.12 47.2 200 43.7 200 40.1C200 29 191.74 20 181.54 20H78.48A17.2 17.2 0 0 0 69.72 22.4C60.74 27.66 57.38 39.86 62.2 49.64L111.5 149.42A19.4 19.4 0 0 0 118.42 157.22M240 240A60 60 0 1 0 240 120A60 60 0 0 0 240 240M120 300A20 20 0 0 0 140 280V200A20 20 0 0 0 120 180H40A20 20 0 0 0 20 200V280A20 20 0 0 0 40 300z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Shapes.displayName = `Blueprint6.Icon.Shapes`;
export default Shapes;
//# sourceMappingURL=shapes.js.map