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
export const LayerOutline = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "layer-outline", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M190.28 317.48L10.28 217.48A20 20 0 0 1 10.28 182.52L190.28 82.52A20 20 0 0 1 209.72 82.52L389.7199999999999 182.52A20 20 0 0 1 389.7199999999999 217.48L209.72 317.48A20 20 0 0 1 190.28 317.48M200 277.12L338.8 200.02L200 122.9L61.18 200.02z" : "M150.08 257.36L10.08 177.36A20 20 0 0 1 10.08 142.64L150.08 62.64A20 20 0 0 1 169.92 62.64L309.92 142.64A20 20 0 0 1 309.92 177.36L169.92 257.36A20 20 0 0 1 150.08 257.36M160 216.96L259.6600000000001 160L160 103.06L60.32 160z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
LayerOutline.displayName = `Blueprint6.Icon.LayerOutline`;
export default LayerOutline;
//# sourceMappingURL=layer-outline.js.map