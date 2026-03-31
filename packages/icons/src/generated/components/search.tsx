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

export const Search: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="search" ref={ref} {...props}>
            <path
                d={isLarge ? "M391.2 51.2L292.4 150A160 160 0 0 1 320 240C320 328.4 248.4 400 160 400S0 328.4 0 240S71.6 80 160 80C193.4 80 224.2 90.2 250 107.6L348.8 8.8A29.96 29.96 0 1 1 391.2000000000001 51.2M160 120C93.8 120 40 173.8 40 240S93.8 360 160 360S280 306.2000000000001 280 240S226.2 120 160 120" : "M311 51.4L257.6 105A138.8 138.8 0 0 1 279.8 180.2C279.8 257.6 217.2 320.2 139.8 320.2S-0.2 257.6 -0.2 180.2S62.4 40.2 139.8 40.2C167.6 40.2 193.4 48.6 215 62.4L268.6 9A29.96 29.96 0 1 1 311 51.4M139.8 80.2C84.6 80.2 39.8 125 39.8 180.2S84.6 280.2 139.8 280.2S239.8 235.4 239.8 180.2S195 80.2 139.8 80.2"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Search.displayName = `Blueprint6.Icon.Search`;
export default Search;
