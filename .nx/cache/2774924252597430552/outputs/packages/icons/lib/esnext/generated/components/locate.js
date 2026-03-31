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
export const Locate = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "locate", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M185 37.5V87.5A15 15 0 0 0 215 87.5V37.5A15 15 0 0 0 185 37.5M322.5 200A122.5 122.5 0 1 1 77.5 200A122.5 122.5 0 0 1 322.5 200M352.5 200A152.5 152.5 0 1 0 47.5 200A152.5 152.5 0 0 0 352.5 200M185 312.5V362.5A15 15 0 0 0 215 362.5V312.5A15 15 0 0 0 185 312.5M87.5 215A15 15 0 0 0 87.5 185H37.5A15 15 0 0 0 37.5 215zM362.5 215A15 15 0 0 0 362.5 185H312.5A15 15 0 0 0 312.5 215zM235 200A35 35 0 1 1 165 200A35 35 0 0 1 235 200M265 200A65 65 0 1 0 135 200A65 65 0 0 0 265 200" : "M145 30V35.94A125 125 0 0 0 35.94 145H30A15 15 0 0 0 30 175H35.94A125 125 0 0 0 145 284.08V290A15 15 0 0 0 175 290V284.08A125 125 0 0 0 284.06 175H290A15 15 0 0 0 290 145H284.06A125 125 0 0 0 175 35.94V30A15 15 0 0 0 145 30M185 160A25 25 0 1 1 135 160A25 25 0 0 1 185 160M145 250V253.82A95 95 0 0 1 66.2 175H70A15 15 0 0 0 70 145H66.2A95 95 0 0 1 145 66.2V70A15 15 0 0 0 175 70V66.2A95 95 0 0 1 253.8 145H250A15 15 0 0 0 250 175H253.8A95 95 0 0 1 175 253.82V250A15 15 0 0 0 145 250M215 160A55 55 0 1 0 105 160A55 55 0 0 0 215 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Locate.defaultProps = {
    size: IconSize.STANDARD,
};
Locate.displayName = `Blueprint6.Icon.Locate`;
export default Locate;
//# sourceMappingURL=locate.js.map