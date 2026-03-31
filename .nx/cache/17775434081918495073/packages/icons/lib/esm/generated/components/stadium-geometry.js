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
export const StadiumGeometry = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "stadium-geometry", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M300 260H100A60 60 0 1 1 100 140H300A60 60 0 0 1 300 260M100 300H300A100 100 0 1 0 300 100H100A100 100 0 0 0 100 300" : "M240 200H80A40 40 0 1 1 80 120H240A40 40 0 1 1 240 200M80 240H240A80 80 0 0 0 240 80H80A80 80 0 0 0 80 240", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
StadiumGeometry.displayName = `Blueprint6.Icon.StadiumGeometry`;
export default StadiumGeometry;
//# sourceMappingURL=stadium-geometry.js.map