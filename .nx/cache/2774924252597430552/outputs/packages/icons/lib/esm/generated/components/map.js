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
export const Map = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "map", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M150 352.5Q151.42 352.5 152.78 352.2200000000001H152.94L153.18 352.14A20 20 0 0 0 156.22 351.14L156.7 350.92L251.74 303.4L346.36 327.06A15 15 0 0 0 365 312.5V87.5A15 15 0 0 0 353.6399999999999 72.96L253.6399999999999 47.96L253.2999999999999 47.9A20 20 0 0 0 251.0999999999999 47.56H250.8399999999999L250 47.5A16 16 0 0 0 244.9599999999999 48.44L243.6799999999999 48.94L243.2999999999999 49.08L148.2399999999999 96.62L53.6399999999999 72.96A15 15 0 0 0 34.9999999999999 87.5V312.5A15 15 0 0 0 46.3599999999999 327.06L146.3599999999999 352.06L146.6799999999999 352.1A20 20 0 0 0 149.9999999999999 352.5M265 275.8V81.72L335 99.22V293.3zM165 121.78L235 86.78V278.24L165 313.24zM64.9999999999999 300.8V106.72L135 124.22V318.32z" : "M108 90V270A12 12 0 0 0 132 270V90A12 12 0 0 0 108 90M188 50V230A12 12 0 0 0 212 230V50A12 12 0 0 0 188 50M119.2 281.968A12 12 0 0 0 125.36 280.736L201.392 242.72L277.088 261.648A12 12 0 0 0 292 250V70A12 12 0 0 0 282.9119999999999 58.368L202.9119999999999 38.368A12 12 0 0 0 194.6399999999999 39.264L118.5919999999999 77.296L42.9119999999999 58.368A12 12 0 0 0 27.9999999999999 70V250A12 12 0 0 0 37.0879999999999 261.648L117.0879999999999 281.648zM52 240.64V85.376L117.088 101.632L119.184 101.968A12 12 0 0 0 125.36 100.736L201.392 62.72L268 79.36V234.656L202.912 218.368A12 12 0 0 0 194.64 219.28L118.592 257.296z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Map.defaultProps = {
    size: IconSize.STANDARD,
};
Map.displayName = `Blueprint6.Icon.Map`;
export default Map;
//# sourceMappingURL=map.js.map