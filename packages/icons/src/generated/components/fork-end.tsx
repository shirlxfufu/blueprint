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

export const ForkEnd: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="fork-end" ref={ref} {...props}>
            <path
                d={isLarge ? "M305.86 374.14A20 20 0 0 0 334.14 374.14L394.14 314.14A20 20 0 0 0 398.1800000000001 291.7200000000001A20 20 0 0 0 396.7000000000001 289L396.5800000000001 288.86L395.82 287.8400000000001A20 20 0 0 0 394.14 285.86L334.14 225.86A20 20 0 0 0 305.86 254.14L331.72 280H288.28L94.1399999999999 85.86A20 20 0 0 0 88.2 81.8L87.68 81.56L86.64 81.16L85.84 80.88L84.6 80.56L83.92 80.4L83.3 80.3200000000001Q82.7 80.1800000000001 82.06 80.1L80 80H20A20 20 0 0 0 20 120H71.72L231.72 280H20A20 20 0 0 0 20 320H331.72L305.86 345.86A20 20 0 0 0 305.86 374.14" : "M245.86 274.14A20 20 0 0 0 274.14 274.14L314.14 234.14A20 20 0 0 0 319.14 225.86L319.44 224.62Q319.98 222.4 320 220A20 20 0 0 0 315.82 207.84A20 20 0 0 0 314.14 205.86L274.14 165.86A20 20 0 1 0 245.86 194.14L251.72 200H228.28L94.14 65.86A20 20 0 0 0 88.2 61.8L87.68 61.56L86.64 61.16L85.84 60.88L84.6 60.56L83.92 60.4L83.3 60.3200000000001Q82.7 60.1800000000001 82.06 60.1L80 60H20A20 20 0 0 0 20 100H71.72L171.72 200H20A20 20 0 0 0 20 240H251.72L245.86 245.86A20 20 0 0 0 245.86 274.14"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ForkEnd.displayName = `Blueprint6.Icon.ForkEnd`;
export default ForkEnd;
