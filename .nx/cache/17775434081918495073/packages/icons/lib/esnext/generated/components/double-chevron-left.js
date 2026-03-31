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
export const DoubleChevronLeft = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "double-chevron-left", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M108.2 200L214 305.8C217.8 309.4 220 314.4 220 320A20.06 20.06 0 0 1 185.8 334.2L65.8 214.2C62.2 210.6 60 205.6 60 200S62.2 189.4 65.8 185.8L185.8 65.8A20.06 20.06 0 0 1 214.2 94.2zM228.2 200L334 305.8C337.8 309.4 340 314.4 340 320A20.06 20.06 0 0 1 305.8 334.2L185.8 214.2C182.2 210.6 180 205.6 180 200S182.2 189.4 185.8 185.8L305.8 65.8A20.06 20.06 0 0 1 334.2000000000001 94.2z" : "M88.2 160L154 225.8C157.8 229.4 160 234.4 160 240A20.06 20.06 0 0 1 125.8 254.2L45.8 174.2C42.2 170.6 40 165.6 40 160S42.2 149.4 45.8 145.8L125.8 65.8A20.06 20.06 0 0 1 154.2 94.2zM188.2 160L254 225.8C257.8 229.4 260 234.4 260 240A20.06 20.06 0 0 1 225.8 254.2L145.8 174.2C142.2 170.6 140 165.6 140 160S142.2 149.4 145.8 145.8L225.8 65.8A20.06 20.06 0 0 1 254.2 94.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
DoubleChevronLeft.displayName = `Blueprint6.Icon.DoubleChevronLeft`;
export default DoubleChevronLeft;
//# sourceMappingURL=double-chevron-left.js.map