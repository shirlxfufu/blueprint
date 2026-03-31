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

export const RotateCcw: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="rotate-ccw" ref={ref} {...props}>
            <path
                d={isLarge ? "M365.86 208.2A15.2 15.2 0 0 0 365.1 187.5L278.58 100.98A15.2 15.2 0 1 1 300.1 79.46L386.62 165.98C403.54 182.9 404.54 209.98 388.9 228.1L322.6 304.9H350.2A15.2 15.2 0 1 1 350.2 335.32H289.34A15.2 15.2 0 0 1 274.14 320.12V259.24A15.2 15.2 0 0 1 304.56 259.24V279.2zM257.32 217.68A25 25 0 0 0 257.32 182.32L151.26 76.26A25 25 0 0 0 115.9 76.26L9.84 182.32A25 25 0 0 0 9.84 217.68L115.9 323.74A25 25 0 0 0 151.26 323.74z" : "M292.7 166.56A12.2 12.2 0 0 0 292.1 150L222.86 80.8A12.18 12.18 0 0 1 240.0800000000001 63.56L309.3 132.78C322.8400000000001 146.32 323.62 167.98 311.12 182.48L258.08 243.92H280.18A12.18 12.18 0 1 1 280.18 268.26H231.48A12.2 12.2 0 0 1 219.3 256.08V207.4A12.18 12.18 0 0 1 243.66 207.4V223.36zM205.86 174.14A20 20 0 0 0 205.86 145.86L121 61A20 20 0 0 0 92.72 61L7.86 145.86A20 20 0 0 0 7.86 174.14L92.72 259A20 20 0 0 0 121 259z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
RotateCcw.displayName = `Blueprint6.Icon.RotateCcw`;
export default RotateCcw;
