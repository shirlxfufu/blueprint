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
export const Refresh = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "refresh", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M124.58 327.9600000000001A150 150 0 0 0 348.18 218.72A15 15 0 1 0 318.48 214.6A120.04 120.04 0 0 1 139.6 302A120 120 0 0 1 100 265H133.3A15 15 0 1 0 133.3 235H66.66A15 15 0 0 0 51.66 250V316.66A15 15 0 1 0 81.66 316.66V290.7200000000001A150 150 0 0 0 124.6 327.9600000000001M318.32 83.34V109.3A150 150 0 0 0 275.42 72.04A150.04 150.04 0 0 0 51.82 181.26A15 15 0 0 0 81.54 185.4A120 120 0 0 1 299.98 135.0000000000001H266.6600000000001A15 15 0 0 0 266.6600000000001 165H333.3200000000001A15 15 0 0 0 348.3200000000001 150V83.34A15 15 0 0 0 318.3200000000001 83.34" : "M251.66 66.66V79.22A123 123 0 0 0 38.46 144.6A15 15 0 0 0 68.2 148.74A93 93 0 0 1 234.12 105H213.32A15 15 0 0 0 213.32 135H266.6600000000001A15 15 0 0 0 281.6600000000001 120V66.66A15 15 0 0 0 251.66 66.66M98.16 264.9600000000001A123 123 0 0 0 246.24 245.86A123 123 0 0 0 281.52 175.4A15 15 0 0 0 251.8 171.28A93 93 0 0 1 85.86 215H106.66A15 15 0 0 0 106.66 185H53.32A15 15 0 0 0 38.32 200V253.34A15 15 0 0 0 68.32 253.34V240.78C76.9 250.3 86.92 258.48 98.16 264.98", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Refresh.defaultProps = {
    size: IconSize.STANDARD,
};
Refresh.displayName = `Blueprint6.Icon.Refresh`;
export default Refresh;
//# sourceMappingURL=refresh.js.map