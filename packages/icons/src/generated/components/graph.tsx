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

export const Graph: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="graph" ref={ref} {...props}>
            <path
                d={isLarge ? "M350 320A50 50 0 0 1 300 270C300 268.8 300.2 267.6 300.4 266.4L262.4 249.6C247.6 268 225.4 280 200 280C183.4 280 168.2 275 155.4 266.4L98.2 317.2C99.2 321.4 100 325.6 100 330A50 50 0 0 1 0 330A50 50 0 0 1 50 280C58.4 280 66.2 282.2 73.2 286L129 236.4C123.4 225.4 120 213.2 120 200C120 171.8 134.6 147.2 156.6 133L145.4 99.6A50 50 0 0 1 100 50A50 50 0 0 1 200 50C200 64.8 193.6 77.8 183.4 87L194.6 120.6C196.4 120.4 198.2 120 200 120C244.2 120 280 155.8 280 200C280 204.4 279.4000000000001 208.8 278.6 213L319 231C327.6 224.2 338.2 220 350 220A50 50 0 0 1 350 320" : "M280 260C258.8 260 241.6 243.4 240.2 222.4L201.6 203A59 59 0 0 1 160 220C148.8 220 138.4 216.8 129.6 211.4L79.4 253.2C79.6 255.4 80 257.6 80 260C80 282 62 300 40 300S0 282 0 260S18 220 40 220C44.8 220 49.4 221 53.6 222.6L103.8 180.8C101.6 174.2 100 167.4 100 160C100 140.8 109.2 123.8 123.2 113L112 79.2C93.8 75.4 80 59.4 80 40C80 18 98 0 120 0S160 18 160 40C160 50.2 156 59.4 149.8 66.4L161 100.2A59.8 59.8 0 0 1 220 160C220 162.4 219.6 164.8 219.2 167.2L258 186.6C264.4000000000001 182.4 271.8 180 280 180C302 180 320 198 320 220S302 260 280 260"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Graph.displayName = `Blueprint6.Icon.Graph`;
export default Graph;
