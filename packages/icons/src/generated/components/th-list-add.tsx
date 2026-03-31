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

export const ThListAdd: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="th-list-add" ref={ref} {...props}>
            <path
                d={isLarge ? "M320 400A20 20 0 0 1 300 380V340H260A20 20 0 0 1 260 300H300V260A20 20 0 0 1 340 260V300H380A20 20 0 0 1 380 340H340V380A20 20 0 0 1 320 400M343.36 204.72A60 60 0 0 1 380 260V40A20 20 0 0 0 360 20H20A20 20 0 0 0 0 40V360C0 370 8 380 20 380H260A60 60 0 0 1 215.28 280H40V220H275.28C286.28 207.72 302.24 200 320 200H40V140H340V200H320A60 60 0 0 1 343.36 204.72M40 120V60H340V120z" : "M240 300A20 20 0 1 0 280 300V280H300A20 20 0 1 0 300 240H280V220A20 20 0 1 0 240 220V240H220A20 20 0 1 0 220 280H240zM160 260C160 244.64 165.78 230.6 175.28 220H40V180H215.28C226.28 167.72 242.24 160 260 160H40V120H280V160H260A60 60 0 0 1 317.44 202.58L320 203.4V40C320 28 312 20 300 20H20C8 20 0 28 0 40V280C0 290 8 300 20 300H175.28A60 60 0 0 1 160 260M140 60H280V100H40V60z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ThListAdd.displayName = `Blueprint6.Icon.ThListAdd`;
export default ThListAdd;
