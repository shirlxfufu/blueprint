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

export const ThFiltered: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="th-filtered" ref={ref} {...props}>
            <path
                d={isLarge ? "M346.66 200L375.36 234.44A20 20 0 0 1 380 247.24V303L400 321V40C400 30 390 20 380 20H20C8 20 0 30 0 40V360C0 370 8 380 20 380H154.44L240 303V280H160V220H240V200H160V140H360V200zM140 60V120H40V60zM140 140V200H40V140zM140 220V280H40V220zM360 60V120H160V60zM387 400A12.84 12.84 0 0 0 396.2000000000001 378L335.6 317.4V258.4C335.6 254.8 334.2000000000001 251.6 331.8 249.2L306.2 223.4C304 221.4 300.8 220 297.2000000000001 220C290.2000000000001 220 284.4000000000001 225.8 284.4000000000001 232.8V317.4L223.8 378A12.84 12.84 0 0 0 232.8 400z" : "M200 120H260L295.6 164.52A20 20 0 0 1 300 177.02V234L320 252V40C320 28 312 20 300 20H20C8 20 0 28 0 40V280C0 290 8 300 20 300H106.66L180 234V220H140V180H180V160H140V120zM120 60V100H40V60zM120 120V160H40V120zM120 180V220H40V180zM280 60V100H140V60zM309.6 320C315.8 320 320 314.8 320 308.6C320 305.4 318.8 302.6 316.6 300.4L259.4000000000001 245.8V193.2C259.4000000000001 190 258.2 187.2 256 185L239.6 163C237.6 161 234.6 159.6 231.4 159.6C225.2 159.6 220 164.8 220 171V245.8L163.4 300.4A11.4 11.4 0 0 0 160 308.6C160 314.8 165.2 320 171.4 320z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ThFiltered.displayName = `Blueprint6.Icon.ThFiltered`;
export default ThFiltered;
