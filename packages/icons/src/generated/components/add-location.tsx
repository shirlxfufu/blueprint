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

export const AddLocation: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="add-location" ref={ref} {...props}>
            <path
                d={isLarge ? "M200 400A20 20 0 0 0 200 360A160 160 0 1 1 360 200A20 20 0 0 0 400 200C400 89.54 310.46 0 200 0S0 89.54 0 200S89.54 400 200 400M200 280A80 80 0 1 0 200 120A80 80 0 0 0 200 280M320 400C332 400 340 392 340 380V340H380C392 340 400 332 400 320S392 300 380 300H340V260C340 248 332 240 320 240S300 248 300 260V300H260C248 300 240 308 240 320C240 330 248 340 260 340H300V380C300 392 308 400 320 400" : "M160 320A20 20 0 1 0 160 280A120 120 0 1 1 280 160A20 20 0 0 0 320 160A160 160 0 1 0 160 320M160 220A60 60 0 1 0 160 100A60 60 0 0 0 160 220M260 320A20 20 0 0 0 280 300V280.02L300 280A20 20 0 0 0 300 240H280V220A20 20 0 0 0 240 220V240H220A20 20 0 0 0 220 280H240V300A20 20 0 0 0 260 320"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
AddLocation.displayName = `Blueprint6.Icon.AddLocation`;
export default AddLocation;
