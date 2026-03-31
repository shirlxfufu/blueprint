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
export const SmallInfoSign = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "small-info-sign", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M340 200A140.02 140.02 0 0 0 101 101A140 140 0 1 0 340 200M220 300H180V260H220zM220 240H160V220H180V120H160V100H240V120H220z" : "M280 160A120 120 0 1 0 40 160A120 120 0 0 0 280 160M180 240H140V200H180zM180 180H120V160H140V100H120V80H200V100H180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SmallInfoSign.displayName = `Blueprint6.Icon.SmallInfoSign`;
export default SmallInfoSign;
//# sourceMappingURL=small-info-sign.js.map