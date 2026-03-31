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

export const OneColumn: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="one-column" ref={ref} {...props}>
            <path
                d={isLarge ? "M298.8 400H218.8C207.8 400 198.8 391 198.8 380V20C198.8 9 207.8 0 218.8 0H298.8C309.8 0 318.8 9 318.8 20V380C318.8 391 309.8 400 298.8 400M138.8 280C133.2 280 128.2 277.8 124.6 274.2L64.6 214.2C61 210.6 58.8 205.6 58.8 200S61 189.4 64.6 185.8L124.6 125.8A20.06 20.06 0 0 1 158.8 140V260C158.8 271 149.8 280 138.8 280" : "M239.8 320.2H179.8C168.8 320.2 159.8 311.2 159.8 300.2V20.2C159.8 9.2 168.8 0.2 179.8 0.2H239.8C250.8 0.2 259.8 9.2 259.8 20.2V300.2C259.8 311.2 250.8 320.2 239.8 320.2M119.8 220.2C114.2 220.2 109.2 218 105.6 214.4L65.6 174.4A20.28 20.28 0 0 1 65.6 146L105.6 106A20.06 20.06 0 0 1 139.8 120.2000000000001V200.2000000000001C139.8 211.2000000000001 130.8 220.2000000000001 119.8 220.2000000000001"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
OneColumn.displayName = `Blueprint6.Icon.OneColumn`;
export default OneColumn;
