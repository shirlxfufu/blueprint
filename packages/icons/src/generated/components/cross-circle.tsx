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

export const CrossCircle: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="cross-circle" ref={ref} {...props}>
            <path
                d={isLarge ? "M200 0C310.46 0 400 89.54 400 200S310.46 400 200 400S0 310.46 0 200S89.54 0 200 0M294 265.8L228.2 200L294.2000000000001 134.2000000000001A20.06 20.06 0 0 0 280 100C274.4000000000001 100 269.4000000000001 102.2 265.8 106L200 171.8L134.2 105.8A20.06 20.06 0 0 0 100 120C100 125.6 102.2 130.6 106 134.2000000000001L171.8 200L105.8 265.8A20.06 20.06 0 0 0 134.2 294.2L200 228.2L265.8 294.2A20.06 20.06 0 0 0 300 280C300 274.4 297.8 269.4 294 265.8" : "M160 0A160 160 0 1 1 160 320A160 160 0 0 1 160 0M234 205.8L188.2 160L234.2 114.2A20.06 20.06 0 0 0 220 80C214.4 80 209.4 82.2 205.8 86L160 131.8L114.2 85.8A20.06 20.06 0 0 0 80 100C80 105.6 82.2 110.6 86 114.2L131.8 160L85.8 205.8A20.06 20.06 0 0 0 114.2 234.2L160 188.2L205.8 234.2A20.06 20.06 0 0 0 240 220C240 214.4 237.8 209.4 234 205.8"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
CrossCircle.displayName = `Blueprint6.Icon.CrossCircle`;
export default CrossCircle;
