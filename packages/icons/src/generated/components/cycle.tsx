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

export const Cycle: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="cycle" ref={ref} {...props}>
            <path
                d={isLarge ? "M320 200A80 80 0 1 0 320 40A80 80 0 0 0 320 200M80 200A80 80 0 1 0 80 40A80 80 0 0 0 80 200M225.98 310.86L227.72 309.08L266.32 264.44L307.28 250.28A20 20 0 0 0 320.28 227.08L319.66 224.84A20 20 0 0 0 296.46 211.84L294.22 212.46L248.18 228.38A20 20 0 0 0 241.44 232.32L239.6 234.2L211.86 266.26L174.04 226.62L214.96 181.14A20 20 0 0 0 219.96 170.2L220.0999999999999 167.76V82.96A20 20 0 0 0 180.24 80.62L180.0999999999999 82.96L180.08 160.1L131.92 213.62A20 20 0 0 0 130.66 238.82L132.3 240.8L198.1 309.8A20 20 0 0 0 225.98 310.86M320 160A40 40 0 1 1 320 80A40 40 0 0 1 320 160M80 160A40 40 0 1 1 80 80A40 40 0 0 1 80 160M270 360A30 30 0 1 0 270 300A30 30 0 0 0 270 360" : "M260 140A60 60 0 1 0 260 20A60 60 0 0 0 260 140M60 140A60 60 0 1 0 60 20A60 60 0 0 0 60 140M183.38 245.4L185.12 243.6L215.32 208.68L247.1 197.7A20 20 0 0 0 260.1 174.5L259.4600000000001 172.26A20 20 0 0 0 236.28 159.26L234.04 159.9L197.18 172.62A20 20 0 0 0 190.44 176.58L188.6 178.44L169.42 200.62L140.82 170L174.64 133.62A20 20 0 0 0 179.84 122.5L180 120V60A20 20 0 0 0 140.14 57.66L140 60L139.98 112.16L98.86 156.38A20 20 0 0 0 97.24 181.66L98.88 183.66L155.38 244.18A20 20 0 0 0 183.38 245.4M260 110A30 30 0 1 1 260 50A30 30 0 0 1 260 110M60 110A30 30 0 1 1 60 50A30 30 0 0 1 60 110M220 300A30 30 0 1 0 220 240A30 30 0 0 0 220 300"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Cycle.displayName = `Blueprint6.Icon.Cycle`;
export default Cycle;
