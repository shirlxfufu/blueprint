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
export const Learning = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "learning", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M211.02 377.46A25.2 25.2 0 0 1 188.98 377.46L9.12 282.2C-3.04 276.02 -3.04 263.94 9.12 257.76L188.98 162.5200000000001C195.66 159.12 204.32 159.12 211.02 162.5200000000001L390.86 257.76C403.06 263.9400000000001 403.06 276.0200000000001 390.86 282.2000000000001zM360 270L360.32 179.72C360.36 168.76 369.26 159.92 380.2 159.92A19.8 19.8 0 0 1 400 179.72V270zM67.32 199.34L195.34 132.18A10 10 0 0 1 204.64 132.18L332.76 199.34A5 5 0 0 0 340.08 194.92V92.74A5 5 0 0 0 337.3 88.26L204.5 22.22A10 10 0 0 0 195.58 22.22L62.78 88.26A5 5 0 0 0 60 92.74V194.9A5 5 0 0 0 67.32 199.34" : "M168.82 297.92A19.8 19.8 0 0 1 151.18 297.92L7.3 220C-2.44 214.94 -2.44 205.06 7.3 200L151.2 122.08A19.8 19.8 0 0 1 168.84 122.08L312.7 200C322.44 205.06 322.44 214.94 312.7 220zM280 210L280.32 119.72C280.36 108.76 289.26 99.92 300.2 99.92A19.8 19.8 0 0 1 320 119.72V210zM67.42 139.06L155.16 90.42A10 10 0 0 1 164.86 90.42L252.66 139.06A5 5 0 0 0 260.08 134.7V75.6A5 5 0 0 0 257.4 71.16L164.7 22.44A10 10 0 0 0 155.38 22.44L62.68 71.16A5 5 0 0 0 60 75.6V134.7A5 5 0 0 0 67.42 139.06", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Learning.displayName = `Blueprint6.Icon.Learning`;
export default Learning;
//# sourceMappingURL=learning.js.map