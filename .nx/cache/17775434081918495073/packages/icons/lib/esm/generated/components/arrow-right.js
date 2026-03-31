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
export const ArrowRight = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "arrow-right", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M374.2000000000001 214.2L254.2 334.2000000000001A20.06 20.06 0 0 1 225.8 305.8L311.8 220H40C29 220 20 211 20 200S29 180 40 180H311.8L226 94.2000000000001C222.2 90.6 220 85.6 220 80A20.06 20.06 0 0 1 254.2 65.8L374.2000000000001 185.8C377.8 189.4 380 194.4 380 200S377.8 210.6 374.2000000000001 214.2" : "M294 174.2L194 274.2A19.4 19.4 0 0 1 179.8 280.2A20.06 20.06 0 0 1 165.6 246L231.3999999999999 180.2H39.8C28.8 180.2 19.8 171.2 19.8 160.2S28.8 140.2 39.8 140.2H231.6L165.8 74.4A20.06 20.06 0 0 1 194.2 46L294.2 146C297.8 149.6 300 154.6 300 160.2S297.6 170.6 294 174.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ArrowRight.displayName = `Blueprint6.Icon.ArrowRight`;
export default ArrowRight;
//# sourceMappingURL=arrow-right.js.map