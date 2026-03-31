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
export const LayoutTopRowThreeTiles = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "layout-top-row-three-tiles", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M0 160A20 20 0 0 0 20 180H380A20 20 0 0 0 400 160V20A20 20 0 0 0 380 0H20A20 20 0 0 0 0 20zM0 380A20 20 0 0 0 20 400H80A20 20 0 0 0 100 380V240A20 20 0 0 0 80 220H20A20 20 0 0 0 0 240zM140 380A20 20 0 0 0 160 400H240A20 20 0 0 0 260 380V240A20 20 0 0 0 240 220H160A20 20 0 0 0 140 240zM300 380A20 20 0 0 0 320 400H380A20 20 0 0 0 400 380V240A20 20 0 0 0 380 220H320A20 20 0 0 0 300 240z" : "M140 180A20 20 0 0 0 120 200V300A20 20 0 0 0 140 320H180A20 20 0 0 0 200 300V200A20 20 0 0 0 180 180zM20 180A20 20 0 0 0 0 200V300A20 20 0 0 0 20 320H60A20 20 0 0 0 80 300V200A20 20 0 0 0 60 180zM260 180A20 20 0 0 0 240 200V300A20 20 0 0 0 260 320H300A20 20 0 0 0 320 300V200A20 20 0 0 0 300 180zM20 0A20 20 0 0 0 0 20V120A20 20 0 0 0 20 140H300A20 20 0 0 0 320 120V20A20 20 0 0 0 300 0z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
LayoutTopRowThreeTiles.displayName = `Blueprint6.Icon.LayoutTopRowThreeTiles`;
export default LayoutTopRowThreeTiles;
//# sourceMappingURL=layout-top-row-three-tiles.js.map