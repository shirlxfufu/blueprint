import { jsx as _jsx } from "react/jsx-runtime";
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
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const DocumentCode = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "document-code", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M60 400H220L340 280V184.82A60 60 0 0 1 300 200V260H200V360H80V40H135.16Q136.3 38.72 137.52 37.52L175.04 0H60C49 0 40 9 40 20V380C40 391 49 400 60 400M240 160C251 160 260 151 260 140C260 134.4 257.8 129.4 254 125.8L208.2 80L254.2 34.2A20.06 20.06 0 0 0 225.8 5.8L165.8 65.8A20 20 0 0 0 160 80C160 85.6 162.2 90.6 165.8 94.2000000000001L225.8 154.2C229.4 157.8 234.4 160 240 160M314.2000000000001 154.2L374.2000000000001 94.2000000000001C377.8 90.6 380 85.6 380 80S377.8 69.4 374.2000000000001 65.8L314.2000000000001 5.8A20.06 20.06 0 0 0 280 20C280 25.6 282.2 30.6 286 34.2L331.8 80L285.8 125.8A20.06 20.06 0 0 0 314.2 154.2" : "M200 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H115.04L97.52 17.52L95.94 19.08C89.9 25.08 82.74 32.2 80 39.9999999999999V280H180V220H240V156.58A60.4 60.4 0 0 0 280 156.62V240zM314.2000000000001 45.8L274.2000000000001 5.8A20.06 20.06 0 0 0 245.8 34.2L271.8 60L245.8 85.8A20.06 20.06 0 0 0 274.2000000000001 114.2L314.2000000000001 74.2C317.8 70.6 320 65.6 320 60S317.8 49.4 314.2000000000001 45.8M200 20C200 25.6 197.8 30.6 194.2 34.2L168.2 60L194.2 85.8A20.06 20.06 0 0 1 165.8 114.2L125.8 74.2C122.2 70.6 120 65.6 120 60S122.2 49.4 125.8 45.8L165.8 5.8A20.06 20.06 0 0 1 200 20", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
DocumentCode.displayName = `Blueprint6.Icon.DocumentCode`;
export default DocumentCode;
//# sourceMappingURL=document-code.js.map