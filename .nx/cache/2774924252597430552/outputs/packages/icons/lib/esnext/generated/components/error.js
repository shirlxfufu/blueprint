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
export const Error = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "error", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200M185 193.74V275A15 15 0 0 0 215 275V193.74A15 15 0 0 0 185 193.74M200 106.24A25 25 0 1 1 200 156.24A25 25 0 0 1 200 106.24" : "M265 160A105 105 0 1 1 55 160A105 105 0 0 1 265 160M295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160M145 155V220A15 15 0 0 0 175 220V155A15 15 0 0 0 145 155M160 85A20 20 0 1 1 160 125A20 20 0 0 1 160 85", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Error.defaultProps = {
    size: IconSize.STANDARD,
};
Error.displayName = `Blueprint6.Icon.Error`;
export default Error;
//# sourceMappingURL=error.js.map