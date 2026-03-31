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
export const Unlink = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "unlink", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M320 400C364.2000000000001 400 400 364.2 400 320C400 297.8 390.8 278.2 376.4 263.6L376.6 263.4L316.6 203.4L316.4000000000001 203.6A81 81 0 0 0 275.1200000000001 181.46L256.48 200.0800000000001L348.2 291.8C355.6 299 360 309 360 320C360 342 342 360 320 360C309 360 299 355.6 291.8 348.4L200 256.6L181.46 275.12A81 81 0 0 0 203.6 316.4L203.4 316.6L263.4 376.6L263.6 376.4C278.2 390.8 297.8 400 320 400M214.08 242.48L265.8 294.2A20.06 20.06 0 1 0 294.2 265.8L242.48 214.08zM171.66 200.06L157.66 214.06L51.8 108.2C44.4 101 40 91 40 80C40 58 58 40 80 40C91 40 101 44.4 108.2 51.6L128.2 71.6L214.16 157.56L200.06 171.66L134.2 105.8A20.08 20.08 0 1 0 105.8 134.2zM152.98 218.74L65.86 305.86A20 20 0 0 0 94.14 334.14L334.14 94.14A20 20 0 0 0 305.86 65.86L218.74 152.98C219.54 148.78 220 144.52 220 140C220 117.8 210.8 98.2 196.4 83.6L196.6 83.4L136.6 23.4L136.4 23.6000000000001C121.8 9.2 102.2 0 80 0C35.8 0 0 35.8 0 80C0 102.2 9.2 121.8 23.6 136.4L23.4 136.6L83.4 196.6L83.6 196.4C98.2 210.8 117.8 220 140 220C144.5 220 148.76 219.54 152.98 218.74" : "M239.96 319.9A79.92 79.92 0 0 0 319.9 239.94C319.9 217.76 310.7 198.18 296.1 183.78L296.5 183.38L276.52 163.38L276.12 163.78A79.4 79.4 0 0 0 235.08 141.5L216.48 160.08L248.14 191.98L268.14 211.98L267.94 212.18C275.14 219.38 279.94 229.16 279.94 240.14C279.94 262.14 261.94 280.14 239.94 280.14C228.94 280.14 219.16 275.34 211.96 268.14L211.76 268.34L160 216.56L141.52 235.06A80.8 80.8 0 0 0 163.8 276.12L163.4 276.52L183.4 296.52L183.8 296.12A78.6 78.6 0 0 0 239.94 319.9M45.86 274.14A20 20 0 0 0 74.14 274.14L274.14 74.14A20 20 0 0 0 245.86 45.86L178.72 113Q179.94 106.64 179.98 100.04C179.98 78.04 170.78 58.26 156.2 43.88L156.6 43.48L136.6 23.48L136.2 23.88A78.6 78.6 0 0 0 80.04 0.1A79.92 79.92 0 0 0 0.1 80.04C0.1 102.04 9.3 121.84 23.9 136.22L23.5 136.62L43.48 156.62L43.88 156.22A78.6 78.6 0 0 0 100.04 179.98Q106.72 179.96 113.02 178.7L45.86 245.86A20 20 0 0 0 45.86 274.14M160.06 131.66L114.22 85.86A20.04 20.04 0 0 0 85.82 114.26L131.66 160.06L117.78 173.94L51.86 108.04L52.06 107.84C44.86 100.64 40.06 90.84 40.06 79.84C40.06 57.86 58.06 39.88 80.06 39.88C91.06 39.88 100.84 44.68 108.04 51.88L108.24 51.68L174.14 117.58zM174.1 202.46L205.78 234.16A20.04 20.04 0 0 0 234.18 205.76L202.48 174.1z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Unlink.displayName = `Blueprint6.Icon.Unlink`;
export default Unlink;
//# sourceMappingURL=unlink.js.map