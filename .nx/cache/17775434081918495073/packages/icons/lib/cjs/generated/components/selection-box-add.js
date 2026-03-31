"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionBoxAdd = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
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
const React = tslib_1.__importStar(require("react"));
const iconTypes_1 = require("../../iconTypes");
const svgIconContainer_1 = require("../../svgIconContainer");
exports.SelectionBoxAdd = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "selection-box-add", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M40 400H100V360H40V300H0V380A20 20 0 0 0 20 400zM360 40V100H400V20A20 20 0 0 0 380 0H300V40zM0 100V20A20 20 0 0 1 20 0H100V40H40V100zM360 400H300V360H360V300H400V380A20 20 0 0 1 380 400zM240 400H160V360H240zM0 240V160H40V240zM180 280A20 20 0 0 0 220 280V220H280A20 20 0 1 0 280 180H220V120A20 20 0 1 0 180 120V180H120A20 20 0 1 0 120 220H180zM400 160H360V240H400zM160 0V40H240V0z" : "M120 280H200V320H120zM0 120V200H40V120zM20 320H80V280H40V240H0V300A20 20 0 0 0 20 320M0 40V20A20 20 0 0 1 20 0H80V40H40V80H0zM200 40V0H120V40zM320 200H280V120H320zM300 0H240V40H280V80H320V20A20 20 0 0 0 300 0M320 280V300A20 20 0 0 1 300 320H240V280H280V240H320zM140 220A20 20 0 0 0 180 220V180H220A20 20 0 1 0 220 140H180V100A20 20 0 1 0 140 100V140H100A20 20 0 0 0 100 180H140z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.SelectionBoxAdd.displayName = `Blueprint6.Icon.SelectionBoxAdd`;
exports.default = exports.SelectionBoxAdd;
//# sourceMappingURL=selection-box-add.js.map