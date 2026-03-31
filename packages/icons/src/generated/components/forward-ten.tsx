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

export const ForwardTen: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="forward-ten" ref={ref} {...props}>
            <path
                d={isLarge ? "M195.08 0A170 170 0 0 0 126.74 13.86A178 178 0 0 0 71.3 51.3A178 178 0 0 0 33.86 106.74A170 170 0 0 0 20 175.08A170 170 0 0 0 33.86 243.4A178 178 0 0 0 71.3 298.8400000000001A178 178 0 0 0 126.74 336.28A170 170 0 0 0 195.08 350.14H197.98L181.46 366.68A18 18 0 0 0 175.86 380.28Q176.1 388.08 181.46 393.92A20 20 0 0 0 202.86 398.7200000000001A18 18 0 0 0 209.18 394.4L259.26 344.3A18.6 18.6 0 0 0 265.1 330.7Q265.1 322.9 259.26 317.08L209.2 266.98A18 18 0 0 0 195.34 261.38A20 20 0 0 0 177.22 288.48A18 18 0 0 0 181.48 294.7L198 311.24H195.1Q138.18 311.24 98.56 271.6Q58.9 232 58.9 175.08T98.54 78.54Q138.16 38.9 195.0800000000001 38.9T291.6 78.54T331.24 175.08A18.8 18.8 0 0 0 336.8400000000001 188.94A18.8 18.8 0 0 0 350.7000000000001 194.54Q358.9600000000001 194.54 364.5400000000001 188.94A18.8 18.8 0 0 0 370.1400000000001 175.08A170 170 0 0 0 356.2800000000001 106.74A178 178 0 0 0 318.8400000000001 51.3A178 178 0 0 0 263.4000000000001 13.86A170 170 0 0 0 195.08 0M230 210V150H250V210zM220 240H260A20 20 0 0 0 280 220V140A20 20 0 0 0 260 120H220A20 20 0 0 0 200 140V220A20 20 0 0 0 220 240M180 220V135A15 15 0 1 0 150 135V210H135A15 15 0 0 0 135 240H160A20 20 0 0 0 180 220" : "M160.04 0A136 136 0 0 0 105.4 11.12A142 142 0 0 0 60.98 41.3A144 144 0 0 0 31.02 86.04A138 138 0 0 0 20 141.06Q20 170.42 31.02 196.0200000000001A142 142 0 0 0 61.08 240.7A144 144 0 0 0 105.58 270.9000000000001A136 136 0 0 0 160.2 282H162.42L153.02 291.48A16 16 0 0 0 148.14 303.14Q148.14 309.92 152.8 314.8A16 16 0 0 0 164.56 320A15.6 15.6 0 0 0 176.32 315.2L214.92 276.3A19.4 19.4 0 0 0 220.8 262.3Q220.8 254.26 214.92 248.36L176.32 209.44A15.6 15.6 0 0 0 164.56 204.64A16 16 0 0 0 152.8 209.62A16.4 16.4 0 0 0 148.04 221.18A15.6 15.6 0 0 0 152.8 232.72L162.62 242.64H160.22Q118.12 242.64 88.6 213.08T59.08 141.12T88.46 69.04Q117.8 39.38 160 39.38T231.54 68.94Q260.94 98.48 260.94 140.9Q260.94 149.1 266.62 154.86A18.8 18.8 0 0 0 280.4600000000001 160.6Q288.6 160.6 294.3 154.86T300.0000000000001 140.9Q300.0000000000001 111.8 288.98 86.08A142 142 0 0 0 259.0200000000001 41.3A142 142 0 0 0 214.6400000000001 11.1A135 135 0 0 0 160.0400000000001 -1e-13M180 180H200A20 20 0 0 0 220 160V100A20 20 0 0 0 200 80H180A20 20 0 0 0 160 100V160A20 20 0 0 0 180 180M200 160H180V100H200zM100 170A10 10 0 0 0 110 180H120A20 20 0 0 0 140 160V90A10 10 0 0 0 120 90V160H110A10 10 0 0 0 100 170"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ForwardTen.displayName = `Blueprint6.Icon.ForwardTen`;
export default ForwardTen;
