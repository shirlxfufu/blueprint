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
export const SimCard = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "sim-card", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M334.2000000000001 294.2L234.2 394.2A20 20 0 0 1 220 400H80C69 400 60 391 60 380V20C60 9 69 0 80 0H320C331 0 340 9 340 20V280C340 285.6 337.8 290.6 334.2000000000001 294.2M180 260H220V200H180zM120 260H160V200H120zM160 40H120V100H160zM220 40H180V100H220zM280 40H240V100H280zM280 120H120V180H280zM280 200H240V260H280z" : "M274.2000000000001 234.2L194.2 314.2A20 20 0 0 1 180 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V220C280 225.6 277.8 230.6 274.2000000000001 234.2M140 200H180V160H140zM80 200H120V160H80zM120 40H80V80H120zM180 40H140V80H180zM240 40H200V80H240zM240 100H80V140H240zM240 160H200V200H240z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SimCard.displayName = `Blueprint6.Icon.SimCard`;
export default SimCard;
//# sourceMappingURL=sim-card.js.map