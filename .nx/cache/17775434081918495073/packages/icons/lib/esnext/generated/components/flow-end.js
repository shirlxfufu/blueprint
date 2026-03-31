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
export const FlowEnd = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "flow-end", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M240 201.62A80 80 0 0 0 320 280.02C364.2000000000001 280.02 400 244.22 400 200.08A80 80 0 0 0 320 120.16A80 80 0 0 0 240 198.48A19.4 19.4 0 0 0 234.4 186.24L153.7 105.8A19.2 19.2 0 0 0 139.98 100.1C129.26 100.1 120.1 109.32 120.1 120.04C120.1 125.5 122.24 130.6 125.76 134.12L173.34 180.16H19.6C8.86 180.16 0.08 189.36 0.08 200.08S8.88 219.92 19.6 219.92H173.12L125.74 266.26A19.2 19.2 0 0 0 120.08 279.98C120.08 290.7 129.24 299.9 139.96 299.9C145.44 299.9 150.16 297.9 153.68 294.2L234.22 213.72C237.4 210.56 239.62 206.42 240.02 201.62" : "M194.04 173.8C197.56 170.28 199.9 165.6 199.9 160.12A19.6 19.6 0 0 0 194.24 146.22Q137.6 88.94 134.02 85.68C130.44 82.4 125.62 80 120.16 80A19.9 19.9 0 0 0 100.22 99.7C100.22 105.18 102.46 110.52 106.06 114.1Q109.66 117.7 136.34 139.96H19.6C8.88 139.96 0.1 149.36 0.1 160.12C0.1 170.86 8.88 180.0399999999999 19.6 180.0399999999999H136.34Q109.48 202.6 106.06 206.12A20.6 20.6 0 0 0 100.22 220.22A20 20 0 0 0 120 240C125.44 240 130.4 237.84 133.9 234.12A10719.999999999998 10719.999999999998 0 0 1 194.04 173.8M260 99.96C226.86 99.96 200 126.9 200 160.12A60.08 60.08 0 0 0 260 220.26C293.14 220.26 320 193.34 320 160.12A60.08 60.08 0 0 0 260 99.96", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
FlowEnd.displayName = `Blueprint6.Icon.FlowEnd`;
export default FlowEnd;
//# sourceMappingURL=flow-end.js.map