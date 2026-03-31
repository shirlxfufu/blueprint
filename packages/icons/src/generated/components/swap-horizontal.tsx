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

export const SwapHorizontal: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="swap-horizontal" ref={ref} {...props}>
            <path
                d={isLarge ? "M320.4 200Q320.1 200 320.4 200H320zM40 280H311.6L265.8 234.2A20 20 0 0 1 259.8 220A20.06 20.06 0 0 1 294 205.8L374 285.8C377.6 289.4 379.8 294.4 379.8 300S377.6 310.6 374 314.2L294 394.2A20.06 20.06 0 0 1 265.6 365.8L311.6 320H40C29 320 20 311 20 300S29 280 40 280M80 200H79.6zM360 120H88.4L134.2 165.8A20 20 0 0 1 140.2 180A20.06 20.06 0 0 1 106 194.2L26 114.2000000000001C22.4 110.6 20.2 105.6 20.2 100S22.4 89.4 26 85.8L106 5.8A20.06 20.06 0 0 1 134.4 34.2L88.4 80H360C371 80 380 89 380 100S371 120 360 120" : "M0 179.6L1 180H0zM40 220.2H231.4L205.6 194.4A20.06 20.06 0 0 1 234 166L293.8 226C297.4 229.6 299.6 234.6 299.6 240.2S297.4 250.8 293.8 254.4L234 314.4A21.4 21.4 0 0 1 219.8 320A20.06 20.06 0 0 1 205.6 285.8L231.4 260H40C29 260 20 251 20 240A20 20 0 0 1 40 220.2M319.2000000000001 140H320V140.4zM280 99.8H88.6L114.4 125.6A20.06 20.06 0 0 1 86 154L26.2 94A20 20 0 0 1 20.4 80C20.4 74.4 22.6 69.4 26.2 65.8L86 5.8A20.06 20.06 0 0 1 114.4 34.2L88.6 60H280C291 60 300 69 300 80S291 99.8 280 99.8"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
SwapHorizontal.displayName = `Blueprint6.Icon.SwapHorizontal`;
export default SwapHorizontal;
