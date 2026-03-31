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
export const AimpointsTarget = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "aimpoints-target", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M35 200A165 165 0 0 0 243.32 359.26A15 15 0 0 0 235.46 330.3A135 135 0 0 1 69.7 164.56A15 15 0 0 0 40.74 156.7A166 166 0 0 0 35 200M335 200C335 217.72 331.6 234.64 325.4 250.1A15 15 0 0 0 353.26 261.24A165 165 0 0 0 138.46 46.86A15 15 0 0 0 149.66 74.7A136 136 0 0 1 200 65A135 135 0 0 1 335 200M162.5 214.96A15 15 0 0 0 162.5 184.96H112.5A15 15 0 0 0 112.5 214.96zM185 162.46A15 15 0 0 0 215 162.46V112.46A15 15 0 0 0 185 112.46zM185 287.46A15 15 0 0 0 215 287.46V237.46A15 15 0 0 0 185 237.46zM287.5 214.96A15 15 0 0 0 287.5 184.96H237.5A15 15 0 0 0 237.5 214.96zM87.5 75A25 25 0 1 1 87.5 125A25 25 0 0 1 87.5 75M300 287.5A25 25 0 1 1 300 337.5A25 25 0 0 1 300 287.5" : "M25 160A135 135 0 0 0 195.42 290.3A15 15 0 1 0 187.5800000000001 261.34A105 105 0 0 1 58.66 132.44A15 15 0 0 0 29.7 124.58A136 136 0 0 0 25 160M265 160A104 104 0 0 1 257.52 198.98A15 15 0 0 0 285.4 210.1A135 135 0 0 0 109.64 34.7A15 15 0 1 0 120.84 62.54A104 104 0 0 1 160 55A105 105 0 0 1 265 160M130 174.98A15 15 0 0 0 130 144.98H90A15 15 0 1 0 90 174.98zM145 129.98A15 15 0 0 0 175 129.98V89.98A15 15 0 0 0 145 89.98zM145 229.98A15 15 0 0 0 175 229.98V189.98A15 15 0 1 0 145 189.98zM230 174.98A15 15 0 0 0 230 144.98H190A15 15 0 1 0 190 174.98zM70 60A20 20 0 1 1 70 100A20 20 0 0 1 70 60M240 230A20 20 0 1 1 240 270A20 20 0 0 1 240 230", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
AimpointsTarget.defaultProps = {
    size: IconSize.STANDARD,
};
AimpointsTarget.displayName = `Blueprint6.Icon.AimpointsTarget`;
export default AimpointsTarget;
//# sourceMappingURL=aimpoints-target.js.map