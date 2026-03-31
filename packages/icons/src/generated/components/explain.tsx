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

export const Explain: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="explain" ref={ref} {...props}>
            <path
                d={isLarge ? "M200 400C310.46 400 400 310.46 400 200V0H200C89.54 0 0 89.54 0 200S89.54 400 200 400M160 180A20 20 0 0 0 180 160V72.6A12.6 12.6 0 0 1 203.6 66.46L278.4 201.12A12.7 12.7 0 0 1 267.3 220H240A20 20 0 0 0 220 240V327.4A12.6 12.6 0 0 1 196.4 333.52L121.6 198.88A12.7 12.7 0 0 1 132.7 180z" : "M160 320A160 160 0 0 0 320 160V0H160A160 160 0 1 0 160 320M120 140A20 20 0 0 0 140 120V70.2A10.2 10.2 0 0 1 158.96 65L218.68 165.78A9.4 9.4 0 0 1 210.5800000000001 179.98H200A20 20 0 0 0 180 199.98V249.8A10.2 10.2 0 0 1 161.04 255L101.32 154.22A9.42 9.42 0 0 1 109.4 140z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Explain.displayName = `Blueprint6.Icon.Explain`;
export default Explain;
