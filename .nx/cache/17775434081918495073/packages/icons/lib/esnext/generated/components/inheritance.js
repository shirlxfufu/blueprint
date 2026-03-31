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
export const Inheritance = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "inheritance", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M120 200C120 155.8 155.8 120 200 120H331.8L286 165.8A19.4 19.4 0 0 0 280 180A20.06 20.06 0 0 0 314.2000000000001 194.2L394.2000000000001 114.2000000000001C397.8 110.6 400 105.6 400 100S397.8 89.4 394.2000000000001 85.8L314.2000000000001 5.8A20.06 20.06 0 0 0 285.8 34.2L331.8 80H200C133.8 80 80 133.8 80 200H20A20 20 0 0 0 0 220V380A20 20 0 0 0 20 400H180A20 20 0 0 0 200 380V220A20 20 0 0 0 180 200zM40 360V240H160V360z" : "M100 160C100 126.8 126.8 100 160 100H251.8L226 125.8A19.4 19.4 0 0 0 220 140A20.06 20.06 0 0 0 254.2 154.2L314.2000000000001 94.2C317.8 90.6 320 85.6 320 80S317.8 69.4 314.2000000000001 65.8L254.2 5.8A20.06 20.06 0 0 0 225.8 34.2L251.8000000000001 60H160C104.8 60 60 104.8 60 160H20A20 20 0 0 0 0 180V300A20 20 0 0 0 20 320H140A20 20 0 0 0 160 300V180A20 20 0 0 0 140 160zM40 280V200H120V280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Inheritance.displayName = `Blueprint6.Icon.Inheritance`;
export default Inheritance;
//# sourceMappingURL=inheritance.js.map