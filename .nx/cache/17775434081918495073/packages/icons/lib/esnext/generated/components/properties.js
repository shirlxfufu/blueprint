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
export const Properties = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "properties", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M40 100C18 100 0 82 0 60S18 20 40 20S80 38 80 60S62 100 40 100M40 240C18 240 0 222 0 200S18 160 40 160S80 178 80 200S62 240 40 240M140 320H380C391 320 400 329 400 340S391 360 380 360H140C129 360 120 351 120 340S129 320 140 320M40 380C18 380 0 362 0 340S18 300 40 300S80 318 80 340S62 380 40 380M380 220H140C129 220 120 211 120 200S129 180 140 180H380C391 180 400 189 400 200S391 220 380 220M380 80H140C129 80 120 71 120 60S129 40 140 40H380C391 40 400 49 400 60S391 80 380 80" : "M40 200C18 200 0 182 0 160S18 120 40 120S80 138 80 160S62 200 40 200M120 260H300C311 260 320 269 320 280S311 300 300 300H120C109 300 100 291 100 280S109 260 120 260M40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40S62 80 40 80M300 180H120C109 180 100 171 100 160S109 140 120 140H300C311 140 320 149 320 160S311 180 300 180M300 60H120C109 60 100 51 100 40S109 20 120 20H300C311 20 320 29 320 40S311 60 300 60M40 320C18 320 0 302 0 280S18 240 40 240S80 258 80 280S62 320 40 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Properties.displayName = `Blueprint6.Icon.Properties`;
export default Properties;
//# sourceMappingURL=properties.js.map