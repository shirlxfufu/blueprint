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

export const DroneUav: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="drone-uav" ref={ref} {...props}>
            <path
                d={isLarge ? "M200 400C257.94 400 240 320 220 280V220L400 175V160H220V80L320 60V40H218.7L217.88 20H240V0H160V20H182.12L181.28 40H80V60L180 80V160H0V175L180 220V280C160 320 142.06 400 200 400" : "M160 320C206.36 320 200 260 180 220V180L320 140V120H180V78.68L260 60V40H179.28L178.14 20H200V0H120V20H141.86L140.72 40H60V60L140 78.68V120H0V140L140 180V220C120 260 113.66 320 160 320"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
DroneUav.displayName = `Blueprint6.Icon.DroneUav`;
export default DroneUav;
