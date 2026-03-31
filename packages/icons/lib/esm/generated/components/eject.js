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
export const Eject = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "eject", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M80 160H320C331 160 340 169 340 180C340 185 338 189.4 335 192.8L335.2000000000001 193L215.2000000000001 333L215 332.8C211.4 337.2 206 340 200 340S188.6 337.2 185 332.8L184.8 333L64.8 193L65 192.8C62 189.4 60 185 60 180C60 169 69 160 80 160M320 140H80C69 140 60 131 60 120V80C60 69 69 60 80 60H320C331 60 340 69 340 80V120C340 131 331 140 320 140" : "M80 140H240A20.06 20.06 0 0 1 254.2 174.2L174.2 254.2C170.6 257.8 165.6 260 160 260S149.4 257.8 145.8 254.2L65.8 174.2A20.06 20.06 0 0 1 80 140M240 120H80C69 120 60 111 60 100V80C60 69 69 60 80 60H240C251 60 260 69 260 80V100C260 111 251 120 240 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Eject.displayName = `Blueprint6.Icon.Eject`;
export default Eject;
//# sourceMappingURL=eject.js.map