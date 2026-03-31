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
export const AddRowBottom = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "add-row-bottom", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M380 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H380C391 0 400 9 400 20V380C400 391 391 400 380 400M360 40H40V240H360zM360 260H40V360H360zM140 120H180V80C180 69 189 60 200 60S220 69 220 80V120H260C271 120 280 129 280 140S271 160 260 160H220V200C220 211 211 220 200 220S180 211 180 200V160H140C129 160 120 151 120 140S129 120 140 120" : "M120 100H140V80C140 69 149 60 160 60S180 69 180 80V100H200C211 100 220 109 220 120S211 140 200 140H180V160C180 171 171 180 160 180S140 171 140 160V140H120C109 140 100 131 100 120S109 100 120 100M300 320H20C9 320 0 311 0 300V20C0 9 9 0 20 0H300C311 0 320 9 320 20V300C320 311 311 320 300 320M280 40H40V200H280zM280 220H40V280H280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
AddRowBottom.displayName = `Blueprint6.Icon.AddRowBottom`;
export default AddRowBottom;
//# sourceMappingURL=add-row-bottom.js.map