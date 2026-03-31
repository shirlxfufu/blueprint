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
export const ZoomToFit = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "zoom-to-fit", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M335 287.5V335H287.5A15 15 0 0 0 287.5 365H350A15 15 0 0 0 365 350V287.5A15 15 0 0 0 335 287.5M35 112.5A15 15 0 0 0 65 112.5V65H112.5A15 15 0 0 0 112.5 35H50A15 15 0 0 0 35 50zM335 112.5A15 15 0 0 0 365 112.5V50A15 15 0 0 0 350 35H287.5A15 15 0 0 0 287.5 65H335zM35 287.5V350A15 15 0 0 0 50 365H112.5A15 15 0 0 0 112.5 335H65V287.5A15 15 0 0 0 35 287.5M298.1 248.12L335.62 210.6A15 15 0 0 0 335.62 189.4L298.1 151.88A15 15 0 0 0 276.9 173.08L303.8 200L276.9 226.9A15 15 0 1 0 298.1 248.1M151.88 298.1L189.4 335.6A15 15 0 0 0 210.6 335.6L248.12 298.1A15 15 0 0 0 226.92 276.9L200 303.76L173.1 276.88A15 15 0 1 0 151.9 298.08M101.9 151.88L64.4 189.38A15 15 0 0 0 64.4 210.58L101.9 248.1A15 15 0 0 0 123.1 226.9L96.22 199.98L123.12 173.08A15 15 0 1 0 101.92 151.88M151.9 101.8799999999999L189.4 64.3599999999999A15 15 0 0 1 210.6 64.3599999999999L248.12 101.8799999999999A15.02 15.02 0 0 1 226.92 123.0799999999999L200 96.2L173.08 123.12A15 15 0 1 1 151.88 101.9" : "M25 90A15 15 0 0 0 55 90V55H90A15 15 0 0 0 90 25H40A15 15 0 0 0 25 40zM265 90A15 15 0 0 0 295 90V40A15 15 0 0 0 280 25H230A15 15 0 0 0 230 55H265zM179.4 100.6A15 15 0 0 0 200.62 79.4L170.62 49.38A15 15 0 0 0 149.4 49.38L119.4 79.38A15 15 0 0 0 140.6 100.6L159.98 81.2zM79.4 200.6A15 15 0 0 0 100.6 179.4L81.2 160L100.6 140.6A15 15 0 0 0 79.4 119.38L49.4 149.38A15 15 0 0 0 49.4 170.6zM219.4 200.6A15 15 0 0 0 240.6 200.6L270.6 170.6A15 15 0 0 0 270.6 149.4L240.6 119.4A15 15 0 0 0 219.4 140.6L238.8 160L219.4 179.4A15 15 0 0 0 219.4 200.6M25 230V280A15 15 0 0 0 40 295H90A15 15 0 0 0 90 265H55V230A15 15 0 0 0 25 230M160 275C163.98 275 167.8 273.4 170.6 270.6L200.6 240.6A15 15 0 1 0 179.4 219.4L160 238.8L140.6 219.4A15 15 0 1 0 119.4 240.6L149.4 270.6A15 15 0 0 0 160 275M265 230V265H230A15 15 0 0 0 230 295H280A15 15 0 0 0 295 280V230A15 15 0 0 0 265 230", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
ZoomToFit.defaultProps = {
    size: IconSize.STANDARD,
};
ZoomToFit.displayName = `Blueprint6.Icon.ZoomToFit`;
export default ZoomToFit;
//# sourceMappingURL=zoom-to-fit.js.map