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
export const Flame = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "flame", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M232.44 400Q232.44 348.7 261.88 317.94Q360 246.14 360 153.84Q360 51.28 242.26 0C300 60 291.32 84.6 232.46 160C170 130 180 110 190 70C169.04 70 150 70 140 80C140 66.32 163.94 30 179.04 0C100.56 20.52 16.58 143.6 46.02 153.84Q75.46 164.1 114.7 143.58Q65.64 328.2 232.44 400" : "M184.34 320Q184.34 278.96 206.42 254.36Q280 196.92 280 123.08Q280 41.04 191.7 0C235 48 228.5 67.7 184.34 128C137.5 104 145 88 152.5 56C136.78 56 122.5 56 115 64C115 53.06 132.96 24 144.28 0C85.42 16.4 22.44 114.88 44.52 123.08Q66.6 131.28 96.02 114.88Q59.24 262.56 184.34 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Flame.displayName = `Blueprint6.Icon.Flame`;
export default Flame;
//# sourceMappingURL=flame.js.map