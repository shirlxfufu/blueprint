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
export const Saved = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "saved", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M240 400H80C69 400 60 391 60 380V20C60 9 69 0 80 0H340C351 0 360 9 360 20V280zM320 40H100V360H220V260H320zM154.2 174.2A20.06 20.06 0 0 1 125.8 145.8L185.8 85.8C189.4 82.2000000000001 194.4 80.0000000000001 200 80.0000000000001C206.4 80.0000000000001 211.8 83.2000000000001 215.4 87.6L215.6 87.4L295.6 187.4000000000001L295.4 187.6000000000001C298.2 191.2000000000001 300 195.2000000000001 300 200C300 211.0000000000001 291 220 280 220C273.6 220 268.2 216.8000000000001 264.6 212.4L264.4000000000001 212.6L198.4 130z" : "M134.2 134.2A20.06 20.06 0 0 1 105.8 105.8L145.8 65.8A19.94 19.94 0 0 1 177.8 71.2H178L218 151.2H217.8C219 153.8 220 156.8 220 160C220 171 211 180 200 180C192.2 180 185.6 175.4 182.2 168.8H182L154.4 113.6zM180 320H60C49 320 40 311 40 300V20C40 9 49 0 60 0H260C271 0 280 9 280 20V220zM240 40H80V280H160V200H240z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Saved.displayName = `Blueprint6.Icon.Saved`;
export default Saved;
//# sourceMappingURL=saved.js.map