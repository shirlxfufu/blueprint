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

export const BinaryNumber: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="binary-number" ref={ref} {...props}>
            <path
                d={isLarge ? "M160.22 290.4Q147.3 300 126.62 300Q106 300 92.78 290.4A66 66 0 0 1 72.4 266.2A112 112 0 0 1 62.48 234.06A240 240 0 0 1 60 200Q60 183.5 62.48 165.94Q65.24 148.34 72.4 133.52Q79.82 118.94 92.76 109.34Q105.96 100 126.64 100Q147.28 100 160.24 109.34Q173.44 118.94 180.6 133.52A104 104 0 0 1 190.5200000000001 165.92Q193.2600000000001 183.52 193.2600000000001 200Q193.2600000000001 216.5 190.5200000000001 234.06A100 100 0 0 1 180.6 266.2A62 62 0 0 1 160.22 290.4M143.7 131.86Q136.8 126.1 126.64 126.1Q116.16 126.1 109.28 131.86Q102.68 137.92 98.54 147.8A100 100 0 0 0 93.04 171.42A240 240 0 0 0 91.4 200Q91.4 215.1 93.06 228.3Q94.72 241.76 98.56 251.92Q102.7 262.1 109.3 267.86Q116.2 273.9 126.66 273.9Q136.86 273.9 143.72 267.86Q150.62 262.1 154.46 251.92Q158.6 241.76 160.26 228.3Q161.9 215.1 161.9 200Q161.9 184.88 160.24 171.42A92 92 0 0 0 154.46 147.82Q150.62 137.92 143.72 131.86M260.06 268.5800000000001A120 120 0 0 0 240 266.86V241.14H289.26V100H325.06V300H298.4A30.8 30.8 0 0 0 290.96 284.58Q285.5 278.28 277.5 274.28A60 60 0 0 0 260.02 268.5800000000001" : "M140.08 232.3Q129.74 240 113.24 240T86.18 232.3Q75.84 224.84 69.9 212.96Q64.18 201.32 61.98 187.26A200 200 0 0 1 60 160Q60 146.8 61.98 132.74Q64.18 118.68 69.9 106.82Q75.84 95.16 86.18 87.48Q96.74 79.98 113.24 80Q129.74 80 140.08 87.48Q150.64 95.16 156.36 106.82Q162.3 118.68 164.28 132.74Q166.48 146.82 166.48 160Q166.48 173.2 164.28 187.26A80 80 0 0 1 156.36 212.96A50 50 0 0 1 140.08 232.3M126.88 105.5Q121.4 100.88 113.24 100.88Q104.88 100.88 99.38 105.48A36 36 0 0 0 90.8 118.24A80 80 0 0 0 86.4 137.14A180 180 0 0 0 85.08 160Q85.08 172.08 86.4 182.64Q87.72 193.42 90.8 201.54Q94.1 209.66 99.38 214.28Q104.86 219.12 113.24 219.12Q121.38 219.12 126.88 214.28Q132.36 209.68 135.46 201.54Q138.76 193.4 140.08 182.64Q141.4 172.06 141.4 160Q141.4 147.9 140.08 137.14A74 74 0 0 0 135.46 118.24A32 32 0 0 0 126.88 105.5M216.02 214.86Q208.22 213.48 200 213.48V192.92H239.36V80H267.96V240H246.68Q245.3 232.68 240.72 227.66A34 34 0 0 0 229.98 219.42A48 48 0 0 0 216.0199999999999 214.86"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
BinaryNumber.displayName = `Blueprint6.Icon.BinaryNumber`;
export default BinaryNumber;
