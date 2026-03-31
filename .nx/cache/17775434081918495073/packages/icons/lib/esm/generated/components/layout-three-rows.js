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
export const LayoutThreeRows = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "layout-three-rows", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M0 380A20 20 0 0 0 20 400H380A20 20 0 0 0 400 380V320A20 20 0 0 0 380 300H20A20 20 0 0 0 0 320zM0 240A20 20 0 0 0 20 260H380A20 20 0 0 0 400 240V160A20 20 0 0 0 380 140H20A20 20 0 0 0 0 160zM0 80A20 20 0 0 0 20 100H380A20 20 0 0 0 400 80V20A20 20 0 0 0 380 0H20A20 20 0 0 0 0 20z" : "M300 80A20 20 0 0 0 320 60V20A20 20 0 0 0 300 0H20A20 20 0 0 0 0 20V60A20 20 0 0 0 20 80zM300 200A20 20 0 0 0 320 180V140A20 20 0 0 0 300 120H20A20 20 0 0 0 0 140V180A20 20 0 0 0 20 200zM300 320A20 20 0 0 0 320 300V260A20 20 0 0 0 300 240H20A20 20 0 0 0 0 260V300A20 20 0 0 0 20 320z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
LayoutThreeRows.displayName = `Blueprint6.Icon.LayoutThreeRows`;
export default LayoutThreeRows;
//# sourceMappingURL=layout-three-rows.js.map