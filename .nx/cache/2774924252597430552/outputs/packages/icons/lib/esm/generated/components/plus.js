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
export const Plus = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "plus", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M337.5 215A15 15 0 0 0 337.5 185H62.5A15 15 0 0 0 62.5 215zM185 62.5V337.5A15 15 0 0 0 215 337.5V62.5A15 15 0 0 0 185 62.5" : "M145 50V145H50A15 15 0 0 0 50 175H145V270A15 15 0 0 0 175 270V175H270A15 15 0 0 0 270 145H175V50A15 15 0 0 0 145 50", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Plus.defaultProps = {
    size: IconSize.STANDARD,
};
Plus.displayName = `Blueprint6.Icon.Plus`;
export default Plus;
//# sourceMappingURL=plus.js.map