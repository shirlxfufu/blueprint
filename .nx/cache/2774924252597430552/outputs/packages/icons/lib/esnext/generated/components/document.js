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
export const Document = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "document", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M90 65H310V256.28L231.3 335H90zM340 62.5A27.52 27.52 0 0 0 312.5 35H87.5A27.52 27.52 0 0 0 60 62.5V337.5C60 344.8 62.88 351.8 68.04 356.96L70.08 358.76C74.98 362.76 81.12 365 87.5 365H237.5C241.48 365 245.3 363.4 248.1 360.6L335.6 273.1C338.4000000000001 270.3 340 266.48 340 262.5zM216.26 350A15 15 0 0 0 246.26 350V271.24H325A15 15 0 0 0 325 241.24H231.26A15 15 0 0 0 216.26 256.24z" : "M75 55H245V190H185A15 15 0 0 0 170 205V265H75zM200 220H228.8L200 248.8zM275 50A25 25 0 0 0 250 25H70A25 25 0 0 0 45 50V270A25 25 0 0 0 70 295H190C193.98 295 197.8 293.4 200.6 290.6L270.6 220.6C273.4 217.8 275 213.98 275 210z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Document.defaultProps = {
    size: IconSize.STANDARD,
};
Document.displayName = `Blueprint6.Icon.Document`;
export default Document;
//# sourceMappingURL=document.js.map