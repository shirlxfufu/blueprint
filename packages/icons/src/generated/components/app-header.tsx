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

export const AppHeader: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="app-header" ref={ref} {...props}>
            <path
                d={isLarge ? "M380 400A20 20 0 0 0 400 380V20A20 20 0 0 0 380 0H20A20 20 0 0 0 0 20V380A20 20 0 0 0 20 400zM160 280A20 20 0 0 1 120.14 282.3400000000001L120 280V120A20 20 0 0 1 159.86 117.66L160 120V180H240V120A20 20 0 0 1 279.86 117.66L280 120V280A20 20 0 0 1 240.14 282.3400000000001L240 280V220H160z" : "M300 320A20 20 0 0 0 320 300V20A20 20 0 0 0 300 0H20A20 20 0 0 0 0 20V300A20 20 0 0 0 20 320zM120 240A20 20 0 0 1 80.14 242.34L80 240V80A20 20 0 0 1 119.86 77.66L120 80V140H200V80A20 20 0 0 1 239.86 77.66L240 80V240A20 20 0 0 1 200.14 242.34L200 240V180H120z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
AppHeader.displayName = `Blueprint6.Icon.AppHeader`;
export default AppHeader;
