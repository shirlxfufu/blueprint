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

export const Switch: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="switch" ref={ref} {...props}>
            <path
                d={isLarge ? "M245.86 354.14L274.14 325.86L131.6 183.28A70 70 0 1 0 103.3 211.58zM330 220A70 70 0 1 0 330 80A70 70 0 0 0 330 220M70 180A30 30 0 1 1 70 120A30 30 0 0 1 70 180M330 180A30 30 0 1 1 330 120A30 30 0 0 1 330 180" : "M185.86 274.14L214.14 245.86L114.16 145.86A60 60 0 1 0 85.86 174.16zM260 180A60 60 0 1 0 260 60A60 60 0 0 0 260 180M60 140A20 20 0 1 1 60 100A20 20 0 0 1 60 140M260 140A20 20 0 1 1 260 100A20 20 0 0 1 260 140"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Switch.displayName = `Blueprint6.Icon.Switch`;
export default Switch;
