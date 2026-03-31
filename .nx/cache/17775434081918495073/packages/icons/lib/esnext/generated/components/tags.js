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
export const Tags = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "tags", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M60 340A40 40 0 0 0 100 380H191.76A40 40 0 0 0 220.04 368.28L368.24 220.08A40 40 0 0 0 368.24 163.52L276.48 71.76A40 40 0 0 0 219.9 71.76L71.7 219.96A40 40 0 0 0 60 248.24zM129.78 340.12A29.9 29.9 0 1 1 129.78 280.32A29.9 29.9 0 0 1 129.78 340.12M40 306.2200000000001L25.36 281.06C20.06 271.92 18.62 261.06 21.36 250.86L75.7 49.5A40.1 40.1 0 0 1 124.76 21.36L220.46 46.84A60 60 0 0 0 205.76 57.64L57.56 205.8A60 60 0 0 0 40 248.24z" : "M80 320H171.68A40 40 0 0 0 199.96 308.28L308.22 200.04A40 40 0 0 0 308.22 143.46L216.54 51.78A40 40 0 0 0 159.96 51.78L51.72 160.04A40 40 0 0 0 40 188.32V280A40 40 0 0 0 80 320M79.86 250.14A30 30 0 1 1 139.86 250.14A30 30 0 0 1 79.86 250.14M5.26 216.48L20 243.62V188.32A60 60 0 0 1 37.58 145.88L145.82 37.64C152.06 31.4 159.34 26.8200000000001 167.1 23.9L88.2 1.4C67.3 -4.54 45.8 8.64 40.2 30.86L1.36 184.86A44 44 0 0 0 5.28 216.46", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Tags.displayName = `Blueprint6.Icon.Tags`;
export default Tags;
//# sourceMappingURL=tags.js.map