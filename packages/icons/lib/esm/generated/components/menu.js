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
export const Menu = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "menu", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M20 280H380C391 280 400 289 400 300S391 320 380 320H20C9 320 0 311 0 300S9 280 20 280M380 220H20C9 220 0 211 0 200S9 180 20 180H380C391 180 400 189 400 200S391 220 380 220M380 120H20C9 120 0 111 0 100S9 80 20 80H380C391 80 400 89 400 100S391 120 380 120" : "M20 240H300C311 240 320 249 320 260S311 280 300 280H20C9 280 0 271 0 260S9 240 20 240M300 80H20C9 80 0 71 0 60S9 40 20 40H300C311 40 320 49 320 60S311 80 300 80M300 180H20C9 180 0 171 0 160S9 140 20 140H300C311 140 320 149 320 160S311 180 300 180", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Menu.displayName = `Blueprint6.Icon.Menu`;
export default Menu;
//# sourceMappingURL=menu.js.map