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

export const NewLayer: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="new-layer" ref={ref} {...props}>
            <path
                d={isLarge ? "M230.26 286.74A40 40 0 0 1 260 220H280V200A40 40 0 1 1 360 200V214.66L390 198C396 194 400 188 400 180S396 166 390 162L210 62C206 60 204 60 200 60S194 60 190 62L10 162C4 166 0 172 0 180S4 194 10 198.0000000000001L190 298.0000000000001C194 300 196 300 200 300S206 300 210 298.0000000000001zM340 280H380A20 20 0 1 0 380 240H340V200A20 20 0 1 0 300 200V240H260A20 20 0 1 0 260 280H300V320A20 20 0 1 0 340 320z" : "M279.64 194.56L310 177.2L309.8 177C315.8 173.6 320 167.4 320 160S315.8 146.4 309.8 143L310 142.8L170 62.8L169.8 63A18.8 18.8 0 0 0 160 60A18.8 18.8 0 0 0 150.2 63L150 62.8L10 142.8L10.2 143A19.6 19.6 0 0 0 0 160C0 167.4 4.2 173.6 10.2 177.2L10 177.4L150 257.4L150.2 257A18.8 18.8 0 0 0 160 260Q162.58 259.98 164.92 259.24A40 40 0 1 1 279.62 194.56M280 260C291 260 300 251 300 240S291 220 280 220H260V200C260 189 251 180 240 180S220 189 220 200V220H200C189 220 180 229 180 240S189 260 200 260H220V280C220 291 229 300 240 300S260 291 260 280V260z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
NewLayer.displayName = `Blueprint6.Icon.NewLayer`;
export default NewLayer;
