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

export const Tank: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="tank" ref={ref} {...props}>
            <path
                d={isLarge ? "M79.12 310.6A20 20 0 0 0 96.08 320H223.92A20 20 0 0 0 240.8800000000001 310.6L260 280H360A20 20 0 1 0 360 240H260V220H340A60 60 0 0 0 340 100H60A60 60 0 0 0 60 220V274.26A20 20 0 0 0 63.04 284.86zM60 180A20 20 0 0 1 60 140H340A20 20 0 0 1 340 180z" : "M74 252A20 20 0 0 0 90 260H191.72A20 20 0 0 0 205.86 254.14L220 240H280A20 20 0 1 0 280 200H220V180H270A50 50 0 0 0 270 80H50A50 50 0 0 0 50 180H60V226.66A20 20 0 0 0 64 238.66zM50 140A10 10 0 0 1 50 120H270A10 10 0 0 1 270 140z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Tank.displayName = `Blueprint6.Icon.Tank`;
export default Tank;
