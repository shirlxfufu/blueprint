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

export const InboxFiltered: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="inbox-filtered" ref={ref} {...props}>
            <path
                d={isLarge ? "M205.24 340L244.4 300.8400000000001V299.8400000000001H93L39.6 179.9H100C111 179.9 120 170.9 120 159.92V139.92H280V159.92C280 170.92 289 179.92 300 179.92H360.4L347.7 208.44L360.2 221.04C367.28 228.1 372.16 237.0400000000001 374.34 246.82L400 189.1V59.98C400 48.98 391 40 380 40H20C9 40 0 49 0 60V189.1L61.6 327.6L61.8 328C64.8 335 71.8 340 80 340zM387 400A12.84 12.84 0 0 0 396.2000000000001 378L335.6 317.4V258.4C335.6 254.8 334.2000000000001 251.6 331.8 249.2L306.2 223.4C304 221.4 300.8 220 297.2000000000001 220C290.2000000000001 220 284.4000000000001 225.8 284.4000000000001 232.8V317.4L223.8 378A12.84 12.84 0 0 0 232.8 400z" : "M128.64 280Q131.46 275.78 135.12 272.12L168.4 240H73.2L39 160H80C91 160 100 151 100 140V120H231.14C245 120 258.4 125.24 267.88 134.72L269.94 136.76L286.94 159.56A51.2 51.2 0 0 1 299.4 193.2000000000001V218.84L320 170.8V60C320 49 311 40 300 40H20C9 40 0 49 0 60V170.8L41.6 267.8C44.6 275 51.8 280 60 280zM309.6 320C315.8 320 320 314.8 320 308.6C320 305.4 318.8 302.6 316.6 300.4L259.4000000000001 245.8V193.2C259.4000000000001 190 258.2 187.2 256 185L239.6 163C237.6 161 234.6 159.6 231.4 159.6C225.2 159.6 220 164.8 220 171V245.8L163.4 300.4A11.4 11.4 0 0 0 160 308.6C160 314.8 165.2 320 171.4 320z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
InboxFiltered.displayName = `Blueprint6.Icon.InboxFiltered`;
export default InboxFiltered;
