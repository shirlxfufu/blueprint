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

export const Input: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="input" ref={ref} {...props}>
            <path
                d={isLarge ? "M400 200C400 89.8 310.2 0 200 0C176.6 0 153.6 4 131.6 12A20 20 0 0 0 119.6 37.6C123.4 48.0000000000001 134.8 53.4 145.2 49.6000000000001C162.8 43.2 181.2 40.0000000000001 200 40.0000000000001C288.2 40.0000000000001 360 111.8000000000001 360 200.0000000000001S288.2 360.0000000000001 200 360.0000000000001C181.2 360.0000000000001 162.8 356.8000000000001 145.2 350.4000000000001A20 20 0 0 0 119.6 362.4000000000001A20 20 0 0 0 131.6 388C153.6 396 176.6 400 200 400C310.2 400 400 310.2 400 200M314.2000000000001 214.2L234.2 294.2000000000001A20.06 20.06 0 0 1 205.8 265.8L251.8 220H20A20 20 0 0 1 20 180H251.8L206 134.2000000000001C202.2 130.6 200 125.6 200 120A20.06 20.06 0 0 1 234.2 105.8L314.2000000000001 185.8C317.8 189.4 320 194.4 320 200S317.8 210.6 314.2000000000001 214.2" : "M160 0C248.2 0 320 71.64 320 160.1S248.2 320 160 320C141.2 320 122.8 316.8 105.2 310.4C94.8 306.6 89.4 295.2 93.2 284.78S108.4 268.98 118.8 272.78A120.14 120.14 0 0 0 279.8000000000001 159.9A120.14 120.14 0 0 0 118.8 47.04A19.94 19.94 0 0 1 93.2 35.04A20 20 0 0 1 105.2 9.4C122.8 3 141.2 0 160 0M234.2 174.1C237.8 170.5 240 165.5 240 159.9S237.8 149.3000000000001 234.2 145.7L174.2 85.66A20.06 20.06 0 0 0 140 99.86C140 105.46 142.2 110.46 146 114.0600000000001L171.8 139.8800000000001H20C9 139.8800000000001 0 148.8800000000001 0 159.9000000000001S9 179.9000000000001 20 179.9000000000001H171.8L145.8 205.7200000000001A20.06 20.06 0 0 0 174.2 234.1200000000001z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Input.displayName = `Blueprint6.Icon.Input`;
export default Input;
