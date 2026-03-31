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

export const SelectionBox: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="selection-box" ref={ref} {...props}>
            <path
                d={isLarge ? "M100 400H20A20 20 0 0 1 0 380V300H40V360H100zM360 100V40H300V0H380A20 20 0 0 1 400 20V100zM0 40V100H40V40H100V0H20A20 20 0 0 0 0 20zM300 400H380A20 20 0 0 0 400 380V300H360V360H300zM160 400H240V360H160zM360 240V160H400V240zM0 160V240H40V160zM240 40H160V0H240z" : "M200 280H120V320H200zM0 200V120H40V200zM120 0H200V40H120zM280 120V200H320V120zM40 320H20A20 20 0 0 1 0 300V240H40V280H80V320zM0 20V80H40V40H80V0H20A20 20 0 0 0 0 20M280 0H300A20 20 0 0 1 320 20V80H280V40H240V0zM320 300V240H280V280H240V320H300A20 20 0 0 0 320 300"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
SelectionBox.displayName = `Blueprint6.Icon.SelectionBox`;
export default SelectionBox;
