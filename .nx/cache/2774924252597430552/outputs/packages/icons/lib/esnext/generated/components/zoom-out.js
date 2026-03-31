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
export const ZoomOut = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "zoom-out", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M225 240A15 15 0 0 0 225 210H125A15 15 0 1 0 125 240zM285 225A110 110 0 1 1 65 225A110 110 0 0 1 285 225M315 225A140 140 0 1 0 35 225A140 140 0 0 0 315 225M252.8 147.22A15 15 0 0 0 274 147.22L360.6 60.62A15 15 0 1 0 339.4000000000001 39.42L252.8000000000001 126.02A15 15 0 0 0 252.8000000000001 147.22" : "M225 180A85 85 0 1 1 55 180A85 85 0 0 1 225 180M180 195A15 15 0 0 0 180 165H100A15 15 0 0 0 100 195zM255 180C255 153.66 246.12 129.4 231.2 110.02L290.6 50.62A15 15 0 1 0 269.4000000000001 29.4L209.98 88.8A115 115 0 1 0 255 180", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ZoomOut.defaultProps = {
    size: IconSize.STANDARD,
};
ZoomOut.displayName = `Blueprint6.Icon.ZoomOut`;
export default ZoomOut;
//# sourceMappingURL=zoom-out.js.map