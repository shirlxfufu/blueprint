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
export const WidgetButton = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "widget-button", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M20 320H380C391 320 400 311 400 300V100C400 89 391 80 380 80H20C9 80 0 89 0 100V300C0 311 9 320 20 320M40 280V120H360V280zM120 180C109 180 100 189 100 200S109 220 120 220S140 211 140 200S131 180 120 180M200 180C189 180 180 189 180 200S189 220 200 220S220 211 220 200S211 180 200 180M280 180C269 180 260 189 260 200S269 220 280 220S300 211 300 200S291 180 280 180" : "M20 260H300C311 260 320 251 320 240V80C320 69 311 60 300 60H20C9 60 0 69 0 80V240C0 251 9 260 20 260M40 220V100H280V220zM100 140C89 140 80 149 80 160S89 180 100 180S120 171 120 160S111 140 100 140M160 140C149 140 140 149 140 160S149 180 160 180S180 171 180 160S171 140 160 140M220 140C209 140 200 149 200 160S209 180 220 180S240 171 240 160S231 140 220 140", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
WidgetButton.displayName = `Blueprint6.Icon.WidgetButton`;
export default WidgetButton;
//# sourceMappingURL=widget-button.js.map