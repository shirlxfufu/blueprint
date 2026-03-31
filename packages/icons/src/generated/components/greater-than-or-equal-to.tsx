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

export const GreaterThanOrEqualTo: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="greater-than-or-equal-to" ref={ref} {...props}>
            <path
                d={isLarge ? "M73.68 178.98A20 20 0 0 1 86.32 141.02L326.32 221.02C344.56 227.1 344.56 252.9 326.32 258.98L86.32 338.98A20 20 0 0 1 73.68 301.02L256.76 240zM80 100H320A20 20 0 1 0 320 60H80A20 20 0 0 0 80 100" : "M54.26 240.84A20 20 0 0 0 65.74 279.16L265.74 219.16C284.74 213.46 284.74 186.56 265.74 180.84L65.74 120.84A20 20 0 0 0 54.26 159.16L190.4 200zM60 80H260A20 20 0 0 0 260 40H60A20 20 0 0 0 60 80"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
GreaterThanOrEqualTo.displayName = `Blueprint6.Icon.GreaterThanOrEqualTo`;
export default GreaterThanOrEqualTo;
