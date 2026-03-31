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
export const ArrayTimestamp = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "array-timestamp", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M100 352.5A15 15 0 0 0 100 322.5H52.5V77.5H100A15 15 0 0 0 100 47.5H37.5A15 15 0 0 0 22.5 62.5V337.5A15 15 0 0 0 37.5 352.5zM362.5 352.5A15 15 0 0 0 377.5 337.5V62.5A15 15 0 0 0 362.5 47.5H300A15 15 0 0 0 300 77.5H347.5V322.5H300A15 15 0 0 0 300 352.5zM285 200A85 85 0 1 1 115 200A85 85 0 0 1 285 200M315 200A115 115 0 1 0 85 200A115 115 0 0 0 315 200M185 237.5A15 15 0 0 0 215 237.5V215H237.5A15 15 0 0 0 237.5 185H200A15 15 0 0 0 185 200z" : "M80 285A15 15 0 0 0 80 255H45V65H80A15 15 0 0 0 80 35H30A15 15 0 0 0 15 50V270A15 15 0 0 0 30 285zM290 285A15 15 0 0 0 305 270V50A15 15 0 0 0 290 35H240A15 15 0 0 0 240 65H275V255H240A15 15 0 0 0 240 285zM225 160A65 65 0 1 1 95 160A65 65 0 0 1 225 160M145 190A15 15 0 0 0 175 190V175H190A15 15 0 0 0 190 145H160A15 15 0 0 0 145 160zM255 160A95 95 0 1 0 65 160A95 95 0 0 0 255 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ArrayTimestamp.defaultProps = {
    size: IconSize.STANDARD,
};
ArrayTimestamp.displayName = `Blueprint6.Icon.ArrayTimestamp`;
export default ArrayTimestamp;
//# sourceMappingURL=array-timestamp.js.map