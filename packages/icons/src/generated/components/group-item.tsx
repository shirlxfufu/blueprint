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

export const GroupItem: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (
        <SVGIconContainer iconName="group-item" ref={ref} {...props}>
            <path
                d={isLarge ? "M315.14 385.94A20 20 0 0 1 286.86 385.94L216.14 315.24A20 20 0 0 1 216.14 286.94L286.86 216.24A20 20 0 0 1 315.14 216.24L385.86 286.94A20 20 0 0 1 385.86 315.24zM20 360.08A20 20 0 0 0 40 380.08H160A20 20 0 0 0 180 360.08V240.08A20 20 0 0 0 160 220.08H40A20 20 0 0 0 20 240.08zM60 260.08V340.08H140V260.08zM40 180.08A20 20 0 0 1 20 160.08V40.0799999999999A20 20 0 0 1 40 20.0799999999999H160A20 20 0 0 1 180 40.0799999999999V160.08A20 20 0 0 1 160 180.08zM60 140.08V60.0799999999999H140V140.0799999999999zM220 160.08A20 20 0 0 0 240 180.08H360A20 20 0 0 0 380 160.08V40.0799999999999A20 20 0 0 0 360 20.0799999999999H240A20 20 0 0 0 220 40.0799999999999zM260 60.0799999999999V140.0799999999999H340V60.0799999999999z" : "M172.04 257.58A20 20 0 0 1 172.04 229.28L228.6 172.72A20 20 0 0 1 256.9 172.72L313.46 229.28A20 20 0 0 1 313.46 257.5800000000001L256.9000000000001 314.14A20 20 0 0 1 228.6 314.14zM0 299.9A20 20 0 0 0 20 319.9H120A20 20 0 0 0 140 299.9V199.9A20 20 0 0 0 120 179.9H20A20 20 0 0 0 0 199.9zM40 219.9V279.9H100V219.9zM200 139.9A20 20 0 0 1 180 119.9V19.9A20 20 0 0 1 200 -0.1H300A20 20 0 0 1 320 19.9V119.9A20 20 0 0 1 300 139.9zM220 99.9V39.9H280V99.9zM0 119.9A20 20 0 0 0 20 139.9H120A20 20 0 0 0 140 119.9V19.9A20 20 0 0 0 120 -0.1H20A20 20 0 0 0 0 19.9zM40 39.9V99.9H100V39.9z"}
                fillRule="evenodd"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
                style={style}
            />
        </SVGIconContainer>
   );
});
GroupItem.displayName = `Blueprint6.Icon.GroupItem`;
export default GroupItem;
