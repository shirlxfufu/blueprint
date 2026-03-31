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
export const EyeOpen = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "eye-open", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M200.2 240.32A40.2 40.2 0 0 1 160.24 200.2C160.24 178.14 178.24 160.08 200.2 160.08A40.2 40.2 0 0 1 240.16 200.2C240.16 222.26 222.16 240.32 200.2 240.32M400 200.8V202.4A16.6 16.6 0 0 1 395.8 211.24C383 227.28 367.84 241.52 352.44 254.56C319.2800000000001 282.64 281.12 306.3 239.16 315.7200000000001A180 180 0 0 1 166.04 316.72C143.84 312.72 122.48 303.9 102.5 293.06C71.12 276.02 42.56 252.74 17.58 226.46C12.98 221.46 8.38 216.66 4.18 211.24C-1.4 204.22 -1.4 195.78 4.18 188.76C16.98 172.72 32.18 158.48 47.56 145.44C80.72 117.36 118.88 93.9 160.84 84.28A180 180 0 0 1 233.96 83.28C256.16 87.48 277.5200000000001 96.3 297.5 107.14C328.88 124.18 357.44 147.46 382.4200000000001 173.74C387.0200000000001 178.54 391.6200000000001 183.54 395.8200000000001 188.76A17.2 17.2 0 0 1 400 197.6zM200.2 120A80.06 80.06 0 0 0 120.28 200.2A80.06 80.06 0 0 0 200.2 280.42A80.06 80.06 0 0 0 280.12 200.2A80.06 80.06 0 0 0 200.2 119.98" : "M160.04 179.94A20.06 20.06 0 0 1 160.04 139.84A20.06 20.06 0 0 1 160.04 179.94M319.8000000000001 160.5V161.9A14 14 0 0 1 316.4000000000001 169.1C306.2200000000001 182.56 294.04 194.38 281.6600000000001 205.22C255.1000000000001 228.68 224.7400000000001 248.32 191.2000000000001 256.14A134 134 0 0 1 132.7000000000001 257.3400000000001C114.9200000000001 253.74 97.94 246.5200000000001 81.7800000000001 237.5C56.8 223.26 33.84 203.8 13.88 181.96C10.28 177.74 6.68 173.74 3.28 169.32A14.8 14.8 0 0 1 3.28 150.68C13.48 137.24 25.66 125.4 38.04 114.58C64.6 91.12 94.96 71.46 128.5 63.64C147.86 59.04 167.44 58.84 187 62.84C204.78 66.44 221.76 73.68 237.92 82.7000000000001C262.88 96.94 285.86 116.38 305.82 138.2400000000001C309.42 142.2400000000001 313.22 146.46 316.62 150.8800000000001C318.42 152.8800000000001 319.6 155.4800000000001 320 158.0800000000001V160.0800000000001C320 160.28 319.8 160.28 319.8 160.48M160.04 99.72A60 60 0 0 0 100.14 159.88A60 60 0 0 0 160.04 220.04A60 60 0 0 0 219.96 159.88A60 60 0 0 0 160.04 99.72", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
EyeOpen.displayName = `Blueprint6.Icon.EyeOpen`;
export default EyeOpen;
//# sourceMappingURL=eye-open.js.map