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

export const FilterList: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="filter-list" ref={ref} {...props}>
            <path
                d={isLarge ? "M300 360C300 371 291 380 280 380H20A20.06 20.06 0 0 1 5.8 345.8L100 251.8V80A20.06 20.06 0 0 1 134.2 65.8L194.2 125.8C197.8 129.4 200 134.4 200 140V251.8L294.2000000000001 346C297.8 349.4 300 354.4 300 360M220 200C220 189 229 180 240 180H380C391 180 400 189 400 200S391 220 380 220H240C229 220 220 211 220 200M380 60H240C229 60 220 51 220 40S229 20 240 20H380C391 20 400 29 400 40S391 60 380 60M380 140H240C229 140 220 131 220 120S229 100 240 100H380C391 100 400 109 400 120S391 140 380 140" : "M180 160C180 149 189 140 200 140H300C311 140 320 149 320 160S311 180 300 180H200C189 180 180 171 180 160M240 280C240 291 231 300 220 300H20A20.06 20.06 0 0 1 5.8 265.8L80 191.8V80A20.06 20.06 0 0 1 114.2 65.8L154.2 105.8C157.8 109.4 160 114.4 160 120V191.8L234.2 266C237.8 269.4 240 274.4 240 280M300 120H200C189 120 180 111 180 100S189 80 200 80H300C311 80 320 89 320 100S311 120 300 120M300 60H200C189 60 180 51 180 40S189 20 200 20H300C311 20 320 29 320 40S311 60 300 60"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
FilterList.displayName = `Blueprint6.Icon.FilterList`;
export default FilterList;
