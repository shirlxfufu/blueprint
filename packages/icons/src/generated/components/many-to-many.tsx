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

export const ManyToMany: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="many-to-many" ref={ref} {...props}>
            <path
                d={isLarge ? "M340 280A20 20 0 1 1 340 320A20 20 0 0 1 340 280M340 240A60 60 0 0 0 285.4 275.08A80 80 0 0 1 273.06 269.8C255.38 260.5 234.66 241.44 220.96 200C234.66 158.56 255.38 139.5 273.06 130.2Q279.36 126.92 285.4 124.92A60 60 0 1 0 282.1 84.24A126 126 0 0 0 254.4400000000001 94.8C234.7800000000001 105.16 215.48 122.0800000000001 200 148.9C184.5200000000001 122.1 165.22 105.16 145.5600000000001 94.8A126 126 0 0 0 117.9000000000001 84.24A60 60 0 0 0 0 100A60 60 0 0 0 114.6 124.92Q120.64 126.92 126.94 130.2C144.62 139.5 165.34 158.56 179.04 200C165.34 241.44 144.62 260.5 126.94 269.8A80 80 0 0 1 114.6 275.0800000000001A60 60 0 1 0 117.9 315.76C126.56 313.56 135.98 310.24 145.56 305.2C165.22 294.8400000000001 184.52 277.92 200 251.1C215.48 277.9 234.7800000000001 294.84 254.44 305.2A126 126 0 0 0 282.1 315.76A60 60 0 0 0 400 300A60 60 0 0 0 340 240M80 300A20 20 0 1 1 40 300A20 20 0 0 1 80 300M320 100A20 20 0 1 1 360 100A20 20 0 0 1 320 100M60 120A20 20 0 1 1 60 80A20 20 0 0 1 60 120" : "M60 260A20 20 0 1 1 60 220A20 20 0 0 1 60 260M120 240Q120 238.6 119.94 237.2C125.04 235.58 130.7 233.02 136.58 229C144.7 223.4 152.58 215.48 160 204.5C167.4 215.48 175.3 223.4 183.42 228.98A62 62 0 0 0 200.06 237.2L200 240A60 60 0 1 0 215.46 199.8A20.8 20.8 0 0 1 206.06 196C200.24 192 191.02 182.56 181.52 160C191.02 137.44 200.24 128 206.06 124C209.72 121.48 212.78 120.54 215.46 120.2A60 60 0 1 0 200.06 82.8A62 62 0 0 0 183.42 91C175.3 96.6 167.42 104.52 160 115.5C152.6 104.52 144.7 96.6 136.58 91.02C130.7 86.98 125.04 84.42 119.94 82.8Q120 81.4 120 80A60 60 0 1 0 104.54 120.2C107.22 120.54 110.28 121.48 113.94 124C119.76 128 128.98 137.44 138.48 160C128.98 182.56 119.76 192 113.94 196A20.8 20.8 0 0 1 104.54 199.8A60 60 0 1 0 120 240M240 240A20 20 0 1 1 280 240A20 20 0 0 1 240 240M60 100A20 20 0 1 1 60 60A20 20 0 0 1 60 100M240 80A20 20 0 1 1 280 80A20 20 0 0 1 240 80"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ManyToMany.displayName = `Blueprint6.Icon.ManyToMany`;
export default ManyToMany;
