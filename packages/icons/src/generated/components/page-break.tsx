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

export const PageBreak: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="page-break" ref={ref} {...props}>
            <path
                d={isLarge ? "M0 180V220H40A20 20 0 0 0 40 180zM400 220V180H340A20 20 0 1 0 340 220zM100 220A20 20 0 0 1 100 180H160A20 20 0 1 1 160 220zM200 200A20 20 0 0 0 220 220H280A20 20 0 1 0 280 180H220A20 20 0 0 0 200 200M340 400H300V320H80V400H40V300C40 289 49 280 60 280H320C331 280 340 289 340 300zM40 0H80V80H300V0H340V100C340 111 331 120 320 120H60C49 120 40 111 40 100z" : "M60 180H20A20 20 0 0 1 20 140H60A20 20 0 0 1 60 180M180 180H140A20 20 0 0 1 140 140H180A20 20 0 0 1 180 180M300 180H260A20 20 0 1 1 260 140H300A20 20 0 1 1 300 180M280 320H240V260H80V320H40V240C40 229 49 220 60 220H260C271 220 280 229 280 240zM40 0H80V60H240V0H280V80C280 91 271 100 260 100H60C49 100 40 91 40 80z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
PageBreak.displayName = `Blueprint6.Icon.PageBreak`;
export default PageBreak;
