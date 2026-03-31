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
export const Property = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "property", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M60 300C82 300 100 318 100 340S82 380 60 380S20 362 20 340S38 300 60 300M160 320H380C391 320 400 329 400 340S391 360 380 360H160C149 360 140 351 140 340S149 320 160 320M60 100C38 100 20 82 20 60S38 20 60 20S100 38 100 60S82 100 60 100M380 80H160C149 80 140 71 140 60S149 40 160 40H380C391 40 400 49 400 60S391 80 380 80M360 240H180C158 240 140 222 140 200S158 160 180 160H360C382 160 400 178 400 200S382 240 360 240M60 260C26.8 260 0 233.2 0 200S26.8 140 60 140S120 166.8 120 200S93.2 260 60 260" : "M60 80C38 80 20 62 20 40S38 0 60 0S100 18 100 40S82 80 60 80M50 210A50 50 0 0 1 50 110A50 50 0 0 1 50 210M140 260H300C311 260 320 269 320 280S311 300 300 300H140C129 300 120 291 120 280S129 260 140 260M300 60H140C129 60 120 51 120 40S129 20 140 20H300C311 20 320 29 320 40S311 60 300 60M60 320C38 320 20 302 20 280S38 240 60 240S100 258 100 280S82 320 60 320M300 200H140C129 200 120 191 120 180V140C120 129 129 120 140 120H300C311 120 320 129 320 140V180C320 191 311 200 300 200", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Property.displayName = `Blueprint6.Icon.Property`;
export default Property;
//# sourceMappingURL=property.js.map