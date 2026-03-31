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
export const KeyBackspace = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "key-backspace", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M380 340H140C134.4 340 129.4 337.8 125.8 334.2L5.8 214.2C2.2 210.6 0 205.6 0 200S2.2 189.4 5.8 185.8L125.8 65.8C129.4 62.2 134.4 60 140 60H380C391 60 400 69 400 80V320C400 331 391 340 380 340M334.2000000000001 154.2A20.06 20.06 0 0 0 305.8 125.8L260 171.8L214.2 126C210.6 122.2000000000001 205.6 120 200 120A20.06 20.06 0 0 0 185.8 154.2L231.8 200L185.8 245.8A20.06 20.06 0 0 0 214.2 274.2L260 228.2L305.8 274C309.4 277.8 314.4 280 320 280A20.06 20.06 0 0 0 334.2000000000001 245.8L288.2 200z" : "M300 280H120C114.4 280 109.4 277.8 105.8 274.2L5.8 174.2C2.2 170.6 0 165.6 0 160S2.2 149.4 5.8 145.8L105.8 45.8C109.4 42.2 114.4 40 120 40H300C311 40 320 49 320 60V260C320 271 311 280 300 280M254.2 134.2A20.06 20.06 0 0 0 225.8 105.8L200 131.8L174.2 106C170.6 102.2 165.6 100 160 100A20.06 20.06 0 0 0 145.8 134.2L171.8 160L145.8 185.8A20.06 20.06 0 0 0 174.2 214.2L200 188.2L225.8 214C229.4 217.8 234.4 220 240 220A20.06 20.06 0 0 0 254.2 185.8L228.2 160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
KeyBackspace.displayName = `Blueprint6.Icon.KeyBackspace`;
export default KeyBackspace;
//# sourceMappingURL=key-backspace.js.map