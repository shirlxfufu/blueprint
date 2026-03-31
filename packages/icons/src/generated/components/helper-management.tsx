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

export const HelperManagement: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="helper-management" ref={ref} {...props}>
            <path
                d={isLarge ? "M340 200H280V140H340zM340 120H280V60H340zM340 280H280V220H340zM380 400H20C8 400 0 392 0 380V20C0 10 8 0 20 0H380C390 0 400 10 400 20V380C400 392 390 400 380 400M360 40H40V360H360zM180 120H120V60H180zM260 120H200V60H260z" : "M260 220H220V180H260zM260 100H220V60H260zM260 160H220V120H260zM300 320H20C8 320 0 312 0 300V20C0 8 8 0 20 0H300C312 0 320 8 320 20V300C320 312 312 320 300 320M280 40H40V280H280zM140 100H100V60H140zM200 100H160V60H200z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
HelperManagement.displayName = `Blueprint6.Icon.HelperManagement`;
export default HelperManagement;
