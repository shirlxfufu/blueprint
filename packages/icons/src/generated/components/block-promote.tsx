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

export const BlockPromote: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="block-promote" ref={ref} {...props}>
            <path
                d={isLarge ? "M360 220H340V320C340 331 331 340 320 340H80C69 340 60 331 60 320V220H40C29 220 20 211 20 200S29 180 40 180H60V80C60 69 69 60 80 60H320C331 60 340 69 340 80V180H360C371 180 380 189 380 200S371 220 360 220M137 133A9.4 9.4 0 0 0 130 130A9.4 9.4 0 0 0 123 133C119 136.8 119 143.2 123 147L175.8 200L123 253C119 256.8 119 263.2 123 267C126.8 271 133.2 271 137 267L197 207C201 203.2000000000001 201 196.8000000000001 197 193.0000000000001zM277 193L217 133A9.4 9.4 0 0 0 210 130A9.4 9.4 0 0 0 203 133C199 136.8 199 143.2 203 147L255.8 200L203 253C199 256.8 199 263.2 203 267C206.8 271 213.2 271 217 267L277 207C281 203.2000000000001 281 196.8000000000001 277 193.0000000000001" : "M60 280H260A20 20 0 0 0 280 260V180H300A20 20 0 1 0 300 140H280V60A20 20 0 0 0 260 40H60A20 20 0 0 0 40 60V140H20A20 20 0 1 0 20 180H40V260A20 20 0 0 0 60 280M177.08 217.08A10 10 0 1 1 162.92 202.92L205.86 160L162.92 117.08A10 10 0 0 1 177.08 102.92L227.08 152.92A10 10 0 0 1 227.08 167.08zM92.92 217.08A10 10 0 0 1 92.92 202.92L135.86 160L92.92 117.08A10 10 0 0 1 107.08 102.92L157.08 152.92A10 10 0 0 1 159.96 159.04A10 10 0 0 1 159.94 161.16A10 10 0 0 1 157.08 167.08L107.08 217.08A10 10 0 0 1 92.92 217.08"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
BlockPromote.displayName = `Blueprint6.Icon.BlockPromote`;
export default BlockPromote;
