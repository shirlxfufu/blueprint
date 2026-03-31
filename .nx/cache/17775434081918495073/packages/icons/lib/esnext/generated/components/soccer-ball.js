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
export const SoccerBall = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "soccer-ball", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M190 20A190 190 0 1 1 190 400A190 190 0 0 1 190 20M190 60A150 150 0 0 0 143.74 67.26L130.44 108.22L153.48 139.92H229.96L253 108.22L240.12 68.58A150 150 0 0 0 190 60M70 119.98A149.4 149.4 0 0 0 40 210V211L71.14 233.64L117.88 218.44L138.64 153.52L114.24 120zM340 210A149.4 149.4 0 0 0 310 119.98H269.2000000000001L242.42 156.82L261.9400000000001 217.82L310.5800000000001 233.62L339.98 212.26zM64.5 292.18A150.6 150.6 0 0 0 135.28 349.7L179.92 317.26V279.56L123.26 237.74L77.34 252.6600000000001zM304.4000000000001 252.66L257.26 237.3400000000001L199.92 279.68V317.2800000000001L244.62 349.74A150.6 150.6 0 0 0 316.66 290.4000000000001z" : "M300 170A150 150 0 1 0 0 170A150 150 0 0 0 300 170M150 60C163.88 60 177.14 62.56 189.38 67.26L196.22 88.32L173.58 119.46H126.8L104.04 88.2L110.86 67.16A110 110 0 0 1 150 60M259.98 167.8L236.4 184.92L203 174.08L189.28 131.82L189.32 131.84L212.4 100.08H234.92A109.6 109.6 0 0 1 259.98 167.8M65.18 99.96H87.88L110.8 131.52L97.08 173.8L62.86 184.92L40.02 168.32A109.6 109.6 0 0 1 65.18 99.96M160 220.74L197.66 193.36L230.22 203.96L239.82 233.5A110 110 0 0 1 182.02 275.26L160 259.26zM117.98 275.26A110 110 0 0 1 59.66 232.8L69.06 203.96L102.1 193.22L140 220.74V259.26z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SoccerBall.displayName = `Blueprint6.Icon.SoccerBall`;
export default SoccerBall;
//# sourceMappingURL=soccer-ball.js.map