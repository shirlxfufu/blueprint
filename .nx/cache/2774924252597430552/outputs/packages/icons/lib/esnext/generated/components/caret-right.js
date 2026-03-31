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
export const CaretRight = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "caret-right", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M162.5 112.48L262.5 199.98L162.5 287.48zM277.5 199.98A15 15 0 0 1 272.38 211.26L172.38 298.76A15 15 0 0 1 147.5 287.48V112.48A15 15 0 0 1 172.38 101.18L272.38 188.68L273.54 189.82A15 15 0 0 1 277.5 199.9800000000001M177.5 145.5400000000001V254.4L239.7200000000001 200z" : "M130 90L210 160L130 230zM123.8 243.64A15 15 0 0 0 139.88 241.28L219.88 171.28A15 15 0 0 0 219.88 148.68L139.88 78.68A15 15 0 0 0 115 90V230L115.16 232.18A15 15 0 0 0 123.8 243.66M145 123.06L187.2 160L145 196.94z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
CaretRight.defaultProps = {
    size: IconSize.STANDARD,
};
CaretRight.displayName = `Blueprint6.Icon.CaretRight`;
export default CaretRight;
//# sourceMappingURL=caret-right.js.map