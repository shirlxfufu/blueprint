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
export const Crop = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "crop", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M280 20A20 20 0 1 1 320 20V80H380A20 20 0 1 1 380 120H120V380A20 20 0 1 1 80 380V320H20A20 20 0 1 1 20 280H80V100A20 20 0 0 1 100 80H280zM300 320H160V280H280V160H320V300A20 20 0 0 1 300 320" : "M220 20A20 20 0 1 1 260 20V60H300A20 20 0 1 1 300 100H100V300A20 20 0 0 1 60 300V260H20A20 20 0 1 1 20 220H60V80A20 20 0 0 1 80 60H220zM240 260H120V220H220V120H260V240A20 20 0 0 1 240 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Crop.displayName = `Blueprint6.Icon.Crop`;
export default Crop;
//# sourceMappingURL=crop.js.map