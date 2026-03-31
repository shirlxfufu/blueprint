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
export const ChevronRight = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "chevron-right", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M139.4 335.6A15 15 0 0 0 160.6 335.6L285.6 210.6A15 15 0 0 0 285.6 189.4L160.6 64.4A15 15 0 1 0 139.4 85.6L253.8 200L139.4 314.4A15 15 0 0 0 139.4 335.6" : "M109.4 270.6A15 15 0 0 0 130.6 270.6L230.6 170.6A15 15 0 0 0 230.6 149.4L130.6 49.4A15 15 0 1 0 109.4 70.6L198.8 160L109.4 249.4A15 15 0 0 0 109.4 270.6", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ChevronRight.defaultProps = {
    size: IconSize.STANDARD,
};
ChevronRight.displayName = `Blueprint6.Icon.ChevronRight`;
export default ChevronRight;
//# sourceMappingURL=chevron-right.js.map