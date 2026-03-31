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
export const Dot = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "dot", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M250 204.46A50 50 0 1 0 150 204.46A50 50 0 0 0 250 204.46M220 204.46A20 20 0 1 1 200 184.46V154.46A50 50 0 1 0 200 254.46A50 50 0 0 0 200 154.46V184.46A20 20 0 0 1 220 204.46" : "M200 163.58A40 40 0 1 0 120 163.58A40 40 0 0 0 200 163.58M170 163.58A10 10 0 1 1 160 153.58V123.58A40 40 0 1 0 160 203.58A40 40 0 0 0 160 123.58V153.58A10 10 0 0 1 170 163.58", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Dot.defaultProps = {
    size: IconSize.STANDARD,
};
Dot.displayName = `Blueprint6.Icon.Dot`;
export default Dot;
//# sourceMappingURL=dot.js.map