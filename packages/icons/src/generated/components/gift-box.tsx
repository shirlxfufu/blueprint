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

export const GiftBox: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="gift-box" ref={ref} {...props}>
            <path
                d={isLarge ? "M175.76 381.7A62.42 62.42 0 0 1 76.02 309.2H20A20 20 0 0 1 0 289.2V209.2A20 20 0 0 1 20 189.2H380A20 20 0 0 1 400 209.2V289.2000000000001A20 20 0 0 1 380 309.2000000000001H324A62.44 62.44 0 0 1 224.22 381.7L204.22 361.7200000000001A80 80 0 0 1 199.98 357.12A80 80 0 0 1 195.72 361.7200000000001zM284.24 321.7L271.7200000000001 309.18H220.4A42.8 42.8 0 0 0 232.52 333.44L252.5 353.42A22.42 22.42 0 1 0 284.2200000000001 321.7M179.56 309.18H128.28L115.76 321.7A22.42 22.42 0 1 0 147.48 353.42L167.48 333.42C174.06 326.84 178.28 318.32 179.58 309.18M140 169.2H20V29.2A20 20 0 0 1 40 9.2H140zM380 169.2H260V9.2H360A20 20 0 0 1 380 29.2zM160 169.2H240V9.2H160z" : "M135.76 301.7A62.42 62.42 0 0 1 36.02 229.2H20A20 20 0 0 1 0 209.2V169.2A20 20 0 0 1 20 149.2H300A20 20 0 0 1 320 169.2V209.2A20 20 0 0 1 300 229.2H284A62.44 62.44 0 0 1 184.22 301.7L164.22 281.7200000000001Q162.02 279.52 159.98 277.12A80 80 0 0 1 155.72 281.7200000000001zM244.24 241.7L231.72 229.18H180.4A42.8 42.8 0 0 0 192.52 253.44L212.5 273.44A22.42 22.42 0 1 0 244.22 241.7M139.56 229.18H88.28L75.76 241.7A22.42 22.42 0 1 0 107.48 273.42L127.48 253.42C134.06 246.84 138.28 238.32 139.58 229.18M120 129.2H20V29.2A20 20 0 0 1 40 9.2H120zM300 129.2H200V9.2H280A20 20 0 0 1 300 29.2zM140 129.2H180V9.2H140z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
GiftBox.displayName = `Blueprint6.Icon.GiftBox`;
export default GiftBox;
