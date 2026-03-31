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
export const Pulse = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "pulse", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M150.46 352.5C156.52 352.3 161.86 348.48 164.02 342.82L251.86 112.26L299.0800000000001 206.7L300.1600000000001 208.5A15 15 0 0 0 312.5 215H362.5A15 15 0 0 0 362.5 185H321.78L263.42 68.3A15 15 0 0 0 235.98 69.66L148.78 298.56L101.14 193.8A15 15 0 0 0 87.48 185H37.48A15 15 0 0 0 37.48 215H77.84L136.32 343.7200000000001L137.4 345.7A15 15 0 0 0 150.44 352.5" : "M120.46 285C126.52 284.8 131.86 280.98 134.02 275.32L201.86 97.26L236.58 166.7L237.6600000000001 168.5A15 15 0 0 0 250 175H290A15 15 0 0 0 290 145H259.2800000000001L213.42 53.3A15 15 0 0 0 185.98 54.66L118.78 231.06L83.64 153.8A15 15 0 0 0 69.98 145H29.98A15 15 0 0 0 29.98 175H60.34L106.34 276.2200000000001L107.4 278.2A15 15 0 0 0 120.44 285", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Pulse.defaultProps = {
    size: IconSize.STANDARD,
};
Pulse.displayName = `Blueprint6.Icon.Pulse`;
export default Pulse;
//# sourceMappingURL=pulse.js.map