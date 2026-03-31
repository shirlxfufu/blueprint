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
export const AreaOfInterest = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "area-of-interest", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M100 306.7200000000001C100 358.2 144.82 400 200 400S299.8 358.18 300 306.7200000000001C300 255.1 200 120 200 120S100 255.1 100 306.7200000000001M160 300A40 40 0 1 1 240.0200000000001 300.02A40 40 0 0 1 160 300M10.08 157.36L96.12 206.52C102.56 195 109.36 183.62 116.02 172.9L116.52 172.1L50.64 134.48L129.36 40H270.64L349.36 134.48L283.5 172.12L283.98 172.9C290.64 183.62 297.44 195 303.88 206.52L389.92 157.36A20 20 0 0 0 395.36 127.2L295.36 7.2A20 20 0 0 0 280 0H120A20 20 0 0 0 104.64 7.2L4.64 127.2A20 20 0 0 0 10.08 157.36" : "M80 246.72C80 287.12 115.86 320 160 320S239.86 287.14 240 246.72C240 206.16 160 100 160 100S80 206.14 80 246.72M120 240A40 40 0 1 1 200.0200000000001 240.02A40 40 0 0 1 120 240M270.08 114.62L216.48 146.8L216.9 147.46C223.7 158.22 230.6600000000001 169.76 236.9 181.2L310.3 137.16A20 20 0 0 0 315.62 107.5L235.62 7.5A20 20 0 0 0 220 0H100A20 20 0 0 0 84.4 7.52L4.4 107.52A20 20 0 0 0 9.72 137.16L83.12 181.2A620 620 0 0 1 103.1 147.46L103.52 146.8L49.92 114.62L109.62 40.02H210.38z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
AreaOfInterest.displayName = `Blueprint6.Icon.AreaOfInterest`;
export default AreaOfInterest;
//# sourceMappingURL=area-of-interest.js.map