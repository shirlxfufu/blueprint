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
export const Tractor = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "tractor", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M90 180A90 90 0 1 0 90 0A90 90 0 0 0 90 180M319.98 160A80 80 0 1 0 319.98 0A80 80 0 0 0 319.98 160M89.98 128.58A38.56 38.56 0 1 1 89.98 51.44A38.56 38.56 0 0 1 89.98 128.58M320 106.66A26.66 26.66 0 1 1 320 53.34A26.66 26.66 0 0 1 320 106.66M119.98 400C149.2 400 170.54 386.64 180 360L197.02 274.88C225.68 272.96 253.42 270.54 279.96 267.64V360H319.96L320 262.76Q348.88 258.86 375.34 254.06C390.92 251.24 399.98 241.78 399.98 228.38L400 140A100 100 0 0 1 320 179.94A100 100 0 0 1 221.98 100H199.58A110 110 0 0 1 90.02 199.88A109.6 109.6 0 0 1 22.48 176.74H0.08V200.34L0 253.46C-0.04 265.4 7.4 277.06 19.98 279.5V380A20 20 0 0 0 39.98 400zM139.98 360H60V280H75C102.72 279.46 129.98 278.54 156.58 277.2200000000001z" : "M70 140A70 70 0 1 0 70 0A70 70 0 0 0 70 140M260 120A60 60 0 1 0 260 0A60 60 0 0 0 260 120M70 100A30 30 0 1 1 70 40A30 30 0 0 1 70 100M260 80A20 20 0 1 1 260 40A20 20 0 0 1 260 80M100 320C129.2 320 150.54 306.64 160 280L176.3 214.9A1580 1580 0 0 0 220.02 211L220 280H260L260.02 206.24Q280.98 203.4 300.28 200C312.74 197.8 320 190.42 320 180V112.92A80.02 80.02 0 0 1 182.54 80.02H159.98L159.46 80.06A90 90 0 0 1 13.18 139.8L0.1 139.78V156.36C0.06 172.28 0.04 191.54 0 199.56C0 210 7.52 220.2 20 220.2V300A20 20 0 0 0 40 320zM120 280H60V220.2C85.8 219.72 111.08 218.82 135.62 217.5z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Tractor.displayName = `Blueprint6.Icon.Tractor`;
export default Tractor;
//# sourceMappingURL=tractor.js.map