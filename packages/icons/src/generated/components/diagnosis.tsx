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

export const Diagnosis: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="diagnosis" ref={ref} {...props}>
            <path
                d={isLarge ? "M80 360A20 20 0 0 0 82.34 320.14L80 320V220A40 40 0 0 1 117 180.1L120 180A40 40 0 0 1 159.9 217L160 220V320A20 20 0 0 0 157.66 359.86L160 360H180A20 20 0 0 0 199.86 342.3400000000001L200 340V220A80 80 0 0 0 140 142.52V140A60 60 0 0 1 200 80A80 80 0 0 1 279.9000000000001 156L280 160V224.16A50 50 0 1 0 320 224.16V160A120 120 0 0 0 200 40A100 100 0 0 0 100.1 135.66L100 140V142.52A80 80 0 0 0 40.1 216L40 220V340A20 20 0 0 0 57.66 359.86L60 360z" : "M64 300A20 20 0 0 0 66.34 260.14L64 260H60V200A40 40 0 0 1 97 160.1L100 160A40 40 0 0 1 139.9 197L140 200V260H136A20 20 0 0 0 116.14 277.66L116 280A20 20 0 0 0 133.66 299.86L136 300H160A20 20 0 0 0 179.86 282.3400000000001L180 280V200A80 80 0 0 0 119.86 122.48V122.34L120 120A60 60 0 0 1 239.9000000000001 116.48L240 120V164.16A50 50 0 1 0 280 164.16V120A100 100 0 0 0 80 120Q80 121.26 80.16 122.5A80 80 0 0 0 20.1 196L20 200V280A20 20 0 0 0 37.66 299.86L40 300z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Diagnosis.displayName = `Blueprint6.Icon.Diagnosis`;
export default Diagnosis;
