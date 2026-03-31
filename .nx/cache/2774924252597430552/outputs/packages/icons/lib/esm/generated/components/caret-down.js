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
export const CaretDown = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "caret-down", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M112.5 237.5L200 137.5L287.5 237.5zM200 122.48A15 15 0 0 1 211.28 127.6L298.78 227.6A15 15 0 0 1 287.5 252.5000000000001H112.5A15 15 0 0 1 101.2 227.6L188.7 127.6L189.84 126.46A15 15 0 0 1 200 122.48M145.56 222.48H254.42L200 160.3z" : "M90 190L160 110L230 190zM230 205L232.1600000000001 204.84A15 15 0 0 0 241.28 180.1L171.28 100.1A15 15 0 0 0 148.7 100.1L78.7 180.1A15 15 0 0 0 90 205zM160 132.8L196.92 175H123.06z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
CaretDown.defaultProps = {
    size: IconSize.STANDARD,
};
CaretDown.displayName = `Blueprint6.Icon.CaretDown`;
export default CaretDown;
//# sourceMappingURL=caret-down.js.map