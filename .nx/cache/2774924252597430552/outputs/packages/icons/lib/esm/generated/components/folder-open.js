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
export const FolderOpen = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "folder-open", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M340 218.74A15 15 0 0 0 310 218.74V260H200A15 15 0 0 0 191 263L145 297.5H65V75A15 15 0 0 0 35 75V300C35 307.3 37.88 314.3 43.04 319.46L45.08 321.26C49.98 325.26 56.12 327.5 62.5 327.5H145.82C151.78 327.5 157.56 325.56 162.32 322L205 290H312.5000000000001C318.8800000000001 290 325.0200000000001 287.78 329.9200000000001 283.76L331.9600000000001 281.96L333.7600000000001 279.92C337.7600000000001 275.02 340.0000000000001 268.88 340.0000000000001 262.5zM362.5 233.74L365.74 233.54Q369 233.16 372.06 232.04L375.04 230.72L377.84 229.08A27.4 27.4 0 0 0 389 213.58L389.68 210.38L389.98 207.14Q390.14 202.24 388.58 197.5399999999999L388.52 197.34L343.98 70.0399999999999A15 15 0 0 0 329.82 59.9999999999999H50A15 15 0 0 0 35.84 79.9399999999999L82.98 215.1399999999999A27.5 27.5 0 0 0 109.02 233.7399999999999zM71.1 90H319.2000000000001L359 203.74H110.8z" : "M275 175A15 15 0 0 0 245 175V205H160A15 15 0 0 0 151 208L115 235H55V60A15 15 0 0 0 25 60V240A25 25 0 0 0 50 265H116.66C122.06 265 127.34 263.24 131.66 260L165 235H250C255.8 235 261.4 232.98 265.84 229.32L267.68 227.66L269.3400000000001 225.84C272.98 221.38 275 215.8 275 210zM290 190L292.96 189.8A25 25 0 0 0 314.1 171.66L314.7 168.76L314.98 165.82A26 26 0 0 0 313.7 157.08L313.66 156.88L278.02 55.0400000000001A15 15 0 0 0 263.86 44.98H40A15 15 0 0 0 25.84 64.94L63.56 173.1000000000001A25 25 0 0 0 72.6 185.2600000000001L74.24 186.36A25 25 0 0 0 87.2 190zM61.12 75H253.2200000000001L282.96 160H90.76z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
FolderOpen.defaultProps = {
    size: IconSize.STANDARD,
};
FolderOpen.displayName = `Blueprint6.Icon.FolderOpen`;
export default FolderOpen;
//# sourceMappingURL=folder-open.js.map