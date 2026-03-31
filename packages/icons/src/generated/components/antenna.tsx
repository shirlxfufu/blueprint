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

export const Antenna: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="antenna" ref={ref} {...props}>
            <path
                d={isLarge ? "M40.2 184.84A160 160 0 0 1 60.4 120.76L60.8 120.06Q61.8 118.32 62.48 116.5C65.74 107.7 63.56 97.48 55.88 91.72C47.18 85.16 34.7 86.8799999999999 29.04 96.2A200 200 0 0 0 24.62 103.86A200 200 0 1 0 374.22 101.74C368.8400000000001 92.2599999999999 356.42 90.14 347.52 96.4C339.68 101.9 337.16 112.06 340.12 120.96A20 20 0 0 0 341.68 124.56L342.0599999999999 125.28A160.52 160.52 0 1 1 40.2 184.84M125.64 169.4A30 30 0 0 0 127.46 163C128.86 154.5 126.42 145.6 119.42 140.44C110.62 133.94 98.06 135.74 93.1 145.48A120 120 0 1 0 307.78 147.28C302.98 137.44 290.44 135.42 281.54 141.78C274.4600000000001 146.84 271.88 155.68 273.14 164.22A30 30 0 0 0 274.8400000000001 170.64A80.42 80.42 0 0 1 157.44 268.2A80.4 80.4 0 0 1 125.64 169.4M219.88 117.74A20 20 0 0 1 220 120V200A20 20 0 1 1 180 200V120Q180 118.86 180.12 117.74L105.06 33.28A20 20 0 0 1 134.94 6.72L200 79.9L265.04 6.7A20 20 0 1 1 294.94 33.3z" : "M53.46 104.84A28 28 0 0 0 55.32 100.16C57.86 91.32 55.56 81.52 48.08 75.92C39.26 69.28 26.58 71 21.1 80.58A160 160 0 1 0 301.38 85.08C296.2 75.3200000000001 283.6 73.2000000000001 274.56 79.5400000000001C266.92 84.9200000000001 264.3 94.64 266.56 103.54A26 26 0 0 0 268.26 108.3A120 120 0 1 1 53.46 104.84M102.74 142.08A36 36 0 0 0 104.26 134C104.86 125.7000000000001 102.34 117.38 95.66 112.44C86.78 105.8800000000001 74.06 107.7000000000001 69.38 117.72A100 100 0 0 0 64.58 130.12L64.5 130.34A100 100 0 1 0 255.98 131.94L255.92 131.72Q254.02 125.32 251.32 119.22C246.8 109.14 234.1 107.1 225.12 113.52C218.36 118.34 215.72 126.6 216.16 134.92A34 34 0 0 0 217.56 143.02A60 60 0 0 1 213.24 187.68A60 60 0 0 1 102.74 142.08M160 180A20 20 0 0 0 180 160V88.28L234.14 34.14A20 20 0 0 0 205.86 5.86L160 51.72L114.14 5.86A20 20 0 0 0 85.86 34.14L140 88.28V160A20 20 0 0 0 160 180"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Antenna.displayName = `Blueprint6.Icon.Antenna`;
export default Antenna;
