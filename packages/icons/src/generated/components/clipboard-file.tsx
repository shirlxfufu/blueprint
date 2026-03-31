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

export const ClipboardFile: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="clipboard-file" ref={ref} {...props}>
            <path
                d={isLarge ? "M140 220A20 20 0 0 0 160 240H291.7200000000001A20 20 0 0 0 305.86 234.14L334.14 205.86A20 20 0 0 0 340 191.72V20A20 20 0 0 0 320 0H160A20 20 0 0 0 140 20zM190 180A10 10 0 0 1 190 160H290A10 10 0 0 1 290 180zM190 120A10 10 0 0 1 190 100H290A10 10 0 0 1 290 120zM190 60A10 10 0 0 1 190 40H290A10 10 0 0 1 290 60zM240 361.14C240 371.82 231 380.58 220 380.58H204.4A39.8 39.8 0 0 1 170 400C155.2 400 142.4 392.2200000000001 135.6 380.58H120C109 380.58 100 371.82 100 361.14V340H240zM260 320H80.8V360H60A20 20 0 0 1 40 340V60A20 20 0 0 1 60 40H120V240A20 20 0 0 0 140 260H300V340A20 20 0 0 1 280 360H260z" : "M231.72 200A20 20 0 0 0 245.86 194.14L274.14 165.86A20 20 0 0 0 280 151.72V20A20 20 0 0 0 260 0H140A20 20 0 0 0 120 20V180A20 20 0 0 0 140 200zM160 140A10 10 0 0 1 160 120H240A10 10 0 0 1 240 140zM160 100A10 10 0 0 1 160 80H240A10 10 0 0 1 240 100zM160 60A10 10 0 0 1 160 40H240A10 10 0 0 1 240 60zM161.8 301.8C171.8 301.8 180 293.64 180 283.64V270H100V283.64C100 293.64 108.2 301.82 118.2 301.82H114.2C120.34 312.7200000000001 126.52 320 140 320S159.64 312.7200000000001 165.8 301.8zM200 280H221.8C231.8 280 240 271.8 240 261.8V220H120A20 20 0 0 1 100 200V40H58.2C48.2 40 40 48.18 40 58.18V261.8C40 271.8 48.2 279.98 58.2 279.98H80V249.98H200z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
ClipboardFile.displayName = `Blueprint6.Icon.ClipboardFile`;
export default ClipboardFile;
