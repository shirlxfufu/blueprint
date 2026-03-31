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
export const ArrowsArc = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "arrows-arc", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M84.92 396.34A12.5 12.5 0 0 0 102.58 396.34L182.14 316.78A12.5 12.5 0 0 0 164.46 299.12L106.16 357.4V357.32C105.96 312.44 105.8 278.62 110.76 249.46C116.56 215.3 129.42 188.06 158.82 158.86C188.38 129.4400000000001 214.22 116.66 247.4600000000001 110.86C276.2 105.82 310.1400000000001 105.96 357.2200000000001 106.16H357.4000000000001L299.12 164.44A12.5 12.5 0 1 0 316.7800000000001 182.12L396.3400000000001 102.5600000000001A12.5 12.5 0 0 0 396.3400000000001 84.9L316.7800000000001 5.34A12.5 12.5 0 1 0 299.1200000000001 23.02L357.24 81.14C310.5800000000001 80.94 274.1 80.82 243.1600000000001 86.24C204.54 93 174.12 108.36 141.18 141.12C108.08 174.08 92.8 206 86.12 245.28C80.8 276.54 80.92 312.76 81.16 357.2200000000001L23.04 299.12A12.5 12.5 0 1 0 5.36 316.78z" : "M67.92 317.08A10 10 0 0 0 82.08 317.08L145.72 253.44A10 10 0 1 0 131.56 239.28L84.92 285.92V285.88C84.76 249.98 84.64 222.9 88.6 199.58C93.26 172.24 103.54 150.48 127.06 127.08C150.7 103.56 171.38 93.36 197.98 88.7C220.96 84.68 248.12 84.78 285.7800000000001 84.94H285.92L239.3000000000001 131.56A10 10 0 1 0 253.4400000000001 145.72L317.0800000000001 82.08A10 10 0 0 0 317.0800000000001 67.92L253.4400000000001 4.2799999999999A10 10 0 1 0 239.2800000000001 18.4399999999999L285.7800000000001 64.9199999999999C248.4600000000001 64.76 219.28 64.6599999999999 194.5200000000001 68.9999999999999C163.6200000000001 74.4 139.3000000000001 86.6999999999999 112.9400000000001 112.92C86.46 139.24 74.24 164.8 68.9 196.2C64.64 221.2 64.74 250.2 64.92 285.76L18.44 239.28A10 10 0 1 0 4.28 253.44z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ArrowsArc.displayName = `Blueprint6.Icon.ArrowsArc`;
export default ArrowsArc;
//# sourceMappingURL=arrows-arc.js.map