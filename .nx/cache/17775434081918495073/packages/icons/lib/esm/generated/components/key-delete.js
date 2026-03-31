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
export const KeyDelete = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "key-delete", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M394.2000000000001 214.2L274.2000000000001 334.2000000000001A20 20 0 0 1 260 340H20C9 340 0 331 0 320V80C0 69 9 60 20 60H260C265.6 60 270.6 62.2 274.2000000000001 65.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200S397.8 210.6 394.2000000000001 214.2M214.2 154.2A20.06 20.06 0 0 0 185.8 125.8L140 171.8L94.2 126C90.6 122.2000000000001 85.6 120 80 120A20.06 20.06 0 0 0 65.8 154.2L111.8 200L65.8 245.8A20.06 20.06 0 0 0 94.2 274.2L140 228.2L185.8 274C189.4 277.8 194.4 280 200 280A20.06 20.06 0 0 0 214.2 245.8L168.2 200z" : "M314.2000000000001 174.2L214.2 274.2A20 20 0 0 1 200 280H20C9 280 0 271 0 260V60C0 49 9 40 20 40H200C205.6 40 210.6 42.2 214.2 45.8L314.2000000000001 145.8C317.8 149.4 320 154.4 320 160S317.8 170.6 314.2000000000001 174.2M174.2 134.2A20.06 20.06 0 0 0 145.8 105.8L120 131.8L94.2 106C90.6 102.2 85.6 100 80 100A20.06 20.06 0 0 0 65.8 134.2L91.8 160L65.8 185.8A20.06 20.06 0 0 0 94.2 214.2L120 188.2L145.8 214C149.4 217.8 154.4 220 160 220A20.06 20.06 0 0 0 174.2 185.8L148.2 160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
KeyDelete.displayName = `Blueprint6.Icon.KeyDelete`;
export default KeyDelete;
//# sourceMappingURL=key-delete.js.map