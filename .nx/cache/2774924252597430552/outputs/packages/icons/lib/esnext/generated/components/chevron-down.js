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
export const ChevronDown = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "chevron-down", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M314.4000000000001 260.6A15 15 0 1 0 335.6 239.4L210.6 114.4A15 15 0 0 0 189.4 114.4L64.4 239.4A15 15 0 1 0 85.6 260.6L200 146.2z" : "M249.4 210.6A15 15 0 1 0 270.6 189.4L170.6 89.4A15 15 0 0 0 149.4 89.4L49.4 189.4A15 15 0 1 0 70.6 210.6L160 121.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ChevronDown.defaultProps = {
    size: IconSize.STANDARD,
};
ChevronDown.displayName = `Blueprint6.Icon.ChevronDown`;
export default ChevronDown;
//# sourceMappingURL=chevron-down.js.map