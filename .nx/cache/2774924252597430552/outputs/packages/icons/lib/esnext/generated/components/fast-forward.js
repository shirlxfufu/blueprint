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
export const FastForward = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "fast-forward", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M59.72 314.86Q56.08 314.5 52.66 313.2200000000001L49.34 311.68L46.24 309.74A27.4 27.4 0 0 1 35 287.86V112.14A27.36 27.36 0 0 1 77.12 89.34L214.84 177.06H214.86A27.2 27.2 0 0 1 214.86 222.98L77.08 310.7A27.4 27.4 0 0 1 63.38 314.98zM195.08 200L65 117.2V282.8zM222.22 314.86Q218.58 314.5 215.16 313.2200000000001L211.84 311.68L208.74 309.74A27.4 27.4 0 0 1 197.5 287.86V112.14A27.36 27.36 0 0 1 239.6200000000001 89.34L377.3400000000001 177.06H377.36A27.2 27.2 0 0 1 377.36 222.98L239.6 310.7A27.4 27.4 0 0 1 225.88 314.98zM357.6 200L227.52 117.2V282.8z" : "M55 99.22L150.44 160.02L55 220.76zM185 99.22L280.46 160.02L185 220.76zM315 160.02A24.8 24.8 0 0 0 303.5 139.08L303.48 139.1L193.28 68.9V68.92A24.88 24.88 0 0 0 155 89.66V127.32L63.28 68.92A24.88 24.88 0 0 0 25 89.66V230.32L25.26 233.62A24 24 0 0 0 28.56 242.94L30.46 245.64A24.8 24.8 0 0 0 50.82 254.96L54.12 254.62C57.36 254.06 60.46 252.84 63.26 251.06L155 192.66V230.34C155.04 234.7800000000001 156.26 239.14 158.56 242.94L160.46 245.6600000000001Q163.62 249.58 168.0600000000001 252L171.0600000000001 253.4Q175.7800000000001 255.14 180.8200000000001 255L184.12 254.64Q189.02 253.7800000000001 193.2600000000001 251.08L303.4600000000001 180.92Q307.4600000000001 178.36 310.2600000000001 174.58L311.9400000000001 171.96L313.2600000000001 169.12C314.4000000000001 166.24 315.0000000000001 163.14 315.0000000000001 160.02", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
FastForward.defaultProps = {
    size: IconSize.STANDARD,
};
FastForward.displayName = `Blueprint6.Icon.FastForward`;
export default FastForward;
//# sourceMappingURL=fast-forward.js.map