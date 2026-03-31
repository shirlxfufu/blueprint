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
export const FlowBranch = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "flow-branch", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M288.5 240.94A80 80 0 0 0 299.74 200.04A80 80 0 0 0 288.08 158.44L360 86.58V140.4C360 145.36 361.9400000000001 150.32 365.8 154.18A20.7 20.7 0 0 0 394.32 154.18A18.8 18.8 0 0 0 399.98 140.26L399.9599999999999 39.28A19.2 19.2 0 0 0 394.44 25.48A19.2 19.2 0 0 0 380.64 20.02H279.4599999999999A19.4 19.4 0 0 0 265.6799999999999 25.8A20.52 20.52 0 0 0 265.6799999999999 54.14A19.4 19.4 0 0 0 279.4799999999999 59.94H333.5199999999999L260.8399999999999 131.4A79.96 79.96 0 0 0 142.3599999999999 180.0200000000001H20A20 20 0 0 0 20 220.0200000000001H142.4A79.96 79.96 0 0 0 261.6 268.2000000000001L333.3 340L279.42 340.02A19.4 19.4 0 0 0 265.64 345.82A20.7 20.7 0 0 0 265.64 374.32A18.8 18.8 0 0 0 279.56 379.98L380.56 379.96A19.2 19.2 0 0 0 394.36 374.44A19 19 0 0 0 399.8 360.64L399.82 259.6A19.4 19.4 0 0 0 394.02 245.82A20.6 20.6 0 0 0 365.64 245.82A19.4 19.4 0 0 0 359.8400000000001 259.62V313.54z" : "M212.86 188.1C217.26 179.74 219.74 170.22 219.74 160.12C219.74 151.34 217.86 143.02 214.48 135.5L279.7800000000001 66.26L279.74 101.26A19.4 19.4 0 0 0 286.02 114.86A19.8 19.8 0 0 0 313.78 113.9C317.5 109.9 320.1 104.7 319.7800000000001 99.6L319.6 19A19.2 19.2 0 0 0 313.6 5.4A19.4 19.4 0 0 0 299.64 0.08L218.58 0.04A19.4 19.4 0 0 0 205 6.32A20.6 20.6 0 0 0 206 34.72A19.4 19.4 0 0 0 219.96 40.04L253.96 40.0599999999999L187.86 107.06A59.96 59.96 0 0 0 103.3 140.12H19.98A20 20 0 0 0 19.98 180.12H103.3A60 60 0 0 0 184.5 214.82L253.48 280.18L218.58 280.14A19.58 19.58 0 0 0 205.96 313.98C209.94 317.7 215.14 320.3 220.22 319.98L300.72 319.8C305.66 319.64 310.58 317.8 314.3 313.8S319.78 304.78 319.6 299.8L319.64 218.88A19.4 19.4 0 0 0 313.38 205.28A20.6 20.6 0 0 0 284.98 206.28A19.4 19.4 0 0 0 279.66 220.28V254.1z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
FlowBranch.displayName = `Blueprint6.Icon.FlowBranch`;
export default FlowBranch;
//# sourceMappingURL=flow-branch.js.map