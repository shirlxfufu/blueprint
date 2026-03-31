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

export const FlowReview: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="flow-review" ref={ref} {...props}>
            <path
                d={isLarge ? "M122.6 219.92A80.1 80.1 0 0 0 200.24 280C237.6400000000001 280 269.04 254.44 277.86 219.9H333.2200000000001L286.1400000000001 266.24A19.4 19.4 0 0 0 280.4800000000001 280.06C280.4800000000001 290.7800000000001 289.7200000000001 299.9600000000001 300.4800000000001 299.9600000000001C305.9400000000001 299.9600000000001 310.8200000000001 297.8200000000001 314.3400000000001 294.3L394.3400000000001 213.48A19.4 19.4 0 0 0 400.0200000000001 199.64A19.2 19.2 0 0 0 394.1600000000001 186L314.3400000000001 106.06A18.8 18.8 0 0 0 300.4600000000001 100.22C289.7200000000001 100.22 280.4600000000001 109.42 280.4600000000001 120.16A19.4 19.4 0 0 0 286.1400000000001 134L333.0400000000001 179.8H277.7400000000001A80.1 80.1 0 0 0 200.2400000000001 120.18A80.1 80.1 0 0 0 122.7600000000001 179.8H66.98L114.5 133.64A19.4 19.4 0 0 0 120.16 119.8199999999999A20 20 0 0 0 100.28 100.16A20 20 0 0 0 86.02 105.98L5.86 186.02A19.2 19.2 0 0 0 0 199.66A19.4 19.4 0 0 0 5.66 213.5L86.26 294.24A20 20 0 0 0 100.28 299.9000000000001C111.02 299.9000000000001 120.16 290.62 120.16 279.9000000000001A19.4 19.4 0 0 0 114.5 266.0800000000001L66.8 219.92z" : "M103.5 179.92A60 60 0 0 0 160.1 219.94C186.2 219.94 208.42 203.24 216.7 179.92H256.4Q229.52 202.6 226.1 206.12A20.6 20.6 0 0 0 220.26 220.22C220.26 230.98 229.32 240 240.06 240A19 19 0 0 0 253.98 234.1200000000001Q257.5 230.4000000000001 314.14 173.8C317.66 170.28 320 165.6 320 160.12A19.6 19.6 0 0 0 314.3399999999999 146.22L254.08 85.6800000000001A19.9 19.9 0 0 0 220.2599999999999 99.7200000000001C220.2599999999999 105.18 222.5799999999999 110.6000000000001 226.0999999999999 114.1200000000001L256.3999999999999 139.9600000000001H216.7999999999999A60 60 0 0 0 160.0999999999999 99.64A60 60 0 0 0 103.4 139.96H63.6L93.9 114.12C97.42 110.6 99.74 105.18 99.74 99.72A19.9 19.9 0 0 0 65.94 85.68L5.64 146.2A19.6 19.6 0 0 0 0 160.12A19.2 19.2 0 0 0 5.86 173.8A10719.999999999998 10719.999999999998 0 0 1 66 234.12A19 19 0 0 0 79.94 240A20 20 0 0 0 99.74 220.22C99.74 214.76 97.34 209.66 93.9 206.12Q90.46 202.6 63.6 179.92z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
FlowReview.displayName = `Blueprint6.Icon.FlowReview`;
export default FlowReview;
