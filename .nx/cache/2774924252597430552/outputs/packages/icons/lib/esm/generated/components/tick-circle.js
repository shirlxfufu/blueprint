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
export const TickCircle = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "tick-circle", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M251.9 248.1A15 15 0 1 0 273.1 226.9L185.6 139.4A15 15 0 0 0 164.4 139.4L126.9 176.9A15 15 0 1 0 148.1 198.1L175 171.2zM335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200" : "M265 160A105 105 0 1 1 55 160A105 105 0 0 1 265 160M199.4 200.6A15 15 0 1 0 220.6 179.4L150.6 109.4A15 15 0 0 0 129.4 109.4L99.4 139.4A15 15 0 1 0 120.6 160.6L140 141.2zM295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
TickCircle.defaultProps = {
    size: IconSize.STANDARD,
};
TickCircle.displayName = `Blueprint6.Icon.TickCircle`;
export default TickCircle;
//# sourceMappingURL=tick-circle.js.map