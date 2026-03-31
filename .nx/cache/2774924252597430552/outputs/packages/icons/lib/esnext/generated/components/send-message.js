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
export const SendMessage = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "send-message", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M225 215A15 15 0 1 0 225 185H125A15 15 0 1 0 125 215zM139.2 204.8A15 15 0 0 0 139.2 195.2L92 55.4L345.08 200.16L92.02 344.52zM377.5800000000001 200.16A27.4 27.4 0 0 0 363.5800000000001 176.24V176.18L101.12 26.04L101.02 25.98A27.52 27.52 0 0 0 60.94 42.9399999999999A27.4 27.4 0 0 0 61.6 59.06H61.56L109.16 200L61.56 340.92H61.58A27.4 27.4 0 0 0 60.98 357.06L61.6 359.06A27.6 27.6 0 0 0 84.9 377.3L87 377.42C91.18 377.5 95.32 376.62 99.1 374.88L100.96 373.92L101.08 373.86L363.5800000000001 224.1A27.4 27.4 0 0 0 377.5800000000001 200.14" : "M110.76 175H180A15 15 0 0 0 180 145H110.76L78.94 50.84L269.98 160.12L78.96 269.12zM305.08 160.1A25 25 0 0 0 292.34 138.36V138.34L82.34 18.22L82.26 18.18A24.98 24.98 0 0 0 46.42 48.2L84.16 160L46.4 271.78H46.42A25 25 0 0 0 45.9 286.44L47.14 290.02C48.66 293.48 50.96 296.58 53.88 299.04L56.96 301.24A25 25 0 0 0 67.64 304.8400000000001L71.4 304.88C75.18 304.68 78.88 303.6 82.2 301.74L82.32 301.68L292.32 181.88L292.3 181.86A25 25 0 0 0 305.06 160.06", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
SendMessage.defaultProps = {
    size: IconSize.STANDARD,
};
SendMessage.displayName = `Blueprint6.Icon.SendMessage`;
export default SendMessage;
//# sourceMappingURL=send-message.js.map