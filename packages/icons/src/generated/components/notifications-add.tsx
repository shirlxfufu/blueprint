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

export const NotificationsAdd: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="notifications-add" ref={ref} {...props}>
            <path
                d={isLarge ? "M240.06 352.58L240 350A60 60 0 1 1 240 230A60 60 0 0 1 320 173.4V120C320 109 329 100 340 100S360 91 360 80S351 60 340 60H60C49 60 40 69 40 80S49 100 60 100S80 109 80 120V240C80 292.2 113.4 336.2 160 352.6V360C160 382 178 400 200 400S240 382 240 360V352.6zM240 40C240 18 222 0 200 0S160 18 160 40zM280 350A20 20 0 1 0 320 350V310H360A20 20 0 1 0 360 270H320V230A20 20 0 1 0 280 230V270H240A20 20 0 1 0 240 310H280z" : "M179.6 298L179.74 297.98L179.58 297.42A60.02 60.02 0 0 1 179.58 182.58A60 60 0 0 1 260 144.58V120C260 109 269 100 280 100S300 91 300 80S291 60 280 60H40C29 60 20 69 20 80S29 100 40 100S60 109 60 120V200C60 248.6 94.6 289 140.4 298A4 4 0 0 1 140.2 299Q140.02 299.42 140 300C140 311 149 320 160 320S180 311 180 300Q179.98 299.42 179.8 299A4 4 0 0 1 179.6 298M160 0C182 0 200 18 200 40H120C120 18 138 0 160 0M280 260H260V280A20 20 0 1 1 220 280V260H200A20 20 0 0 1 200 220H220V200A20 20 0 1 1 260 200V220H280A20 20 0 1 1 280 260"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
NotificationsAdd.displayName = `Blueprint6.Icon.NotificationsAdd`;
export default NotificationsAdd;
