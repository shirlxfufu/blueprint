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
export const Changes = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "changes", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M360 80H40C18 80 0 62 0 40S18 0 40 0H360C382 0 400 18 400 40S382 80 360 80M60 300C65.6 300 70.6 302.2 74.2 305.8L100 331.8V140C100 129 109 120 120 120S140 129 140 140V331.8L165.8 306C169.4 302.2 174.4 300 180 300A20.06 20.06 0 0 1 194.2 334.2L134.2 394.2C130.6 397.8 125.6 400 120 400S109.4 397.8 105.8 394.2L45.8 334.2A20.06 20.06 0 0 1 60 300M205.8 185.8L265.8 125.8C269.4 122.2 274.4 120 280 120S290.6 122.2 294.2000000000001 125.8L354.2000000000001 185.8A20.06 20.06 0 0 1 325.8 214.2L300 188.2V380C300 391 291 400 280 400S260 391 260 380V188.2L234.2 214A19.4 19.4 0 0 1 220 220A20.06 20.06 0 0 1 205.8 185.8" : "M165.8 165.8L225.8 105.8C229.4 102.2 234.4 100 240 100S250.6 102.2 254.2 105.8L314.2000000000001 165.8A20.06 20.06 0 0 1 285.8 194.2L260 168.2V300C260 311 251 320 240 320S220 311 220 300V168.2L194.2 194.2A20.06 20.06 0 0 1 165.8 165.8M290 60H30C13.4 60 0 46.6 0 30S13.4 0 30 0H290C306.6 0 320 13.4 320 30S306.6 60 290 60M20 220C25.6 220 30.6 222.2 34.2 225.8L60 251.8V120C60 109 69 100 80 100S100 109 100 120V251.8L125.8 226C129.4 222.2 134.4 220 140 220A20.06 20.06 0 0 1 154.2 254.2L94.2 314.2C90.6 317.8 85.6 320 80 320S69.4 317.8 65.8 314.2L5.8 254.2A20.06 20.06 0 0 1 20 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Changes.displayName = `Blueprint6.Icon.Changes`;
export default Changes;
//# sourceMappingURL=changes.js.map