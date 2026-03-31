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
export const SmallSquare = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "small-square", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M100 300V100H300V300zM80 340H320A20 20 0 0 0 340 320V80A20 20 0 0 0 320 60H80A20 20 0 0 0 60 80V320A20 20 0 0 0 80 340" : "M100 220V100H220V220zM80 260H240A20 20 0 0 0 260 240V80A20 20 0 0 0 240 60H80A20 20 0 0 0 60 80V240A20 20 0 0 0 80 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SmallSquare.displayName = `Blueprint6.Icon.SmallSquare`;
export default SmallSquare;
//# sourceMappingURL=small-square.js.map