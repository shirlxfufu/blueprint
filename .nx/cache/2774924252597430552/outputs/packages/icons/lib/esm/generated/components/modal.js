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
export const Modal = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "modal", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M65 90H335V310H65zM365 87.5C365 72.3 352.68 60 337.5 60H62.5C47.3 60 35 72.32 35 87.5V312.5C35 327.7 47.32 340 62.5 340H337.5C352.7000000000001 340 365 327.68 365 312.5zM118.76 231.24A25 25 0 1 1 118.76 281.24A25 25 0 0 1 118.76 231.24M193.76 231.24A25 25 0 1 1 193.76 281.24A25 25 0 0 1 193.76 231.24" : "M55 75H265V245H55zM295 70C295 56.2 283.8 45 270 45H50C36.2 45 25 56.2 25 70V250C25 263.8 36.2 275 50 275H270C283.8 275 295 263.8 295 250zM95 185A20 20 0 1 1 95 225A20 20 0 0 1 95 185M155 185A20 20 0 1 1 155 225A20 20 0 0 1 155 185", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Modal.defaultProps = {
    size: IconSize.STANDARD,
};
Modal.displayName = `Blueprint6.Icon.Modal`;
export default Modal;
//# sourceMappingURL=modal.js.map