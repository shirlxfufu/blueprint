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

export const Cloud: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="cloud" ref={ref} {...props}>
            <path
                d={isLarge ? "M300 260C297.6 260 295.2 259.4 292.8 259.2C276.6 306.2 232.4 340 180 340C113.8 340 60 286.2 60 220C60 219 60.2 218.2 60.2 217.2A79.6 79.6 0 0 1 0 140C0 95.8 35.8 60 80 60H300C355.2 60 400 104.8 400 160S355.2 260 300 260" : "M240 200C239.4 200 238.6 200 238 199.8A100 100 0 0 1 40 180C40 177.8 40.2 175.6 40.4 173.4A70.2 70.2 0 0 1 0 110C0 71.4 31.4 40 70 40H240C284.2000000000001 40 320 75.8 320 120S284.2000000000001 200 240 200"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Cloud.displayName = `Blueprint6.Icon.Cloud`;
export default Cloud;
