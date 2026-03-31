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
export const SwapVertical = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "swap-vertical", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M194.2 294L114.2 374A20 20 0 0 1 100 379.8C94.4 379.8 89.4 377.6 85.8 374L5.8 294A20.06 20.06 0 0 1 34.2 265.6L80 311.6V40C80 29 89 20 100 20S120 29 120 40V311.6L165.8 265.8A20 20 0 0 1 180 259.8A20.06 20.06 0 0 1 194.2 294M200 320.4Q200 320.1 200 320.4V320zM200 79.6Q200 79.9 200 79.6V80zM380 140.2C374.4 140.2 369.4 138 365.8 134.4L320 88.4V360C320 371 311 380 300 380S280 371 280 360V88.4L234.2 134.2000000000001A20.06 20.06 0 0 1 205.8 105.8L285.8 25.8C289.4000000000001 22.2 294.4000000000001 20 300 20S310.6 22.2 314.2000000000001 25.8L394.2000000000001 105.8C397.8 109.4 400 114.4 400 120C400 131.2 391 140.2 380 140.2" : "M180 320H179.6L180 319.2zM140 0H140.4L140 1zM94 293.8C90.4 297.4 85.4 299.6 80 299.6S69.4 297.4 65.8 293.8L5.8 234A20.06 20.06 0 0 1 34.2 205.6L60 231.4V40C60 29 69 20 80 20S100 29 100 40V231.4L125.8 205.6C129.4 202 134.4 199.8 139.8 199.8A20.06 20.06 0 0 1 154 234zM300 120.2C294.4000000000001 120.2 289.4000000000001 118 285.8 114.4L260 88.6V280C260 291 251 300 240 300S220 291 220 280V88.6L194.2 114.4A20 20 0 0 1 180.2000000000001 120.2A20.06 20.06 0 0 1 166 85.9999999999999L226 26.1999999999999C229.6 22.6 234.6 20.4 240.2000000000001 20.4S250.8 22.6 254.4000000000001 26.1999999999999L314.4000000000001 85.9999999999999C318.0000000000001 89.5999999999999 320.2000000000001 94.5999999999999 320.2000000000001 100.2C320 111.2 311 120.2 300.0000000000001 120.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SwapVertical.displayName = `Blueprint6.Icon.SwapVertical`;
export default SwapVertical;
//# sourceMappingURL=swap-vertical.js.map