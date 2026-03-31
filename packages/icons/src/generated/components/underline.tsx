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

export const Underline: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="underline" ref={ref} {...props}>
            <path
                d={isLarge ? "M200 60C266 60 320 114 320 180V330C320 346 306 360 290 360S260 346 260 330V180C260 146 234 120 200 120S140 146 140 180V330C140 346 126 360 110 360S80 346 80 330V180C80 114 134 60 200 60M330 20H70C64 20 60 16 60 10S64 0 70 0H330C336 0 340 4 340 10S336 20 330 20" : "M160 40C216 40 260 84 260 140V260C260 272 252 280 240 280S220 272 220 260V140C220 106 194 80 160 80S100 106 100 140V260C100 272 92 280 80 280S60 272 60 260V140C60 84 104 40 160 40M270 20H50C44 20 40 16 40 10S44 0 50 0H270C276 0 280 4 280 10S276 20 270 20"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Underline.displayName = `Blueprint6.Icon.Underline`;
export default Underline;
