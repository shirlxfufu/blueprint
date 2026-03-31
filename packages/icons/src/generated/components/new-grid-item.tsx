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

export const NewGridItem: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="new-grid-item" ref={ref} {...props}>
            <path
                d={isLarge ? "M160 400H20C9 400 0 391 0 380V240C0 229 9 220 20 220H160C171 220 180 229 180 240V380C180 391 171 400 160 400M160 180H20C9 180 0 171 0 160V20C0 9 9 0 20 0H160C171 0 180 9 180 20V160C180 171 171 180 160 180M280 40H260V60C260 71 251 80 240 80S220 71 220 60V20C220 9 229 0 240 0H280C291 0 300 9 300 20S291 40 280 40M380 180H340C329 180 320 171 320 160S329 140 340 140H360V120C360 109 369 100 380 100S400 109 400 120V160C400 171 391 180 380 180M380 400H240C229 400 220 391 220 380V240C220 229 229 220 240 220H380C391 220 400 229 400 240V380C400 391 391 400 380 400M280 180H240C229 180 220 171 220 160V120C220 109 229 100 240 100S260 109 260 120V140H280C291 140 300 149 300 160S291 180 280 180M380 80C369 80 360 71 360 60V40H340C329 40 320 31 320 20S329 0 340 0H380C391 0 400 9 400 20V60C400 71 391 80 380 80" : "M120 320H20C9 320 0 311 0 300V200C0 189 9 180 20 180H120C131 180 140 189 140 200V300C140 311 131 320 120 320M220 40C220 51 211 60 200 60S180 51 180 40V20C180 9 189 0 200 0H220C231 0 240 9 240 20S231 40 220 40M120 140H20C9 140 0 131 0 120V20C0 9 9 0 20 0H120C131 0 140 9 140 20V120C140 131 131 140 120 140M300 60C289 60 280 51 280 40C269 40 260 31 260 20S269 0 280 0H300C311 0 320 9 320 20V40C320 51 311 60 300 60M220 140H200C189 140 180 131 180 120V100C180 89 189 80 200 80S220 89 220 100C231 100 240 109 240 120S231 140 220 140M300 320H200C189 320 180 311 180 300V200C180 189 189 180 200 180H300C311 180 320 189 320 200V300C320 311 311 320 300 320M300 140H280C269 140 260 131 260 120S269 100 280 100C280 89 289 80 300 80S320 89 320 100V120C320 131 311 140 300 140"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
NewGridItem.displayName = `Blueprint6.Icon.NewGridItem`;
export default NewGridItem;
