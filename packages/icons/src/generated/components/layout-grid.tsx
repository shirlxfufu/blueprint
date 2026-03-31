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

export const LayoutGrid: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="layout-grid" ref={ref} {...props}>
            <path
                d={isLarge ? "M40 80A40 40 0 1 0 40 0A40 40 0 0 0 40 80M200 80A40 40 0 1 0 200 0A40 40 0 0 0 200 80M360 80A40 40 0 1 0 360 0A40 40 0 0 0 360 80M40 240A40 40 0 1 0 40 160A40 40 0 0 0 40 240M200 240A40 40 0 1 0 200 160A40 40 0 0 0 200 240M360 240A40 40 0 1 0 360 160A40 40 0 0 0 360 240M40 400A40 40 0 1 0 40 320A40 40 0 0 0 40 400M200 400A40 40 0 1 0 200 320A40 40 0 0 0 200 400M360 400A40 40 0 1 0 360 320A40 40 0 0 0 360 400" : "M40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40S62 80 40 80M40 200C18 200 0 182 0 160S18 120 40 120S80 138 80 160S62 200 40 200M40 320C18 320 0 302 0 280S18 240 40 240S80 258 80 280S62 320 40 320M280 240C302 240 320 258 320 280S302 320 280 320S240 302 240 280S258 240 280 240M280 200C258 200 240 182 240 160S258 120 280 120S320 138 320 160S302 200 280 200M160 320C138 320 120 302 120 280S138 240 160 240S200 258 200 280S182 320 160 320M280 80C258 80 240 62 240 40S258 0 280 0S320 18 320 40S302 80 280 80M160 200C138 200 120 182 120 160S138 120 160 120S200 138 200 160S182 200 160 200M160 80C138 80 120 62 120 40S138 0 160 0S200 18 200 40S182 80 160 80"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
LayoutGrid.displayName = `Blueprint6.Icon.LayoutGrid`;
export default LayoutGrid;
