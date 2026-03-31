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
import type { SVGIconProps } from "../../svgIconProps";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";

export const ThVirtualAdd: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="th-virtual-add" ref={ref} {...props}>
            <path
                d={isLarge ? "M300 380A20 20 0 1 0 340 380V340H380A20 20 0 1 0 380 300H340V260A20 20 0 1 0 300 260V300H260A20 20 0 1 0 260 340H300zM20 380H260A60 60 0 0 1 215.28 280H40V60H340V203.4A60 60 0 0 1 380 260V40A20 20 0 0 0 360 20H20A20 20 0 0 0 0 40V360C0 370 8 380 20 380M60 240A20 20 0 0 0 80 260H180A20 20 0 0 0 180 220H128.28L234.14 114.14A20 20 0 1 0 205.86 85.86L100 191.72V140A20 20 0 0 0 60 140z" : "M240 300A19.98 19.98 0 1 0 280 300V280H300A20 20 0 0 0 316.6 271.2A20 20 0 0 0 316.2 248.24A20 20 0 0 0 300 240H280V220A20 20 0 0 0 270.2 202.8A20 20 0 0 0 252.2 201.58A20 20 0 0 0 240 220V240H220A20 20 0 0 0 203.4 248.8A20 20 0 0 0 204.06 272.08A20 20 0 0 0 220 280H240zM280 163.4A60 60 0 0 1 317.44 202.58Q318.74 202.98 320 203.42V40C320 28 312 20 300 20H20A20 20 0 0 0 0 40V280C0 290 8 300 20 300H175.28A60 60 0 0 1 160 260C160 244.64 165.78 230.6 175.28 220H40V60H280zM147.2 85.6L100 132.74V120A20 20 0 0 0 60 120V180A20 20 0 0 0 80 200H140A20 20 0 0 0 140 160H127.1L174.4 112.76A19.24 19.24 0 0 0 147.2 85.58"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ThVirtualAdd.displayName = `Blueprint6.Icon.ThVirtualAdd`;
export default ThVirtualAdd;
