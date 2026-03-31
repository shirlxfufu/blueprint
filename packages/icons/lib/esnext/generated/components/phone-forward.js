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
export const PhoneForward = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "phone-forward", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M396.9 89.8C395.3 91.4 312.78 139.8 309.98 141.2A18 18 0 0 1 301.98 143.2C298.2 143.2 293.6 140.6 287.8 135.2C282.2 129.8 264.44 105.4 259.24 100S249.64 92 246.24 92C244.64 92 242.44 92.4 239.86 93.4C237.26 94.4 210.88 108 155.94 156.4S93.8 236.4 93.4 245.2C93.4 248.6 96 253 101.4 258.2000000000001C107 263.2000000000001 112.8 268.4 119.2 273Q128.72 280.2000000000001 136.76 288.6C142.16 294.2000000000001 144.76 299 144.76 302.8C144.76 305.4000000000001 144.16 308.2000000000001 142.76 310.8000000000001C141.36 313.6 91.4 396.2 89.6 398C85.8 401.6 71.2 400 63.82 396C4.1 363.6 -0.9 320 0.1 302.8C1.1 285 12.3 191.2 104 104.2000000000001C217.88 -4 297 0.2 302.2 0.2C319.58 0.2 372.52 9.8000000000001 395.1 64.0000000000001C398.3 71.6 401.3 85.4000000000001 396.9 89.8000000000001M220 260H331.6L305.8 234.2A20 20 0 0 1 299.8 220A20.06 20.06 0 0 1 334 205.8L394 265.8C397.6 269.4 399.8 274.4 399.8 280S397.6 290.6 394 294.2L334 354.2A20.06 20.06 0 0 1 305.6 325.8L331.6 300H220C209 300 200 291 200 280S209 260 220 260" : "M318.32 71.8C317.12 73 250.86 111.8 248.66 112.8A16 16 0 0 1 242.26 114.4C239.26 114.4 235.46 112.2 230.86 108C226.26 103.6 212.04 84.2 207.82 80C203.62 75.6 200.22 73.6 197.42 73.6A14 14 0 0 0 192.42 74.8C190.42 75.6 169.2 86.4 125.16 125.2C81.12 163.78 75.32 189.18 75.12 196.18C75.12 198.98 77.32 202.38 81.52 206.58C85.92 210.78 90.52 214.78 95.52 218.58S105.34 226.58 109.54 230.98C113.94 235.58 115.94 239.38 115.94 242.38A16 16 0 0 1 114.34 248.76C113.34 250.76 73.32 316.96 71.92 318.36C68.92 321.36 57.1 319.96 51.1 316.76C3.26 290.76 -0.54 255.96 0.06 242.16C0.86 227.96 9.86 152.98 83.3200000000001 83.2C174.6 -3.4 238.06 0 242.26 0C256.06 0 298.7 7.6 316.72 51C319.32 57.4 321.72 68.4 318.32 71.8M314.2000000000001 234L274.2000000000001 274A19.4 19.4 0 0 1 260 280A20.06 20.06 0 0 1 245.8 245.8L251.6 240H180C169 240 160 231 160 220S169 200 180 200H251.8L246 194.2A20.06 20.06 0 0 1 274.4000000000001 165.8L314.4000000000001 205.8C318 209.4 320.2000000000001 214.4 320.2000000000001 220S317.8000000000001 230.4 314.2000000000001 234", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
PhoneForward.displayName = `Blueprint6.Icon.PhoneForward`;
export default PhoneForward;
//# sourceMappingURL=phone-forward.js.map