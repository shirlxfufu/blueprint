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
export const Trophy = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "trophy", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M100 380A20 20 0 0 0 120 400H280A20 20 0 0 0 300 380V340H380A20 20 0 0 0 400 320V280A100 100 0 0 0 300 180H291.68A100.2 100.2 0 0 0 220 122V40H280A20 20 0 0 0 280 0H120A20 20 0 0 0 120 40H180V122A100.2 100.2 0 0 0 108.32 180H100A100 100 0 0 0 0 280V320A20 20 0 0 0 20 340H100zM100 300H40V280A60 60 0 0 1 100 220zM300 220A60 60 0 0 1 360 280V300H300z" : "M80 301.6600000000001C80 311.8 88.2 320 98.34 320H221.66C231.8 320 240 311.8 240 301.6600000000001V280H300A20 20 0 0 0 320 260V240A100 100 0 0 0 229.56 140.46A80 80 0 0 0 180 102.52V40H220A20 20 0 1 0 220 0H100A20 20 0 1 0 100 40H140V102.52A80 80 0 0 0 90.44 140.46A100 100 0 0 0 0 240V260A20 20 0 0 0 20 280H80zM80 240H40C40 213.88 56.7 191.66 80 183.4zM240 183.4A60 60 0 0 1 280 240H240z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Trophy.displayName = `Blueprint6.Icon.Trophy`;
export default Trophy;
//# sourceMappingURL=trophy.js.map