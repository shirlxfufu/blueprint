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

export const LinkedSquares: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="linked-squares" ref={ref} {...props}>
            <path
                d={isLarge ? "M22 380A22 22 0 0 1 0 358V142A22 22 0 0 1 22 120H60A20 20 0 1 1 60 160H40V340H260V160H180A20 20 0 1 1 180 120H278A22 22 0 0 1 300 142V358A22 22 0 0 1 278 380zM122 20A22 22 0 0 0 100 42V258A22 22 0 0 0 122 280H220A20 20 0 1 0 220 240H140V60H360V240H340A20 20 0 1 0 340 280H378A22 22 0 0 0 400 258V42A22 22 0 0 0 378 20z" : "M40 260V140A20 20 0 0 0 40 100H25C11.2 100 0 111.2 0 125V275C0 288.8 11.2 300 25 300H215C228.8 300 240 288.8 240 275V125C240 111.2 228.8 100 215 100H160A20 20 0 1 0 160 140H200V260zM280 60V180A20 20 0 1 0 280 220H295C308.8 220 320 208.8 320 195V45C320 31.2 308.8 20 295 20H105C91.2 20 80 31.2 80 45V195C80 208.8 91.2 220 105 220H160A20 20 0 1 0 160 180H120V60z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
LinkedSquares.displayName = `Blueprint6.Icon.LinkedSquares`;
export default LinkedSquares;
