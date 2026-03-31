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
export const Fullscreen = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "fullscreen", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M68.2 360H120C131 360 140 369 140 380S131 400 120 400H20C9 400 0 391 0 380V280C0 269 9 260 20 260S40 269 40 280V331.8L145.8 226C149.4 222.2 154.4 220 160 220A20.06 20.06 0 0 1 174.2 254.2zM160 180C154.4 180 149.4 177.8 145.8 174.2L40 68.2V120C40 131 31 140 20 140S0 131 0 120V20C0 9 9 0 20 0H120C131 0 140 9 140 20S131 40 120 40H68.2L174 145.8C177.8 149.4 180 154.4 180 160C180 171 171 180 160 180M380 400H280C269 400 260 391 260 380S269 360 280 360H331.8L226 254.2C222.2 250.6 220 245.6 220 240A20.06 20.06 0 0 1 254.2 225.8L360 331.8V280C360 269 369 260 380 260S400 269 400 280V380C400 391 391 400 380 400M380 140C369 140 360 131 360 120V68.2L254.2 174A19.4 19.4 0 0 1 240 180A20.06 20.06 0 0 1 225.8 145.8L331.8 40H280C269 40 260 31 260 20S269 0 280 0H380C391 0 400 9 400 20V120C400 131 391 140 380 140" : "M68.2 280H100C111 280 120 289 120 300S111 320 100 320H20C9 320 0 311 0 300V220C0 209 9 200 20 200S40 209 40 220V251.8L105.8 186C109.4 182.2 114.4 180 120 180A20.06 20.06 0 0 1 134.2 214.2zM120 140C114.4 140 109.4 137.8 105.8 134.2L40 68.2V100C40 111 31 120 20 120S0 111 0 100V20C0 9 9 0 20 0H100C111 0 120 9 120 20S111 40 100 40H68.2L134 105.8C137.8 109.4 140 114.4 140 120C140 131 131 140 120 140M300 120C289 120 280 111 280 100V68.2L214.2 134A19.4 19.4 0 0 1 200 140A20.06 20.06 0 0 1 185.8 105.8L251.8 40H220C209 40 200 31 200 20S209 0 220 0H300C311 0 320 9 320 20V100C320 111 311 120 300 120M300 320H220C209 320 200 311 200 300S209 280 220 280H251.8L185.8 214.2A20.06 20.06 0 0 1 214.2 185.8L280 251.8V220C280 209 289 200 300 200S320 209 320 220V300C320 311 311 320 300 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Fullscreen.displayName = `Blueprint6.Icon.Fullscreen`;
export default Fullscreen;
//# sourceMappingURL=fullscreen.js.map