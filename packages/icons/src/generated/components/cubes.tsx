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

export const Cubes: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="cubes" ref={ref} {...props}>
            <path
                d={isLarge ? "M194.14 271.8400000000001L292.0200000000001 317.7C299.36 321.14 307.9000000000001 320.7 314.86 316.5L388.1 272.4C395.48 267.94 400 259.92 400 251.24V150.5C400 140.9 394.48 132.18 385.86 128.14L287.98 82.3C280.64 78.86 272.1 79.3 265.14 83.5L191.9 127.6A24.6 24.6 0 0 0 180 148.76V249.5C180 259.1 185.52 267.8 194.14 271.8400000000001M16.24 358.04L98.46 397.2200000000001A28.6 28.6 0 0 0 125.76 395.78L186.38 358.64C194.84 353.44 200 344.28 200 334.38V296.68L185.66 289.96A44.6 44.6 0 0 1 160 249.5V218.26L136.2 232.84A48.6 48.6 0 0 1 89.86 235.28L34.2 208.74L13.6 221.36A28.4 28.4 0 0 0 0 245.62V332.36C0 343.32 6.32 353.32 16.24 358.04M160 194.8V148.76C160 133.12 168.16 118.56 181.6 110.48L200 99.38V67.64C200 56.6800000000001 193.68 46.6800000000001 183.76 41.96L101.54 2.7800000000001A28.6 28.6 0 0 0 74.24 4.22L13.62 41.36A28.4 28.4 0 0 0 0 65.62V152.36C0 163.32 6.32 173.32 16.24 178.04L98.46 217.22A28.6 28.6 0 0 0 125.76 215.78z" : "M79.56 317.52A22.4 22.4 0 0 0 102.46 316.06L149.82 283.74C156.18 279.4 160 272.1 160 264.28V250.92L145.02 244.82A40.4 40.4 0 0 1 120 207.36V188.32L113.74 192.58A42.4 42.4 0 0 1 70.46 195.34L20.04 169.54L10.18 176.26A23.6 23.6 0 0 0 0 195.72V262.3400000000001C0 271.2 4.9 279.3 12.64 283.26zM152.56 226.3L231.66 258.54A19.6 19.6 0 0 0 248.04 257.8400000000001L308.94 226.8C315.7200000000001 223.34 320 216.28 320 208.56V112.64C320 104.3 315.02 96.8 307.42 93.7L228.34 61.46A19.6 19.6 0 0 0 211.96 62.16L151.06 93.2A20.4 20.4 0 0 0 140 111.44V207.36C140 215.7 144.98 223.2 152.58 226.3M120 164.1V111.44C120 96.34 128.36 82.32 141.98 75.38L160 66.18V57.66C160 48.8 155.1 40.6999999999999 147.36 36.7199999999999L80.44 2.4599999999999A22.4 22.4 0 0 0 57.54 3.9399999999999L10.18 36.24A23.6 23.6 0 0 0 0 55.72V122.32C0 131.2 4.9 139.32 12.64 143.26L79.56 177.52A22.4 22.4 0 0 0 102.46 176.06z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Cubes.displayName = `Blueprint6.Icon.Cubes`;
export default Cubes;
