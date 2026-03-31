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
export const ZoomIn = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "zoom-in", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M225 240A15 15 0 0 0 225 210H125A15 15 0 0 0 125 240zM285 225A110 110 0 1 1 65 225A110 110 0 0 1 285 225M315 225A140 140 0 1 0 35 225A140 140 0 0 0 315 225M252.8 147.2A15 15 0 0 0 274 147.2L360.6 60.6A15 15 0 1 0 339.4000000000001 39.4L252.8000000000001 126.0000000000001A15 15 0 0 0 252.8000000000001 147.2000000000001M160 175V275A15 15 0 0 0 190 275V175A15 15 0 0 0 160 175" : "M225 180A85 85 0 1 1 55 180A85 85 0 0 1 225 180M125 140V165H100A15 15 0 0 0 100 195H125V220A15 15 0 0 0 155 220V195H180A15 15 0 0 0 180 165H155V140A15 15 0 0 0 125 140M255 180C255 153.66 246.12 129.4 231.2 110.02L290.6 50.62A15 15 0 1 0 269.4000000000001 29.4L209.98 88.8A115 115 0 1 0 255 180", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ZoomIn.defaultProps = {
    size: IconSize.STANDARD,
};
ZoomIn.displayName = `Blueprint6.Icon.ZoomIn`;
export default ZoomIn;
//# sourceMappingURL=zoom-in.js.map