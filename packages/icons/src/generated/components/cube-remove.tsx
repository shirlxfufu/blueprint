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

export const CubeRemove: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="cube-remove" ref={ref} {...props}>
            <path
                d={isLarge ? "M239.36 376.36A60.02 60.02 0 0 1 260 260H275.4L200 215.6L39.06 310.4L187.26 390.8A26.8 26.8 0 0 0 212.76 390.8zM380 260V118.86C380 110.1 375.06 102.02 367.04 97.66L212.76 13.94Q211.42 13.2 210 12.66V198.28L314.8 260zM22.72 296.8L190 198.28V12.66A20 20 0 0 0 187.24 13.94L32.96 97.66A24.2 24.2 0 0 0 20 118.86V285.86C20 289.72 20.96 293.46 22.72 296.8M260 340H380A20 20 0 0 0 380 300H260A20 20 0 0 0 260 340" : "M207.3 201.34L160 171.8L36.12 249.2L150.08 314.34A20 20 0 0 0 169.92 314.34L182.72 307.04A60.02 60.02 0 0 1 207.28 201.38M300 200V91.6A20 20 0 0 0 289.92 74.24L170 5.72V154.46L242.86 200zM21.12 235L150 154.46V5.72L30.08 74.24A20 20 0 0 0 20 91.6V228.4A20 20 0 0 0 21.12 235M220 280H300A20 20 0 0 0 300 240H220A20 20 0 0 0 220 280"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
CubeRemove.displayName = `Blueprint6.Icon.CubeRemove`;
export default CubeRemove;
