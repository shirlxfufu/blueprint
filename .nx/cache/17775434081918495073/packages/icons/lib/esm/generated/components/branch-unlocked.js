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
export const BranchUnlocked = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "branch-unlocked", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M300 360C266.8 360 240 333.2 240 300C240 274 256.8 252 280 243.6V220C280 198 262 180 240 180H160C145.4 180 131.8 175.8 120 169V283.6C143.2 292 160 314 160 340C160 373.2 133.2 400 100 400S40 373.2 40 340C40 314 56.8 292 80 283.6V116.2C56.8 108 40 86 40 60C40 26.8 66.8 0 100 0S160 26.8 160 60C160 85 144.6 106 123 115C129 129.6 143.2 140 160 140H240C284.2000000000001 140 320 175.8 320 220V243.6C343.2 252 360 274 360 300C360 333.2 333.2 360 300 360M100 360C111 360 120 351 120 340S111 320 100 320S80 329 80 340S89 360 100 360M100 40C89 40 80 49 80 60S89 80 100 80S120 71 120 60S111 40 100 40M300 280C289 280 280 289 280 300S289 320 300 320S320 311 320 300S311 280 300 280M350 80A10 10 0 0 0 360 70V10A10 10 0 0 0 350 0H250A10 10 0 0 0 240 10V70A10 10 0 0 0 250 80H320V100C320 112.72 324.88 123 332.74 129.98A41 41 0 0 0 360 140C369.62 140 379.6 136.8 387.26 129.98C395.12 122.98 400 112.72 400 100A10 10 0 0 0 380 100C380 107.28 377.36 112 374 115.02A21.2 21.2 0 0 1 360 120C354.64 120 349.6 118.2 346 115.02C342.6400000000001 112.02 340 107.28 340 100V80z" : "M220 300C186.8 300 160 273.2 160 240C160 215 175.2 193.6 197 184.6A40.4 40.4 0 0 0 160 160H120C105.4 160 91.8 156 80 149V203.6C103.2 212 120 234 120 260C120 293.2 93.2 320 60 320S0 293.2 0 260C0 234 16.8 212 40 203.6V116.2C16.8 108.2 0 86 0 59.9999999999999C0 26.8 26.8 0 60 0S120 26.8 120 60C120 80.8 109.4 99 93.6 109.8C100.6 116 109.8 120 120 120H160C198.4 120 230.4 147 238.2 183A59.92 59.92 0 0 1 220 300M60 280C71 280 80 271 80 260S71 240 60 240S40 249 40 260S49 280 60 280M60 40C49 40 40 49 40 60S49 80 60 80S80 71 80 60S71 40 60 40M220 220C209 220 200 229 200 240S209 260 220 260S240 251 240 240S231 220 220 220M270 60A10 10 0 0 0 280 50V10A10 10 0 0 0 270 0H170A10 10 0 0 0 160 10V50A10 10 0 0 0 170 60H240V80C240 92.72 244.86 103 252.74 109.98A41 41 0 0 0 280 120C289.62 120 299.6 116.8 307.26 109.98C315.14 102.98 320 92.72 320 80A10 10 0 0 0 300 80C300 87.28 297.36 92 294 95.02A21.2 21.2 0 0 1 280 100C274.64 100 269.6 98.2 266 95.02C262.6400000000001 92.02 260 87.28 260 80V60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
BranchUnlocked.displayName = `Blueprint6.Icon.BranchUnlocked`;
export default BranchUnlocked;
//# sourceMappingURL=branch-unlocked.js.map