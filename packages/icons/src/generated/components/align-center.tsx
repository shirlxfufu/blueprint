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

export const AlignCenter: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="align-center" ref={ref} {...props}>
            <path
                d={isLarge ? "M100 300C89 300 80 291 80 280S89 260 100 260H300C311 260 320 269 320 280S311 300 300 300zM20 340H380C391 340 400 349 400 360S391 380 380 380H20C9 380 0 371 0 360S9 340 20 340M260 100C271 100 280 109 280 120S271 140 260 140H140C129 140 120 131 120 120S129 100 140 100zM340 60H60C49 60 40 51 40 40S49 20 60 20H340C351 20 360 29 360 40S351 60 340 60M380 220H20C9 220 0 211 0 200S9 180 20 180H380C391 180 400 189 400 200S391 220 380 220" : "M80 240C69 240 60 231 60 220S69 200 80 200H240C251 200 260 209 260 220S251 240 240 240zM20 260H300C311 260 320 269 320 280S311 300 300 300H20C9 300 0 291 0 280S9 260 20 260M280 60H40C29 60 20 51 20 40S29 20 40 20H280C291 20 300 29 300 40S291 60 280 60M300 180H20C9 180 0 171 0 160S9 140 20 140H300C311 140 320 149 320 160S311 180 300 180M200 80C211 80 220 89 220 100S211 120 200 120H120C109 120 100 111 100 100S109 80 120 80z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
AlignCenter.displayName = `Blueprint6.Icon.AlignCenter`;
export default AlignCenter;
