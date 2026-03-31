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

export const LayoutGroupBy: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="layout-group-by" ref={ref} {...props}>
            <path
                d={isLarge ? "M360 80A40 40 0 1 0 360 0A40 40 0 0 0 360 80M40 120A40 40 0 1 0 40 40A40 40 0 0 0 40 120M260 160A40 40 0 1 0 260 80A40 40 0 0 0 260 160M40 240A40 40 0 1 0 40 160A40 40 0 0 0 40 240M360 240A40 40 0 1 0 360 160A40 40 0 0 0 360 240M260 320A40 40 0 1 0 260 240A40 40 0 0 0 260 320M40 360A40 40 0 1 0 40 280A40 40 0 0 0 40 360M360 400A40 40 0 1 0 360 320A40 40 0 0 0 360 400" : "M40 200C18 200 0 182 0 160S18 120 40 120S80 138 80 160S62 200 40 200M40 100C18 100 0 82 0 60S18 20 40 20S80 38 80 60S62 100 40 100M280 240C302 240 320 258 320 280S302 320 280 320S240 302 240 280S258 240 280 240M40 300C18 300 0 282 0 260S18 220 40 220S80 238 80 260S62 300 40 300M180 140C158 140 140 122 140 100S158 60 180 60S220 78 220 100S202 140 180 140M180 260C158 260 140 242 140 220S158 180 180 180S220 198 220 220S202 260 180 260M280 200C258 200 240 182 240 160S258 120 280 120S320 138 320 160S302 200 280 200M280 80C258 80 240 62 240 40S258 0 280 0S320 18 320 40S302 80 280 80"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
LayoutGroupBy.displayName = `Blueprint6.Icon.LayoutGroupBy`;
export default LayoutGroupBy;
