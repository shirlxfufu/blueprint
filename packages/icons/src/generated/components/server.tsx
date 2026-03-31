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

export const Server: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="server" ref={ref} {...props}>
            <path
                d={isLarge ? "M275 400C288.8 400 300 388.8 300 375V125C300 111.2 288.8 100 275 100H125C111.2 100 100 111.2 100 125V375C100 388.8 111.2 400 125 400zM230 360A10 10 0 0 1 220 350V330A10 10 0 0 1 230 320H250A10 10 0 0 1 260 330V350A10 10 0 0 1 250 360zM220 270V250A10 10 0 0 1 230 240H250A10 10 0 0 1 260 250V270A10 10 0 0 1 250 280H230A10 10 0 0 1 220 270M230 200A10 10 0 0 1 220 190V170A10 10 0 0 1 230 160H250A10 10 0 0 1 260 170V190A10 10 0 0 1 250 200zM80 185.48V125A45 45 0 0 1 125 80H275A45 45 0 0 1 320 125V185.48L392.14 133.12A19.4 19.4 0 0 0 394.76 104.26L304.76 6.76A21.4 21.4 0 0 0 289.04 0H110.96C104.96 0 99.24 2.46 95.26 6.76L5.24 104.26A19.4 19.4 0 0 0 7.84 133.12z" : "M220 320A20 20 0 0 0 240 300V100A20 20 0 0 0 220 80H100A20 20 0 0 0 80 100V300A20 20 0 0 0 100 320zM200 266.6600000000001C200 274 194 280 186.66 280H173.34C166 280 160 274 160 266.6600000000001V253.34C160 246 166 240 173.34 240H186.66C194 240 200 246 200 253.34zM200 193.34V206.66C200 214 194 220 186.66 220H173.34C166 220 160 214 160 206.66V193.34C160 186 166 180 173.34 180H186.66C194 180 200 186 200 193.34M200 146.66C200 154 194 160 186.66 160H173.34C166 160 160 154 160 146.66V133.34C160 126 166 120 173.34 120H186.66C194 120 200 126 200 133.34zM8.92 112.82L60 146.82V100A40 40 0 0 1 100 60H220A40 40 0 0 1 260 100V146.8L311.08 112.84A20 20 0 0 0 314.86 82.8L246.14 6.62C242.3400000000001 2.42 236.94 0 231.24 0H88.76C83.08 0 77.66 2.4 73.86 6.62L5.14 82.82A20 20 0 0 0 8.94 112.82"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Server.displayName = `Blueprint6.Icon.Server`;
export default Server;
