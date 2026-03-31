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
export const DeleteClip = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "delete-clip", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M394.14 394.14A20 20 0 0 1 365.86 394.14L310 338.28L254.14 394.14A20 20 0 1 1 225.86 365.86L281.7200000000001 310L225.86 254.14A20 20 0 0 1 254.14 225.86L310 281.7200000000001L365.86 225.86A20 20 0 1 1 394.14 254.14L338.2800000000001 310L394.14 365.86A20 20 0 0 1 394.14 394.14M0 300A20 20 0 0 0 20 320H100A20 20 0 0 0 100 280H40V220A20 20 0 0 0 0 220zM20 0A20 20 0 0 0 0 20V100A20 20 0 1 0 40 100V40H100A20 20 0 1 0 100 0zM220 0H300A20 20 0 0 1 320 20V100A20 20 0 1 1 280 100V40H220A20 20 0 1 1 220 0M220 160A60 60 0 1 0 100 160A60 60 0 0 0 220 160" : "M314.14 314.14A20 20 0 0 0 314.14 285.86L278.28 250L314.14 214.14A20 20 0 0 0 285.86 185.86L250 221.72L214.14 185.86A20 20 0 0 0 185.86 214.14L221.72 250L185.86 285.86A20 20 0 1 0 214.14 314.14L250 278.28L285.86 314.14A20 20 0 0 0 314.14 314.14M0 240A20 20 0 0 0 20 260H90A20 20 0 0 0 90 220H40V180A20 20 0 0 0 0 180zM20 0A20 20 0 0 0 0 20V80A20 20 0 1 0 40 80V40H90A20 20 0 1 0 90 0zM240 0A20 20 0 0 1 260 20V80A20 20 0 1 1 220 80V40H180A20 20 0 1 1 180 0zM180 130A50 50 0 1 0 80 130A50 50 0 0 0 180 130", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
DeleteClip.displayName = `Blueprint6.Icon.DeleteClip`;
export default DeleteClip;
//# sourceMappingURL=delete-clip.js.map