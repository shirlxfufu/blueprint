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
export const Exchange = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "exchange", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M50 240A50 50 0 0 1 50 140A50 50 0 0 1 50 240M257 177A9.9 9.9 0 1 1 243 163L266 140H110C104.4 140 100 135.6 100 130S104.4 120 110 120H265.8L242.8 97C241.2 95.2 240 92.8 240 90A9.9 9.9 0 0 1 257 83L297 123C298.8 124.8 300 127.2000000000001 300 130S298.8 135.2 297 137zM350 240A50 50 0 0 1 350 140A50 50 0 0 1 350 240M143 203A9.9 9.9 0 1 1 157 217L134.2 240H290C295.6 240 300 244.4 300 250S295.6 260 290 260H134.2L157.2 283C158.8 284.8 160 287.2 160 290A9.9 9.9 0 0 1 143 297L103 257C101.2 255.2 100 252.8 100 250S101.2 244.8 103 243z" : "M39.8 200.2C17.8 200.2 -0.2 182.2 -0.2 160.2S17.8 120.2 39.8 120.2S79.8 138.2 79.8 160.2S62 200.2 39.8 200.2M122.8 163A9.9 9.9 0 1 1 136.8 177L114 200.2H229.8C235.4 200.2 239.8 204.6 239.8 210.2S235.4 220.2 229.8 220.2H114L137 243.2A9.9 9.9 0 1 1 123 257.2L83 217.2C81 215.4 79.8 213 79.8 210.2S81 205 82.8 203.2zM279.8 200.2C257.8 200.2 239.8 182.2 239.8 160.2S257.8 120.2 279.8 120.2S319.8 138.2 319.8 160.2S302 200.2 279.8 200.2M197 157.2A10.6 10.6 0 0 1 189.8 160.2A9.9 9.9 0 0 1 182.8 143.2L205.8 120.2H89.8C84.2 120.2 79.8 115.8 79.8 110.2S84.2 100.2 89.8 100.2H205.6L182.6 77.2A9.9 9.9 0 1 1 196.6 63.2L236.6 103.2C238.4 105 239.6 107.6 239.6 110.2S238.4 115.4 236.6 117.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Exchange.displayName = `Blueprint6.Icon.Exchange`;
export default Exchange;
//# sourceMappingURL=exchange.js.map