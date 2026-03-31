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
export const DataConnection = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "data-connection", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M40 162C58.7 148.52 86.78 137.66 120.46 131.28A140 140 0 0 1 187.86 0C108.1 0.38 43.24 21.66 40.12 48L40 50zM260 240C326.3 240 380 186.3 380 120S326.3 0 260 0S140 53.7 140 120S193.7 240 260 240M280 220L200 100H250L240 20L320 140H270zM340 312V234.9A140.06 140.06 0 0 1 124.42 155.06C76.26 162.88 42.48 179.1 40.14 197.9L40 200V312C70.5 290 126 275 190 275S309.5 290 340 312M190 400C272.74 400 340 377.5 340 350S272.74 300 190 300C107 300 40 322.5 40 350S107 400 190 400" : "M20 129.6C37.78 116.78 66.16 106.94 100.06 102.52L100 100A120 120 0 0 1 153.28 0.24Q146.74 0 140 0C75.7 0 23.08 17 20.14 38.12L20 40zM220 200C275.24 200 320 155.24 320 100S275.24 0 220 0S120 44.76 120 100S164.76 200 220 200M240 180L160 80H210L200 20L280 120H230zM260 249.6V213.16A120.04 120.04 0 0 1 102 122.04L97.04 122.64C53.68 128.24 22.38 141.96 20.14 158.12L20 160V249.6C44.4 232 88.8 220 140 220S235.6 232 260 249.6M140 320C206.2 320 260 302 260 280S206.2 240 140 240C73.6 240 20 258 20 280S73.6 320 140 320", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
DataConnection.displayName = `Blueprint6.Icon.DataConnection`;
export default DataConnection;
//# sourceMappingURL=data-connection.js.map