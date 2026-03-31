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
export const CubeCutout = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "cube-cutout", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M375 400C388.8 400 400 388.8 400 375V25C400 11.2 388.8 0 375 0H25C11.2 0 0 11.2 0 25V375C0 388.8 11.2 400 25 400zM210 200V60L309.2800000000001 107.94C318.76 112.24 325 122.64 325 134.22V267.4600000000001L324.98 267.7C287.14 245.14 247.96 222.36 210 200M75 265.8V132.54C75 121.82 80.36 112.02 88.8 107.22L190 60V200L75.12 267.62Q75.04 266.7200000000001 75 265.8M210.04 335.92A22.4 22.4 0 0 1 189.58 336.86L90.72 292.06Q88.62 291.12 86.8 289.8L200 220C222 232.96 294.6600000000001 278.7000000000001 314.46 290.52A20 20 0 0 1 311.18 292.78z" : "M300 320A20 20 0 0 0 320 300V20A20 20 0 0 0 300 0H20A20 20 0 0 0 0 20V300A20 20 0 0 0 20 320zM211.4 185.38L179.32 166.44L170 160.98V51.26L247.4200000000001 86.34C255.0200000000001 89.78 260.0000000000001 98.12 260.0000000000001 107.38V214L259.98 214.18C250.2400000000001 208.38 230.3800000000001 196.58 211.4 185.38M60 212.64V106.04C60 97.46 64.28 89.62 71.06 85.78L150 52.14V161L60.1 214.1Q60 213.36 60 212.64M168.02 268.74A18 18 0 0 1 151.66 269.5L72.58 233.66A20 20 0 0 1 69.44 231.84L160 178.28L169.16 183.68L201.24 202.6A12920 12920 0 0 1 251.5600000000001 232.42A20 20 0 0 1 248.96 234.22z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
CubeCutout.displayName = `Blueprint6.Icon.CubeCutout`;
export default CubeCutout;
//# sourceMappingURL=cube-cutout.js.map