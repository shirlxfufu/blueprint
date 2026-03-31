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

export const ArrayDate: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="array-date" ref={ref} {...props}>
            <path
                d={isLarge ? "M380 400A20 20 0 0 0 399.86 382.34L400 380V20A20 20 0 0 0 382.3400000000001 0.14L380 0H300A20 20 0 0 0 297.66 39.86L300 40H360V360H300A20 20 0 0 0 280.14 377.6600000000001L280 380A20 20 0 0 0 297.66 399.86L300 400zM100 400A20 20 0 0 0 102.34 360.14L100 360H40V40H100A20 20 0 0 0 119.86 22.34L120 20A20 20 0 0 0 102.34 0.14L100 0H20A20 20 0 0 0 0.14 17.66L0 20V380A20 20 0 0 0 17.66 399.86L20 400zM150 300A10 10 0 0 0 160 290V280H240V290A10 10 0 0 0 250 300H270A10 10 0 0 0 280 290V280H300A20 20 0 0 0 319.86 262.3400000000001L320 260V120A20 20 0 0 0 302.3400000000001 100.14L300 100H100A20 20 0 0 0 80.14 117.66L80 120V260A20 20 0 0 0 97.66 279.86L100 280H120V290A10 10 0 0 0 130 300zM300 220H100V120H300z" : "M300 320A20 20 0 0 0 319.86 302.34L320 300V20A20 20 0 0 0 302.3400000000001 0.14L300 0H240A20 20 0 0 0 237.66 39.86L240 40H280V280H240A20 20 0 0 0 220.14 297.6600000000001L220 300A20 20 0 0 0 237.66 319.86L240 320zM80 320A20 20 0 0 0 82.34 280.14L80 280H40V40H80A20 20 0 0 0 99.86 22.34L100 20A20 20 0 0 0 82.34 0.14L80 0H20A20 20 0 0 0 0.14 17.66L0 20V300A20 20 0 0 0 17.66 319.86L20 320zM210 240A10 10 0 0 0 220 230V220A20 20 0 0 0 239.86 202.34L240 200V100A20 20 0 0 0 222.34 80.14L220 80H100A20 20 0 0 0 80.14 97.66L80 100V200A20 20 0 0 0 97.66 219.86L100 220V230A10 10 0 0 0 120 230V220H200V230A10 10 0 0 0 210 240M220 180H100V100H220z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ArrayDate.displayName = `Blueprint6.Icon.ArrayDate`;
export default ArrayDate;
