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
export const Package = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "package", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M236.98 393.88L377.88 323.42A40 40 0 0 0 400 287.64V113.54A40 40 0 0 0 374.86 76.4L195.76 4.76A40 40 0 0 0 163.02 6.12L22.12 76.6A40 40 0 0 0 0 112.4V286.44A40 40 0 0 0 25.14 323.6L204.24 395.24A40 40 0 0 0 236.98 393.88M200 206.46V49.54L360 113.54V270.46L300 246.46V143.28L260 127.42V230.46z" : "M196 317L298 265C312 259 320 245 320 229V93C320 77 310 61 294 55L156 3C146 -1 134 -1 124 3L22 55C8 61 0 75 0 91V227C0 243 10 259 26 265L164 317C174 321 186 321 196 317M240 196.14V122L200 106V181.14L160 166.14V45.78L280 91V211.14z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Package.displayName = `Blueprint6.Icon.Package`;
export default Package;
//# sourceMappingURL=package.js.map