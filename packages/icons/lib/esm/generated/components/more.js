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
export const More = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "more", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M70 240A50 50 0 1 0 70 140A50 50 0 0 0 70 240M210 240A50 50 0 1 0 210 140A50 50 0 0 0 210 240M350 240A50 50 0 1 0 350 140A50 50 0 0 0 350 240" : "M40 200A40 40 0 1 0 40 120A40 40 0 0 0 40 200M160 200A40 40 0 1 0 160 120A40 40 0 0 0 160 200M280 200A40 40 0 1 0 280 120A40 40 0 0 0 280 200", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
More.displayName = `Blueprint6.Icon.More`;
export default More;
//# sourceMappingURL=more.js.map