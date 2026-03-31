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
export const Cube = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "cube", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M341.7000000000001 292.98A15 15 0 0 0 356.1 266.66L207.22 185.16A15 15 0 0 0 192.8 185.16L43.9 266.66A15 15 0 0 0 58.3 292.98L200 215.4zM203.44 377.26Q206.86 376.82 210.0800000000001 375.56L213.2000000000001 374.1L350.7000000000001 298.8200000000001L353.8000000000001 296.86A27.4 27.4 0 0 0 365.0000000000001 274.76V125.2600000000001A27.6 27.6 0 0 0 353.8000000000001 103.16L350.7000000000001 101.2L213.2000000000001 25.92A27.6 27.6 0 0 0 189.9200000000001 24.46L186.8000000000001 25.92L49.3000000000001 101.2A27.4 27.4 0 0 0 35.0000000000001 125.26V274.76L35.2600000000001 278.44A27.6 27.6 0 0 0 49.3000000000001 298.8400000000001L186.8 374.08C190.84 376.28 195.4 377.46 200 377.46zM65 273.2200000000001V126.8L200 52.9L335 126.8V273.2L200 347.14zM185 37.5V198.3A15 15 0 0 0 215 198.3V37.5A15 15 0 0 0 185 37.5" : "M163.12 304.8C166.22 304.4 169.26 303.42 172.02 301.92L282.0200000000001 241.68C284.9600000000001 240.08 287.5200000000001 237.88 289.5800000000001 235.28L291.48 232.52L291.98 231.56L292.2800000000001 231.06L292.9600000000001 229.66L293.1800000000001 229.02L293.5000000000001 228.14C294.4400000000001 225.48 295.0000000000001 222.66 295.0000000000001 219.8V100.2A25 25 0 0 0 282 78.34L172 18.1A25 25 0 0 0 161.94 15.16A20 20 0 0 0 160 15A20 20 0 0 0 158.04 15.16A25 25 0 0 0 148 18.08V18.1L38 78.32V78.34A25 25 0 0 0 25 100.2V219.8L25.24 223.14Q25.6 225.72 26.5 228.14L26.82 229.02L27.06 229.66L27.72 231.06L28.02 231.56L28.52 232.52L30.42 235.28C32.48 237.88 35.04 240.08 37.98 241.68L148 301.92C151.68 303.92 155.8 304.98 160 304.98zM55 103.2L145 53.92V149.76L55 199.04zM175 149.74V53.94L265 103.2V199.04zM70 225.02L160 175.76L249.98 225.02L160 274.3z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Cube.defaultProps = {
    size: IconSize.STANDARD,
};
Cube.displayName = `Blueprint6.Icon.Cube`;
export default Cube;
//# sourceMappingURL=cube.js.map