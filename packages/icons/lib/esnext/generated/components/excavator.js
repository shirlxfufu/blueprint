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
export const Excavator = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "excavator", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M383.2 203.92L395.2000000000001 163.92A20 20 0 0 0 375.6 140H180A20 20 0 0 0 160 160V214.56A20 20 0 0 0 162.78 224.68L195.2 280L214 312A20 20 0 0 0 230 320H300A20 20 0 0 0 320 300V220H363.6A20 20 0 0 0 383.2 203.92M200 220H280V280H235.2zM85 390L179.78 340.12A19.96 19.96 0 0 0 187.44 311.14L180 300L80 340.12L40 200H120L67.16 147.16A19 19 0 0 0 50.02 141.76C19.04 148.1 0 161.2 0 200L53.16 377.2200000000001C56.74 389.12 73.9 395.56 85 390M60 60A60 60 0 0 0 120 120H340A60 60 0 0 0 340 0H120A60 60 0 0 0 60 60M100 60A20 20 0 0 1 120 40H340A20 20 0 0 1 340 80H120A20 20 0 0 1 100 60" : "M34.44 297.78A20 20 0 0 0 61.28 311.5L119.8 288.08A20 20 0 0 0 130.26 260.56L120 240L60 260L40 160H100L55.26 117.8A18.8 18.8 0 0 0 36.3 113.38C15.64 120.54 0.9 131.52 0.04 157.52A20 20 0 0 0 0.6 162.4zM284.4000000000001 200A20 20 0 0 0 303.8 184.86L313.8 144.86A20 20 0 0 0 294.4000000000001 120H160A20 20 0 0 0 140 140V213.94A20 20 0 0 0 143.36 225.04L174.06 271.1A20 20 0 0 0 190.7 280H240A20 20 0 0 0 260 260V200zM206.6 240L180 200H220V240zM110 100H270A50 50 0 0 0 270 0H110A50 50 0 0 0 110 100M110 60A10 10 0 0 1 110 40H270A10 10 0 0 1 270 60z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Excavator.displayName = `Blueprint6.Icon.Excavator`;
export default Excavator;
//# sourceMappingURL=excavator.js.map