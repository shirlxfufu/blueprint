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

export const FilterSortAsc: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="filter-sort-asc" ref={ref} {...props}>
            <path
                d={isLarge ? "M400 360C400 371 391 380 380 380H120A20.06 20.06 0 0 1 105.8 345.8L200 251.8V80A20.06 20.06 0 0 1 234.2 65.8L294.2000000000001 125.8C297.8 129.4 300 134.4 300 140V251.8L394.2000000000001 346C397.8 349.4 400 354.4 400 360M94.2 194.2A20 20 0 0 1 80 200C74.4 200 69.4 197.8 65.8 194.2L5.8 134.2000000000001A20.06 20.06 0 0 1 34.2 105.8L60 131.8V20C60 9 69 0 80 0S100 9 100 20V131.8L125.8 106C129.4 102.2000000000001 134.4 100 140 100A20.06 20.06 0 0 1 154.2 134.2000000000001z" : "M320 280C320 274.4 317.8 269.4 314.2000000000001 266L240 191.8V120C240 114.4 237.8 109.4 234.2 105.8L194.2 65.8A20.06 20.06 0 0 0 160 80V191.8L85.8 265.8A20.06 20.06 0 0 0 100 300H300C311 300 320 291 320 280M100 79.9C94.4 79.9 89.4 82.1 85.8 85.7L80 91.4999999999999V19.98C80 8.9799999999999 71 -0.0200000000001 60 -0.0200000000001S40 8.9799999999999 40 19.9799999999999V91.6799999999999L34.2 85.8799999999999A20.04 20.04 0 0 0 5.8 114.2399999999999L45.8 154.1999999999999C49.4 157.8 54.4 160 60 160S70.6 157.8 74.2 154.2L114.2 114.26C117.8 110.66 120 105.66 120 100.06C120 88.88 111 79.9 100 79.9"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
FilterSortAsc.displayName = `Blueprint6.Icon.FilterSortAsc`;
export default FilterSortAsc;
