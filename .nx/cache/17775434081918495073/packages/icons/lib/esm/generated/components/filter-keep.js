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
export const FilterKeep = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "filter-keep", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M300 360C300 371 291 380 280 380H20A20.06 20.06 0 0 1 5.8 345.8L100 251.8V80A20.06 20.06 0 0 1 134.2 65.8L194.2 125.8C197.8 129.4 200 134.4 200 140V251.8L294.2000000000001 346C297.8 349.4 300 354.4 300 360M380 140C374.4 140 369.4 137.8 365.8 134.2000000000001L300 68.2L274.2000000000001 94A19.4 19.4 0 0 1 260 100A20.06 20.06 0 0 1 245.8 65.8L285.8 25.8C289.4 22.2 294.4 20 300 20S310.6 22.2 314.2000000000001 25.8L394.2000000000001 105.8A20.06 20.06 0 0 1 380 140" : "M300 120C294.4000000000001 120 289.4000000000001 117.8 285.8 114.2L240 68.2L214.2 94A19.4 19.4 0 0 1 200 100A20.06 20.06 0 0 1 185.8 65.8L225.8 25.8C229.4 22.2 234.4 20 240 20S250.6 22.2 254.2 25.8L314.2000000000001 85.8A20.06 20.06 0 0 1 300 120M240 280C240 291 231 300 220 300H20A20.06 20.06 0 0 1 5.8 265.8L80 191.8V80A20.06 20.06 0 0 1 114.2 65.8L154.2 105.8C157.8 109.4 160 114.4 160 120V191.8L234.2 266C237.8 269.4 240 274.4 240 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
FilterKeep.displayName = `Blueprint6.Icon.FilterKeep`;
export default FilterKeep;
//# sourceMappingURL=filter-keep.js.map