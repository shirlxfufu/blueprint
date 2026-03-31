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

export const Target: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="target" ref={ref} {...props}>
            <path
                d={isLarge ? "M180 300A20 20 0 0 0 220 300V240A20 20 0 0 0 180 240zM240 220H300A20 20 0 1 0 300 180H240A20 20 0 0 0 240 220M80 200A20 20 0 0 0 100 220H160A20 20 0 0 0 160 180H100A20 20 0 0 0 80 200M200 180A20 20 0 0 0 220 160V100A20 20 0 0 0 180 100V160A20 20 0 0 0 200 180M200 0C89.54 0 0 89.54 0 200S89.54 400 200 400S400 310.46 400 200S310.46 0 200 0M200 40A160 160 0 1 1 200 360.0200000000001A160 160 0 0 1 200 40" : "M140 240A20 20 0 0 0 180 240V200A20 20 0 0 0 140 200zM200 180H240A20 20 0 0 0 240 140H200A20 20 0 0 0 200 180M80 180H120A20 20 0 0 0 120 140H80A20 20 0 0 0 80 180M160 140A20 20 0 0 0 180 120V80A20 20 0 0 0 140 80V120A20 20 0 0 0 160 140M320 160A160 160 0 1 0 0 160A160 160 0 0 0 320 160M280 160A120 120 0 1 1 40 160A120 120 0 0 1 280 160"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Target.displayName = `Blueprint6.Icon.Target`;
export default Target;
