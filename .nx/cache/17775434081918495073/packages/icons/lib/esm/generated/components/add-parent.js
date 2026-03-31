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
export const AddParent = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "add-parent", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M360 60V220H320V260H380A20 20 0 0 0 400 240V40A20 20 0 0 0 380 20H20A20 20 0 0 0 0 40V240A20 20 0 0 0 20 260H80V220H40V60zM180 280H140C129 280 120 289 120 300S129 320 140 320H180V360C180 371 189 380 200 380S220 371 220 360V320H260C271 320 280 311 280 300S271 280 260 280H220V240C220 229 211 220 200 220S180 229 180 240z" : "M140 220H100C89 220 80 229 80 240S89 260 100 260H140V300C140 311 149 320 160 320S180 311 180 300V260H220C231 260 240 251 240 240S231 220 220 220H180V180C180 169 171 160 160 160S140 169 140 180zM280 40V160H260V200H304A16 16 0 0 0 320 184V16A16 16 0 0 0 304 0H16A16 16 0 0 0 0 16V184A16 16 0 0 0 16 200H60V160H40V40z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
AddParent.displayName = `Blueprint6.Icon.AddParent`;
export default AddParent;
//# sourceMappingURL=add-parent.js.map