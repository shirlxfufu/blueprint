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

export const ArrayBoolean: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="array-boolean" ref={ref} {...props}>
            <path
                d={isLarge ? "M380 400A20 20 0 0 0 399.86 382.34L400 380V20A20 20 0 0 0 382.3400000000001 0.14L380 0H300A20 20 0 0 0 297.66 39.86L300 40H360V360H300A20 20 0 0 0 280.14 377.6600000000001L280 380A20 20 0 0 0 297.66 399.86L300 400zM100 400A20 20 0 0 0 102.34 360.14L100 360H40V40H100A20 20 0 0 0 119.86 22.34L120 20A20 20 0 0 0 102.34 0.14L100 0H20A20 20 0 0 0 0.14 17.66L0 20V380A20 20 0 0 0 17.66 399.86L20 400zM300 260A20 20 0 0 0 319.86 242.34L320 240V160A20 20 0 0 0 302.3400000000001 140.14L300 140H100A20 20 0 0 0 80.14 157.66L80 160V240A20 20 0 0 0 97.66 259.86L100 260zM300 240H200V160H300z" : "M300 320A20 20 0 0 0 319.86 302.34L320 300V20A20 20 0 0 0 302.3400000000001 0.14L300 0H240A20 20 0 0 0 237.66 39.86L240 40H280V280H240A20 20 0 0 0 220.14 297.6600000000001L220 300A20 20 0 0 0 237.66 319.86L240 320zM80 320A20 20 0 0 0 82.34 280.14L80 280H40V40H80A20 20 0 0 0 99.86 22.34L100 20A20 20 0 0 0 82.34 0.14L80 0H20A20 20 0 0 0 0.14 17.66L0 20V300A20 20 0 0 0 17.66 319.86L20 320zM220 200A20 20 0 0 0 239.86 182.34L240 180V140A20 20 0 0 0 222.34 120.14L220 120H100A20 20 0 0 0 80.14 137.66L80 140V180A20 20 0 0 0 97.66 199.86L100 200zM220 180H160V140H220z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ArrayBoolean.displayName = `Blueprint6.Icon.ArrayBoolean`;
export default ArrayBoolean;
