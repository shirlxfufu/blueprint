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

export const FilterRemove: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="filter-remove" ref={ref} {...props}>
            <path
                d={isLarge ? "M300 360C300 371 291 380 280 380H20A20.06 20.06 0 0 1 5.8 345.8L100 251.8V80A20.06 20.06 0 0 1 134.2 65.8L194.2 125.8C197.8 129.4 200 134.4 200 140V251.8L294.2000000000001 346C297.8 349.4 300 354.4 300 360M358.2 90L394 125.8C397.8 129.4 400 134.4 400 140A20.06 20.06 0 0 1 365.8 154.2L330 118.4L294.2000000000001 154.2A20.06 20.06 0 0 1 265.8 125.8L301.6 90L265.8000000000001 54.2A20.06 20.06 0 0 1 294.2000000000001 25.8L330.0000000000001 61.6L365.8000000000001 25.8A20.06 20.06 0 0 1 394.2000000000001 54.2z" : "M240 280C240 291 231 300 220 300H20A20.06 20.06 0 0 1 5.8 265.8L80 191.8V80A20.06 20.06 0 0 1 114.2 65.8L154.2 105.8C157.8 109.4 160 114.4 160 120V191.8L234.2 266C237.8 269.4 240 274.4 240 280M288.2 80L314 105.8C317.8 109.4 320 114.4 320 120A20.06 20.06 0 0 1 285.8 134.2L260 108.2L234.2 134A19.4 19.4 0 0 1 220 140A20.06 20.06 0 0 1 205.8 105.8L231.8 80L206 54.2C202.2 50.6 200 45.6 200 40A20.06 20.06 0 0 1 234.2 25.8L260 51.8L285.8 26C289.4 22.2 294.4 20 300 20A20.06 20.06 0 0 1 314.2000000000001 54.2z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
FilterRemove.displayName = `Blueprint6.Icon.FilterRemove`;
export default FilterRemove;
