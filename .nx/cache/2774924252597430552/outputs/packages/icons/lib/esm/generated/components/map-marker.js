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
export const MapMarker = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "map-marker", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M235 237.5A35 35 0 1 1 165 237.5A35 35 0 0 1 235 237.5M265 237.5A65 65 0 1 0 135 237.5A65 65 0 0 0 265 237.5M208.6 25.2A15 15 0 0 0 191.4 25.2L200 37.5zM310 237.52A110 110 0 0 1 90 237.52C90 186.66 118.44 140.12 148.82 105.18C163.82 87.92 178.88 73.98 190.18 64.38C193.9 61.2000000000001 197.24 58.54 200 56.3800000000001C202.74 58.5400000000001 206.1 61.2000000000001 209.82 64.38A392 392 0 0 1 251.18 105.18C281.58 140.12 310 186.68 310 237.5200000000001M340 237.5200000000001C340 175.88 305.94 122.4200000000001 273.82 85.48A420 420 0 0 0 214.48 29.6Q211.78 27.5 210.26 26.4L209.08 25.5599999999999L208.74 25.34L208.66 25.28L208.62 25.26L200 37.52L191.4 25.24L191.34 25.2799999999999L191.24 25.3399999999999L190.92 25.5599999999999L189.74 26.3999999999999Q188.24 27.4999999999999 185.54 29.5999999999999C181.94 32.3399999999999 176.84 36.36 170.76 41.5199999999999A420 420 0 0 0 126.16 85.48C94.08 122.4 60 175.86 60 237.5A140 140 0 1 0 340 237.5" : "M160 305.02A115 115 0 0 0 275 190C275 139.6 247.2 96.14 221.32 66.4A340 340 0 0 0 173.4 21.26L169.96 18.7L168.74 17.82L168.66 17.76L168.62 17.74V17.72L160 30L168.6 17.72A15 15 0 0 0 151.4 17.72L160 30L151.4 17.72L151.34 17.76L151.26 17.82L150.04 18.7L146.6 21.26A340 340 0 0 0 98.68 66.4C72.8 96.14 45 139.6 45 190A115 115 0 0 0 160 305.02M160 275A85 85 0 0 1 75 190C75 150.4 97.2 113.86 121.32 86.1A310 310 0 0 1 160 48.9Q162.66 51.04 165.92 53.76A312 312 0 0 1 198.68 86.1C222.8 113.86 245 150.4 245 190A85 85 0 0 1 160 275M160 245A55 55 0 1 0 160 135A55 55 0 0 0 160 245M160 215A25 25 0 1 1 160 165A25 25 0 0 1 160 215", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
MapMarker.defaultProps = {
    size: IconSize.STANDARD,
};
MapMarker.displayName = `Blueprint6.Icon.MapMarker`;
export default MapMarker;
//# sourceMappingURL=map-marker.js.map