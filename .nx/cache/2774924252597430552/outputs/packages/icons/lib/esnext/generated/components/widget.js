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
export const Widget = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "widget", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M277.5 277.5H322.5V322.5H277.5zM352.5 275C352.5 259.8 340.18 247.5 325 247.5H275C259.8 247.5 247.5 259.82 247.5 275V325C247.5 340.2 259.82 352.5 275 352.5H325C340.2000000000001 352.5 352.5 340.18 352.5 325zM77.5 277.5H122.5V322.5H77.5zM152.5 275C152.5 259.8 140.18 247.5 125 247.5H75C59.8 247.5 47.5 259.82 47.5 275V325C47.5 340.2 59.82 352.5 75 352.5H125C140.2 352.5 152.5 340.18 152.5 325zM277.5 77.5H322.5V122.5H277.5zM352.5 75C352.5 59.8 340.18 47.5 325 47.5H275C259.8 47.5 247.5 59.82 247.5 75V125C247.5 140.2 259.82 152.5 275 152.5H325C340.2000000000001 152.5 352.5 140.18 352.5 125zM77.5 77.5H122.5V122.5H77.5zM152.5 75C152.5 59.8 140.18 47.5 125 47.5H75C59.8 47.5 47.5 59.82 47.5 75V125C47.5 140.2 59.82 152.5 75 152.5H125C140.2 152.5 152.5 140.18 152.5 125zM85 137.5V262.5A15 15 0 0 0 115 262.5V137.5A15 15 0 0 0 85 137.5M262.5 115A15 15 0 0 0 262.5 85H137.5A15 15 0 0 0 137.5 115zM285 137.5V262.5A15 15 0 0 0 315 262.5V137.5A15 15 0 0 0 285 137.5M262.5 315A15 15 0 0 0 262.5 285H137.5A15 15 0 0 0 137.5 315z" : "M225 65H255V95H225zM65 65H95V95H65zM225 225H255V255H225zM65 225H95V255H65zM125 220C125 206.2 113.8 195 100 195H95V125H100C113.8 125 125 113.8 125 100V95H195V100C195 113.8 206.2 125 220 125H225V195H220C206.2 195 195 206.2 195 220V225H125zM285 220C285 206.2 273.8 195 260 195H255V125H260C273.8 125 285 113.8 285 100V60C285 46.2 273.8 35 260 35H220C206.2 35 195 46.2 195 60V65H125V60C125 46.2 113.8 35 100 35H60C46.2 35 35 46.2 35 60V100C35 113.8 46.2 125 60 125H65V195H60C46.2 195 35 206.2 35 220V260C35 273.8 46.2 285 60 285H100C113.8 285 125 273.8 125 260V255H195V260C195 273.8 206.2 285 220 285H260C273.8 285 285 273.8 285 260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
Widget.defaultProps = {
    size: IconSize.STANDARD,
};
Widget.displayName = `Blueprint6.Icon.Widget`;
export default Widget;
//# sourceMappingURL=widget.js.map