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
export const Geotime = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "geotime", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M311.1 260C263.6 260 225 222.66 225 176.72C225 130.62 311.1 0 311.1 0S397.1800000000001 130.62 397.1800000000001 176.72C397.04 222.66 358.6 260 311.1 260M311.1 135A39.08 39.08 0 1 0 311.12 213.16A39.08 39.08 0 0 0 311.1 135M0 250C0 332.88 67.12 400 150 400A150 150 0 0 0 297.18 279.12A108 108 0 0 1 261.1 267.8A112.6 112.6 0 0 1 150 362.5A112.6 112.6 0 0 1 37.5 250A112.6 112.6 0 0 1 150 137.5C171.4 137.5 191.44 143.5 208.48 153.9C211.28 143.4 215.52 132.34 220.08 121.74L221.64 118.18A150 150 0 0 0 150 100A150 150 0 0 0 0 250M168.76 321.26V257.68L200.82 225.82A18.8 18.8 0 0 0 174.2 199.2L136.66 236.66A18.8 18.8 0 0 0 131.24 249.98V321.26A18.8 18.8 0 0 0 150 340A18.8 18.8 0 0 0 168.76 321.26" : "M248.88 200C210.88 200 180 170.12 180 133.38C180 96.5 248.88 0 248.88 0S317.74 96.5 317.74 133.38C317.62 170.12 286.9000000000001 200 248.9 200M250.02 100A30 30 0 1 0 250.04 160.02A30 30 0 0 0 250 100M0 200C0 266.3 53.7 320 120 320A120 120 0 0 0 238.46 219.28A92 92 0 0 1 209.38 210.62A90.1 90.1 0 0 1 120 290A90.08 90.08 0 0 1 30 200A90.08 90.08 0 0 1 161.6 120.2C163.46 111.7 166.9 101.94 171.36 91.5A120 120 0 0 0 120 80C53.7 80 0 133.7 0 200M135 245V206.14L160.66 180.64A15.04 15.04 0 0 0 139.36 159.34L109.36 189.34A15 15 0 0 0 105 200V245C105 253.24 111.76 260 120 260S135 253.24 135 245", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Geotime.displayName = `Blueprint6.Icon.Geotime`;
export default Geotime;
//# sourceMappingURL=geotime.js.map