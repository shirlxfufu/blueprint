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
export const Th = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "th", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M65 102.5H335V297.5H65zM365 100A27.52 27.52 0 0 0 337.5 72.5H62.5A27.52 27.52 0 0 0 35 100V312.5A15 15 0 0 0 50 327.5H350A15 15 0 0 0 365 312.5zM350 252.5A15 15 0 0 0 350 222.5H50A15 15 0 0 0 50 252.5zM350 177.5A15 15 0 0 0 350 147.5H50A15 15 0 0 0 50 177.5zM122.5 87.5V237.5A15 15 0 0 0 152.5 237.5V87.5A15 15 0 0 0 122.5 87.5" : "M125 85H265V115H125zM55 85H95V115H55zM125 145H265V175H125zM55 145H95V175H55zM55 205H265V235H55zM295 80A25 25 0 0 0 270 55H50A25 25 0 0 0 25 80V250A15 15 0 0 0 40 265H280A15 15 0 0 0 295 250z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Th.defaultProps = {
    size: IconSize.STANDARD,
};
Th.displayName = `Blueprint6.Icon.Th`;
export default Th;
//# sourceMappingURL=th.js.map