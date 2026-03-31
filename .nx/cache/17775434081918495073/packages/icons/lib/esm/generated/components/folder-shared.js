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
export const FolderShared = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "folder-shared", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M220 320H188.2L154.2 354.2A20 20 0 0 1 140 360H20C9 360 0 351 0 340V280H235.6C226 290.6 220 304.6 220 320M380 340H280C269 340 260 331 260 320S269 300 280 300H331.8L246 214.2C242.2 210.6 240 205.6 240 200A20.06 20.06 0 0 1 274.2000000000001 185.8L360 271.8V220C360 209 369 200 380 200S400 209 400 220V320C400 331 391 340 380 340M330.8 186L302.4 157.6A59.92 59.92 0 1 0 217.6 242.4000000000001L235.2 260H0V60C0 49 9 40 20 40H380C391 40 400 49 400 60V163.6C393.8 161.4 387 160 380 160C359.6 160 341.6 170.4 330.8 186" : "M175.2 200.4C165.8 211 159.8 224.8 159.8 240.2H148.2L114 274.2A19.4 19.4 0 0 1 99.8 280.2H19.8C8.8 280.2 -0.2 271.2 -0.2 260.2V200.2H175zM299.8 260.2H219.8C208.8 260.2 199.8 251.2 199.8 240.2S208.8 220.2 219.8 220.2H251.6L185.6 154.2A20 20 0 0 1 179.8000000000001 140.2000000000001A20.06 20.06 0 0 1 214.0000000000001 126L279.8000000000001 191.8V160C279.8000000000001 149 288.8 140 299.8000000000001 140S319.8000000000001 149 319.8000000000001 160V240C319.8000000000001 251.2 310.8000000000001 260.2 299.8000000000001 260.2M260.2000000000001 115.6L242.2 97.6L242.0000000000001 97.8C231.2000000000001 86.8 216.4 80 199.8000000000001 80C166.6 80 139.8000000000001 106.8 139.8000000000001 140C139.8000000000001 155.4 145.8000000000001 169.4 155.4 180H-0.2V39.9999999999999C-0.2 28.9999999999999 8.8 19.9999999999999 19.8 19.9999999999999H299.8C310.8 19.9999999999999 319.8 28.9999999999999 319.8 39.9999999999999V103.6C313.6 101.4 306.8 100 299.8 100C284.6 100.2 270.8 106.2 260.2 115.6", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
FolderShared.displayName = `Blueprint6.Icon.FolderShared`;
export default FolderShared;
//# sourceMappingURL=folder-shared.js.map