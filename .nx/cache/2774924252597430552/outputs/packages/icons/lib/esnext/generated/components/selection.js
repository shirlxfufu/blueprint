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
export const Selection = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "selection", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200M262.5 200A62.5 62.5 0 1 0 137.5 200A62.5 62.5 0 0 0 262.5 200M232.5 200A32.5 32.5 0 1 1 200 167.5V137.5A62.5 62.5 0 1 0 200 262.5A62.5 62.5 0 0 0 200 137.5V167.5C217.96 167.5 232.5 182.04 232.5 200" : "M265 160A105 105 0 1 1 55 160A105 105 0 0 1 265 160M295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160M210 160A50 50 0 1 0 110 160A50 50 0 0 0 210 160M180 160A20 20 0 1 1 160 140V110A50 50 0 1 0 160 210A50 50 0 0 0 160 110V140A20 20 0 0 1 180 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Selection.defaultProps = {
    size: IconSize.STANDARD,
};
Selection.displayName = `Blueprint6.Icon.Selection`;
export default Selection;
//# sourceMappingURL=selection.js.map