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
export const Import = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "import", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M185 175V350A15 15 0 0 0 215 350V175A15 15 0 0 0 185 175M47.5 175A15 15 0 0 0 77.5 175V90H322.5V175A15 15 0 0 0 352.5 175V75A15 15 0 0 0 337.5 60H62.5A15 15 0 0 0 47.5 75zM251.9 248.1A15 15 0 1 0 273.1 226.9L210.6 164.4A15 15 0 0 0 189.4 164.4L126.9 226.9A15 15 0 1 0 148.1 248.1L200 196.2z" : "M35 140A15 15 0 0 0 65 140V75H255V140A15 15 0 0 0 285 140V60A15 15 0 0 0 270 45H50A15 15 0 0 0 35 60zM145 280A15 15 0 0 0 175 280V176.2L199.4 200.6A15 15 0 1 0 220.6 179.4L170.6 129.4A15 15 0 0 0 149.4 129.4L99.4 179.4A15 15 0 1 0 120.6 200.6L145 176.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Import.defaultProps = {
    size: IconSize.STANDARD,
};
Import.displayName = `Blueprint6.Icon.Import`;
export default Import;
//# sourceMappingURL=import.js.map