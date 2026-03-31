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
export const NewComment = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? IconSize.STANDARD) >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "new-comment", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M260 300C248 300 240 308 240 320C240 330 248 340 260 340H300V380C300 392 308 400 320 400C330 400 340 392 340 380V340H380C390 340 400 332 400 320S390 300 380 300H340V260C340 248 330 240 320 240C308 240 300 248 300 260V300zM217.2 277.2C205.2 289.24 200 304.92 200 320C200 349.44 223.36 380 260 380H20C9 380 0 371 0 360V120C0 109 9 100 20 100H80V20A20.06 20.06 0 0 1 114.2 5.8L208.2 100H380C391 100 400 109 400 120V263.54A60 60 0 0 0 380 260C380 223.36 349.4400000000001 200 320 200C304.9 200 289.2200000000001 205.2 277.2 217.2C265.2 229.24 260 244.94 260 260C244.9 260 229.22 265.2 217.2 277.2" : "M300 280H280V300A20 20 0 1 1 240 300V280H220A20 20 0 1 1 220 240H240V220A20 20 0 1 1 280 220V240H300A20 20 0 1 1 300 280M160 260C160 275.36 165.78 289.4 175.28 300H40C29 300 20 291 20 280V100C20 89 29 80 40 80H80V20A20.06 20.06 0 0 1 114.2 5.8L188.2 80H300C311 80 320 89 320 100V203.4L317.42 202.58A60.02 60.02 0 0 0 202.5800000000001 202.58A60 60 0 0 0 160 260", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
NewComment.displayName = `Blueprint6.Icon.NewComment`;
export default NewComment;
//# sourceMappingURL=new-comment.js.map