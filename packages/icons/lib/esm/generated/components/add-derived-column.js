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
export const AddDerivedColumn = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "add-derived-column", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M240 400H20C8 400 0 390 0 380V60C0 50 8 40 20 40H220V0H360C370 0 380 10 380 20V260C380 233.88 363.3 208.24 340 200H240V263.4A60 60 0 0 0 220 275.28V240H40V300H203.4A60 60 0 0 0 240 376.6zM240 180H340V120H240zM340 100V40H240V100zM220 80H40V140H220zM220 220V160H40V220zM300 380A20 20 0 0 0 340 380V340H380A20 20 0 0 0 380 300H340V260A20 20 0 0 0 300 260V300H260A20 20 0 0 0 260 340H300z" : "M260 320A20 20 0 0 0 280 300V280H300A20 20 0 1 0 300 240H280V220A20 20 0 1 0 240 220V240H220A20 20 0 1 0 220 280H240V300A20 20 0 0 0 260 320M200 203.4A60 60 0 0 0 180 215.28V180H40V220H175.28A60 60 0 0 0 160 260C160 275.36 165.78 289.4 175.28 300H18.18C7.28 300 0 290 0 280V40C0 28 7.28 20 18.2 20H180V0H280A20 20 0 0 1 300 20V175.28A60 60 0 0 0 260 160H200zM40 60V100H180V60zM180 120H40V160H180zM260 140V100H200V140zM200 80H260V40H200z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
AddDerivedColumn.displayName = `Blueprint6.Icon.AddDerivedColumn`;
export default AddDerivedColumn;
//# sourceMappingURL=add-derived-column.js.map