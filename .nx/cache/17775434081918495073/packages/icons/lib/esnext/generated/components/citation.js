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
export const Citation = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "citation", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M80 380C35.8 380 0 344.2 0 300S35.8 220 80 220C82 220 84 220.2 86 220.4C76.4 173.6 50.6 140 20 140C9 140 0 131 0 120S9 100 20 100C97.4 100 160 189.6 160 300C160 344.2 124.2 380 80 380M320 380C275.8 380 240 344.2 240 300S275.8 220 320 220C322 220 324 220.2 326 220.4C316.4 173.6 290.6 140 260 140C249 140 240 131 240 120S249 100 260 100C337.4000000000001 100 400 189.6 400 300C400 344.2 364.2000000000001 380 320 380" : "M300.4 220C300.4 253.2 273.6 280 240.4 280S180.4 253.2 180.4 220A59.92 59.92 0 0 1 252.4 161.2C242 124.8 222.8 100 200.4 100C189.4 100 180.4 91 180.4 80S189.4 60 200.4 60C255.6 60 300.4 122.6 300.4 200C300.4 204 300 207.8 299.6 211.6C299.8 214.4 300.4 217.2 300.4 220M80.4 280C47.2 280 20.4 253.2 20.4 220A59.92 59.92 0 0 1 92.4 161.2C82 124.8 62.8 100 40.4 100C29.4 100 20.4 91 20.4 80S29.4 60 40.4 60C95.6 60 140.4 122.6 140.4 200C140.4 204 140 207.8 139.6 211.6C139.8 214.4 140.4 217.2 140.4 220C140.4 253.2 113.4 280 80.4 280", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Citation.displayName = `Blueprint6.Icon.Citation`;
export default Citation;
//# sourceMappingURL=citation.js.map