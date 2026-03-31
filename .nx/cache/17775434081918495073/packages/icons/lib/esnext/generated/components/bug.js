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
export const Bug = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "bug", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M120.12 314.56C122.48 357.28 157.32 400 200 400C242.66 400 277.54 357.28 279.88 314.56C289.68 305.8 298.06 295.44 304.56 283.92L340 299.66V340A20 20 0 1 0 380 340V286.66A20 20 0 0 0 368.12 268.4L318.12 246.18Q320 235.84 320 225V200H380A20 20 0 1 0 380 160H320V150C320 137.92 318.2 126.26 314.9 115.26L368.12 91.62A20 20 0 0 0 380 73.34V20A20 20 0 1 0 340 20V60.34L297.06 79.42A120 120 0 0 0 200 30A120 120 0 0 0 102.94 79.42L60 60.34V20A20 20 0 1 0 20 20V73.34A20 20 0 0 0 31.88 91.6L85.1 115.2600000000001A120 120 0 0 0 80 150V160H20A20 20 0 1 0 20 200H80V225Q80 235.84 81.86 246.18L31.86 268.38A20 20 0 0 0 20 286.68V340A20 20 0 0 0 60 340V299.6600000000001L95.44 283.92A120 120 0 0 0 120.12 314.56M120 180V150A80 80 0 0 1 280 150V225A80 80 0 0 1 120 225z" : "M100 260A60 60 0 0 0 220 260A100 100 0 0 0 248.5 226.6L260 232.36V260A20 20 0 1 0 300 260V220A20 20 0 0 0 288.94 202.12L259.74 187.5Q259.98 183.78 260 180V160H300A20 20 0 1 0 300 120H260A100 100 0 0 0 255.8 91.22L287.42 78.56A20 20 0 0 0 300 60V20A20 20 0 1 0 260 20V46.46L236.66 55.8A99.8 99.8 0 0 0 160 20A99.8 99.8 0 0 0 83.34 55.8L60 46.46V20A20 20 0 1 0 20 20V60A20 20 0 0 0 32.58 78.56L64.2 91.22A100 100 0 0 0 60 120H20A20 20 0 1 0 20 160H60V180Q60 183.78 60.28 187.5L31.06 202.1A20 20 0 0 0 20 220V260A20 20 0 0 0 60 260V232.36L71.5 226.6A100 100 0 0 0 100 260M100 140V120A60 60 0 1 1 220 120V180A60 60 0 0 1 100 180z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Bug.displayName = `Blueprint6.Icon.Bug`;
export default Bug;
//# sourceMappingURL=bug.js.map