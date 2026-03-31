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
export const Endorsed = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "endorsed", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M396.6 212.4L376.2 248V287.6C376.2 296.6 371.6 304.6 364 309.2L329.8 329.2L309.4 364.4A25 25 0 0 1 287.8 376.6H247.2L212.4 396.6C204.8 401.2 195 401.2 187.4 396.6L152.6 376.6H113C104.2 376.6 96 372 91.4 364.4L71.6 330L35.6 309.2C28 304.4 23.2 296.4 23.2 287.6V246.4L3.4 212C1.2 208.2 0 204 0 199.8S1.2 191.4 3.4 187.6L23.2 153.2V112C23.2 103 27.8 95 35.4 90.4L71 70L90.8 35.6C95.4 28.0000000000001 103.4 23.4 112.4 23.4H152.2L187 3.4C190.8 1.2 195.2 0 199.4 0S207.8 1.2 211.6 3.4L246.4 23.4H287C295.8 23.4 304 28.0000000000001 308.6 35.6L329 70.8000000000001L363.2 90.8000000000001C370.8 95.4000000000001 375.4 103.6000000000001 375.4 112.4V151.8000000000001L395.8 187.4000000000001C401.2 195.0000000000001 401.2 204.4 396.6 212.4000000000001M295 226.6L194.8 126.4C191.2 122.8000000000001 186.2 120.6000000000001 180.6 120.6000000000001S170 122.8000000000001 166.3999999999999 126.4L106.1999999999999 186.6A20.06 20.06 0 0 0 134.5999999999999 215L180.6 169.0000000000001L266.8 255.0000000000001A20.06 20.06 0 0 0 301 240.8000000000001C301 235.2000000000001 298.6 230.2000000000001 295 226.6" : "M317.2 170L301 198.4V230C301 237.2 297.2 243.6 291.2 247.4L263.8 263.4L247.6 291.6C243.8 297.8 237.4 301.4 230.4 301.4H197.8L170 317.2A19 19 0 0 1 150 317.2L122.2 301.2H90.4A20 20 0 0 1 73.2 291.4L57.2 264L28.4 247.4C22.4 243.6 18.6 237.2 18.6 230V197L2.6 169.6C1 166.6 0 163.2 0 159.8S1 153 2.8 150L18.8 122.6V89.6C18.8 82.4 22.6 76 28.6 72.2L57 56L73 28.6C76.8 22.4 83.2 18.8 90.2 18.8H122L149.8 2.8C152.8 1 156.2 0 159.4 0S166.2 1 169.2 2.8L197 18.8H229.6A20 20 0 0 1 246.8 28.6L263 56.8L290.4 72.8C296.4 76.6 300.2 83.0000000000001 300.2 90.2000000000001V121.4L316.4 149.8A17.8 17.8 0 0 1 317.2 170M234.8 186.4L154.6 106.2C151 102.6 146 100.4 140.4 100.4S129.8 102.6 126.2 106.2L86.2 146.2C82.6 150 80.2 155 80.2 160.4A20.06 20.06 0 0 0 114.4 174.6L140.4 148.6L206.4 214.6A20.06 20.06 0 0 0 240.6 200.4A19 19 0 0 0 234.8 186.4", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Endorsed.displayName = `Blueprint6.Icon.Endorsed`;
export default Endorsed;
//# sourceMappingURL=endorsed.js.map