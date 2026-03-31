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

export const Confirm: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="confirm" ref={ref} {...props}>
            <path
                d={isLarge ? "M194.2 294.2A20.06 20.06 0 0 1 165.8 265.8L225.8 205.8C229.4 202.2 234.4 200 240 200S250.6 202.2 254.2 205.8L394.2000000000001 345.8A20.06 20.06 0 0 1 365.8 374.2L240 248.2zM352.8 247.8C357.4000000000001 232.8 360 216.6 360 200C360 111.6 288.4 40 200 40S40 111.6 40 200A159.96 159.96 0 0 0 276 340.8L305.2000000000001 370C274.6 388.8 238.6 400 200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200C400 228 394.2000000000001 254.6 383.8 279z" : "M174 234.2A19.4 19.4 0 0 1 159.8 240.2A20.06 20.06 0 0 1 145.6 206L185.6 166C189.2 162.4 194.2 160.2 199.8 160.2S210.4 162.4 214 166L314 266A20.06 20.06 0 0 1 285.6 294.4L199.8 208.4zM278.4 174C279 169.4 279.8 165 279.8 160.2C279.8 94 226 40.2 159.8 40.2S39.8 94 39.8 160.2S93.6 280.2 159.8 280.2C176 280.2 191.6 276.8 205.8 271L235.8 301A159.96 159.96 0 0 1 -0.2 160.2C-0.2 71.8 71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2C319.8 176.8 317.2 193 312.6 208z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Confirm.displayName = `Blueprint6.Icon.Confirm`;
export default Confirm;
