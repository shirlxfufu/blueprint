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
export const Delete = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "delete", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M300 280A20.06 20.06 0 0 1 265.8 294.2L200 228.2L134.2 294.2A20.06 20.06 0 0 1 105.8 265.8L171.8 200L106 134.2000000000001C102.2 130.6 100 125.6 100 120A20.06 20.06 0 0 1 134.2 105.8L200 171.8L265.8 106C269.4 102.2000000000001 274.4 100 280 100A20.06 20.06 0 0 1 294.2000000000001 134.2000000000001L228.2 200L294 265.8C297.8 269.4 300 274.4 300 280M200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40" : "M239.8 220.2A20.06 20.06 0 0 1 205.6 234.4L159.8 188.4L114 234.2A19.4 19.4 0 0 1 99.8 240.2A20.06 20.06 0 0 1 85.6 206L131.4 160.2L85.6 114.4A20.06 20.06 0 0 1 114 86L159.8 131.8L205.6 86A20.06 20.06 0 0 1 234.0000000000001 114.4L188.2 160.2L234 206C237.6 209.6 239.8 214.6 239.8 220.2M159.8 320.2C71.4 320.2 -0.2 248.6 -0.2 160.2S71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2S248.2 320.2 159.8 320.2M159.8 40.2C93.6 40.2 39.8 94 39.8 160.2S93.6 280.2 159.8 280.2S279.8 226.4 279.8 160.2S226.2 40.2 159.8 40.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Delete.displayName = `Blueprint6.Icon.Delete`;
export default Delete;
//# sourceMappingURL=delete.js.map