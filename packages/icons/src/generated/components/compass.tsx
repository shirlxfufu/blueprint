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

export const Compass: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="compass" ref={ref} {...props}>
            <path
                d={isLarge ? "M300 200C300 197.2 299.4000000000001 194.4 298.2 192L218.4 12.4L218.2 11.9999999999999A19.82 19.82 0 0 0 181.8 11.9999999999999L181.6 12.4L101.8 192C100.6 194.4 100 197.2 100 200S100.6 205.6 101.8 208L181.6 387.6L181.8 388A19.82 19.82 0 0 0 218.2 388L218.4 387.6L298.2 208C299.4000000000001 205.6 300 202.8 300 200M200 330.8L141.8 200H258z" : "M240 160C240 157.2 239.4 154.6 238.4 152.2L178.4 12.4C175.4 5 168.2 0 160 0S144.6 5 141.6 12.2L81.6 152A20 20 0 0 0 81.6 167.8L141.6 307.6C144.6 315 151.8 320 160 320S175.4 315 178.4 307.8L238.4 168C239.4 165.4 240 162.8 240 160M160 249.2L121.8 160H198.2z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Compass.displayName = `Blueprint6.Icon.Compass`;
export default Compass;
