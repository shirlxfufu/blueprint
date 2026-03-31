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
export const PathSearch = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "path-search", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M135 112.5V337.52A15 15 0 0 0 165 337.52V112.52A15 15 0 0 0 135 112.52M235 246.44V283.94A15 15 0 0 0 265 283.94V246.44A15 15 0 0 0 235 246.44M335 233.94V293.32L253.64 272.9600000000001A15 15 0 0 0 243.3 274.1L148.24 321.64L65 300.8V106.7000000000001L146.36 127.04L149.2 127.46A15 15 0 0 0 157.44 125.5200000000001L207.44 96.9400000000001A15 15 0 0 0 192.56 70.88L147.76 96.48L53.64 72.9399999999999A15 15 0 0 0 35 87.4999999999999V312.52A15 15 0 0 0 46.36 327.06L146.36 352.06L148.98 352.4600000000001A15 15 0 0 0 156.7 350.92L251.74 303.4L346.36 327.06A15 15 0 0 0 365 312.5V233.94A15 15 0 0 0 335 233.94M322.5 146.44A35 35 0 1 1 252.5 146.44A35 35 0 0 1 322.5 146.44M352.5 146.44A65 65 0 1 0 222.5 146.44A65 65 0 0 0 352.5 146.44M314.4000000000001 107.04A15 15 0 0 0 335.6 107.04L365.3400000000001 77.32A15 15 0 1 0 344.1400000000001 56.12L314.4000000000001 85.8A15 15 0 0 0 314.4000000000001 107" : "M255 117.14A25 25 0 1 1 205 117.14A25 25 0 0 1 255 117.14M55 238.3V89.22L105 101.72V250.8zM185 197.14V220.74L135 245.74V98.72L167.44 80.16A15 15 0 1 0 152.56 54.12L117.76 74L43.64 55.46A15 15 0 0 0 25 70V250A15 15 0 0 0 36.36 264.56L116.36 284.56L118.98 284.96A15 15 0 0 0 126.7 283.42L201.74 245.9L276.36 264.56A15 15 0 0 0 295 250V187.14A15 15 0 0 0 265 187.14V230.8L215 218.3V197.14A15 15 0 0 0 185 197.14M285 117.14C285 104.82 280.88 93.48 274.04 84.32L294.4000000000001 63.96A15 15 0 0 0 273.2 42.76L249.9600000000001 65.96C243.76 63.56 237.0600000000001 62.1399999999999 230.0000000000001 62.1399999999999A55 55 0 1 0 285.0000000000001 117.14", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
PathSearch.defaultProps = {
    size: IconSize.STANDARD,
};
PathSearch.displayName = `Blueprint6.Icon.PathSearch`;
export default PathSearch;
//# sourceMappingURL=path-search.js.map