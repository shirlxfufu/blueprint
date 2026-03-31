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

export const AlignLeft: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="align-left" ref={ref} {...props}>
            <path
                d={isLarge ? "M20 260H220C231 260 240 269 240 280S231 300 220 300H20C9 300 0 291 0 280S9 260 20 260M20 340H380C391 340 400 349 400 360S391 380 380 380H20C9 380 0 371 0 360S9 340 20 340M300 60H20C9 60 0 51 0 40S9 20 20 20H300C311 20 320 29 320 40S311 60 300 60M380 220H20C9 220 0 211 0 200S9 180 20 180H380C391 180 400 189 400 200S391 220 380 220M20 100H140C151 100 160 109 160 120S151 140 140 140H20C9 140 0 131 0 120S9 100 20 100" : "M260 60H20C9 60 0 51 0 40S9 20 20 20H260C271 20 280 29 280 40S271 60 260 60M20 260H300C311 260 320 269 320 280S311 300 300 300H20C9 300 0 291 0 280S9 260 20 260M20 200H180C191 200 200 209 200 220S191 240 180 240H20C9 240 0 231 0 220S9 200 20 200M300 180H20C9 180 0 171 0 160S9 140 20 140H300C311 140 320 149 320 160S311 180 300 180M20 80H100C111 80 120 89 120 100S111 120 100 120H20C9 120 0 111 0 100S9 80 20 80"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
AlignLeft.displayName = `Blueprint6.Icon.AlignLeft`;
export default AlignLeft;
