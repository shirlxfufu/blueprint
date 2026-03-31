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
export const Rocket = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "rocket", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M140 250C140 310 177.14 375 200 400C222.86 375 260 310 260 250S245.72 125 240 100H160C154.28 125 140 190 140 250M276.8 200C274.02 167.6 267.4 131.9 260 99.8L340 80L320 160zM180.16 80Q179.96 75.8 180 71.42C180 57.14 180 50 200 0C220 50 220 57.14 220 71.42Q220.04 75.8000000000001 219.84 80.0000000000001zM140 99.78C132.6 131.88 125.98 167.5800000000001 123.2 200L80 160L60 80zM200 300A20 20 0 1 1 200 260A20 20 0 0 1 200 300" : "M120 80C87.94 170.8 88.3 230.7 160 320C231.7 230.3 232.04 170.4 200 80zM180 220A20 20 0 1 1 140 220A20 20 0 0 1 180 220M40 59.56L60 140L80 160C81.52 133.66 92.7 100.92 98.92 82.72L100 79.56zM220 79.56L221.08 82.72C227.2800000000001 100.92 238.48 133.66 240 160L260 140L280 59.56zM140 60H180C180 30 170 10 160 0C150 10 140 30 140 60", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Rocket.displayName = `Blueprint6.Icon.Rocket`;
export default Rocket;
//# sourceMappingURL=rocket.js.map