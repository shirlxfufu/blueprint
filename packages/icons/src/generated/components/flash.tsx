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

export const Flash: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="flash" ref={ref} {...props}>
            <path
                d={isLarge ? "M99.2 272.6A20.06 20.06 0 0 1 127.6 301L87.6 341A21.4 21.4 0 0 1 73.4 346.6A20.06 20.06 0 0 1 59.2 312.4zM286.6 266.6C292.2 266.6 297.2 268.8 300.8 272.4L340.8 312.4A20.06 20.06 0 0 1 312.4 340.8L272.4 300.8A20.06 20.06 0 0 1 286.6 266.6M200 300C211 300 220 309 220 320V380C220 391 211 400 200 400S180 391 180 380V320C180 309 189 300 200 300M100 200C100 211 91 220 80 220H20C9 220 0 211 0 200S9 180 20 180H80C91 180 100 189 100 200M380 220H320C309 220 300 211 300 200S309 180 320 180H380C391 180 400 189 400 200S391 220 380 220M200 280C155.8 280 120 244.2 120 200S155.8 120 200 120S280 155.8 280 200S244.2 280 200 280M200 160C178 160 160 178 160 200S178 240 200 240S240 222 240 200S222 160 200 160M300.8 127.4A20.06 20.06 0 0 1 272.4 99L312.4 59.0000000000001A20.06 20.06 0 0 1 340.8 87.4zM200 100C189 100 180 91 180 80V20C180 9 189 0 200 0S220 9 220 20V80C220 91 211 100 200 100M113.4 133.4C107.8 133.4 102.8 131.2 99.2 127.6L59.2 87.6A20.06 20.06 0 0 1 87.6 59.2000000000001L127.6 99.2000000000001A20.06 20.06 0 0 1 113.4 133.4" : "M80 160C80 171 71 180 60 180H20C9 180 0 171 0 160S9 140 20 140H60C71 140 80 149 80 160M160 240C171 240 180 249 180 260V300C180 311 171 320 160 320S140 311 140 300V260C140 249 149 240 160 240M75.8 215.8A20.06 20.06 0 0 1 104.2 244.2L74.2 274.2A20.06 20.06 0 0 1 45.8 245.8zM90 110C84.4 110 79.4 107.8 75.8 104.2L45.8 74.2A20.06 20.06 0 0 1 74.2 45.8L104.2 75.8A20.06 20.06 0 0 1 90 110M230 210C235.6 210 240.6 212.2 244.2 215.8L274.2000000000001 245.8A20.06 20.06 0 0 1 245.8 274.2L215.8 244.2A20.06 20.06 0 0 1 230 210M244.2 104.2A20.06 20.06 0 0 1 215.8 75.8L245.8 45.8A20.06 20.06 0 0 1 274.2000000000001 74.2zM300 180H260C249 180 240 171 240 160S249 140 260 140H300C311 140 320 149 320 160S311 180 300 180M160 220C126.8 220 100 193.2 100 160S126.8 100 160 100S220 126.8 220 160S193.2 220 160 220M160 140C149 140 140 149 140 160S149 180 160 180S180 171 180 160S171 140 160 140M160 80C149 80 140 71 140 60V20C140 9 149 0 160 0S180 9 180 20V60C180 71 171 80 160 80"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Flash.displayName = `Blueprint6.Icon.Flash`;
export default Flash;
