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

export const Compressed: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="compressed" ref={ref} {...props}>
            <path
                d={isLarge ? "M397.8 268.8L338 388.8H337.8C334.4 395.4 327.8 400 320 400H80C72.2 400 65.6 395.4 62.2 388.8H62L2 268.8H2.2C1 266.2 0 263.2 0 260V20C0 9 9 0 20 0H380C391 0 400 9 400 20V260C400 263.2 399 266.2 397.8 268.8M220 360H307.6L347.6 280H220zM92.4 360H180V280H52.4zM360 40H40V240H180V148.2L134.2 194A19.4 19.4 0 0 1 120 200A20.06 20.06 0 0 1 105.8 165.8L185.8 85.8C189.4 82.2 194.4 80 200 80S210.6 82.2 214.2 85.8L294.2000000000001 165.8A20.06 20.06 0 0 1 265.8 194.2L220 148.2V240H360z" : "M318.6 207.4V207.8L278.8 307.4C275.6 314.8 268.4 320 260 320H60C51.6 320 44.4 314.8 41.4 307.4L1.6 207.8L1.4 207.4C0.6 205.2 0 202.6 0 200V20C0 9 9 0 20 0H300C311 0 320 9 320 20V200C320 202.6 319.4000000000001 205.2 318.6 207.4M180 280H246.4L270.4 220H180zM73.6 280H140V220H49.6zM280 40H40V180H140V128.2L114.2 154.2A20.06 20.06 0 0 1 85.8 125.8L145.8 65.8C149.4 62.2000000000001 154.4 60.0000000000001 160 60.0000000000001S170.6 62.2000000000001 174.2 65.8L234.2 125.8A20.06 20.06 0 0 1 205.8 154.2L180 128.2V180H280z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Compressed.displayName = `Blueprint6.Icon.Compressed`;
export default Compressed;
