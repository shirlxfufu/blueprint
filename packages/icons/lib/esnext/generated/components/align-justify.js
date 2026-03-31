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
export const AlignJustify = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "align-justify", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M20 340H380C391 340 400 349 400 360S391 380 380 380H20C9 380 0 371 0 360S9 340 20 340M380 60H20C9 60 0 51 0 40S9 20 20 20H380C391 20 400 29 400 40S391 60 380 60M380 300H20C9 300 0 291 0 280S9 260 20 260H380C391 260 400 269 400 280S391 300 380 300M380 220H20C9 220 0 211 0 200S9 180 20 180H380C391 180 400 189 400 200S391 220 380 220M380 140H20C9 140 0 131 0 120S9 100 20 100H380C391 100 400 109 400 120S391 140 380 140" : "M300 60.4H20C9 60.4 0 51.4 0 40.4S9 20.4 20 20.4H300C311 20.4 320 29.4 320 40.4S311 60.4 300 60.4M20 260.4H300C311 260.4 320 269.4 320 280.4S311 300.4 300 300.4H20C9 300.4 0 291.4 0 280.4C0 269.2 9 260.4 20 260.4M300 180.4H20C9 180.4 0 171.4 0 160.4S9 140.4 20 140.4H300C311 140.4 320 149.4 320 160.4S311 180.4 300 180.4M300 240.4H20C9 240.4 0 231.4 0 220.4S9 200.4 20 200.4H300C311 200.4 320 209.4 320 220.4S311 240.4 300 240.4M300 120.4H20C9 120.4 0 111.4 0 100.4S9 80.4 20 80.4H300C311 80.4 320 89.4 320 100.4S311 120.4 300 120.4", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
AlignJustify.displayName = `Blueprint6.Icon.AlignJustify`;
export default AlignJustify;
//# sourceMappingURL=align-justify.js.map