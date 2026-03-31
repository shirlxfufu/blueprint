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

export const NotificationsSnooze: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="notifications-snooze" ref={ref} {...props}>
            <path
                d={isLarge ? "M240 40C240 18 222 0 200 0S160 18 160 40zM200 400C209.52 400 218.28 396.64 225.16 391.04Q202.66 378.14 200 350Q196 308 232 292Q200 256 200 240V216A56 56 0 0 1 256 160H320V120C320 109.8 327.7600000000001 101.3 337.68 100.14L340 100C351 100 360 91 360 80S351 60 340 60H60C49 60 40 69 40 80S49 100 60 100S80 109 80 120V240C80 292.2 113.4 336.2 160 352.6V360C160 382 178 400 200 400M360 215V222.9A15 15 0 0 1 345 237.9H288.76L356.68 322A15 15 0 0 1 360 331.4V345A15 15 0 0 1 345 360H255A15 15 0 0 1 240 345V341.32C240 333.04 246.72 326.32 255 326.32H311.26L244.4 243.38A20 20 0 0 1 239.98 230.84V215C239.98 206.72 246.7 200 254.98 200H344.98A15 15 0 0 1 359.98 215" : "M200 40C200 18 182 0 160 0S120 18 120 40zM160 320C168.08 320 175.1 315.14 178.24 308.2L178 308C164 296 160 280.8 160 270Q160 246 176 232Q160 214 160.32 194.66L160.4 187.5A56 56 0 0 1 216.4 132L260 132.02V120C260 109.8 267.76 101.3 277.68 100.14L280 100C291 100 300 91 300 80S291 60 280 60H40C29 60 20 69 20 80S29 100 40 100S60 109 60 120V200C60 248.6 94.6 289 140.4 298L140 300C140 311 149 320 160 320M280 185.96A12.6 12.6 0 0 1 267.36 198.6H232.5L276.68 253.28A15 15 0 0 1 280 262.7200000000001V268.7200000000001A11.3 11.3 0 0 1 268.7 280H211.22A11.22 11.22 0 1 1 211.22 257.54H247.5L204.42 204.1A20 20 0 0 1 200 191.54V185.96C200 178.98 205.66 173.34 212.64 173.34H267.36A12.6 12.6 0 0 1 280 185.96"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
NotificationsSnooze.displayName = `Blueprint6.Icon.NotificationsSnooze`;
export default NotificationsSnooze;
