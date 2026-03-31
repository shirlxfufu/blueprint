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
export const OneToOne = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "one-to-one", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M40 200A20 20 0 1 1 80 200A20 20 0 0 1 40 200M116.6 220H283.4A60.02 60.02 0 1 0 283.4 180H116.6A60.02 60.02 0 1 0 116.6 220M340 220A20 20 0 1 1 340 180A20 20 0 0 1 340 220" : "M40 160A20 20 0 1 1 80 160A20 20 0 0 1 40 160M116.6 180H203.4A60.02 60.02 0 1 0 203.4 140H116.6A60.02 60.02 0 1 0 116.6 180M260 180A20 20 0 1 1 260 140A20 20 0 0 1 260 180", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
OneToOne.displayName = `Blueprint6.Icon.OneToOne`;
export default OneToOne;
//# sourceMappingURL=one-to-one.js.map