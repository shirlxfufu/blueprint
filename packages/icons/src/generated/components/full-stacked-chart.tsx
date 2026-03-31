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

export const FullStackedChart: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="full-stacked-chart" ref={ref} {...props}>
            <path
                d={isLarge ? "M300 80H340C351 80 360 89 360 100V200H280V100C280 89 289 80 300 80M240 360C240 371 231 380 220 380H180C169 380 160 371 160 360V280H240zM360 280H280V220H360zM360 360C360 371 351 380 340 380H300C289 380 280 371 280 360V300H360zM240 260H160V160H240zM60 80H100C111 80 120 89 120 100V160H40V100C40 89 49 80 60 80M180 80H220C231 80 240 89 240 100V140H160V100C160 89 169 80 180 80M380 60H20C9 60 0 51 0 40S9 20 20 20H380C391 20 400 29 400 40S391 60 380 60M120 360C120 371 111 380 100 380H60C49 380 40 371 40 360V300H120zM120 280H40V180H120z" : "M260 80H280C291 80 300 89 300 100V160H240V100C240 89 249 80 260 80M200 280C200 291 191 300 180 300H160C149 300 140 291 140 280V220H200zM200 200H140V140H200zM300 280C300 291 291 300 280 300H260C249 300 240 291 240 280V240H300zM300 220H240V180H300zM100 220H40V160H100zM60 80H80C91 80 100 89 100 100V140H40V100C40 89 49 80 60 80M300 60H40C29 60 20 51 20 40S29 20 40 20H300C311 20 320 29 320 40S311 60 300 60M100 280C100 291 91 300 80 300H60C49 300 40 291 40 280V240H100zM160 80H180C191 80 200 89 200 100V120H140V100C140 89 149 80 160 80"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
FullStackedChart.displayName = `Blueprint6.Icon.FullStackedChart`;
export default FullStackedChart;
