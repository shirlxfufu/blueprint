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
export const LayoutGrid = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "layout-grid", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M93.76 281.24A25 25 0 1 1 93.76 331.24A25 25 0 0 1 93.76 281.24M200 281.24A25 25 0 1 1 200 331.24A25 25 0 0 1 200 281.24M306.26 281.24A25 25 0 1 1 306.26 331.24A25 25 0 0 1 306.26 281.24M93.76 175A25 25 0 1 1 93.76 225A25 25 0 0 1 93.76 175M200 175A25 25 0 1 1 200 225A25 25 0 0 1 200 175M306.26 175A25 25 0 1 1 306.26 225A25 25 0 0 1 306.26 175M93.76 68.74A25 25 0 1 1 93.76 118.74A25 25 0 0 1 93.76 68.74M200 68.74A25 25 0 1 1 200 118.74A25 25 0 0 1 200 68.74M306.26 68.74A25 25 0 1 1 306.26 118.74A25 25 0 0 1 306.26 68.74" : "M75 225A20 20 0 1 1 75 265A20 20 0 0 1 75 225M160 225A20 20 0 1 1 160 265A20 20 0 0 1 160 225M245 225A20 20 0 1 1 245 265A20 20 0 0 1 245 225M75 140A20 20 0 1 1 75 180A20 20 0 0 1 75 140M160 140A20 20 0 1 1 160 180A20 20 0 0 1 160 140M245 140A20 20 0 1 1 245 180A20 20 0 0 1 245 140M75 55A20 20 0 1 1 75 95A20 20 0 0 1 75 55M160 55A20 20 0 1 1 160 95A20 20 0 0 1 160 55M245 55A20 20 0 1 1 245 95A20 20 0 0 1 245 55", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
LayoutGrid.defaultProps = {
    size: IconSize.STANDARD,
};
LayoutGrid.displayName = `Blueprint6.Icon.LayoutGrid`;
export default LayoutGrid;
//# sourceMappingURL=layout-grid.js.map