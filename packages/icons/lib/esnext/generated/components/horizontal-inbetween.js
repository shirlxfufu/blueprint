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
export const HorizontalInbetween = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "horizontal-inbetween", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M225.86 125.86A20 20 0 0 1 254.1 125.86L313.36 185.1A20 20 0 0 1 313.36 214.9L254.1 274.14A19.98 19.98 0 1 1 225.86 245.9L271.74 200L225.86 154.1A20 20 0 0 1 225.86 125.86M145.9 125.86A19.98 19.98 0 0 1 174.14 154.1L128.26 200L174.14 245.9A19.98 19.98 0 1 1 145.9 274.14L86.64 214.9L85.84 214.14A20 20 0 0 1 80 200A20 20 0 0 1 86.64 185.1zM0 0V400H20A20 20 0 0 0 40 380V20A20 20 0 0 0 20 0zM400 0V400H380A20 20 0 0 1 360 380V20A20 20 0 0 1 380 0z" : "M0 0V320H20A20 20 0 0 0 40 300V20A20 20 0 0 0 20 0zM300 320H320V0H300A20 20 0 0 0 280 20V300A20 20 0 0 0 300 320M134.14 185.86A20 20 0 0 1 105.86 214.14L65.86 174.14A20 20 0 0 1 65.86 145.86L105.86 105.86A20 20 0 0 1 134.14 134.14L108.28 160zM214.14 214.14A20 20 0 0 1 185.86 185.86L211.72 160L185.86 134.14A20 20 0 1 1 214.14 105.86L254.14 145.86A20 20 0 0 1 254.14 174.14z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
HorizontalInbetween.displayName = `Blueprint6.Icon.HorizontalInbetween`;
export default HorizontalInbetween;
//# sourceMappingURL=horizontal-inbetween.js.map