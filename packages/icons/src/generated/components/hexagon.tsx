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

export const Hexagon: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="hexagon" ref={ref} {...props}>
            <path
                d={isLarge ? "M147 300H253L308.4 200L253 100H147L91.6 200zM170 200C170 183.4 183.4 170 200 170S230 183.4 230 200S216.6 230 200 230S170 216.6 170 200M92.6 369.8C96.2 376 103 380 110.4 380H289.4C296.8 380 303.6 376.2 307.2 369.8L397.6 209.8C401 203.8 401 196.4 397.6 190.4L307.4 30.4C303.8 24.2 297 20.1999999999999 289.6 20.1999999999999H110.6C103.2 20.1999999999999 96.4 24 92.8 30.4L2.6 190.4A19.8 19.8 0 0 0 2.6 209.8zM122.6 60H277.8L356.8 200L277.8 340H122.6L43.6 200z" : "M72.6 30.08L2.68 150.08A19.6 19.6 0 0 0 2.68 169.92L72.58 289.92C76.22 296.16 82.98 300 90.28 300H229.7200000000001C237.04 300 243.78 296.16 247.42 289.92L317.32 169.92A19.6 19.6 0 0 0 317.32 150.08L247.42 30.08C243.78 23.84 237.02 20 229.72 20H90.28C82.96 20 76.22 23.84 72.58 30.08M200.12 90H119.86L79.08 160L119.88 230H200.14L240.92 160zM102.12 60H217.88L276.14 160L217.88 260H102.12L43.86 160zM160 140C171.26 140 180.4 148.96 180.4 160S171.24 180 160 180S139.6 171.04 139.6 160S148.76 140 160 140"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Hexagon.displayName = `Blueprint6.Icon.Hexagon`;
export default Hexagon;
