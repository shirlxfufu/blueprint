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
export const Markdown = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "markdown", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M360 360A40 40 0 0 0 400 320V80A40 40 0 0 0 360 40H40A40 40 0 0 0 0 80V320A40 40 0 0 0 40 360zM200 263.64C200 284.5 173.94 293.32 161.14 277.78L159.94 276.18L130 233.2L100.06 276.2L98.86 277.78C86.06 293.32 60 284.5 60 263.64V140A20 20 0 1 1 100 140V206.26L105.38 198.54L107.78 195.54A30 30 0 0 1 154.62 198.54L160 206.26V140A20 20 0 1 1 200 140zM280 280A20 20 0 0 1 260 260V195.28L245.38 212.82L243.98 214.32A20.02 20.02 0 0 1 213.38 188.82L214.62 187.18L261.56 130.88L263.24 129.1A20 20 0 0 1 296.66 128.96Q297.56 129.86 298.44 130.88L345.38 187.18L346.6 188.82A20.02 20.02 0 0 1 316 214.32L314.62 212.82L300 195.28V260A20 20 0 0 1 280 280" : "M280 280A40 40 0 0 0 320 240V80A40 40 0 0 0 280 40H40A40 40 0 0 0 0 80V240A40 40 0 0 0 40 280zM160 203.04C160 216.9 142.5 221.9 134.86 211.58L133.46 209.32L110 162.36L86.52 209.32L85.12 211.58C77.54 221.9 60 216.9 60 203.04V110A10 10 0 0 1 80 110V177.64L92.1 153.42A20 20 0 0 1 127.9 153.42L140 177.6V110A10 10 0 0 1 160 110zM230 220A10 10 0 0 1 220 210V134.14L207.08 147.08L205.5 148.36A10 10 0 0 1 191.64 134.5L192.92 132.92L221.52 104.32A12 12 0 0 1 238.48 104.32L267.08 132.92A10 10 0 1 1 252.94 147.08L240 134.14V210A10 10 0 0 1 230 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Markdown.displayName = `Blueprint6.Icon.Markdown`;
export default Markdown;
//# sourceMappingURL=markdown.js.map