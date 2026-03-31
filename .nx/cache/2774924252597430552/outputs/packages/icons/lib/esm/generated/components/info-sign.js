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
export const InfoSign = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "info-sign", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M193.76 243.74A25 25 0 1 1 193.76 293.74A25 25 0 0 1 193.76 243.74M335 200A135 135 0 1 1 65 200A135 135 0 0 1 335 200M365 200A165 165 0 1 0 35 200A165 165 0 0 0 365 200M215 121A15 15 0 0 0 185 121V191.48A15 15 0 0 0 187.5 221.2600000000001C193.88 221.2600000000001 200.02 219.0200000000001 204.92 215.0200000000001L206.96 213.2200000000001L208.76 211.1800000000001C212.76 206.2800000000001 215 200.1400000000001 215 193.7600000000001z" : "M155 195A20 20 0 1 1 155 235A20 20 0 0 1 155 195M265 160A105 105 0 1 1 55 160A105 105 0 0 1 265 160M295 160A135 135 0 1 0 25 160A135 135 0 0 0 295 160M175 96.8A15 15 0 0 0 145 96.8V150.92A14.94 14.94 0 0 0 150 180A25 25 0 0 0 175 155z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
InfoSign.defaultProps = {
    size: IconSize.STANDARD,
};
InfoSign.displayName = `Blueprint6.Icon.InfoSign`;
export default InfoSign;
//# sourceMappingURL=info-sign.js.map