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
export const Backlink = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "backlink", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M367.74 4.2L365.86 5.86L280 91.7000000000001V40A20 20 0 0 0 240 40L240.06 141.5L240.4 144.02L241 146.24L241.88 148.46L242.92 150.42L244.26 152.34L245.86 154.14A20 20 0 0 0 248.1 156.08L250.3 157.5L252.58 158.58L254.68 159.28L257.68 159.88L260 160H360A20 20 0 1 0 360 120H308.3L394.14 34.14A20 20 0 0 0 367.74 4.2M140.72 217.28L51.72 128.28L49.38 125.74A40 40 0 0 1 105.74 69.38L108.28 71.72L197.28 160.7000000000001A80 80 0 0 0 179.58 86.62L176.58 83.42L136.58 43.42A80 80 0 0 0 20.4 153.4L23.4 156.6L63.4 196.6A80 80 0 0 0 140.7 217.3M274.12 294.16A20 20 0 0 0 275.78 267.76L274.12 265.88L134.12 125.88A20 20 0 0 0 104.18 152.28L105.84 154.16L245.84 294.16A20 20 0 0 0 274.12 294.16M356.54 376.5800000000001A80 80 0 0 0 359.56 266.64L356.56 263.44L316.56 223.44A80 80 0 0 0 239.28 202.72L328.28 291.7200000000001L330.6 294.2800000000001A40 40 0 0 1 274.24 350.6400000000001L271.7 348.3L182.7 259.3000000000001A80 80 0 0 0 200.4 333.4000000000001L203.4 336.6L243.4 376.6A80 80 0 0 0 356.54 376.6" : "M280 120A20 20 0 1 0 280 80H268.3L314.14 34.14A20 20 0 0 0 287.74 4.2L285.86 5.86L240 51.7V40A20 20 0 1 0 200 40L200.06 101.5L200.3 103.5L200.54 104.68L201.2 106.84L201.88 108.46L202.92 110.42L204.26 112.34L205.86 114.14A20 20 0 0 0 208.1 116.08L210.3 117.5L213.16 118.8L214.68 119.28L216.5 119.6799999999999L218.82 119.9599999999999zM120.72 197.28L51.72 128.28L49.38 125.74A40 40 0 0 1 105.74 69.38L108.28 71.72L177.28 140.7A80 80 0 0 0 159.58 66.62L156.58 63.42L136.58 43.42A80 80 0 0 0 20.4 153.4L23.4 156.6L43.4 176.6A80 80 0 0 0 120.7 197.3M214.12 234.16A20 20 0 0 0 215.78 207.76L214.12 205.88L114.12 105.88A20 20 0 0 0 84.18 132.28L85.84 134.16L185.84 234.16A20 20 0 0 0 214.12 234.16M276.54 296.58A80 80 0 0 0 279.56 186.64L276.56 183.44L256.56 163.44A80 80 0 0 0 179.28 142.72L248.28 211.72L250.6 214.28A40 40 0 0 1 194.24 270.6400000000001L191.6999999999999 268.3L122.7 199.3000000000001A80 80 0 0 0 140.4 273.4L143.4 276.6L163.4 296.6A80 80 0 0 0 276.54 296.6", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Backlink.displayName = `Blueprint6.Icon.Backlink`;
export default Backlink;
//# sourceMappingURL=backlink.js.map