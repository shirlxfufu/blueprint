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

export const Slash: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="slash" ref={ref} {...props}>
            <path
                d={isLarge ? "M240 360C230.8 360 223 353.6 220.6 345.2L140.8 66C140.4 64 140 62 140 60C140 49 149 40 160 40C169.2 40 177 46.4 179.4 54.8L259.2000000000001 334C259.6 336 260 338 260 340C260 351 251 360 240 360" : "M200 280A19.8 19.8 0 0 1 180.8 265.4L121 66.2A20.06 20.06 0 0 1 140 40C149.2 40 157 46.2 159.2 54.6L219 253.8A20.06 20.06 0 0 1 200 280"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Slash.displayName = `Blueprint6.Icon.Slash`;
export default Slash;
