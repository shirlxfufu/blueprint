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
export const BackwardTen = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "backward-ten", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M195.08 0A170 170 0 0 0 126.74 13.86A178 178 0 0 0 71.3 51.3A178 178 0 0 0 33.86 106.74A170 170 0 0 0 20 175.08Q20 183.34 25.6 188.94A18.8 18.8 0 0 0 39.46 194.54Q47.72 194.54 53.32 188.94T58.92 175.08Q58.92 118.18 98.54 78.54Q138.14 38.9 195.08 38.9T291.6 78.54T331.24 175.08Q331.26 231.98 291.6 271.6Q251.92 311.2 195.08 311.24H192.16L208.68 294.7A18 18 0 0 0 214.28 281.1Q214.0399999999999 273.3 208.68 267.48A20 20 0 0 0 187.28 262.68A18 18 0 0 0 180.9599999999999 267L130.88 317.06A18.6 18.6 0 0 0 125.04 330.66Q125.04 338.46 130.88 344.28L180.96 394.4A18 18 0 0 0 194.82 400A19.88 19.88 0 0 0 214.28 380.3A18 18 0 0 0 208.68 366.68L192.16 350.14H195.0800000000001A170 170 0 0 0 263.4000000000001 336.28A178 178 0 0 0 318.8400000000001 298.8400000000001A178 178 0 0 0 356.2800000000001 243.4A170 170 0 0 0 370.1400000000001 175.08A170 170 0 0 0 356.2800000000001 106.74A178 178 0 0 0 318.8400000000001 51.3A178 178 0 0 0 263.4000000000001 13.86A170 170 0 0 0 195.08 0M230 210V150H250V210zM220 240H260A20 20 0 0 0 280 220V140A20 20 0 0 0 260 120H220A20 20 0 0 0 200 140V220A20 20 0 0 0 220 240M180 220V135A15 15 0 1 0 150 135V210H135A15 15 0 0 0 135 240H160A20 20 0 0 0 180 220" : "M160.04 0A136 136 0 0 0 105.4 11.12A142 142 0 0 0 60.98 41.3A142 142 0 0 0 31.02 86.08A138 138 0 0 0 20 140.9Q20 149.1 25.7 154.86A18.8 18.8 0 0 0 39.54 160.6Q47.68 160.6 53.38 154.86T59.08 140.9Q59.08 98.5 88.46 68.94Q117.8 39.38 160 39.38T231.54 68.98Q260.94 98.62 260.94 141.12Q260.94 183.52 231.4 213.08Q201.88 242.64 159.8 242.64H157.38L167.18 232.7200000000001Q172.02 227.8400000000001 171.96 221.18A16.4 16.4 0 0 0 167.2 209.62A16 16 0 0 0 155.44 204.66A15.6 15.6 0 0 0 143.68 209.46L105.08 248.36A19.4 19.4 0 0 0 99.2 262.36Q99.2 270.38 105.08 276.3L143.68 315.2A15.6 15.6 0 0 0 155.44 320Q162.34 319.92 167.2 314.82A16 16 0 0 0 171.86 303.1600000000001Q171.84 296.38 166.98 291.5L157.58 282.02H159.78Q188.96 282.02 214.42 270.9Q239.9000000000001 259.8 258.92 240.7A142 142 0 0 0 288.98 196.04A138 138 0 0 0 300 141.1Q300 111.78 288.98 86.08A142 142 0 0 0 259.02 41.3A142 142 0 0 0 214.64 11.1A135 135 0 0 0 160.04 1e-13M180 180H200A20 20 0 0 0 220 160V100A20 20 0 0 0 200 80H180A20 20 0 0 0 160 100V160A20 20 0 0 0 180 180M200 160H180V100H200zM100 170A10 10 0 0 0 110 180H120A20 20 0 0 0 140 160V90A10 10 0 0 0 120 90V160H110A10 10 0 0 0 100 170", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
BackwardTen.displayName = `Blueprint6.Icon.BackwardTen`;
export default BackwardTen;
//# sourceMappingURL=backward-ten.js.map