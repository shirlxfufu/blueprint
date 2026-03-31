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
export const Pause = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "pause", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M252.5 77.5H310V322.5H252.5zM340 75C340 59.8 327.68 47.5 312.5 47.5H250C234.8 47.5 222.5 59.82 222.5 75V325C222.5 340.2 234.82 352.5 250 352.5H312.5C327.7000000000001 352.5 340 340.18 340 325zM90 77.5H147.5V322.5H90zM177.5 75C177.5 59.8 165.18 47.5 150 47.5H87.5C72.3 47.5 60 59.82 60 75V325C60 340.2 72.32 352.5 87.5 352.5H150C165.2 352.5 177.5 340.18 177.5 325z" : "M205 65H245V255H205zM75 65H115V255H75zM145 60C145 46.2 133.8 35 120 35H70C56.2 35 45 46.2 45 60V260C45 273.8 56.2 285 70 285H120C133.8 285 145 273.8 145 260zM275 60C275 46.2 263.8 35 250 35H200C186.2 35 175 46.2 175 60V260C175 273.8 186.2 285 200 285H250C263.8 285 275 273.8 275 260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Pause.defaultProps = {
    size: IconSize.STANDARD,
};
Pause.displayName = `Blueprint6.Icon.Pause`;
export default Pause;
//# sourceMappingURL=pause.js.map