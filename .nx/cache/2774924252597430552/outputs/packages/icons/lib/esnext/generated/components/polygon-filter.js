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
export const PolygonFilter = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "polygon-filter", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M272.5 75A22.52 22.52 0 1 1 227.48 75A22.52 22.52 0 0 1 272.5 75M85 200A22.46 22.46 0 0 1 62.5 222.5A22.5 22.5 0 1 1 85 200M115 200C115 192.74 113.48 185.82 110.8 179.54L212.88 112.08A52.4 52.4 0 0 0 258.28 126.84L293.34 208.12A52.4 52.4 0 0 0 273.22 258.78L213.04 288.88A52.28 52.28 0 0 0 148.68 279.58L104.58 231.4C111.1 222.64 115 211.8 115 200.0200000000001M302.5 250.0200000000001A22.52 22.52 0 1 1 347.54 250.0200000000001A22.52 22.52 0 0 1 302.5 250.0200000000001M197.5 325.0200000000001A22.5 22.5 0 1 1 152.5 325.0200000000001A22.5 22.5 0 0 1 197.5 325.0200000000001M227.5 325.0200000000001Q227.5 320.2200000000001 226.64 315.6600000000001L286.52 285.7000000000001A52.5 52.5 0 1 0 321.48 197.68L285.3200000000001 113.84A52.5 52.5 0 1 0 198.6 85.6L91.5 156.32A52 52 0 0 0 62.5 147.5A52.5 52.5 0 1 0 80.36 249.36L128.04 301.48A52.5 52.5 0 1 0 227.5 325" : "M215 60A15 15 0 1 1 185 60A15 15 0 0 1 215 60M275 200A15 15 0 1 1 245 200A15 15 0 0 1 275 200M35 160A15 15 0 1 1 65 160A15 15 0 0 1 35 160M95 160C95 154.66 94 149.56 92.3 144.8L169.96 93.5A44.8 44.8 0 0 0 204.76 104.74L231.0200000000001 165.62A44.8 44.8 0 0 0 215.3600000000001 205.3L171.04 227.46A44.8 44.8 0 0 0 119.6 219.94L87.5 184.84C92.22 177.72 95 169.2 95 160M155 260A15 15 0 1 1 125 260A15 15 0 0 1 155 260M185 260C185 258.04 184.8 256.12 184.58 254.2L228.58 232.22A45 45 0 1 0 260 155L259.14 155.04L231.82 91.78A45 45 0 1 0 155.5800000000001 67.06L73.2 121.44A45 45 0 1 0 63.4 202.94L98.9 241.74A45 45 0 1 0 185 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
PolygonFilter.defaultProps = {
    size: IconSize.STANDARD,
};
PolygonFilter.displayName = `Blueprint6.Icon.PolygonFilter`;
export default PolygonFilter;
//# sourceMappingURL=polygon-filter.js.map