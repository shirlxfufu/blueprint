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
export const Generate = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "generate", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M160 140A20 20 0 0 1 140 160H98.84A18.84 18.84 0 0 0 82.64 188.44L202.2 390.2A20.4 20.4 0 0 0 220 400A20 20 0 0 0 240 380V260A20 20 0 0 1 260 240H301.16A18.84 18.84 0 0 0 317.36 211.56L197.8 9.8A20.4 20.4 0 0 0 180 0A20 20 0 0 0 160 20z" : "M140 100A20 20 0 0 1 120 120H96A16 16 0 0 0 81.88 143.52L171.76 312.06A15 15 0 0 0 200 305V220A20 20 0 0 1 220 200H244A16 16 0 0 0 258.12 176.48L168.24 7.94A15 15 0 0 0 140 15z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Generate.displayName = `Blueprint6.Icon.Generate`;
export default Generate;
//# sourceMappingURL=generate.js.map