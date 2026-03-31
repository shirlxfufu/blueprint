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

export const DocumentLocked: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="document-locked" ref={ref} {...props}>
            <path
                d={isLarge ? "M60 400H220L340 280V208.9A80 80 0 0 1 300 220V260H200V360H80V40H180V10Q180 5.06 181.04 0H60C49 0 40 9 40 20V380C40 391 49 400 60 400M339.3 99.9H368.6C374.1 99.9 379.3 95.5 379.3 90V10C379.3 4.5 374.1 -0.1 368.6 -0.1H229.3C223.8 -0.1 220 4.5 220 10V90C220 95.5 223.8 99.9 229.3 99.9H259.3V140A40 40 0 1 0 339.3 140zM279.3 139.9V99.8H319.3V139.9C319.3 150.9 310.3 159.9 299.3 159.9S279.3 150.9 279.3 139.9" : "M60 320H200L280 240V169.34A80 80 0 0 1 240 180V220H180V280H80V40H140V11.9Q140 5.78 141.4 0H60C49 0 40 9 40 20V300C40 311 49 320 60 320M280 80H289.6C295.1 80 300 76.5 300 71V11.9C300 6.5 295.1 0 289.6 0H189.6C184.1 0 180 6.5 180 11.9V71C180 76.5 184.1 80 189.6 80H200V100.5C200 122.3 217.9 140 240 140S280 122.3 280 100.5zM220 100.3V80H260V100.3A19.86 19.86 0 0 1 240 120C229 120 220 111.2 220 100.3"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
DocumentLocked.displayName = `Blueprint6.Icon.DocumentLocked`;
export default DocumentLocked;
