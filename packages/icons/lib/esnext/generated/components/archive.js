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
export const Archive = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "archive", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M328.68 400A20 20 0 0 0 345.82 390.28L400 300V20A20 20 0 0 0 380 0H20A20 20 0 0 0 0 20V300L54.18 390.28A20 20 0 0 0 71.32 400zM200 240C189 240 180 231 180 220V128.4L154.2 154.2L152.58 155.66A20 20 0 0 1 140 160.2A20.06 20.06 0 0 1 125.8 126L185.8 66L187.72 64.3200000000001C191.08 61.72 195.32 60.2000000000001 200 60.2000000000001C205.6 60.2000000000001 210.6 62.4 214.2 66L274.2000000000001 126L275.88 127.92A20.06 20.06 0 0 1 245.8 154.4L220 128.4V220L219.86 222.32A20.08 20.08 0 0 1 200 240M320 360H80L40 299.9600000000001H360z" : "M267.64 320A20 20 0 0 0 285.52 308.94L320 240V20A20 20 0 0 0 300 0H20A20 20 0 0 0 0 20V240L34.48 308.94A20 20 0 0 0 52.36 320zM160 200C149 200 140 191 140 180V128.2L134.2 134L132.58 135.52A19.4 19.4 0 0 1 120 140A20.06 20.06 0 0 1 105.8 105.8L145.8 65.8L147.72 64.12C151.08 61.52 155.32 60 160 60C165.6 60 170.6 62.2 174.2 65.8L214.2 105.8L215.88 107.72A20.06 20.06 0 0 1 185.8 134.2L180 128.2V180L179.86 182.32A20.08 20.08 0 0 1 160 200M260 280H60L40 240H280z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Archive.displayName = `Blueprint6.Icon.Archive`;
export default Archive;
//# sourceMappingURL=archive.js.map