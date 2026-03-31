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
export const TableSync = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "table-sync", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M380 380H20C8 380 0 370 0 360V40C0 30 8 20 20 20H180A100 100 0 0 0 162 60H160V80C152.72 80 145.88 81.96 140 85.38V60H40V120H120C120 127.24 121.9 134.0800000000001 125.28 140H40V200H140V156.68L160 176.68V200H240V176.68L242.58 174.12C245.86 182.78 252.08 190.02 260 194.62V200H360V160.02C372.56 143.3 380 122.52 380 100C387.2800000000001 100 394.12 98.04 400 94.62V360C400 370 390 380 380 380M140 220H40V280H140zM240 220H160V280H240zM360 220H260V280H360zM360 68.2V100C360 144.2 324.2000000000001 180 280 180C269 180 260 171 260 160S269 140 280 140C302 140 320 122 320 100V68.2L314.2000000000001 74.2000000000001A20.06 20.06 0 0 1 285.8 45.8L325.8 5.8C329.4 2.2 334.4 0 340 0S350.6 2.2 354.2000000000001 5.8L394.2000000000001 45.8A20.06 20.06 0 0 1 380 80C374.4 80 369.4 77.8 365.8 74zM180 111.8V80C180 35.8 215.8 0 260 0C271 0 280 9 280 20S271 40 260 40C238 40 220 58 220 80V111.8L225.8 105.8A20.06 20.06 0 0 1 254.2 134.2L214.2 174.2A20 20 0 0 1 200 180C194.4 180 189.4 177.8 185.8 174.2L145.8 134.2000000000001A20.06 20.06 0 0 1 160 100C165.6 100 170.6 102.2 174.2 106z" : "M300 320H20C8 320 0 310 0 300V60C0 48 8 40 20 40H102.52A80 80 0 0 0 100 60A40 40 0 0 0 65.38 80H40V120H65.28Q67.92 124.6 71.66 128.34L83.32 140H40V180H280V152.96C292.46 138.86 300 120.32 300 100C307.2800000000001 100 314.12 98.04 320 94.62V300C320 310 312 320 300 320M120 200H40V240H120zM200 200H140V240H200zM280 200H220V240H280zM194.2 114.2L154.2 154.2A20 20 0 0 1 140 160C134.4 160 129.4 157.8 125.8 154.2L85.8 114.2A20.06 20.06 0 0 1 114.2 85.8L120 91.8V60C120 26.8 146.8 0 180 0C191 0 200 9 200 20S191 40 180 40S160 49 160 60V91.8L165.8 85.8A20.06 20.06 0 0 1 194.2 114.2M205.8 45.8L245.8 5.8C249.4 2.2 254.4 0 260 0S270.6 2.2 274.2000000000001 5.8L314.2000000000001 45.8A20.06 20.06 0 0 1 285.8 74.2L280.0000000000001 68.2V100C280.0000000000001 133.2 253.2000000000001 160 220 160C209 160 200 151 200 140S209 120 220 120S240.0000000000001 111 240.0000000000001 100V68.2L234.2000000000001 74.2A20.06 20.06 0 0 1 205.8000000000001 45.8", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
TableSync.displayName = `Blueprint6.Icon.TableSync`;
export default TableSync;
//# sourceMappingURL=table-sync.js.map