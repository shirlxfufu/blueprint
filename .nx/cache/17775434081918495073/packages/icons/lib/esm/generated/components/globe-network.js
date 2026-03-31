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
export const GlobeNetwork = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "globe-network", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M200 400C89.6 400 0 310.4 0 200S89.6 0 200 0S400 89.6 400 200S310.4 400 200 400M347.8 260H275.2000000000001C269 299.8 256.8 333.2 240.8 354.6C289.8000000000001 341.6 329.0000000000001 306.2000000000001 347.8 260M260 200C260 186.2 259.2000000000001 172.8 257.8 160H142.2A368 368 0 0 0 142.2 240H257.6C259.2 227.2 260 213.8 260 200M200 360C221.4 360 245 319 255 260H145C155 319 178.6 360 200 360M159.2 354.6C143.2 333.2 131 299.8 124.8 260H52.2C71 306.2000000000001 110.2 341.6 159.2 354.6M40 200C40 213.8 42.2 227.2 45.6 240H122.2A368 368 0 0 1 122.2 160H45.6C42.2 172.8 40 186.2 40 200M52.2 140H124.8C131 100.2 143.2 66.8 159.2 45.4A160 160 0 0 0 52.2 140M200 40C178.6 40 155 81 145 140H255C245 81 221.4 40 200 40M240.8 45.4C256.6 66.8 268.8 100.2 275.2 140H347.8A160 160 0 0 0 240.8 45.4M277.8 160A368 368 0 0 1 277.8 240H354.4C357.8 227.2 360 213.8 360 200S357.8 172.8 354.4 160z" : "M160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320M263.4 220H214.6C210.4 242.2 204.4 260.6 196.4 273.8C225 264.6 248.6 245.2 263.4 220M200 160C200 145.4 199 132.2 197.6 120H122.4C121 132.2 120 145.4 120 160S121 187.8 122.4 200H197.6C199 187.8 200 174.6 200 160M160 280C173.4 280 187.2 258 194.6 220H125.4C132.8 258 146.6 280 160 280M123.6 273.8C115.6 260.6 109.4 242.2 105.4 220H56.6A120.6 120.6 0 0 0 123.6 273.8M40 160C40 174 42.6 187.4 47 200H102.2C100.8 187.6 100 174.4 100 160S100.8 132.4 102.2 120H47C42.6 132.6 40 146 40 160M56.6 100H105.4C109.6 77.8 115.6 59.4 123.6 46.2A120.6 120.6 0 0 0 56.6 100M160 40C146.6 40 132.8 62 125.4 100H194.6C187.2 62 173.4 40 160 40M196.4 46.2C204.4 59.4 210.4 77.8 214.6 100H263.4A120.6 120.6 0 0 0 196.4 46.2M273 120H217.8C219.2 132.4 220 145.6 220 160S219.2 187.6 217.8 200H273C277.4000000000001 187.4 280 174 280 160S277.4 132.6 273 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
GlobeNetwork.displayName = `Blueprint6.Icon.GlobeNetwork`;
export default GlobeNetwork;
//# sourceMappingURL=globe-network.js.map