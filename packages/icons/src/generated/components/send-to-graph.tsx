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
import type { SVGIconProps } from "../../svgIconProps";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";

export const SendToGraph: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="send-to-graph" ref={ref} {...props}>
            <path
                d={isLarge ? "M160 180H60C49 180 40 171 40 160S49 140 60 140H111.8L6 34.2C2.2 30.6 0 25.6 0 20A20.06 20.06 0 0 1 34.2 5.8L140 111.8V60C140 49 149 40 160 40S180 49 180 60V160C180 171 171 180 160 180M360 140C349.4 140 339.8 135.8 332.6 129L238 188C239.2 191.8 240 195.8 240 200S239.2 208.2 238 212L332.4000000000001 271C339.8000000000001 264.2 349.4000000000001 260 360 260C382 260 400 278 400 300S382 340 360 340S320 322 320 300C320 295.8 320.8 291.8 322 288L227.4000000000001 228.8C222.6 233.4000000000001 216.6 236.8000000000001 210 238.4000000000001V321.4C227.2 325.8 240.0000000000001 341.4 240.0000000000001 360C240.0000000000001 382 222 400 200 400S160 382 160 360C160 341.4 172.8 325.8 190 321.4V238.6C183.4 236.8 177.4 233.4 172.6 229L152 241.8L108.4 269L78 288C79.2 291.8 80 295.8 80 300C80 322 62 340 40 340S0 322 0 300S18 260 40 260C50.6 260 60.2 264.2 67.4 271L180 200.8V200H181.2L240 163.2L248 158.2L278.2 139.4L322 112C320.8000000000001 108.2000000000001 320 104.2000000000001 320 100.0000000000001C320 78.0000000000001 338 60 360 60S400 78 400 100S382 140 360 140M220 199.2L218.8 200H220z" : "M120 140H40C29 140 20 131 20 120S29 100 40 100H71.8L6 34.2C2.2 30.6 0 25.6 0 20A20.06 20.06 0 0 1 34.2 5.8L100 71.8V40C100 29 109 20 120 20S140 29 140 40V120C140 131 131 140 120 140M280 130C268.8 130 258.8 125.4 251.6 118.2L209 143L179.8 160L251.6 201.8A40.04 40.04 0 0 1 320 230C320 252 302 270 280 270S240 252 240 230C240 226.2 240.6 222.6 241.6 219.2L170 177.4V241.4C187.2 245.8 200 261.4 200 280C200 302 182 320 160 320S120 302 120 280C120 261.4 132.8 245.8 150 241.4V177.4L132.4 187.8L78.4 219.2C79.4 222.6 80 226.2 80 230C80 252 62 270 40 270S0 252 0 230S18 190 40 190C51.2 190 61.2 194.6 68.4 201.8L111 177L187.8 132.2L241.8 100.8Q240 95.7 240 90C240 68 258 50 280 50S320 68 320 90S302 130 280 130"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
SendToGraph.displayName = `Blueprint6.Icon.SendToGraph`;
export default SendToGraph;
