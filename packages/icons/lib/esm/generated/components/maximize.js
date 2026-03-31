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
export const Maximize = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "maximize", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M380 400H280C269 400 260 391 260 380S269 360 280 360H331.8L226 254.2C222.2 250.6 220 245.6 220 240A20.06 20.06 0 0 1 254.2 225.8L360 331.8V280C360 269 369 260 380 260S400 269 400 280V380C400 391 391 400 380 400M160 180C154.4 180 149.4 177.8 145.8 174.2L40 68.2V120C40 131 31 140 20 140S0 131 0 120V20C0 9 9 0 20 0H120C131 0 140 9 140 20S131 40 120 40H68.2L174 145.8C177.8 149.4 180 154.4 180 160C180 171 171 180 160 180" : "M119.8 140.2C114.2 140.2 109.2 138 105.6 134.4L39.8 68.6V100.4C39.8 111.4 30.8 120.4 19.8 120.4S-0.2 111.4 -0.2 100.4V20.4C-0.2 9.4 8.8 0.4 19.8 0.4H99.8C110.8 0.4 119.8 9.4 119.8 20.4S110.8 40.4 99.8 40.4H68.2L134 106A20.06 20.06 0 0 1 119.8 140.2000000000001M299.8 320.2000000000001H219.8C208.8 320.2000000000001 199.8 311.2000000000001 199.8 300.2000000000001S208.8 280.2000000000001 219.8 280.2000000000001H251.6L185.6 214.2000000000001A20 20 0 0 1 179.8000000000001 200.2000000000001A20.06 20.06 0 0 1 214.0000000000001 186L279.8000000000001 251.8000000000001V220C279.8000000000001 209 288.8 200 299.8000000000001 200S319.8000000000001 209 319.8000000000001 220V300C319.8000000000001 311.2 310.8000000000001 320.2 299.8000000000001 320.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Maximize.displayName = `Blueprint6.Icon.Maximize`;
export default Maximize;
//# sourceMappingURL=maximize.js.map