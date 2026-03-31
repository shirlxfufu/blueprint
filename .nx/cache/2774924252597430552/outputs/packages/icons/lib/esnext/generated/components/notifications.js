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
export const Notifications = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "notifications", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M297.5 237.5A97.5 97.5 0 1 1 102.5 237.5C102.5 182.52 90.5 148.2 79.34 127.5H320.7C309.54 148.2 297.5 182.5 297.5 237.5M327.5 237.5C327.5 190.7 336.96 162 345.3 145.24L348.78 138.76A27.6 27.6 0 0 0 348.78 111.28A27.6 27.6 0 0 0 325.06 97.5H74.92A27.6 27.6 0 0 0 47.58 125.04L47.82 128.64C48.28 132.18 49.46 135.64 51.26 138.74L54.74 145.24C63.08 162 72.5 190.72 72.5 237.5A127.5 127.5 0 0 0 327.5 237.5M250 65A15 15 0 1 0 250 35H150A15 15 0 0 0 150 65z" : "M200 55A15 15 0 0 0 200 25H120A15 15 0 0 0 120 55zM235 190A75 75 0 0 1 85 190C85 149.2 76.78 122.3 68.34 105H251.68C243.24 122.3 235 149.18 235 190M265 190C265 147.72 274.74 124.36 281.6 112.52L281.62 112.5C283.26 109.66 284.32 106.5 284.74 103.3L284.96 100.02L284.76 96.76A25 25 0 0 0 260.06 75H59.9A25 25 0 0 0 35.06 100.04L35.26 103.3Q35.94 108.2 38.42 112.5L41.1 117.5C47.54 130.5000000000001 55 153.0200000000001 55 190A105 105 0 0 0 265 190", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Notifications.defaultProps = {
    size: IconSize.STANDARD,
};
Notifications.displayName = `Blueprint6.Icon.Notifications`;
export default Notifications;
//# sourceMappingURL=notifications.js.map