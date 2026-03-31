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
export const TwoColumns = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "two-columns", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M100 400H20C9 400 0 391 0 380V20C0 9 9 0 20 0H100C111 0 120 9 120 20V380C120 391 111 400 100 400M394.2000000000001 214.2L334.2000000000001 274.2000000000001A20.06 20.06 0 0 1 300 260V140A20.06 20.06 0 0 1 334.2000000000001 125.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200S397.8 210.6 394.2000000000001 214.2M240 400H160C149 400 140 391 140 380V20C140 9 149 0 160 0H240C251 0 260 9 260 20V380C260 391 251 400 240 400" : "M79.8 320.2H19.8C8.8 320.2 -0.2 311.2 -0.2 300.2V20.2C-0.2 9.2 8.8 0.2 19.8 0.2H79.8C90.8 0.2 99.8 9.2 99.8 20.2V300.2C99.8 311.2 90.8 320.2 79.8 320.2M314 174.2L274 214.2A20.06 20.06 0 0 1 239.8000000000001 200V120A20.06 20.06 0 0 1 274.0000000000001 105.8L314.0000000000001 145.8C317.6 149.4 319.8000000000001 154.4 319.8000000000001 160S317.6 170.6 314.0000000000001 174.2M199.8 320.2H139.8C128.8 320.2 119.8 311.2 119.8 300.2V20.2C119.8 9.2 128.8 0.2 139.8 0.2H199.8C210.8 0.2 219.8 9.2 219.8 20.2V300.2C219.8 311.2 210.8 320.2 199.8 320.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
TwoColumns.displayName = `Blueprint6.Icon.TwoColumns`;
export default TwoColumns;
//# sourceMappingURL=two-columns.js.map