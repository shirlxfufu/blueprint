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
export const Time = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "time", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M220 208.2V320C220 331 211 340 200 340S180 331 180 320V200C180 194.4 182.2 189.4 185.8 185.8L245.8 125.8A20.06 20.06 0 0 1 274.2 154.2zM200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40" : "M160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320M160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40M180 168.2V240C180 251 171 260 160 260S140 251 140 240V160C140 154.4 142.2 149.4 145.8 145.8L185.8 105.8A20.06 20.06 0 0 1 214.2 134.2z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Time.displayName = `Blueprint6.Icon.Time`;
export default Time;
//# sourceMappingURL=time.js.map