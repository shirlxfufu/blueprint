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

export const LogIn: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="log-in" ref={ref} {...props}>
            <path
                d={isLarge ? "M380 400H220C209 400 200 391 200 380S209 360 220 360H360V40H220C209 40 200 31 200 20S209 0 220 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400M300 200C300 205.6 297.8 210.6 294.2000000000001 214.2L194.2 314.2000000000001A20.06 20.06 0 0 1 165.8 285.8L231.8 220H20C9 220 0 211 0 200S9 180 20 180H231.8L166 114.2000000000001C162.2 110.6 160 105.6 160 100A20.06 20.06 0 0 1 194.2 85.8L294.2000000000001 185.8C297.8 189.4 300 194.4 300 200" : "M220 160C220 165.6 217.8 170.6 214.2 174.2L154.2 234.2A20.06 20.06 0 0 1 125.8 205.8L151.8 180H20C9 180 0 171 0 160S9 140 20 140H151.8L126 114.2C122.2 110.6 120 105.6 120 100A20.06 20.06 0 0 1 154.2 85.8L214.2 145.8C217.8 149.4 220 154.4 220 160M300 320H180C169 320 160 311 160 300S169 280 180 280H280V40H180C169 40 160 31 160 20S169 0 180 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
LogIn.displayName = `Blueprint6.Icon.LogIn`;
export default LogIn;
