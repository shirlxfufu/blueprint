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
export const Offline = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "offline", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200M225 286.82L200 205.6H250L175 111.8L200 193.08H150zM213.28 296.2A15 15 0 0 0 239.34 282.4L220.32 220.58H250A15 15 0 0 0 261.7200000000001 196.2L186.72 102.46A15 15 0 0 0 160.66 116.26L179.68 178.06H150A15 15 0 0 0 138.28 202.46zM214.78 190.58A20 20 0 0 0 214.34 188.66L212.5 182.74L218.8 190.58zM181.22 208.08H185.22A20 20 0 0 0 185.66 210L187.48 215.94z" : "M265 160A105 105 0 1 1 55 160A105 105 0 0 1 265 160M168.28 238.82A15 15 0 0 0 194.34 225.06L180.32 179.46H200A15 15 0 0 0 211.72 155.1L151.72 80.1A15 15 0 0 0 125.66 93.86L139.68 139.46H120A15 15 0 0 0 108.28 163.82zM295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Offline.defaultProps = {
    size: IconSize.STANDARD,
};
Offline.displayName = `Blueprint6.Icon.Offline`;
export default Offline;
//# sourceMappingURL=offline.js.map