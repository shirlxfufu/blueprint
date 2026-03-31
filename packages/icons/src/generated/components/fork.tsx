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

export const Fork: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="fork" ref={ref} {...props}>
            <path
                d={isLarge ? "M334.2000000000001 174.2A20.06 20.06 0 0 1 305.8 145.8L331.8 120H288.4L128.4 280H331.8L306 254.2C302.2000000000001 250.6 300 245.6 300 240A20.06 20.06 0 0 1 334.2000000000001 225.8L394.2000000000001 285.8C397.8 289.4 400 294.4 400 300S397.8 310.6 394.2000000000001 314.2L334.2000000000001 374.2A20.06 20.06 0 0 1 305.8 345.8L331.8 320H20C9 320 0 311 0 300S9 280 20 280H71.8L266 85.8C269.4000000000001 82.2 274.4000000000001 80 280 80H331.8L306 54.2C302.2000000000001 50.6 300 45.6 300 40A20.06 20.06 0 0 1 334.2000000000001 25.8L394.2000000000001 85.8C397.8 89.4 400 94.4 400 100S397.8 110.6 394.2000000000001 114.2000000000001z" : "M274 134.2A20.06 20.06 0 0 1 245.6 105.8L251.4 100H228L128 200H251.4L245.6 194.2000000000001A20.06 20.06 0 0 1 274 165.8000000000001L314 205.8000000000001C317.6 209.4 319.8 214.4 319.8 220S317.6 230.6 314 234.2000000000001L274 274.2000000000001A20.06 20.06 0 0 1 245.6 245.8000000000001L251.4 240.0000000000001H19.8C8.8 240.0000000000001 -0.2 231.0000000000001 -0.2 220S8.8 200 19.8 200H71.6L205.8 65.8000000000001C209.4 62.2000000000001 214.4 60.0000000000001 220 60.0000000000001H251.8L246 54.2000000000001A20.06 20.06 0 0 1 274.4000000000001 25.8000000000001L314.4000000000001 65.8000000000001C318 69.4000000000001 320.2000000000001 74.4000000000001 320.2000000000001 80.0000000000001S318.0000000000001 90.6000000000001 314.4000000000001 94.2000000000001z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Fork.displayName = `Blueprint6.Icon.Fork`;
export default Fork;
