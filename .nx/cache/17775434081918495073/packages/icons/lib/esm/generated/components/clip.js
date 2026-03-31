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
export const Clip = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "clip", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M0 380A20 20 0 0 0 20 400H120A20 20 0 0 0 120 360H40V280A20 20 0 0 0 0 280zM20 0A20 20 0 0 0 0 20V120A20 20 0 1 0 40 120V40H120A20 20 0 1 0 120 0zM380 0A20 20 0 0 1 400 20V120A20 20 0 1 1 360 120V40H280A20 20 0 1 1 280 0zM380 400A20 20 0 0 0 400 380V280A20 20 0 1 0 360 280V360H280A20 20 0 1 0 280 400zM200 120A80 80 0 1 1 200 280A80 80 0 0 1 200 120" : "M0 300A20 20 0 0 0 20 320H100A20 20 0 0 0 100 280H40V220A20 20 0 0 0 0 220zM20 0A20 20 0 0 0 0 20V100A20 20 0 1 0 40 100V40H100A20 20 0 1 0 100 0zM300 0A20 20 0 0 1 320 20V100A20 20 0 1 1 280 100V40H220A20 20 0 1 1 220 0zM300 320A20 20 0 0 0 320 300V220A20 20 0 1 0 280 220V280H220A20 20 0 1 0 220 320zM160 100A60 60 0 1 1 160 220A60 60 0 0 1 160 100", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Clip.displayName = `Blueprint6.Icon.Clip`;
export default Clip;
//# sourceMappingURL=clip.js.map