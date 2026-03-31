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

export const KeyControl: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="key-control" ref={ref} {...props}>
            <path
                d={isLarge ? "M334.2000000000001 254.2L214.2 374.2C210.6 377.8 205.6 380 200 380S189.4 377.8 185.8 374.2L65.8 254.2A20.06 20.06 0 0 1 94.2 225.8L200 331.8L305.8 226C309.4 222.2 314.4 220 320 220A20.06 20.06 0 0 1 334.2000000000001 254.2" : "M254.2 214.2L174.2 294.2C170.6 297.8 165.6 300 160 300S149.4 297.8 145.8 294.2L65.8 214.2A20.06 20.06 0 0 1 94.2 185.8L160 251.8L225.8 186C229.4 182.2 234.4 180 240 180A20.06 20.06 0 0 1 254.2 214.2"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
KeyControl.displayName = `Blueprint6.Icon.KeyControl`;
export default KeyControl;
