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

export const WrenchRedo: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="wrench-redo" ref={ref} {...props}>
            <path
                d={isLarge ? "M80 220C46.8 220 20 246.8 20 280S46.8 340 80 340H111.8L105.8 345.8A20.06 20.06 0 0 0 134.2 374.2L174.2 334.2C177.8 330.6 180 325.6 180 320S177.8 309.4 174.2 305.8L134.2 265.8A20.06 20.06 0 0 0 105.8 294.2L111.8 300H80C69 300 60 291 60 280S69 260 80 260A20 20 0 1 0 80 220M270 80C253.58 80 238 83.6 224 90.06L165.12 31.18A38.14 38.14 0 0 0 111.18 85.12L170.06 144A110 110 0 0 0 323.66 286.06L248.78 211.22A30 30 0 1 1 291.2200000000001 168.78L366.06 243.64A110 110 0 0 0 270 80" : "M154.2 245.8L114.2 205.8A20.06 20.06 0 0 0 85.8 234.2L91.8 240H60C49 240 40 231 40 220S49 200 60 200A20 20 0 1 0 60 160C26.8 160 0 186.8 0 220S26.8 280 60 280H91.8L85.8 285.8A20.06 20.06 0 0 0 114.2 314.2L154.2 274.2C157.8 270.6 160 265.6 160 260S157.8 249.4 154.2 245.8M191.7 68.54L132.1 8.94A30.52 30.52 0 0 0 88.94 52.1L148.54 111.7A90.04 90.04 0 0 0 268.8 231.24L208.8 171.22A30 30 0 0 1 251.2000000000001 128.78L311.24 188.8A90.04 90.04 0 0 0 191.7 68.54"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
WrenchRedo.displayName = `Blueprint6.Icon.WrenchRedo`;
export default WrenchRedo;
