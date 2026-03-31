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
export const Sweep = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "sweep", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M245 400C231.2 400 220 388.8 220 375V180H145C131.2 180 120 168.8 120 155V125Q120 122.46 119.92 120H380V155C380 168.8 368.8 180 355 180H280V375C280 388.8 268.8 400 255 400zM90 340A10 10 0 0 0 90 360H170A10 10 0 0 0 170 340zM50 280A10 10 0 0 0 50 300H170A10 10 0 0 0 170 280zM90 220A10 10 0 0 0 90 240H170A10 10 0 0 0 170 220zM60 20C71 20 109.14 43.26 118.1 100H378.74C375.38 62.1 363.5999999999999 0 325 0H300V40L240 0H200V40L140 0H60z" : "M200 320A20 20 0 0 1 180 300V140H120A20 20 0 0 1 100 120V100H300V120A20 20 0 0 1 280 140H220V300A20 20 0 0 1 200 320M70 260A10 10 0 0 0 70 280H130A10 10 0 0 0 130 260zM30 220A10 10 0 0 0 30 240H130A10 10 0 0 0 130 220zM70 180A10 10 0 0 0 70 200H130A10 10 0 0 0 130 180zM60 20C68.8 20 93.06 35.46 98.78 80H299.5200000000001C297.92 49.68 290.88 0 260 0H240V20L200 0H160V20L120 0H60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Sweep.displayName = `Blueprint6.Icon.Sweep`;
export default Sweep;
//# sourceMappingURL=sweep.js.map