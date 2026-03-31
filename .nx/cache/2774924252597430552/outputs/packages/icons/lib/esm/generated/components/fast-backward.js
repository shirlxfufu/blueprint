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
export const FastBackward = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "fast-backward", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M340.28 314.86Q343.92 314.5 347.3400000000001 313.2200000000001L350.6600000000001 311.68L353.74 309.74A27.4 27.4 0 0 0 365 287.86V112.14A27.34 27.34 0 0 0 322.88 89.34L185.16 177.06H185.14A27.16 27.16 0 0 0 185.14 222.98L322.9 310.7C327.02 313.3 331.74 314.78 336.62 314.98zM204.92 200L335 117.2V282.8zM177.78 314.86Q181.42 314.5 184.84 313.2200000000001L188.16 311.68L191.26 309.74A27.4 27.4 0 0 0 202.5 287.86V112.14A27.34 27.34 0 0 0 160.38 89.34L22.66 177.06H22.64A27.16 27.16 0 0 0 22.64 222.98L160.4 310.7C164.5 313.3 169.22 314.78 174.1 314.98zM42.4 200L172.48 117.2V282.8z" : "M269.18 254.98A26 26 0 0 0 278.92 253.38L281.96 251.98L284.76 250.22Q287.46 248.26 289.54 245.66L291.42 242.94L292.96 240C294.26 236.94 294.96 233.66 295 230.32V89.68A24.94 24.94 0 0 0 269.18 65.04A24.8 24.8 0 0 0 256.7200000000001 68.94L165 127.34V89.68A24.92 24.92 0 0 0 139.18 65.0400000000001A24.8 24.8 0 0 0 126.72 68.9400000000001L16.52 139.12V139.1A24.8 24.8 0 0 0 8.06 171.94L9.74 174.56Q12.52 178.36 16.5 180.92L126.7 251.08A24.8 24.8 0 0 0 148.92 253.38L151.96 251.98L154.76 250.22Q157.46 248.26 159.54 245.66L161.42 242.94L162.94 240C164.26 236.94 164.98 233.66 165 230.32V192.68L256.7200000000001 251.08C260.46 253.48 264.76 254.8 269.18 254.98M39.54 160L135 99.2V220.8zM169.54 160L265 99.2V220.8z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
FastBackward.defaultProps = {
    size: IconSize.STANDARD,
};
FastBackward.displayName = `Blueprint6.Icon.FastBackward`;
export default FastBackward;
//# sourceMappingURL=fast-backward.js.map