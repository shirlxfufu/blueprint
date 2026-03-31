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
export const Move = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "move", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M394.2000000000001 214.2L334.2000000000001 274.2000000000001A20.06 20.06 0 0 1 305.8 245.8L331.8 220H220V331.8L245.8 306C249.4 302.2 254.4 300 260 300A20.06 20.06 0 0 1 274.2000000000001 334.2L214.2 394.2C210.6 397.8 205.6 400 200 400S189.4 397.8 185.8 394.2L125.8 334.2A20.06 20.06 0 0 1 154.2 305.8L180 331.8V220H68.2L94 245.8C97.8 249.4 100 254.4 100 260A20.06 20.06 0 0 1 65.8 274.2L5.8 214.2C2.2 210.6 0 205.6 0 200S2.2 189.4 5.8 185.8L65.8 125.8A20.06 20.06 0 0 1 94.2 154.2L68.2 180H180V68.2L154.2 94A19.4 19.4 0 0 1 140 100A20.06 20.06 0 0 1 125.8 65.8L185.8 5.8C189.4 2.2 194.4 0 200 0S210.6 2.2 214.2 5.8L274.2000000000001 65.8A20.06 20.06 0 0 1 245.8 94.2L220 68.2V180H331.8L306 154.2C302.2000000000001 150.6 300 145.6 300 140A20.06 20.06 0 0 1 334.2000000000001 125.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200S397.8 210.6 394.2000000000001 214.2" : "M314.2000000000001 174.2L274.2000000000001 214.2A20.06 20.06 0 0 1 245.8 185.8L251.8000000000001 180H180V251.8L185.8 246C189.4 242.2 194.4 240 200 240A20.06 20.06 0 0 1 214.2 274.2L174.2 314.2C170.6 317.8 165.6 320 160 320S149.4 317.8 145.8 314.2L105.8 274.2A20.06 20.06 0 0 1 134.2 245.8L140 251.8V180H68.2L74 185.8C77.8 189.4 80 194.4 80 200A20.06 20.06 0 0 1 45.8 214.2L5.8 174.2C2.2 170.6 0 165.6 0 160S2.2 149.4 5.8 145.8L45.8 105.8A20.06 20.06 0 0 1 74.2 134.2L68.2 140H140V68.2L134.2 74A19.4 19.4 0 0 1 120 80A20.06 20.06 0 0 1 105.8 45.8L145.8 5.8C149.4 2.2 154.4 0 160 0S170.6 2.2 174.2 5.8L214.2 45.8A20.06 20.06 0 0 1 185.8 74.2L180 68.2V140H251.8000000000001L246.0000000000001 134.2C242.2000000000001 130.6 240.0000000000001 125.6 240.0000000000001 120A20.06 20.06 0 0 1 274.2000000000001 105.8L314.2000000000001 145.8C317.8 149.4 320 154.4 320 160S317.8 170.6 314.2000000000001 174.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Move.displayName = `Blueprint6.Icon.Move`;
export default Move;
//# sourceMappingURL=move.js.map