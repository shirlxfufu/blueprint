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
export const Construction = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "construction", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M120 380A20 20 0 0 0 140 360V320H260V360A20 20 0 1 0 300 360V320H340.76C345.0800000000001 320 349.82 320 353.76 319.56C357.8 319.12 365.44 317.84 371.64 311.64S379.1199999999999 297.8 379.56 293.78C380 289.82 380 285.0800000000001 380 280.78V159.24C380 154.92 380 150.18 379.56 146.24C379.12 142.2 377.84 134.56 371.64 128.36S357.8 120.88 353.7799999999999 120.44A120 120 0 0 0 340.78 120H300V40A20 20 0 1 0 260 40V120H140V40A20 20 0 1 0 100 40V120H59.24C54.92 120 50.18 120 46.24 120.44C42.2 120.88 34.56 122.16 28.36 128.36S20.88 142.2000000000001 20.44 146.22C20 150.2 20 154.92 20 159.22V280.78C20 285.1 20 289.8400000000001 20.44 293.78C20.88 297.82 22.16 305.46 28.36 311.66S42.2 319.14 46.22 319.58C50.2 320 54.92 320 59.22 320H100V360A20 20 0 0 0 120 380M120 280H84.02L164.02 160H215.94L135.94 280zM184.04 280L264.04 160H315.96L235.96 280zM284.04 280L340 196.06V280zM115.96 160L60 243.94V160z" : "M100 320A20 20 0 0 0 120 300V260H200V300A20 20 0 0 0 240 300V260H280.76C285.08 260 289.82 260 293.76 259.56C297.8 259.12 305.44 257.8400000000001 311.64 251.64S319.12 237.8 319.5600000000001 233.78C320 229.82 320 225.08 320 220.78V139.24C320 134.92 320 130.18 319.56 126.24C319.12 122.2 317.86 114.56 311.64 108.36C305.44 102.16 297.8 100.88 293.78 100.44A120 120 0 0 0 280.78 100H240V19.9999999999999A20 20 0 1 0 200 19.9999999999999V100H120V19.9999999999999A20 20 0 1 0 80 19.9999999999999V100H39.24C34.92 100 30.18 100 26.24 100.44C22.2 100.88 14.56 102.16 8.36 108.36S0.88 122.2 0.44 126.2A120 120 0 0 0 0 140V220.76C0 225.08 0 229.82 0.44 233.76C0.88 237.8 2.16 245.44 8.36 251.64S22.2 259.12 26.22 259.56C30.2 260 34.92 260 39.22 260H80V300A20 20 0 0 0 100 320M100 220H82.36L117.88 148.94L122.36 140H157.64L122.12 211.06L117.64 220zM162.36 220L197.88 148.94L202.36 140H237.64L202.12 211.06L197.64 220zM242.36 220L277.88 148.94L280 144.72V220zM77.64 140L42.12 211.06L40 215.26V140z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Construction.displayName = `Blueprint6.Icon.Construction`;
export default Construction;
//# sourceMappingURL=construction.js.map