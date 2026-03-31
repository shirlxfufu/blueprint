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

export const PhoneSearch: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="phone-search" ref={ref} {...props}>
            <path
                d={isLarge ? "M280 400H80C69 400 60 391 60 380V20C60 9 69 0 80 0H280C291 0 300 9 300 20V106.84A120 120 0 0 0 260 100V80H100V340H260C274.02 340 287.5 337.6 300 333.18V380C300 391 291 400 280 400M180 20C169 20 160 29 160 40S169 60 180 60S200 51 200 40S191 20 180 20M260 320C274.2200000000001 320 287.74 317.04 300 311.68A99.8 99.8 0 0 0 360 220A100 100 0 0 0 343.44 164.86L394.12 114.18A20 20 0 1 0 365.82 85.88L315.1400000000001 136.56A100 100 0 0 0 260 120A100 100 0 0 0 160 220C160.42 274.48 205.18 320 260 320M260 280A60 60 0 1 1 260 160A60 60 0 0 1 260 280" : "M60 320H220C231 320 240 311 240 300V288.04A110 110 0 0 1 190 300A109.8 109.8 0 0 1 105.08 260H80V80H200V80.46A108 108 0 0 1 234.1 89.4L240 83.52V20C240 9 231 0 220 0H60C49 0 40 9 40 20V300C40 311 49 320 60 320M120 40C120 29 129 20 140 20S160 29 160 40S151 60 140 60S120 51 120 40M237.8 114A90 90 0 0 0 190 100C140.2 100 100 140.2 100 190A89.8 89.8 0 0 0 133.36 260C148.8 272.52 168.5 280 190 280A89.8 89.8 0 0 0 280 190C280 172.4 274.8 156.2 266 142.2L314.2000000000001 94.2A20.06 20.06 0 0 0 300 60C294.4000000000001 60 289.4000000000001 62.2 286 65.8zM240 190A50 50 0 1 1 139.96 190A50 50 0 0 1 240 190"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
PhoneSearch.displayName = `Blueprint6.Icon.PhoneSearch`;
export default PhoneSearch;
