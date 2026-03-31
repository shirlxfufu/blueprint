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

export const SendBackward: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="send-backward" ref={ref} {...props}>
            <path
                d={isLarge ? "M214.14 5.86A20 20 0 0 0 185.86 5.86L105.86 85.86A20 20 0 1 0 134.14 114.14L180 68.28V180H20A20 20 0 1 0 20 220H180V280H20A20 20 0 0 0 0 300V360A20 20 0 0 0 20 380H380A20 20 0 0 0 400 360V300A20 20 0 0 0 380 280H220V220H380A20 20 0 1 0 380 180H220V68.28L265.86 114.14A20 20 0 0 0 294.14 85.86z" : "M146.06 5.8C149.66 2.2 154.66 0 160.06 0S170.66 2.2 174.26 5.8L234.2 65.6A20.06 20.06 0 0 1 205.8 94L180.04 68.2L180 140H300A20 20 0 1 1 300 180H180V220H300A20 20 0 0 1 320 240V280A20 20 0 0 1 300 300H20A20 20 0 0 1 0 280V240A20 20 0 0 1 20 220H140V180H20A20 20 0 1 1 20 140H140V68.28H140.06V68.2L114.26 94A20 20 0 0 1 100.28 99.8A20.06 20.06 0 0 1 86.08 65.6z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
SendBackward.displayName = `Blueprint6.Icon.SendBackward`;
export default SendBackward;
