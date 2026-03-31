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

export const GraphRemove: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="graph-remove" ref={ref} {...props}>
            <path
                d={isLarge ? "M348.2 320L394 365.8C397.8 369.4 400 374.4 400 380A20.06 20.06 0 0 1 365.8 394.2L320 348.2L274.2000000000001 394A19.4 19.4 0 0 1 260 400A20.06 20.06 0 0 1 245.8 365.8L291.8 320L246 274.2C242.2 270.6 240 265.6 240 260A20.06 20.06 0 0 1 274.2000000000001 245.8L320 291.8L365.8 246C369.4 242.2 374.4 240 380 240A20.06 20.06 0 0 1 394.2000000000001 274.2zM380 200C363.4000000000001 200 349 207.2 338.2 218.2L337.6 217.6L320 235.2000000000001L302.4 217.6A59.92 59.92 0 1 0 217.5999999999999 302.4000000000001L235.2 320L217.5999999999999 337.6L218.1999999999999 338.2C207.2 349 200 363.4 200 380C200 387 201.4 393.6 203.6 399.8C202.4 399.8 201.2 400 200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200C400 201.2 399.8 202.4 399.8 203.6C393.6 201.4 387 200 380 200" : "M257.8 157.8L257.6 157.6L250 165.2L242.4 157.6L242 158C231.2 147 216.6 140 200 140C166.8 140 140 166.8 140 200C140 216.6 147 231.2 158 242L157.6 242.4L165.2000000000001 250L157.6 257.6L157.8000000000001 257.8C147 268.6 140 283.4 140 300C140 306.8 141.4 313 143.4 319.2A160.08 160.08 0 0 1 0 160C0 71.6 71.6 0 160 0C242.8 0 310.8 62.8 319.2000000000001 143.4C313 141.4 306.8 140 300 140C283.4 140 268.6 147 257.8 157.8M278.2 250L314 285.8C317.8 289.4000000000001 320 294.4000000000001 320 300A20.06 20.06 0 0 1 285.8 314.2000000000001L250 278.2000000000001L214.2 314A19.4 19.4 0 0 1 200 320A20.06 20.06 0 0 1 185.8 285.8L221.6 250L185.8 214.2A20.06 20.06 0 0 1 214.2 185.8L250 221.6L285.8 185.8A20.06 20.06 0 0 1 314.2 214.2z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
GraphRemove.displayName = `Blueprint6.Icon.GraphRemove`;
export default GraphRemove;
