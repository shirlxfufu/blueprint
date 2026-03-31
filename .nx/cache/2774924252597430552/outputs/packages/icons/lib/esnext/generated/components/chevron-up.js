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
export const ChevronUp = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "chevron-up", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M190.52 286.64A15 15 0 0 0 210.6 285.6L335.6 160.6A15 15 0 1 0 314.4000000000001 139.4L200 253.8L85.6 139.4A15 15 0 1 0 64.4 160.6L189.4 285.6z" : "M150.52 231.64A15 15 0 0 0 170.6 230.62L270.6 130.62A15 15 0 1 0 249.4 109.42L160 198.8L70.6 109.4A15 15 0 1 0 49.4 130.6L149.4 230.6z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ChevronUp.defaultProps = {
    size: IconSize.STANDARD,
};
ChevronUp.displayName = `Blueprint6.Icon.ChevronUp`;
export default ChevronUp;
//# sourceMappingURL=chevron-up.js.map