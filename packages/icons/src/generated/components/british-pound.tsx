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

export const BritishPound: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="british-pound" ref={ref} {...props}>
            <path
                d={isLarge ? "M192.4 296.52A60 60 0 0 1 180 260V220H260A20 20 0 0 0 280 200V180A20 20 0 0 0 260 160H180V132.46C180 112.72 176.26 95.12 169.32 80H340V20H60V80H70C84.3 80 96.68 84.34 105.08 91.8C112.84 98.68 120 110.68 120 132.46V160H80A20 20 0 0 0 60 180V200A20 20 0 0 0 80 220H120V260A120 120 0 0 0 285.92 370.86C310.32 360.76 326.8 342.86 340 320L291.96 290A60 60 0 0 1 192.4 296.52" : "M144 291.44A80 80 0 0 1 100 220V180H80A20 20 0 0 1 80 140H100V110C100 87.34 95.42 74.2 90.86 67.34C86.66 61.04 82.6 60 80 60H60V20H260V60H131.82C137.22 73.68 140 90.44 140 110V140H200A20 20 0 1 1 200 180H140V220A40 40 0 0 0 214.64 240L249.28 260A80 80 0 0 1 155.96 296.3"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
BritishPound.displayName = `Blueprint6.Icon.BritishPound`;
export default BritishPound;
