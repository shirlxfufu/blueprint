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

export const Dashboard: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="dashboard" ref={ref} {...props}>
            <path
                d={isLarge ? "M120 300C109 300 100 291 100 280S109 260 120 260S140 269 140 280S131 300 120 300M80 220C69 220 60 211 60 200S69 180 80 180S100 189 100 200S91 220 80 220M200 300C211 300 220 309 220 320S211 340 200 340S180 331 180 320S189 300 200 300M200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40M320 220C309 220 300 211 300 200S309 180 320 180S340 189 340 200S331 220 320 220M160 120C160 98 178 80 200 80S240 98 240 120C240 126.6 200 280 200 280S160 126.6 160 120M280 300C269 300 260 291 260 280S269 260 280 260S300 269 300 280S291 300 280 300" : "M100 240C89 240 80 231 80 220S89 200 100 200S120 209 120 220S111 240 100 240M80 180C69 180 60 171 60 160S69 140 80 140S100 149 100 160S91 180 80 180M160 220C171 220 180 229 180 240S171 260 160 260S140 251 140 240S149 220 160 220M120 100C120 78 138 60 160 60S200 78 200 100C200 110.6 160 200 160 200S120 110.6 120 100M160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320M160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40M240 220C240 231 231 240 220 240S200 231 200 220S209 200 220 200S240 209 240 220M240 180C229 180 220 171 220 160S229 140 240 140S260 149 260 160S251 180 240 180"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
Dashboard.displayName = `Blueprint6.Icon.Dashboard`;
export default Dashboard;
