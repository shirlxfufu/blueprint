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

export const Layers: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="layers" ref={ref} {...props}>
            <path
                d={isLarge ? "M10 262L190 162C194 160 196 160 200 160S206 160 210 162L390 262C396 266 400 272 400 280S396 294 390 298L210 398C206 400 204 400 200 400S194 400 190 398L10 298C4 294 0 288 0 280S4 266 10 262M380 220C376 220 374 220 370 218L200 122L30 218C26 220 24 220 20 220C8 220 0 212 0 200C0 192 4 186 10 182L190 82C194 80 196 80 200 80S206 80 210 82L390 182C396 186 400 192 400 200C400 212 392 220 380 220M380 140C376 140 374 140 370 138L200 42L30 136C26 140 24 140 20 140C8 140 0 132 0 120C0 112 4 106 10 102L190 2C194 0 196 0 200 0S206 0 210 2L390 102C396 106 400 112 400 120.0000000000001C400 132 392 140.0000000000001 380 140.0000000000001" : "M11 222.2L151 162.2C153.8 160.8 156.8 160 160 160S166.2 160.8 169 162.2L309 222.2A19.96 19.96 0 0 1 307.8 258.4L168 318.4A20 20 0 0 1 152.2 318.4L12.4 258.4A19.84 19.84 0 0 1 11 222.2M300 100C296.8 100 293.8 99.2 291 97.8L160 40L29 98C26.2 99.2 23.2 100 20 100C9 100 0 91 0 80C0 72.2 4.6 65.4 11 62.2L151 2.2C153.8 0.8 156.8 0 160 0S166.2 0.8 169 2.2L309 62.2C315.4 65.4 320 72.2 320 80C320 91 311 100 300 100M300 180C296.8 180 293.8 179.2 291 177.8L160 120L29 177.8A20 20 0 0 1 20 180C9 180 0 171 0 160C0 152.2 4.6 145.4 11 142.2L151 82.2C153.8 80.8 156.8 80 160 80S166.2 80.8 169 82.2L309 142.2C315.4 145.4 320 152.2 320 160C320 171 311 180 300 180"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Layers.displayName = `Blueprint6.Icon.Layers`;
export default Layers;
