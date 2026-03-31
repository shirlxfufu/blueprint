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
export const Playbook = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "playbook", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M153.74 112.5A28.76 28.76 0 1 1 96.24 112.5A28.76 28.76 0 0 1 153.74 112.5M183.74 112.5A58.76 58.76 0 1 0 66.24 112.5A58.76 58.76 0 0 0 183.74 112.5M64.4 291.86A15 15 0 0 0 85.6 291.86L148.1 229.36A15 15 0 1 0 126.9 208.16L64.4 270.62A15 15 0 0 0 64.4 291.82M126.9 291.86A15 15 0 1 0 148.1 270.66L85.6 208.12A15 15 0 1 0 64.4 229.32zM276.9 141.86A15 15 0 0 0 298.1 141.86L360.6 79.36A15 15 0 1 0 339.4000000000001 58.16L276.9000000000001 120.6400000000001A15 15 0 0 0 276.9000000000001 141.84M339.4 141.86A15 15 0 1 0 360.6 120.66L298.1 58.14A15 15 0 1 0 276.8999999999999 79.34zM216.24 268.74V331.24A15 15 0 0 0 231.24 346.24H293.74A15 15 0 1 0 293.74 316.24H246.24V268.74A15 15 0 1 0 216.24 268.74M220.64 341.86A15 15 0 0 0 241.84 341.86L260.6 323.1C294.5600000000001 289.14 300.12 250.36 288.92 217.48C278.1200000000001 185.74 251.9800000000001 160.22 223.74 150.26A15 15 0 0 0 213.74 178.54C233.24 185.42 252.6600000000001 204.02 260.54 227.14C268 249.14 265.3400000000001 275.96 239.4 301.9L220.64 320.64A15 15 0 0 0 220.64 341.84" : "M120 90A20 20 0 1 1 80 90A20 20 0 0 1 120 90M269.4 115.6A15 15 0 1 0 290.6 94.4L276.2 80L290.6 65.6A15 15 0 1 0 269.4 44.3999999999999L255 58.8L240.6 44.3999999999999A15 15 0 1 0 219.4 65.6L233.8 80L219.4 94.4A15 15 0 1 0 240.6 115.6L255 101.2zM99.4 235.6A15 15 0 1 0 120.6 214.4L106.2 200L120.6 185.6A15 15 0 1 0 99.4 164.4L85 178.8L70.6 164.4A15 15 0 1 0 49.4 185.6L63.8 200L49.4 214.4A15 15 0 1 0 70.6 235.6L85 221.2zM170 215V265A15 15 0 0 0 185 280H235A15 15 0 1 0 235 250H219.98C239.54 224.7 242.14 197 233.98 173C225.04 146.76 203.46 125.66 179.98 117.36A15 15 0 0 0 169.98 145.66C184.72 150.86 199.58 165.06 205.58 182.66C209.98 195.56 209.78 210.7 199.98 226.24V215A15 15 0 1 0 169.98 215M149.98 90A50 50 0 1 0 49.98 90A50 50 0 0 0 149.98 90", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Playbook.defaultProps = {
    size: IconSize.STANDARD,
};
Playbook.displayName = `Blueprint6.Icon.Playbook`;
export default Playbook;
//# sourceMappingURL=playbook.js.map