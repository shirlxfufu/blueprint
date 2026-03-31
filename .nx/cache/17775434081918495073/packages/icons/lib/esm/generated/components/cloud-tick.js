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
export const CloudTick = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "cloud-tick", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M295.68 319.56A40 40 0 0 0 292.8 319.2C276.6 366.2 232.4 400 180 400C113.8 400 60 346.2 60 280Q60 279.26 60.1 278.6L60.2 277.2A79.6 79.6 0 0 1 0 200C0 155.8 35.8 120 80 120H103.4A60 60 0 0 0 202.4 142.42L220 124.86L317.5800000000001 222.42A60 60 0 0 0 399.88 224.82A100 100 0 0 1 300 320Q297.84 319.9600000000001 295.68 319.56M234.14 25.86A20 20 0 0 0 205.86 25.86L145.86 85.86A20 20 0 1 0 174.14 114.14L220 68.28L345.86 194.14A20 20 0 0 0 374.14 165.86z" : "M238 239.8C238.6 240 239.4 240 240 240A80 80 0 0 0 318.14 177.2A60 60 0 0 1 257.58 162.42L200 104.86L182.42 122.42A60 60 0 0 1 80 80H70C31.4 80 0 111.4 0 150C0 178 16.6 202.2 40.4 213.4C40.2 215.6 40 217.8 40 220A100 100 0 0 0 238 239.8M315.3 132.88A20 20 0 0 0 314.14 105.86L214.14 5.86A20 20 0 0 0 185.86 5.86L125.86 65.86A20 20 0 0 0 154.14 94.14L200 48.28L285.86 134.14A20 20 0 0 0 315.3 132.88", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
CloudTick.displayName = `Blueprint6.Icon.CloudTick`;
export default CloudTick;
//# sourceMappingURL=cloud-tick.js.map