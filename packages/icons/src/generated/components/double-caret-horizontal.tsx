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

export const DoubleCaretHorizontal: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="double-caret-horizontal" ref={ref} {...props}>
            <path
                d={isLarge ? "M160 320C155.2 320 150.8 318 147.4 315.2L147.2 315.4L27.2 215.4L27.4 215.2C23 211.4 20 206.2 20 200S23 188.6 27.4 184.8L27.2 184.6L147.2 84.6L147.4 84.8C150.8 82 155.2 80 160 80C171 80 180 89 180 100V300C180 311 171 320 160 320M380 200C380 206.2 377 211.4 372.6 215.2L372.8 215.4L252.8 315.4L252.6 315.2C249.2 318 244.8 320 240 320C229 320 220 311 220 300V100C220 89 229 80 240 80C244.8 80 249.2 82 252.6 84.8L252.8 84.6L372.8 184.6L372.6 184.8C377 188.6 380 193.8 380 200" : "M274.2000000000001 174.2L214.2 234.2A20.06 20.06 0 0 1 180 220V100A20.06 20.06 0 0 1 214.2 85.8L274.2000000000001 145.8C277.8 149.4 280 154.4 280 160S277.8 170.6 274.2000000000001 174.2M120 240C114.4 240 109.4 237.8 105.8 234.2L45.8 174.2C42.2 170.6 40 165.6 40 160S42.2 149.4 45.8 145.8L105.8 85.8A20.06 20.06 0 0 1 140 100V220C140 231 131 240 120 240"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
DoubleCaretHorizontal.displayName = `Blueprint6.Icon.DoubleCaretHorizontal`;
export default DoubleCaretHorizontal;
