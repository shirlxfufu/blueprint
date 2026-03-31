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
export const Comment = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "comment", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M200 200A25 25 0 1 1 200 250A25 25 0 0 1 200 200M125 200A25 25 0 1 1 125 250A25 25 0 0 1 125 200M275 200A25 25 0 1 1 275 250A25 25 0 0 1 275 200M65 137.5A10 10 0 0 1 75 127.5H100A15 15 0 0 0 115 112.5V56.54L176.5 122.72A15 15 0 0 0 187.5 127.5H335V322.5H65zM365 125A27.52 27.52 0 0 0 337.5 97.5H194.04L131.54 30.24A27.52 27.52 0 0 0 85 49.98V97.4999999999999H75A40 40 0 0 0 35 137.5V325C35 332.3 37.88 339.3 43.04 344.46L45.08 346.26C49.98 350.26 56.12 352.5 62.5 352.5H337.5C343.88 352.5 350.0200000000001 350.28 354.92 346.26L356.96 344.46L358.76 342.42C362.76 337.52 365 331.38 365 325z" : "M160 160A20 20 0 1 1 160 200A20 20 0 0 1 160 160M100 160A20 20 0 1 1 100 200A20 20 0 0 1 100 160M220 160A20 20 0 1 1 220 200A20 20 0 0 1 220 160M55 110C55 107.24 57.24 105 60 105H80L81.54 104.92A15 15 0 0 0 95 90V52.88L139 100.22A15 15 0 0 0 150 105H265V255H55zM295 100A25 25 0 0 0 270 75H156.54L107.42 22.14A20 20 0 0 0 106.1 20.88A25 25 0 0 0 65 39.98V75H60A35 35 0 0 0 25 110V260A25 25 0 0 0 50 285H270A25 25 0 0 0 295 260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Comment.defaultProps = {
    size: IconSize.STANDARD,
};
Comment.displayName = `Blueprint6.Icon.Comment`;
export default Comment;
//# sourceMappingURL=comment.js.map