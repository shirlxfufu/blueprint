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
export const PhoneCall = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "phone-call", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M396.9 89.8C395.3 91.4 312.78 139.8 309.98 141.2A18 18 0 0 1 301.98 143.2C298.2 143.2 293.6 140.6 287.8 135.2C282.2 129.8 264.44 105.4 259.24 100S249.64 92 246.24 92C244.64 92 242.44 92.4 239.86 93.4C237.26 94.4 210.88 108 155.94 156.4S93.8 236.4 93.4 245.2C93.4 248.6 96 253 101.4 258.2000000000001C107 263.2000000000001 112.8 268.4 119.2 273Q128.72 280.2000000000001 136.76 288.6C142.16 294.2000000000001 144.76 299 144.76 302.8C144.76 305.4000000000001 144.16 308.2000000000001 142.76 310.8000000000001C141.36 313.6 91.4 396.2 89.6 398C85.8 401.6 71.2 400 63.82 396C4.1 363.6 -0.9 320 0.1 302.8C1.1 285 12.3 191.2 104 104.2000000000001C217.88 -4 297 0.2 302.2 0.2C319.58 0.2 372.52 9.8000000000001 395.1 64.0000000000001C398.3 71.6 401.3 85.4000000000001 396.9 89.8000000000001M220 360C208 360 200 368 200 380S208 400 220 400C320 400 400 320 400 220C400 208 392 200 380 200S360 208 360 220C360 298 298 360 220 360M220 280C208 280 200 288 200 300S208 320 220 320C276 320 320 276 320 220C320 208 312 200 300 200S280 208 280 220C280 254 254 280 220 280" : "M318.32 71.8C317.12 73 250.86 111.8 248.66 112.8A16 16 0 0 1 242.26 114.4C239.26 114.4 235.46 112.2 230.86 108C226.26 103.6 212.04 84.2 207.82 80C203.62 75.6 200.22 73.6 197.42 73.6A14 14 0 0 0 192.42 74.8C190.42 75.6 169.2 86.4 125.16 125.2C81.12 163.78 75.32 189.18 75.12 196.18C75.12 198.98 77.32 202.38 81.52 206.58C85.92 210.78 90.52 214.78 95.52 218.58S105.34 226.58 109.54 230.98C113.94 235.58 115.94 239.38 115.94 242.38A16 16 0 0 1 114.34 248.76C113.34 250.76 73.32 316.96 71.92 318.36C68.92 321.36 57.1 319.96 51.1 316.76C3.26 290.76 -0.54 255.96 0.06 242.16C0.86 227.96 9.86 152.98 83.3200000000001 83.2C174.6 -3.4 238.06 0 242.26 0C256.06 0 298.7 7.6 316.72 51C319.32 57.4 321.72 68.4 318.32 71.8M260 180C260 168 252 160 240 160S220 168 220 180C220 202 202 220 180 220C168 220 160 228 160 240S168 260 180 260C224 260 260 224 260 180M320 180C320 168 312 160 300 160S280 168 280 180C280 236 236 280 180 280C168 280 160 288 160 300S168 320 180 320C258 320 320 258 320 180", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
PhoneCall.displayName = `Blueprint6.Icon.PhoneCall`;
export default PhoneCall;
//# sourceMappingURL=phone-call.js.map