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

export const Syringe: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="syringe" ref={ref} {...props}>
            <path
                d={isLarge ? "M302.92 382.92A10 10 0 0 0 317.0800000000001 397.08L397.08 317.08A10 10 0 0 0 382.92 302.92L370 315.86L344.14 290L377.08 257.0800000000001A10 10 0 0 0 362.92 242.92L350 255.86L327.08 232.94L177.08 82.94A10 10 0 0 0 162.92 82.94L150 95.86L97.08 42.92A10 10 0 0 0 82.92 42.92L70 55.86L17.08 2.92A10 10 0 0 0 2.92 17.08L55.86 70L42.92 82.92A10 10 0 0 0 42.92 97.08L95.86 150L82.92 162.92A10 10 0 0 0 82.92 177.08L232.92 327.0800000000001L255.88 350L242.94 362.92A10 10 0 0 0 257.1 377.08L290 344.14L315.86 370zM254.14 320L320 254.14L335.86 270L270 335.86zM305.86 240L240 305.86L104.14 170L170 104.14L195.86 130L162.92 162.92A10.02 10.02 0 0 0 177.08 177.08L210 144.14L235.86 170L202.92 202.92A10 10 0 1 0 217.08 217.08L250 184.14L275.86 210L242.92 242.92A10 10 0 0 0 257.08 257.0800000000001L290 224.14zM64.14 90L90 64.14L135.86 110L110 135.86zM330 355.86L304.14 330L330 304.14L355.86 330z" : "M222.92 317.08A10 10 0 0 0 237.08 317.08L317.0800000000001 237.08A10 10 0 0 0 302.92 222.92L290 235.86L264.14 210L297.0800000000001 177.08A10 10 0 0 0 282.92 162.92L270 175.86L247.06 152.92L137.06 42.92A10 10 0 0 0 122.92 42.92L110 55.86L77.08 22.92A10 10 0 0 0 62.92 22.92L50 35.86L17.08 2.92A10 10 0 0 0 2.92 17.08L35.86 50L22.92 62.92A10 10 0 0 0 22.92 77.08L55.86 110L42.92 122.92A10 10 0 0 0 42.92 137.08L152.92 247.08L175.88 270L162.94 282.92A10 10 0 1 0 177.1 297.08L210 264.14L235.86 290L222.92 302.92A10 10 0 0 0 222.92 317.08M225.86 160L160 225.86L64.14 130L130 64.14L155.86 90L122.92 122.92A10 10 0 1 0 137.08 137.08L170 104.14L195.86 130L162.92 162.92A10 10 0 1 0 177.08 177.08L210 144.14zM174.14 240L240 174.14L255.86 190L190 255.86zM44.14 70L70 44.14L95.86 70L70 95.86zM275.86 250L250 275.86L224.14 250L250 224.14z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Syringe.displayName = `Blueprint6.Icon.Syringe`;
export default Syringe;
