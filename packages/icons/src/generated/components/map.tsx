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

export const Map: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="map" ref={ref} {...props}>
            <path
                d={isLarge ? "M390.8 316.4L391 316.8L271 396.8L270.8 396.4C267.8 398.4 264.2000000000001 400 260 400S252.2 398.4 249.2 396.4L249.0000000000001 396.8L140 324L31 396.6L30.8 396.4A19.4 19.4 0 0 1 20 400C9 400 0 391 0 380V100C0 93 3.8 87.2 9.2 83.6L9 83.2L129 3.2L129.2 3.6C132.2 1.6 135.8 0 140 0S147.8 1.6 150.8 3.6L151 3.2L260 76L369 3.4L369.2000000000001 3.8C372.2 1.6 375.8 0 380 0C391 0 400 9 400 20V300C400 307 396.2 312.8 390.8 316.4M120 57.4L40 110.8V342.6L120 289.2zM240 110.8L160 57.4V289.2L240 342.6zM360 57.4L280 110.8V342.6L360 289.2z" : "M311 256.6L221.2 316.6A19.6 19.6 0 0 1 199.8 317L110.6 263.6L31.2 316.6A20.06 20.06 0 0 1 0 300V80C0 73 3.6 67 9 63.4L98.8 3.4A19.6 19.6 0 0 1 120.2 3L209.4 56.4L288.8 3.4A20.06 20.06 0 0 1 320 20V240C320 247 316.4 253 311 256.6M100 50.8L40 90.8V262.8L98.8 223.6C99.2 223.2 99.6 223 100 222.8zM200 97.2S199.8 97.2 199.8 97L120 49.4V222.8S120.2 222.8 120.2 223L200 270.6zM280 57.4L221.2 96.6C220.8 96.8 220.4 96.9999999999999 220.2 97.2V269.2L280.2 229.2V57.4z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Map.displayName = `Blueprint6.Icon.Map`;
export default Map;
