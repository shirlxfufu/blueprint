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
export const Ammunition = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "ammunition", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M120 280V283.44C120 319.64 105.6 354.38 80 380A136.6 136.6 0 0 1 40 283.44V280zM120 40V20H40V40zM120 60V260H40V60zM160 20V40H240V20zM240 283.44V280H160V283.44C160 319.64 174.4 354.38 200 380C225.6 354.4 240 319.6600000000001 240 283.44M240 260V60H160V260zM280 40V20H360V40zM360 280V283.44C360 319.64 345.6 354.38 320 380A136.6 136.6 0 0 1 280 283.44V280zM360 60V260H280V60z" : "M42.52 298A100 100 0 0 0 80 220V60H0V220C0 250.34 13.8 279.04 37.48 298L40 300zM162.52 298A100 100 0 0 0 200 220V60H120V220C120 250.34 133.8 279.04 157.48 298L160 300zM320 220C320 250.34 306.2 279.04 282.52 298L280 300L277.48 298A100 100 0 0 1 240 220V60H320zM80 20V40H0V20zM200 40V20H120V40zM320 20V40H240V20z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Ammunition.displayName = `Blueprint6.Icon.Ammunition`;
export default Ammunition;
//# sourceMappingURL=ammunition.js.map