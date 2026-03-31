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
export const SearchAround = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "search-around", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M340 400C374 400 400 374 400 340S374 280 340 280A60.6 60.6 0 0 0 304.96 290.8400000000001L248.48 234.36A59.7 59.7 0 0 0 246.88 167.28L304.98 109.18A60.6 60.6 0 0 0 340 120C374 120 400 94 400 60S374 0 340 0S280 26 280 60C280 73.26 283.98 85.28 290.82 95.04L232.7200000000001 153.14A59.6 59.6 0 0 0 165.64 151.54L109.16 95.04A60.6 60.6 0 0 0 120 60C120 26 94 0 60 0S0 26 0 60S26 120 60 120C73.26 120 85.26 116 95.02 109.18L150.82 164.98C142.82 175.18 138.02 188.02 138.02 201.98C138.02 214.94 142.14 226.94 149.12 236.74L95.02 290.8400000000001A60.6 60.6 0 0 0 60 280C26 280 0 306 0 340S26 400 60 400S120 374 120 340C120 326.74 116 314.74 109.16 304.98L163.26 250.88A59.6 59.6 0 0 0 198 262C211.98 262 224.8 257.2 235 249.18L290.82 305A60.6 60.6 0 0 0 280 340C280 374 306 400 340 400M60 100C38 100 20 82 20 60S38 20 60 20S100 38 100 60S82 100 60 100M340 100C318 100 300 82 300 60S318 20 340 20S380 38 380 60S362 100 340 100M60 380C38 380 20 362 20 340S38 300 60 300S100 318 100 340S82 380 60 380M340 380C318 380 300 362 300 340S318 300 340 300S380 318 380 340S362 380 340 380" : "M270 100C259.8 100 250.4 97 242.4000000000001 91.6L194.4 139.8C197.8 145.8 200 152.6 200 160S197.8 174.2 194.4 180.2L242.6 228.4C250.4000000000001 223 259.8 220 270 220A50 50 0 0 1 270 320A50 50 0 0 1 220 270C220 259.8 223 250.4 228.4 242.4L180.2 194.4C174.2 197.8 167.4 200 160 200S145.8 197.8 139.8 194.4L91.6 242.4C97 250.4 100 259.8 100 270A50 50 0 0 1 0 270A50 50 0 0 1 50 220C60.2 220 69.6 223 77.6 228.4L125.8 180.2C122.2 174.2 120 167.4 120 160S122.2 145.8 125.6 139.8L77.4 91.6C69.6 97 60.2 100 50 100A50 50 0 0 1 50 0A50 50 0 0 1 100 50C100 60.2 97 69.6 91.6 77.6L139.8 125.8C145.8 122.2 152.6 120 160 120S174.2 122.2 180.2 125.6L228.4 77.4C223 69.6 220 60.2 220 50A50 50 0 0 1 320 50A50 50 0 0 1 270 100M270 300C286.6 300 300 286.6 300 270S286.6 240 270 240S240 253.4 240 270S253.4 300 270 300M50 240C33.4 240 20 253.4 20 270S33.4 300 50 300S80 286.6 80 270S66.6 240 50 240M50 20C33.4 20 20 33.4 20 50S33.4 80 50 80S80 66.6 80 50S66.6 20 50 20M270 20C253.4 20 240 33.4 240 50S253.4 80 270 80S300 66.6 300 50S286.6 20 270 20", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SearchAround.displayName = `Blueprint6.Icon.SearchAround`;
export default SearchAround;
//# sourceMappingURL=search-around.js.map