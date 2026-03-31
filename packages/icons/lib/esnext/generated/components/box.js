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
export const Box = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "box", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M397.8 268.8L338 388.8H337.8C334.4 395.4 327.8 400 320 400H80C72.2 400 65.6 395.4 62.2 388.8H62L2 268.8H2.2C1 266.2 0 263.2 0 260V20C0 9 9 0 20 0H380C391 0 400 9 400 20V260C400 263.2 399 266.2 397.8 268.8M220 360H307.6L347.6 280H220zM92.4 360H180V280H52.4zM360 40H40V240H360zM160 160H240C251 160 260 169 260 180S251 200 240 200H160C149 200 140 191 140 180S149 160 160 160" : "M120 120H200C211 120 220 129 220 140S211 160 200 160H120C109 160 100 151 100 140S109 120 120 120M318.6 207.4V207.8L278.8 307.4C275.6 314.8 268.4 320 260 320H60C51.6 320 44.4 314.8 41.4 307.4L1.6 207.8L1.4 207.4C0.6 205.2 0 202.6 0 200V20C0 9 9 0 20 0H300C311 0 320 9 320 20V200C320 202.6 319.4000000000001 205.2 318.6 207.4M180 280H246.4L270.4 220H180zM73.6 280H140V220H49.6zM280 40H40V180H280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Box.displayName = `Blueprint6.Icon.Box`;
export default Box;
//# sourceMappingURL=box.js.map