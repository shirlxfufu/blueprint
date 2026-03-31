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
export const SortDesc = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "sort-desc", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M260 100H200C189 100 180 91 180 80V60C180 49 189 40 200 40H260C271 40 280 49 280 60V80C280 91 271 100 260 100M140 120C134.4 120 129.4 117.8 125.8 114.2000000000001L100 88.2V200C100 211 91 220 80 220S60 211 60 200V88.2L34.2 114A19.4 19.4 0 0 1 20 120A20.06 20.06 0 0 1 5.8 85.8L65.8 25.8C69.4 22.2 74.4 20 80 20S90.6 22.2 94.2 25.8L154.2 85.8A20.06 20.06 0 0 1 140 120M380 400H200C189 400 180 391 180 380V360C180 349 189 340 200 340H380C391 340 400 349 400 360V380C400 391 391 400 380 400M300 200H200C189 200 180 191 180 180V160C180 149 189 140 200 140H300C311 140 320 149 320 160V180C320 191 311 200 300 200M340 300H200C189 300 180 291 180 280V260C180 249 189 240 200 240H340C351 240 360 249 360 260V280C360 291 351 300 340 300" : "M100 80C94.4 80 89.4 77.8 85.8 74.2L80 68.2V140C80 151 71 160 60 160S40 151 40 140V68.2L34.2 74A19.4 19.4 0 0 1 20 80A20.06 20.06 0 0 1 5.8 45.8L45.8 5.8C49.4 2.2 54.4 0 60 0S70.6 2.2 74.2 5.8L114.2 45.8A20.06 20.06 0 0 1 100 80M180 60H160C149 60 140 51 140 40S149 20 160 20H180C191 20 200 29 200 40S191 60 180 60M260 220H160C149 220 140 211 140 200S149 180 160 180H260C271 180 280 189 280 200S271 220 260 220M220 140H160C149 140 140 131 140 120S149 100 160 100H220C231 100 240 109 240 120S231 140 220 140M300 300H160C149 300 140 291 140 280S149 260 160 260H300C311 260 320 269 320 280S311 300 300 300", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SortDesc.displayName = `Blueprint6.Icon.SortDesc`;
export default SortDesc;
//# sourceMappingURL=sort-desc.js.map