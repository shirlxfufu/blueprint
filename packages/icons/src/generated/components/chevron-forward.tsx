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

export const ChevronForward: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="chevron-forward" ref={ref} {...props}>
            <path
                d={isLarge ? "M260 340C249 340 240 331 240 320V228.2L134.2 334.2A20.06 20.06 0 0 1 105.8 305.8L211.8 200L106 94.2000000000001C102.2 90.6 100 85.6 100 80A20.06 20.06 0 0 1 134.2 65.8L240 171.8V80C240 69 249 60 260 60S280 69 280 80V320C280 331 271 340 260 340" : "M200 260C189 260 180 251 180 240V188.2L114.2 254.2A20.06 20.06 0 0 1 85.8 225.8L151.8 160L86 94.2C82.2 90.6 80 85.6 80 80A20.06 20.06 0 0 1 114.2 65.8L180 131.8V80C180 69 189 60 200 60S220 69 220 80V240C220 251 211 260 200 260"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ChevronForward.displayName = `Blueprint6.Icon.ChevronForward`;
export default ChevronForward;
