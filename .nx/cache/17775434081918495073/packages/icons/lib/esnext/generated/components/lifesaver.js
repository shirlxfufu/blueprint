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
export const Lifesaver = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "lifesaver", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M162.86 107.12L140.56 51.4C158.94 44.04 179 40 200 40S241.06 44.04 259.44 51.4L237.14 107.12A100 100 0 0 0 200 100A100 100 0 0 0 162.86 107.12M107.12 162.86A100 100 0 0 0 100 200C100 213.12 102.52 225.66 107.12 237.14L51.4 259.44A160 160 0 0 1 40 200C40 179 44.04 158.94 51.4 140.56zM162.86 292.86A100 100 0 0 0 200 300C213.12 300 225.66 297.48 237.14 292.88L259.44 348.6A160 160 0 0 1 200 360C179 360 158.94 355.96 140.56 348.6zM292.86 237.14C297.4600000000001 225.6600000000001 300 213.1400000000001 300 200C300 186.88 297.48 174.34 292.88 162.8600000000001L348.6 140.5600000000001C355.96 158.9400000000001 360 179.0000000000001 360 200S355.96 241.0600000000001 348.6 259.4400000000001zM200 140A60 60 0 1 1 200 260A60 60 0 0 1 200 140M200 0C89.54 0 0 89.54 0 200S89.54 400 200 400S400 310.46 400 200S310.46 0 200 0" : "M188.1 85.08C179.36 81.8 169.9 80 160 80C150.12 80 140.64 81.8 131.9 85.08L117.86 47.62C130.96 42.7 145.16 40 160 40S189.04 42.7 202.14 47.6zM234.92 131.9L272.38 117.86C277.3 130.96 280 145.16 280 160S277.3 189.04 272.4 202.14L234.92 188.1C238.2 179.36 240 169.9 240 160C240 150.12 238.2 140.64 234.92 131.9M188.1 234.92L202.14 272.38A120 120 0 0 1 160 280C145.16 280 130.96 277.3 117.86 272.4L131.9 234.92C140.64 238.2 150.1 240 160 240C169.88 240 179.36 238.2 188.1 234.92M85.08 188.1L47.6 202.14A120 120 0 0 1 40 160C40 145.16 42.7 130.96 47.6 117.86L85.08 131.9A80 80 0 0 0 80 160C80 169.88 81.8 179.36 85.08 188.1M160 0A160 160 0 1 0 160 320A160 160 0 0 0 160 0M160 120A40 40 0 1 1 160 200A40 40 0 0 1 160 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Lifesaver.displayName = `Blueprint6.Icon.Lifesaver`;
export default Lifesaver;
//# sourceMappingURL=lifesaver.js.map