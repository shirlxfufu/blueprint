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

export const Unarchive: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="unarchive" ref={ref} {...props}>
            <path
                d={isLarge ? "M328.68 400A20 20 0 0 0 345.82 390.28L400 300V20A20 20 0 0 0 380 0H20A20 20 0 0 0 0 20V300L54.18 390.28A20 20 0 0 0 71.32 400zM200 240C194.4 240 189.4 237.8 185.8 234.2L125.8 174.2L124.12 172.28A20.06 20.06 0 0 1 154.2 145.8L180 171.8V80.2L180.14 77.88C181.3 67.96 189.78 60.1999999999999 200 60.1999999999999C211 60.1999999999999 220 69.1999999999999 220 80.1999999999999V171.8L245.8 146L247.42 144.5399999999999A20 20 0 0 1 260 140A20.06 20.06 0 0 1 274.2000000000001 174.2L214.2 234.2L212.28 235.88A20 20 0 0 1 200 240M320 360H80L40 299.9600000000001H360z" : "M267.64 320A20 20 0 0 0 285.52 308.94L320 240V20A20 20 0 0 0 300 0H20A20 20 0 0 0 0 20V240L34.48 308.94A20 20 0 0 0 52.36 320zM160 200C154.4 200 149.4 197.8 145.8 194.2L105.8 154.2L104.12 152.28A20.06 20.06 0 0 1 134.2 125.8L140 131.8V80L140.14 77.68C141.3 67.76 149.78 60 160 60C171 60 180 69 180 80V131.8L185.8 126L187.42 124.48A19.4 19.4 0 0 1 200 120A20.06 20.06 0 0 1 214.2 154.2L174.2 194.2L172.28 195.88A20 20 0 0 1 160 200M260 280H60L40 240H280z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Unarchive.displayName = `Blueprint6.Icon.Unarchive`;
export default Unarchive;
