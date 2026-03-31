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
export const ModalFilled = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "modal-filled", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M400 300V40A20 20 0 0 0 380 20H20A20 20 0 0 0 0 40V300zM340 380H380A20 20 0 0 0 400 360V340H340zM300 340H0V360A20 20 0 0 0 20 380H300z" : "M300 300H20C9 300 0 291 0 280V40C0 29 9 20 20 20H300C311 20 320 29 320 40V280C320 291 311 300 300 300M320 220H0V260H320zM260 260H220V300H260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ModalFilled.displayName = `Blueprint6.Icon.ModalFilled`;
export default ModalFilled;
//# sourceMappingURL=modal-filled.js.map