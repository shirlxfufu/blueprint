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

export const RectWidth: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="rect-width" ref={ref} {...props}>
            <path
                d={isLarge ? "M360 80V320H40V80zM20 40A20 20 0 0 0 0 60V340A20 20 0 0 0 20 360H380A20 20 0 0 0 400 340V60A20 20 0 0 0 380 40zM145.9 274.14A19.98 19.98 0 1 0 174.14 245.9L128.26 200L174.14 154.1A19.98 19.98 0 1 0 145.9 125.86L86.64 185.1A20 20 0 0 0 86.64 214.9zM225.86 274.14A20 20 0 0 0 254.1 274.14L313.36 214.9L314.16 214.14A20 20 0 0 0 313.36 185.1L254.1 125.86A19.98 19.98 0 0 0 225.86 154.1L271.74 200L225.86 245.9A20 20 0 0 0 225.86 274.14" : "M20 260V60H300V260zM0 260A20 20 0 0 0 20 280H300A20 20 0 0 0 320 260V60A20 20 0 0 0 300 40H20A20 20 0 0 0 0 60zM214.14 214.14L254.14 174.14A20 20 0 0 0 254.14 145.86L214.14 105.86A20 20 0 0 0 185.86 134.14L211.72 160L185.86 185.86A20 20 0 0 0 214.14 214.14M134.14 185.86L108.28 160L134.14 134.14A20 20 0 0 0 105.86 105.86L65.86 145.86A20 20 0 0 0 65.86 174.14L105.86 214.14A20 20 0 0 0 134.14 185.86"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
RectWidth.displayName = `Blueprint6.Icon.RectWidth`;
export default RectWidth;
