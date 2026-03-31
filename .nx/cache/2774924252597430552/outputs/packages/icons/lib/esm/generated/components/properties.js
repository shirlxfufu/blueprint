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
export const Properties = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "properties", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M337.5 315A15 15 0 0 0 337.5 285H137.5A15 15 0 1 0 137.5 315zM337.5 215A15 15 0 0 0 337.5 185H137.5A15 15 0 0 0 137.5 215zM337.5 115A15 15 0 0 0 337.5 85H137.5A15 15 0 0 0 137.5 115zM68.76 175A25 25 0 1 1 68.76 225A25 25 0 0 1 68.76 175M68.76 275A25 25 0 1 1 68.76 325A25 25 0 0 1 68.76 275M68.76 75A25 25 0 1 1 68.76 125A25 25 0 0 1 68.76 75" : "M270 255A15 15 0 0 0 270 225H110A15 15 0 0 0 110 255zM270 175A15 15 0 0 0 270 145H110A15 15 0 0 0 110 175zM270 95A15 15 0 0 0 270 65H110A15 15 0 0 0 110 95zM55 140A20 20 0 1 1 55 180A20 20 0 0 1 55 140M55 220A20 20 0 1 1 55 260A20 20 0 0 1 55 220M55 60A20 20 0 1 1 55 100A20 20 0 0 1 55 60", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Properties.defaultProps = {
    size: IconSize.STANDARD,
};
Properties.displayName = `Blueprint6.Icon.Properties`;
export default Properties;
//# sourceMappingURL=properties.js.map