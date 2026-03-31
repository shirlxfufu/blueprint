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
export const Helicopter = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "helicopter", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M200 340V300H20V330A10 10 0 0 1 0 330V230A10 10 0 0 1 20 230V260L120 220C120 189.2 136.48 148.5 180 123.3V80H110A10 10 0 1 1 110 60H330A10 10 0 0 1 334.48 61.06L374.48 81.06A10 10 0 1 1 365.52 98.94L327.6400000000001 80H300V102A100.04 100.04 0 0 1 280 300H260V340H390A10 10 0 0 1 390 360H70A10 10 0 0 1 70 340zM280 80V100C247.84 100 221.44 105.16 200 113.66V80zM280 200V280A80 80 0 0 0 360 200z" : "M10 280A10 10 0 0 0 20 270V240H160V260H50A10 10 0 0 0 50 280H310A10 10 0 0 0 310 260H200V240H220C265.2 240 300 204.2 300 160C300 122.6 275.06 91.2 240 82.44V60H247.64L285.52 78.94A10 10 0 1 0 294.48 61.06L252.36 40H90A10 10 0 0 0 90 60H140V106.12C114.98 125.28 100 152.64 100 180L20 200V170A10 10 0 0 0 0 170V270A10 10 0 0 0 10 280M160 93.68V60H220V80A134 134 0 0 0 160 93.68M220 220V160H280A60 60 0 0 1 220 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Helicopter.displayName = `Blueprint6.Icon.Helicopter`;
export default Helicopter;
//# sourceMappingURL=helicopter.js.map