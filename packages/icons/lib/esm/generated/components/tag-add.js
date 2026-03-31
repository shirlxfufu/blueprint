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
export const TagAdd = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "tag-add", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M300 380A20 20 0 0 0 320 360V320H360A20 20 0 1 0 360 280H320V240A20 20 0 1 0 280 240V280H240A20 20 0 1 0 240 320H280V360A20 20 0 0 0 300 380M216.2 332.14A40 40 0 0 1 240 260H260V240A40 40 0 0 1 332.14 216.2L348.24 200.1A40 40 0 0 0 348.24 143.52L256.48 51.76A40 40 0 0 0 199.9 51.76L51.6999999999999 199.96A40 40 0 0 0 40 228.24V320A40 40 0 0 0 80 360H171.76A40 40 0 0 0 200.04 348.28zM79.86 290.2200000000001A29.9 29.9 0 1 1 139.66 290.2200000000001A29.9 29.9 0 0 1 79.86 290.2200000000001" : "M240 320A20 20 0 0 0 260 300V260H300A20 20 0 1 0 300 220H260V180A20 20 0 1 0 220 180V220H180A20 20 0 0 0 180 260H220V300A20 20 0 0 0 240 320M155.84 271.88A40 40 0 0 1 180 200H200V180A40 40 0 0 1 271.88 155.84A40 40 0 0 0 268.22 103.46L176.54 11.8A40 40 0 0 0 119.96 11.8L11.72 120.04A40 40 0 0 0 0 148.32V240A40 40 0 0 0 40 280H131.68A40 40 0 0 0 155.84 271.88M39.84 210.26A29.88 29.88 0 1 1 99.64 210.26A29.88 29.88 0 0 1 39.84 210.26", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
TagAdd.displayName = `Blueprint6.Icon.TagAdd`;
export default TagAdd;
//# sourceMappingURL=tag-add.js.map