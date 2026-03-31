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

export const LabTest: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="lab-test" ref={ref} {...props}>
            <path
                d={isLarge ? "M260 360A20 20 0 0 0 260 320V240L340 80V60A20 20 0 0 0 320 40H80A20 20 0 0 0 60 60V80L140 240V320A20 20 0 1 0 140 360zM220 320H180V240L140 160H260L220 240z" : "M220 300A20 20 0 0 0 220 260V200L280 60V35A15 15 0 0 0 265 20H55A15 15 0 0 0 40 35V60L100 200V260A20 20 0 1 0 100 300zM180 260H140V200L105.72 120H214.28L180 200z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
LabTest.displayName = `Blueprint6.Icon.LabTest`;
export default LabTest;
