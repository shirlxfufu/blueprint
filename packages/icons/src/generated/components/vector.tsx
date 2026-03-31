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

export const Vector: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="vector" ref={ref} {...props}>
            <path
                d={isLarge ? "M225.72 366A20 20 0 0 0 219.92 380.2C219.92 391.2 228.92 400.2 239.92 400A20 20 0 0 0 254.14 394.2L314.2000000000001 334.2A20.26 20.26 0 0 0 314.2000000000001 305.82L254.14 245.84A20.06 20.06 0 0 0 219.9 260.04C219.9 265.64 222.3 270.64 225.9000000000001 274.24L251.7400000000001 300.04H100.02A20 20 0 0 0 80 320C80 331 89 340 100 340H251.74zM111.06 197.88A20 20 0 0 0 137.88 188.94L200 64.74L262.12 188.94A20 20 0 0 0 297.9 171.06L217.9 11.0599999999999A20 20 0 0 0 182.1 11.0599999999999L102.1 171.06A20 20 0 0 0 111.06 197.88" : "M194.06 314.2L234 274.2H234.2C237.8 270.6 240 265.6 240 260S237.8 249.4 234.2 245.8L194.26 205.8A20.04 20.04 0 0 0 165.9 234.2L171.7 240H99.96C88.98 240 80 249 80 260S89 280 99.98 280H171.28L165.48 285.8A20.08 20.08 0 0 0 179.9 320C185.5 320 190.5 317.8 194.08 314.2M191.4 147.2C195.4 157.4 207 162.6 217.2 158.6S232.6 143 228.6 132.8L183.6 16.8C179.6 6.6 170.4 0 160 0S140.4 6.6 136.4 16.8L91.4 132.8C87.4 143 92.4 154.6 102.8 158.6C113 162.6 124.6 157.6 128.6 147.2L160 66.4z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Vector.displayName = `Blueprint6.Icon.Vector`;
export default Vector;
