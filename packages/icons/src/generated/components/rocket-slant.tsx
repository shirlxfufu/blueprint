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

export const RocketSlant: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="rocket-slant" ref={ref} {...props}>
            <path
                d={isLarge ? "M200 300C242.42 342.42 326.16 358.48 360 360C358.48 326.16 342.42 242.42 300 200C276.16 176.16 249.14 163.54 225.04 152.32C216.2 148.18 207.74 144.24 200 140C195.94 137.78 188.06 133.96 180.28 130.2C171.3999999999999 125.9 162.68 121.68 160 120L120 160C123.16 165.04 140 200 140 200S167.4 267.4 200 300M300 280A20 20 0 1 1 260 280A20 20 0 0 1 300 280M60 60S60 100 100 140L140 100C100 60 60 60 60 60M280 100L200 20L174.04 104.66A1000 1000 0 0 0 226.9 131.1C252.4 143.18 273.04 152.94 297.98 171.4zM20 200L100 280L171.14 297.98C152.68 273.04 142.9 252.38 130.84 226.9C123.64 211.66 115.6 194.7 104.4 174.04z" : "M79.84 120C119.84 220 179.84 300 299.8400000000001 300C299.8400000000001 180 219.84 120 119.84 80zM234.12 205.7A20 20 0 1 1 205.84 233.98A20 20 0 0 1 234.12 205.7M103.02 210.06C88.12 187.22 75.64 162.12 64.82 136.1L-0.18 160L59.82 200zM159.84 0L135.12 64.64C161.12 75.42 186.16 87.8 209 102.6L199.84 60zM61.22 98.8L100 60C80.16 40.18 56.28 36.92 39.98 40C36.9 56.3 41.38 78.96 61.18 98.8"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
RocketSlant.displayName = `Blueprint6.Icon.RocketSlant`;
export default RocketSlant;
