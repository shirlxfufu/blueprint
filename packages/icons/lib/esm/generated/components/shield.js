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
export const Shield = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "shield", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M200 0Q380 114.3 380 314.28Q320 314.28 200 400Q80 314.28 20 314.28Q20 114.3 200 0M200 346.96C251.54 312.28 295.52 289.36 333.3400000000001 278.58C324.54 186.04 280.6200000000001 111.52 200 52.64z" : "M160 0Q300 91.44 300 251.42Q253.32 251.42 160 320Q66.68 251.42 20 251.42Q20 91.42 160 0M160 277.58C200.1 249.82 234.3 231.5 263.7200000000001 222.88C256.88 148.84 222.72 89.22 160 42.12z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Shield.displayName = `Blueprint6.Icon.Shield`;
export default Shield;
//# sourceMappingURL=shield.js.map