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

export const CloudDownload: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="cloud-download" ref={ref} {...props}>
            <path
                d={isLarge ? "M300 320C297.6 320 295.2 319.4 292.8 319.2C276.6 366.2 232.4 400 180 400C113.8 400 60 346.2 60 280C60 279 60.2 278.2 60.2 277.2A79.6 79.6 0 0 1 0 200C0 155.8 35.8 120 80 120H95.6C106.6 132.2 122.4 140 140 140V180C140 213.2 166.8 240 200 240S260 213.2 260 180V140C277.6 140 293.2 132.4 304 120.4C357.4000000000001 122.6 400 166.2 400 220C400 275.2 355.2 320 300 320M260 100C254.4 100 249.4 97.8 245.8 94.2000000000001L220 68.2V180C220 191 211 200 200 200S180 191 180 180V68.2L154.2 94A19.4 19.4 0 0 1 140 100A20.06 20.06 0 0 1 125.8 65.8L185.8 5.8C189.4 2.2 194.4 0 200 0S210.6 2.2 214.2 5.8L274.2000000000001 65.8A20.06 20.06 0 0 1 260 100" : "M220 100C214.4 100 209.4 97.8 205.8 94.2L180 68.2V160C180 171 171 180 160 180S140 171 140 160V68.2L114.2 94A19.4 19.4 0 0 1 100 100A20.06 20.06 0 0 1 85.8 65.8L145.8 5.8C149.4 2.2 154.4 0 160 0S170.6 2.2 174.2 5.8L234.2 65.8A20.06 20.06 0 0 1 220 100M240 240C239.4 240 238.6 240 238 239.8A100 100 0 0 1 40 220C40 217.8 40.2 215.6 40.4 213.4A70.2 70.2 0 0 1 0 150C0 121.8 16.8 97.8 40.6 86.6C44 116.6 69.2 140 100 140C101.2 140 102.6 139.6 103.8 139.6C101.4 146 100 152.8 100 160C100 193.2 126.8 220 160 220S220 193.2 220 160C220 152.8 218.6 146 216.2 139.6C217.4 139.6 218.8 140 220 140C249.6 140 274 118.6 279 90.6A79.2 79.2 0 0 1 320 160C320 204.2 284.2000000000001 240 240 240"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
CloudDownload.displayName = `Blueprint6.Icon.CloudDownload`;
export default CloudDownload;
