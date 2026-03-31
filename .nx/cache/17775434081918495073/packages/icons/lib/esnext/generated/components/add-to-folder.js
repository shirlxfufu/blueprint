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
export const AddToFolder = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "add-to-folder", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M0.2 200V280H400V80C400 69 391 60 380 60H199.9V139.8C199.3 173.36 172.7 200 139.74 200zM380 340C391 340 400 331 399.8 320V300H0V360C0 371 9 380 20 380H139.94C145.54 380 150.54 377.8 154.14 374.2L188.28 340zM139.74 160C150.74 160 159.72 151 159.92 139.8V39.8000000000001C159.92 28.8 150.92 19.8000000000001 139.92 19.8000000000001S119.94 28.8 119.94 39.8000000000001V91.6L34.18 5.8000000000001A20.06 20.06 0 0 0 5.78 34.2L91.58 120H39.78C28.78 120 19.78 129 19.78 140S28.78 160 39.78 160z" : "M0.2 180V220H320V80C320 69 311 60 300 60H180.1V119.8C179.48 153.36 152.88 180 119.92 180zM300 280H148.32L114.12 314.2A20 20 0 0 1 99.92 320H20C9 320 0 311 0 300V240H319.8V260C320 271 311 280 300 280M119.94 140H40C29 140 20 131 20 120S29 100 40 100H71.78L6 34.2A20.06 20.06 0 0 1 34.4 5.8L100.14 71.6V39.8000000000001C100.14 28.8 109.14 19.8000000000001 120.14 19.8000000000001C131.12 19.8000000000001 140.12 28.8 140.12 39.8000000000001V119.8000000000001A20.4 20.4 0 0 1 119.92 140", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
AddToFolder.displayName = `Blueprint6.Icon.AddToFolder`;
export default AddToFolder;
//# sourceMappingURL=add-to-folder.js.map