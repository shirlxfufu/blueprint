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
export const CircleDashed = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "circle-dashed", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M170.66 52.86Q184.86 50.02 200 50V0C186.64 0 173.6 1.34 160.98 3.84zM239 3.86A200 200 0 0 0 200 0V50Q215.16 50.04 229.34 52.86zM75.24 116.7000000000001A152 152 0 0 1 116.7 75.24L102.78 54.48L92.92 39.72L88.86 33.72A202 202 0 0 0 33.72 88.88zM366.14 88.98L366.28 88.88A202 202 0 0 0 311.12 33.72L297.2000000000001 54.46L283.3 75.24A152 152 0 0 1 324.76 116.7000000000001zM0 200C0 213.36 1.34 226.4 3.82 239.02L28.34 234.18L52.86 229.34A152 152 0 0 1 52.86 170.66L28.32 165.84L28.34 165.82L3.82 161A200 200 0 0 0 0 200M400 200C400 186.64 398.64 173.6 396.16 161L371.66 165.82L347.14 170.66Q349.98 184.8600000000001 350 200Q349.9600000000001 215.1600000000001 347.14 229.3400000000001L396.14 239.0200000000001Q399.9599999999999 220.06 400 200M102.8 345.54L116.7 324.76A152 152 0 0 1 75.24 283.3L33.72 311.14A202 202 0 0 0 88.86 366.2800000000001zM311.12 366.28C332.92 351.68 351.68 332.94 366.28 311.14L345.54 297.2V297.2200000000001L324.76 283.3A152 152 0 0 1 283.3 324.76zM200 400C213.34 400 226.4 398.6600000000001 239 396.18L229.34 347.14A152 152 0 0 1 170.66 347.14L161 396.2A200 200 0 0 0 200 400" : "M136.54 42.28Q147.88 40.02 160 40V0A160 160 0 0 0 128.8 3.08zM191.2 3.08Q176.04 0.04 160 0V40Q172.12 40.04 183.46 42.28zM60.2 93.36A120 120 0 0 1 93.36 60.18L82.22 43.58L74.32 31.78L71.1 26.98A160 160 0 0 0 26.96 71.1zM292.9 71.18L293.02 71.12A160 160 0 0 0 248.9 26.98L237.76 43.58L226.64 60.18A120 120 0 0 1 259.8200000000001 93.36zM0 160Q0.04 176.06 3.06 191.2L22.66 187.34L42.28 183.46A120 120 0 0 1 42.28 136.54L22.66 132.68V132.6600000000001L3.06 128.8000000000001A160 160 0 0 0 0 160M320 160Q319.96 143.96 316.92 128.8L297.32 132.66L277.72 136.54A120 120 0 0 1 277.72 183.46L316.92 191.22Q319.96 176.04 320 160M82.24 276.44L93.36 259.82A120 120 0 0 1 60.18 226.64L27 248.9A160 160 0 0 0 71.12 293.04zM248.9 293.04A160 160 0 0 0 293.02 248.9L276.42 237.76V237.8L259.82 226.66A120 120 0 0 1 226.64 259.84zM160 320Q176.04 319.96 191.2 316.94L183.46 277.7200000000001A120 120 0 0 1 136.54 277.7200000000001L128.78 316.92A160 160 0 0 0 160 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
CircleDashed.displayName = `Blueprint6.Icon.CircleDashed`;
export default CircleDashed;
//# sourceMappingURL=circle-dashed.js.map