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

export const Barcode: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="barcode" ref={ref} {...props}>
            <path
                d={isLarge ? "M120 60.4H160V340.4H120zM180 60.4H200V340.4H180zM60 60.4H100V340.4H60zM0 60.4H40V340.4H0zM320 60.4H360V340.4H320zM240 60.4H260V340.4H240zM380 340.4V60.4H400V340.4zM280 60.4H300V340.4H280z" : "M0 40H40V280H0zM120 40H140V280H120zM160 40H180V280H160zM60 40H100V280H60zM300 280V40H320V280zM200 40H220V280H200zM240 40H280V280H240z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Barcode.displayName = `Blueprint6.Icon.Barcode`;
export default Barcode;
