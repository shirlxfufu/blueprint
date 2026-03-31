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

export const Flows: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="flows" ref={ref} {...props}>
            <path
                d={isLarge ? "M350 241.4A50 50 0 0 1 301 201.4H255L174.8 281.4L159.8 266.4L225 201.4H99A50 50 0 1 1 99 181.4H225L159.8 116.4L174.8 101.4L255 181.4H301A50 50 0 1 1 350 241.4" : "M270 200A50 50 0 0 1 221 160H195L114.8 240L99.8 225L165 160H99A50 50 0 1 1 99 140H165L99.8 75L114.8 60L195 140H221A50 50 0 1 1 270 200"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Flows.displayName = `Blueprint6.Icon.Flows`;
export default Flows;
