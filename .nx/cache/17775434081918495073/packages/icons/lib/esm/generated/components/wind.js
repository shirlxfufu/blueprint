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
export const Wind = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "wind", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M240 280A60 60 0 1 0 300 220H80A20 20 0 0 1 80 180H300A100 100 0 1 1 200 280A20 20 0 1 1 240 280M20 160A20 20 0 1 1 20 120H220A40 40 0 1 0 220 40C201.32 40 183.94 52.28 178.86 66.66A20 20 0 1 1 141.14 53.34C152.54 21.12 186.42 0 220 0A80 80 0 0 1 220 160z" : "M200 240A40 40 0 1 0 240 200H80A20 20 0 0 1 80 160H240A80 80 0 1 1 160 240A20 20 0 0 1 200 240M20 140A20 20 0 1 1 20 100H170A30 30 0 0 0 170 40C155.02 40 142.28 50.76 139.6 63.98A20 20 0 1 1 100.4 56.02C107 23.6 136.6 0 170 0A70 70 0 1 1 170 140z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Wind.displayName = `Blueprint6.Icon.Wind`;
export default Wind;
//# sourceMappingURL=wind.js.map