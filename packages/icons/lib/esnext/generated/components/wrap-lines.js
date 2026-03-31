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
export const WrapLines = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "wrap-lines", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M330 220A70 70 0 1 0 330 80H268.2L274 74.2000000000001C277.8 70.6 280 65.6 280 60A20.06 20.06 0 0 0 245.8 45.8L205.8 85.8C202.2 89.6 200 94.6 200 100C200 105.6 202.2 110.6 205.8 114.2000000000001L245.8 154.2C249.4 157.8 254.4 160 260 160A19.8 19.8 0 0 0 280 140C280 134.4 277.8 129.4 274.2000000000001 125.8L268.2 120H330A30 30 0 0 1 330 180H20A20 20 0 1 0 20 220zM140 120A20 20 0 1 0 140 80H20A20 20 0 1 0 20 120zM380 320C391 320 400 311 400 300S391 280 380 280H20C9 280 0 289 0 300S9 320 20 320z" : "M250 180A70 70 0 1 0 250 40H208.2L214 34.2C217.8 30.6 220 25.6 220 20A20.06 20.06 0 0 0 185.8 5.8L145.8 45.8A20 20 0 0 0 140 60C140 65.6 142.2 70.6 145.8 74.2L185.8 114.2A20.06 20.06 0 0 0 214.2 85.8L208.2 80H250A30 30 0 0 1 250 140H20A20 20 0 0 0 20 180zM80 80C91 80 100 71 100 60S91 40 80 40H20C9 40 0 49 0 60S9 80 20 80zM300 280C311 280 320 271 320 260S311 240 300 240H20C9 240 0 249 0 260S9 280 20 280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
WrapLines.displayName = `Blueprint6.Icon.WrapLines`;
export default WrapLines;
//# sourceMappingURL=wrap-lines.js.map