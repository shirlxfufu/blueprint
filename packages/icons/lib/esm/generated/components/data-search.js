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
export const DataSearch = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "data-search", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M40 210V318C70 295.4 130.4 280 200 280C269.8 280 330.2 295.4 360 318V210A20 20 0 0 0 359.6800000000001 206.82A120.04 120.04 0 0 1 142.2800000000001 163.36C82.4 170.6 40 188.76 40 210M140 141.88V140A120.1 120.1 0 0 1 240.34 21.6C227.46 20.5599999999999 213.94 20 200 20C111.6 20 40 42.4 40 70V178C60.94 162.22 96.7 149.96 140.06 143.98zM360 350C360 322.4 288.4 300 200 300C111.8 300 40 322.4 40 350S111.6 400 200 400S360 377.6 360 350M315.14 56.56A100.06 100.06 0 0 0 160 140V141.56A100.04 100.04 0 0 0 353.4000000000001 175.76A100 100 0 0 0 343.44 84.86L394.12 34.18A20 20 0 1 0 365.82 5.88zM260 80A60 60 0 1 1 260 200A60 60 0 0 1 260 80" : "M260 280C260 258 206.2 240 140 240C73.6 240 20 258 20 280S73.6 320 140 320C206.2 320 260 302 260 280M20 160V249.6C44.4 232 88.8 220 140 220S235.6 232 260 249.6V200A100 100 0 0 1 100.02 122.28C53.42 127.8 20 142.66 20 160M20 129.6C38.04 116.6 67 106.64 101.56 102.34A100 100 0 0 1 236.56 26.9L243.6 19.84C222.74 8 184.12 0 140 0C73.8 0 20 18 20 40zM285.8 5.8L240.68 51.1A80.04 80.04 0 0 0 120 120V120.56A80 80 0 1 0 268.9 79.3L314.2000000000001 34.2A20.06 20.06 0 0 0 285.8 5.8M200 80A40 40 0 1 1 160 120.56V120A40 40 0 0 1 200 80", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
DataSearch.displayName = `Blueprint6.Icon.DataSearch`;
export default DataSearch;
//# sourceMappingURL=data-search.js.map