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

export const SubtractRightJoin: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="subtract-right-join" ref={ref} {...props}>
            <path
                d={isLarge ? "M400 200A120 120 0 0 1 235 311.26A159.4 159.4 0 0 0 280 200A159.4 159.4 0 0 0 234.98 88.74A120 120 0 0 1 400 200M165.02 311.26A120 120 0 1 1 165.02 88.74A159.4 159.4 0 0 0 120 200C120 243.24 137.14 282.4600000000001 165.02 311.26M274.42 299.86Q277.2200000000001 299.98 280 300A100 100 0 0 0 280 100L274.44 100.16L270 100.52L272.56 104.44A179.4 179.4 0 0 1 300 200L299.88 206.44A179.2 179.2 0 0 1 272.58 295.56L270 299.5zM240 200.54A120 120 0 0 0 200 111.1A120 120 0 0 0 160 200.54A120 120 0 0 0 200 290Q204.6 285.88 208.76 281.3A119.6 119.6 0 0 0 240 200.56M200.02 260.56L198.32 258.28A100 100 0 0 1 180 200.56A100 100 0 0 1 196.88 144.92L200 140.52C211.86 156.32 218.86 175.32 219.88 195.48L220 200.56C220 220.76 214 240 203.12 256.18z" : "M120.12 257.98A139.6 139.6 0 0 1 80 160C80 122.68 94.72 87.78 120.04 62Q110.3 60 100 60A100 100 0 1 0 120.12 257.98M320 160A100 100 0 0 1 200 258A140 140 0 0 0 240 160C240 122.7 225.28 87.8 200 62Q209.72 60 220 60A100 100 0 0 1 320 160M260 160C260 187.4 253.04 213.9 240.02 237.46L243.1 236.62A80 80 0 0 0 300 160L299.9 156A80 80 0 0 0 243.1 83.4L240 82.5400000000001L243.24 88.64A160 160 0 0 1 260 160M160.02 240A100 100 0 0 0 200 160A100 100 0 0 0 160.02 80.02A99.8 99.8 0 0 0 120 160.02A99.8 99.8 0 0 0 158.36 238.76zM160 212.92L157.8 210.32A79.6 79.6 0 0 1 140 160C140 140.86 146.74 122.88 158.56 108.74L160 107.14L161.44 108.74C172.28 121.7 178.84 137.9 179.86 155.24L180 160C180 179.12 173.26 197.1 161.44 211.24z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
SubtractRightJoin.displayName = `Blueprint6.Icon.SubtractRightJoin`;
export default SubtractRightJoin;
