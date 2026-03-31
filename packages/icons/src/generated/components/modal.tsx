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

export const Modal: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="modal" ref={ref} {...props}>
            <path
                d={isLarge ? "M380 380A20 20 0 0 0 400 360V40A20 20 0 0 0 380 20H20A20 20 0 0 0 0 40V360A20 20 0 0 0 20 380zM360 300H40V60H360zM300 360H260V320H300zM360 360H320V320H360z" : "M300 300A20 20 0 0 0 320 280V40A20 20 0 0 0 300 20H20A20 20 0 0 0 0 40V280A20 20 0 0 0 20 300zM280 220H40V60H280zM220 280H180V240H220zM280 280H240V240H280z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Modal.displayName = `Blueprint6.Icon.Modal`;
export default Modal;
