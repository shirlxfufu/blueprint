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

export const Widget: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="widget" ref={ref} {...props}>
            <path
                d={isLarge ? "M360 320C382 320 400 338 400 360S382 400 360 400S320 382 320 360S338 320 360 320M40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40S62 80 40 80M340 100H380V300H340zM60 300H20V100H60zM40 400C18 400 0 382 0 360S18 320 40 320S80 338 80 360S62 400 40 400M100 340H300V380H100zM360 80C338 80 320 62 320 40S338 0 360 0S400 18 400 40S382 80 360 80M100 20H300V60H100z" : "M260 100H300V220H260zM60 220H20V100H60zM280 240C302 240 320 258 320 280S302 320 280 320S240 302 240 280S258 240 280 240M40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40S62 80 40 80M280 80C258 80 240 62 240 40S258 0 280 0S320 18 320 40S302 80 280 80M100 260H220V300H100zM40 320C18 320 0 302 0 280S18 240 40 240S80 258 80 280S62 320 40 320M100 20H220V60H100z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Widget.displayName = `Blueprint6.Icon.Widget`;
export default Widget;
