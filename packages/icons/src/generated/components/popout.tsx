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

export const Popout: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="popout" ref={ref} {...props}>
            <path
                d={isLarge ? "M120 200C120 244.2 155.8 280 200 280H331.8L286 234.2C282.2000000000001 230.6 280 225.6 280 220A20.06 20.06 0 0 1 314.2000000000001 205.8L394.2000000000001 285.8C397.8 289.4 400 294.4 400 300S397.8 310.6 394.2000000000001 314.2L314.2000000000001 394.2A20.06 20.06 0 0 1 285.8 365.8L331.8 320H200C133.8 320 80 266.2000000000001 80 200H20A20 20 0 0 1 0 180V20A20 20 0 0 1 20 0H180A20 20 0 0 1 200 20V180A20 20 0 0 1 180 200zM40 40V160H160V40z" : "M100 160C100 193.2 126.8 220 160 220H251.8L226 194.2C222.2 190.6 220 185.6 220 180A20.06 20.06 0 0 1 254.2 165.8L314.2000000000001 225.8C317.8 229.4 320 234.4 320 240S317.8 250.6 314.2000000000001 254.2L254.2 314.2A20.06 20.06 0 0 1 225.8 285.8L251.8 260H160C104.8 260 60 215.2 60 160H20A20 20 0 0 1 0 140V20A20 20 0 0 1 20 0H140A20 20 0 0 1 160 20V140A20 20 0 0 1 140 160zM40 40V120H120V40z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Popout.displayName = `Blueprint6.Icon.Popout`;
export default Popout;
