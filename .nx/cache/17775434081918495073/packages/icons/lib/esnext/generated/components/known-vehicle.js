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
export const KnownVehicle = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "known-vehicle", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M380 320A20 20 0 0 1 365.86 314.14L280 228.28L234.14 274.14A20 20 0 0 1 205.86 245.86L265.86 185.86A19.94 19.94 0 0 1 294.14 185.86L394.14 285.86A20 20 0 0 1 380 320M339.04 174.18C339.26 172.74 340 171.5 340 170A30 30 0 0 0 310 140C305.5 140 301.3399999999999 141.14 297.5199999999999 142.9C291.94 141.2 286.1199999999999 140 280 140A60 60 0 0 0 237.58 157.58L177.5799999999999 217.58L177.7199999999999 217.72A60 60 0 0 0 163.68 240H80V260L100 320H300L303.8 308.64L329.94 334.8C323.2200000000001 341.92 314.7800000000001 347.96 306.64 350.24C306.64 350.24 271.8400000000001 360 200 360S93.36 350.24 93.36 350.24C79.96 346.48 64.88 332.9600000000001 59.88 320.2000000000001L59.8 320H60L40 260H20A20 20 0 0 1 20 220H26.66L21.06 203.2L20 200V50A30 30 0 1 1 80 50V60H320V50A30 30 0 0 1 380 50V200L376.2 211.36zM90 140A30 30 0 1 0 90 200A30 30 0 0 0 90 140" : "M300 260A20 20 0 0 1 285.86 254.14L240 208.28L214.14 234.14A20 20 0 1 1 185.86 205.86L225.86 165.86A19.94 19.94 0 0 1 254.14 165.86L314.14 225.86A20 20 0 0 1 300 260M282.42 137.58L282.2800000000001 137.72A60 60 0 0 0 260 123.68V120H220V123.68C211.52 126.68 204 131.58 197.76 137.76L197.56 137.56L157.56 177.56L157.8 177.8A60 60 0 0 0 143.68 200H60C56.48 200 58.8 216.48 60 220L74.6 252.6C75.8 256.16 76.46 260 80 260H155.6C166.56 272.2 182.3 280 200 280C215.36 280 229.22 274.14 239.74 264.6L256.62 281.48C251.86 286.36 246.14 290.32 240.74 291.96C240.74 291.96 214.4 300 160 300S79.26 291.96 79.26 291.96C69.1 288.86 57.7 277.74 53.9 267.2200000000001L38.64 224.88H17.6C7.92 224.88 0 216.42 0 206.1S7.92 187.32 17.6 187.32H25.1L20 180C19.32 166.3 20 151.28 20 140V40C20 26.86 27.68 20 40 20S60 26.86 60 40V60H260V40C260 26.86 267.68 20 280 20S300 26.86 300 40V140L299.94 155.08zM100.02 120H60V160H100z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
KnownVehicle.displayName = `Blueprint6.Icon.KnownVehicle`;
export default KnownVehicle;
//# sourceMappingURL=known-vehicle.js.map