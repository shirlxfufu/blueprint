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

export const Refresh: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="refresh" ref={ref} {...props}>
            <path
                d={isLarge ? "M72.72 327.28A180 180 0 0 0 200 380C248.78 380 303.64 365.66 340 330.58V360A20 20 0 1 0 380 360V280A20 20 0 0 0 360 260H280A20 20 0 1 0 280 300H314C287.92 326.4 244.34 340 200 340A140 140 0 0 1 60 200A20 20 0 1 0 20 200A180 180 0 0 0 72.72 327.28M327.2800000000001 72.72A180 180 0 0 0 200 20C151.22 20 96.36 34.34 60 69.42V40A20 20 0 1 0 20 40V120A20 20 0 0 0 40 140H120A20 20 0 1 0 120 100H86C112.08 73.6 155.66 60 200 60A140 140 0 0 1 340 200A20 20 0 1 0 380 200A180 180 0 0 0 327.2800000000001 72.72" : "M160 260A100 100 0 0 1 60 160A20 20 0 0 0 20 160A140 140 0 0 0 160 300C194.4 300 232.4000000000001 291.68 260 268.66V280A20 20 0 1 0 300 280V220A20 20 0 0 0 280 200H220A20 20 0 1 0 220 240H231.72C214.04 253.32 188.34 260 160 260M160 60A100 100 0 0 1 260 160A20 20 0 1 0 300 160A140 140 0 0 0 160 20C125.6 20 87.6 28.32 60 51.36V40A20 20 0 1 0 20 40V100A20 20 0 0 0 40 120H100A20 20 0 1 0 100 80H88.28C105.96 66.68 131.66 60 160 60"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Refresh.displayName = `Blueprint6.Icon.Refresh`;
export default Refresh;
