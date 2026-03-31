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

export const Sort: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="sort" ref={ref} {...props}>
            <path
                d={isLarge ? "M380 80H200C189 80 180 71 180 60V40C180 29 189 20 200 20H380C391 20 400 29 400 40V60C400 71 391 80 380 80M380 180H200C189 180 180 171 180 160V140C180 129 189 120 200 120H380C391 120 400 129 400 140V160C400 171 391 180 380 180M140 100C134.4 100 129.4 97.8 125.8 94.2000000000001L100 68.2V180C100 191 91 200 80 200S60 191 60 180V68.2L34.2 94A19.4 19.4 0 0 1 20 100A20.06 20.06 0 0 1 5.8 65.8L65.8 5.8C69.4 2.2 74.4 0 80 0S90.6 2.2 94.2 5.8L154.2 65.8A20.06 20.06 0 0 1 140 100M380 380H200C189 380 180 371 180 360V340C180 329 189 320 200 320H380C391 320 400 329 400 340V360C400 371 391 380 380 380M380 280H200C189 280 180 271 180 260V240C180 229 189 220 200 220H380C391 220 400 229 400 240V260C400 271 391 280 380 280" : "M100 80C94.4 80 89.4 77.8 85.8 74.2L80 68.2V140C80 151 71 160 60 160S40 151 40 140V68.2L34.2 74A19.4 19.4 0 0 1 20 80A20.06 20.06 0 0 1 5.8 45.8L45.8 5.8C49.4 2.2 54.4 0 60 0S70.6 2.2 74.2 5.8L114.2 45.8A20.06 20.06 0 0 1 100 80M160 260H300C311 260 320 269 320 280S311 300 300 300H160C149 300 140 291 140 280S149 260 160 260M300 220H160C149 220 140 211 140 200S149 180 160 180H300C311 180 320 189 320 200S311 220 300 220M300 60H160C149 60 140 51 140 40S149 20 160 20H300C311 20 320 29 320 40S311 60 300 60M300 140H160C149 140 140 131 140 120S149 100 160 100H300C311 100 320 109 320 120S311 140 300 140"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Sort.displayName = `Blueprint6.Icon.Sort`;
export default Sort;
