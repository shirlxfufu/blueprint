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
export const KeyEnter = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "key-enter", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M360 360C349 360 340 351 340 340V240C340 195.8 304.2000000000001 160 260 160H88.2L134 205.8C137.8 209.4 140 214.4 140 220A20.06 20.06 0 0 1 105.8 234.2L25.8 154.2C22.2 150.6 20 145.6 20 140S22.2 129.4 25.8 125.8L105.8 45.8A20.06 20.06 0 0 1 134.2 74.2000000000001L88.2 120H260C326.2 120 380 173.8 380 240V340C380 351 371 360 360 360" : "M280 280C269 280 260 271 260 260V200C260 166.8 233.2 140 200 140H88.2L114 165.8C117.8 169.4 120 174.4 120 180A20.06 20.06 0 0 1 85.8 194.2L25.8 134.2C22.2 130.6 20 125.6 20 120S22.2 109.4 25.8 105.8L85.8 45.8A20.06 20.06 0 0 1 114.2 74.2L88.2 100H200C255.2 100 300 144.8 300 200V260C300 271 291 280 280 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
KeyEnter.displayName = `Blueprint6.Icon.KeyEnter`;
export default KeyEnter;
//# sourceMappingURL=key-enter.js.map