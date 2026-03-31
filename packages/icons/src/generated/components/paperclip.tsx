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

export const Paperclip: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="paperclip" ref={ref} {...props}>
            <path
                d={isLarge ? "M367 346.6A113.2 113.2 0 0 1 286.6 380C257.8 380 228.8 368.8 206.8 346.6L23.6 161.2C8 145.4 0 124.4 0 103.4S7.8 61.4 23.6 45.4C39.2 29.6 60 21.8 80.6 21.8C101.4 21.8 122 29.6 138 45.8L320.8 231.2C340 250.4 340 281.2 321.2 300.2S271.4 319.4 252.4 300.2L100.6 146.4C94.4 140 94.6 129.8 100.8 123.6S117 117.4 123.4 123.2L275.2 277C281.4 283.2 292 283.2 297.8 277.4C304 271.2 304 260.4 297.8 254.2L114.9999999999999 68.8C96.3999999999999 49.8 64.1999999999999 50.1999999999999 45.9999999999999 68.4C27.1999999999999 87.4 27.5999999999999 119.4 46.3999999999999 138.2L229.6 323.2C260.6 354.4 313.2 355 343.9999999999999 323.8C375.1999999999999 292.4 375 238.6 343.9999999999999 207.4L166.1999999999999 26.9999999999999C160.1999999999999 20.8 160.1999999999999 10.8 166.3999999999999 4.8C172.3999999999999 -1.2 182.1999999999999 -1.4 188.3999999999999 4.5999999999999V4.3999999999999L366.5999999999999 184.7999999999999A113 113 0 0 1 400 265.4C400 295 389 324.2 367 346.6" : "M293.6 273.8A90.8 90.8 0 0 1 229.2 300.2C206.2 300.2 183 291.4 165.4 273.8L19 127.4C6.4 114.8 0 98.2 0 81.8A64.2 64.2 0 0 1 64.6 17.4C81.2 17.4 97.8 23.6 110.6 36.4L256.8 182.8C272 198.2 272 222.4 257 237.4S217.2 252.6 202 237.4L80.6 115.8C75.8 110.8 75.8 102.8 80.8 97.8S93.8 92.8 99 97.6L220.4 219.2C225.4 224.2 233.8 224.2 238.6 219.4C243.6 214.4 243.6 206 238.6 201L92.4 54.6C77.4 39.6 51.6 39.8 37.2 54.4C22.2 69.4 22.6 94.8 37.4 109.6L184 255.8C208.8 280.6 251 281 275.6 256.4C300.4 231.6 300.4 189.2 275.6 164.4L133.2 21.8C128.4 16.8 128.4 9 133.4 4.2C138.2 -0.6 146 -0.6 151 4V3.8L293.6 146.4A88 88 0 0 1 320 209.8C320 233 311.2 256.2 293.6 273.8"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Paperclip.displayName = `Blueprint6.Icon.Paperclip`;
export default Paperclip;
