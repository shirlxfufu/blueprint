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
export const RootFolder = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "root-folder", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M60 380V240H20A20 20 0 0 1 0 220V20A20 20 0 0 1 20 0H280A20 20 0 0 1 300 20V100H380A20 20 0 0 1 400 120V340C400 351 391 360 380 360H228.4L194.2 394A19.4 19.4 0 0 1 180 400H80C69 400 60 391 60 380M211.92 320H360V140H300V220A20 20 0 0 1 280 240H100V360H171.68zM180 200H220L120 40H80z" : "M40 300V200H20A20 20 0 0 1 0 180V20A20 20 0 0 1 20 0H220A20 20 0 0 1 240 20V80H300A20 20 0 0 1 320 100V260C320 271 311 280 300 280H188.4L154.2 314A19.4 19.4 0 0 1 140 320H60C49 320 40 311 40 300M171.92 240H280V120H240V180A20 20 0 0 1 220 200H80V280H131.68zM140 160H180L100 40H60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
RootFolder.displayName = `Blueprint6.Icon.RootFolder`;
export default RootFolder;
//# sourceMappingURL=root-folder.js.map