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
export const MenuOpen = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "menu-open", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M276.9000000000001 135.6A15 15 0 1 1 298.1 114.4L373.1 189.4A15 15 0 0 1 373.1 210.6L298.1 285.6A15 15 0 1 1 276.9000000000001 264.4L341.3 200zM90 347.5V52.5H185V347.5zM87.5 22.5A27.5 27.5 0 0 0 60 50V350A27.52 27.52 0 0 0 87.5 377.5H187.5C194.8 377.5 201.8 374.6 206.96 369.44L208.76 367.42C212.76 362.52 215 356.38 215 350V50C215 43.6 212.78 37.46 208.76 32.56L206.96 30.54L204.92 28.72C200.0200000000001 24.72 193.88 22.5 187.5 22.5z" : "M75 45H145V275H75zM219.4 230.6A15 15 0 0 0 240.6 230.6L300.6 170.6A15 15 0 0 0 300.6 149.4L240.6 89.4A15 15 0 1 0 219.4 110.6L268.8 160L219.4 209.4A15 15 0 0 0 219.4 230.6M175 40A25 25 0 0 0 150 15H70A25 25 0 0 0 45 40V280A25 25 0 0 0 70 305H150A25 25 0 0 0 175 280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
MenuOpen.defaultProps = {
    size: IconSize.STANDARD,
};
MenuOpen.displayName = `Blueprint6.Icon.MenuOpen`;
export default MenuOpen;
//# sourceMappingURL=menu-open.js.map