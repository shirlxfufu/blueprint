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

export const OuterJoin: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="outer-join" ref={ref} {...props}>
            <path
                d={isLarge ? "M120 200C120 156.76 137.16 117.5200000000001 165.02 88.74A120 120 0 1 0 165.02 311.2800000000001A159.4 159.4 0 0 1 120 200M240 200A120 120 0 0 0 200 110.56A120 120 0 0 0 160 200C160 235.54 175.46 267.48 200 289.44Q204.6 285.3400000000001 208.76 280.74A119.6 119.6 0 0 0 240 200M234.98 88.74A120 120 0 1 1 234.98 311.2800000000001A159.4 159.4 0 0 0 280 200A159.4 159.4 0 0 0 234.98 88.74M198.32 257.74A100 100 0 0 1 180 200C180 179.78 186.02 160.54 196.88 144.38L200 139.98C211.86 155.78 218.86 174.76 219.88 194.94L220 200C220 220.2 214 239.44 203.12 255.62L200.02 260z" : "M120.12 257.98A139.6 139.6 0 0 1 80 160C80 122.68 94.72 87.78 120.04 62Q110.3 60 100 60A100 100 0 1 0 120.12 257.98M200 160A100 100 0 0 1 160.02 240L158.36 238.74A99.8 99.8 0 0 1 120 160C120 127.28 135.7 98.24 160.02 80A100 100 0 0 1 200 160M157.78 210.3L159.98 212.9L161.44 211.24C173.26 197.1 180 179.12 180 160L179.86 155.24A80 80 0 0 0 161.46 108.76L160 107.14L158.56 108.74A79.6 79.6 0 0 0 140 160C140 178.7 146.44 196.3 157.78 210.3M240 160C240 122.7 225.28 87.8 200 62Q209.7 60 220 60A100 100 0 1 1 200 258A140 140 0 0 0 240 160"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
OuterJoin.displayName = `Blueprint6.Icon.OuterJoin`;
export default OuterJoin;
