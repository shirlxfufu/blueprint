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
export const Help = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "help", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M341.26 200C341.26 214.84 338.94 229.6 334.38 243.66C316.66 300.5 259.66 342.14 200 341.26C124.8 343.08 56.9 275.2 58.76 200C56.9 124.78 124.78 56.9 200 58.74C259.6600000000001 57.84 316.6600000000001 99.48 334.38 156.34A140 140 0 0 1 341.26 200M371.26 200C371.26 182.08 368.46 164.14 362.92 147.06C341.3999999999999 78.06 272.32 27.6999999999999 200 28.74C108.7799999999999 26.54 26.5599999999999 108.76 28.7599999999999 200C26.5599999999999 291.22 108.7599999999999 373.44 200 371.24C272.32 372.3 341.3999999999999 321.92 362.92 252.92C368.46 235.86 371.26 217.92 371.26 200M185.86 112.68V112.88A15 15 0 1 0 215.86 112.88V112.68A15 15 0 0 0 185.86 112.68M185 162.5V187.5C185 193.84 189 199.5 195 201.64H195.02L195.1 201.68L195.46 201.8000000000001L196.74 202.2400000000001L201.12 203.8C204.58 205.04 208.9 206.58 212.42 207.8A28.4 28.4 0 0 1 229.26 226.3A28.36 28.36 0 0 1 189.46 259.5600000000001A28 28 0 0 1 179.46 251.2800000000001A15 15 0 0 0 155.56 269.4400000000001A58.34 58.34 0 1 0 222.5 179.5400000000001L215 176.9200000000001V162.5A15 15 0 0 0 185 162.5" : "M270 160A110 110 0 1 1 50 160A110 110 0 0 1 270 160M145.68 90.16V90.3A15 15 0 1 0 175.68 90.3V90.16A15 15 0 0 0 145.68 90.16M145 130V150C145 156.34 149 162 154.98 164.14L155.08 164.18L155.36 164.28L156.38 164.62L159.88 165.88L168.64 168.96A19.8 19.8 0 0 1 180.52 181.88A19.7 19.7 0 0 1 152.92 204.96A20 20 0 0 1 145.96 199.22A15 15 0 0 0 122.08 217.36A49.68 49.68 0 1 0 179.38 140.94L178.98 140.8L175 139.4V130A15 15 0 0 0 145 130M300 160A140 140 0 1 0 20 160A140 140 0 0 0 300 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Help.defaultProps = {
    size: IconSize.STANDARD,
};
Help.displayName = `Blueprint6.Icon.Help`;
export default Help;
//# sourceMappingURL=help.js.map