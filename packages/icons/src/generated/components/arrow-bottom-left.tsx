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

export const ArrowBottomLeft: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="arrow-bottom-left" ref={ref} {...props}>
            <path
                d={isLarge ? "M360 340A20.06 20.06 0 0 1 325.8 354.2L80 108.2V260C80 271 71 280 60 280S40 271 40 260V60C40 49 49 40 60 40H260C271 40 280 49 280 60S271 80 260 80H108.2L354.2000000000001 325.8C357.8 329.4 360 334.4 360 340" : "M280 260A20.06 20.06 0 0 1 245.8 274.2L80 108.2V200C80 211 71 220 60 220S40 211 40 200V60C40 49 49 40 60 40H200C211 40 220 49 220 60S211 80 200 80H108.2L274 245.8C277.8 249.4 280 254.4 280 260"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ArrowBottomLeft.displayName = `Blueprint6.Icon.ArrowBottomLeft`;
export default ArrowBottomLeft;
