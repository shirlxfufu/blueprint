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

export const LayoutRightColumnThreeTiles: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="layout-right-column-three-tiles" ref={ref} {...props}>
            <path
                d={isLarge ? "M0 380A20 20 0 0 0 20 400H160A20 20 0 0 0 180 380V20A20 20 0 0 0 160 0H20A20 20 0 0 0 0 20zM220 380A20 20 0 0 0 240 400H380A20 20 0 0 0 400 380V320A20 20 0 0 0 380 300H240A20 20 0 0 0 220 320zM220 240A20 20 0 0 0 240 260H380A20 20 0 0 0 400 240V160A20 20 0 0 0 380 140H240A20 20 0 0 0 220 160zM220 80A20 20 0 0 0 240 100H380A20 20 0 0 0 400 80V20A20 20 0 0 0 380 0H240A20 20 0 0 0 220 20z" : "M180 180A20 20 0 0 0 200 200H300A20 20 0 0 0 320 180V140A20 20 0 0 0 300 120H200A20 20 0 0 0 180 140zM180 300A20 20 0 0 0 200 320H300A20 20 0 0 0 320 300V260A20 20 0 0 0 300 240H200A20 20 0 0 0 180 260zM180 60A20 20 0 0 0 200 80H300A20 20 0 0 0 320 60V20A20 20 0 0 0 300 0H200A20 20 0 0 0 180 20zM0 300A20 20 0 0 0 20 320H120A20 20 0 0 0 140 300V20A20 20 0 0 0 120 0H20A20 20 0 0 0 0 20z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
LayoutRightColumnThreeTiles.displayName = `Blueprint6.Icon.LayoutRightColumnThreeTiles`;
export default LayoutRightColumnThreeTiles;
