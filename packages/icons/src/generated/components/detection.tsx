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

export const Detection: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="detection" ref={ref} {...props}>
            <path
                d={isLarge ? "M20 400H120A20 20 0 0 0 120 360H40V280A20 20 0 0 0 0 280V380A20 20 0 0 0 20 400M0 20V120A20 20 0 1 0 40 120V40H120A20 20 0 0 0 120 0H20A20 20 0 0 0 0 20M380 0H280A20 20 0 0 0 280 40H360V120A20 20 0 0 0 400 120V20A20 20 0 0 0 380 0M400 380V280A20 20 0 0 0 360 280V360H280A20 20 0 1 0 280 400H380A20 20 0 0 0 400 380M100 280A20 20 0 0 0 120 300H280A20 20 0 0 0 300 280V120A20 20 0 0 0 280 100H120A20 20 0 0 0 100 120zM140 140H260V260H140z" : "M20 320H100A20 20 0 0 0 100 280H40V220A20 20 0 0 0 0 220V300A20 20 0 0 0 20 320M0 20V100A20 20 0 1 0 40 100V40H100A20 20 0 1 0 100 0H20A20 20 0 0 0 0 20M320 20A20 20 0 0 0 300 0H220A20 20 0 1 0 220 40H280V100A20 20 0 1 0 320 100zM320 300V220A20 20 0 1 0 280 220V280H220A20 20 0 1 0 220 320H300A20 20 0 0 0 320 300M100 240H220A20 20 0 0 0 240 220V100A20 20 0 0 0 220 80H100A20 20 0 0 0 80 100V220A20 20 0 0 0 100 240M120 200V120H200V200z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Detection.displayName = `Blueprint6.Icon.Detection`;
export default Detection;
