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

export const Random: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="random" ref={ref} {...props}>
            <path
                d={isLarge ? "M289.4000000000001 300H331.8L306 274.2C302.2000000000001 270.6 300 265.6 300 260A20.06 20.06 0 0 1 334.2000000000001 245.8L394.2000000000001 305.8C397.8 309.4 400 314.4 400 320S397.8 330.6 394.2000000000001 334.2L334.2000000000001 394.2A20.06 20.06 0 0 1 305.8 365.8L331.8 340H280C273.8 340 268.6 337 264.8 332.6L264.6 332.8L206 262.4L232.0000000000001 231.2zM334.2000000000001 154.2A20.06 20.06 0 0 1 305.8 125.8L331.8 100H289.4L95.4 332.8L95.2 332.6A20 20 0 0 1 80 340H20C9 340 0 331 0 320S9 300 20 300H70.6L264.6 67.2L264.8 67.4C268.6 63.0000000000001 273.8 60 280 60H331.8L306 34.2C302.2 30.6 300 25.6 300 20A20.06 20.06 0 0 1 334.2 5.8L394.2 65.8C397.8 69.4 400 74.4 400 80S397.8 90.6 394.2 94.2000000000001zM70.6 100H20C9 100 0 91 0 80S9 60 20 60H80C86.2 60 91.4 63 95.2 67.4L95.4 67.2L154 137.6L128 168.8z" : "M229.6 240H251.8L246 234.2C242.2 230.6 240 225.6 240 220A20.06 20.06 0 0 1 274.2000000000001 205.8L314.2000000000001 245.8C317.8 249.4 320 254.4 320 260S317.8 270.6 314.2000000000001 274.2L274.2000000000001 314.2A20.06 20.06 0 0 1 245.8 285.8L251.8000000000001 280H220C213.6 280 208.2 276.8 204.6 272.4L204.4 272.6L165.6 224L191.2 192zM274.2000000000001 114.2A20.06 20.06 0 0 1 245.8 85.8L251.8000000000001 80H229.6000000000001L75.6 272.4000000000001H75.4000000000001A20 20 0 0 1 60 280H20C9 280 0 271 0 260S9 240 20 240H50.4L204.4 47.6L204.6 47.8C208.2 43.2 213.6 40 220 40H251.8L246 34.2C242.2 30.6 240 25.6 240 20A20.06 20.06 0 0 1 274.2000000000001 5.8L314.2000000000001 45.8C317.8 49.4 320 54.4 320 60S317.8 70.6 314.2000000000001 74.2zM50.4 80H20C9 80 0 71 0 60S9 40 20 40H60C66.4 40 71.8 43.2 75.4 47.6L75.6 47.4L114.4 95.8L88.8 128z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Random.displayName = `Blueprint6.Icon.Random`;
export default Random;
