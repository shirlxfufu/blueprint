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

export const ImageRotateRight: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="image-rotate-right" ref={ref} {...props}>
            <path
                d={isLarge ? "M105.8 314.2A20.06 20.06 0 0 1 134.2 285.8L174.2 325.8C177.8 329.4 180 334.4 180 340S177.8 350.6 174.2 354.2L134.2 394.2A20.06 20.06 0 0 1 105.8 365.8L111.8 360H80C35.8 360 0 324.2 0 280V220C0 209 9 200 20 200S40 209 40 220V280C40 302 58 320 80 320H111.8zM310 140C326.6 140 340 153.4 340 170S326.6 200 310 200S280 186.6 280 170S293.4 140 310 140M380 260H120C109 260 100 251 100 240V20C100 9 109 0 120 0H380C391 0 400 9 400 20V240C400 251 391 260 380 260M360 60L260 120L240 80L200 160L140 70V220H360z" : "M114.2 205.8L154.2 245.8C157.8 249.4 160 254.4 160 260S157.8 270.6 154.2 274.2L114.2 314.2A20.06 20.06 0 0 1 85.8 285.8L91.8 280H60C26.8 280 0 253.2 0 220V160C0 149 9 140 20 140S40 149 40 160V220C40 231 49 240 60 240H91.8L85.8 234.2A20.06 20.06 0 0 1 114.2 205.8M250 100C255.6 100 260 104.4 260 110S255.6 120 250 120S240 115.6 240 110S244.4 100 250 100M300 180H120C109 180 100 171 100 160V20C100 9 109 0 120 0H300C311 0 320 9 320 20V160C320 171 311 180 300 180M280 53.4L240 80L220 60L180 120L140 66.6V140H280z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ImageRotateRight.displayName = `Blueprint6.Icon.ImageRotateRight`;
export default ImageRotateRight;
