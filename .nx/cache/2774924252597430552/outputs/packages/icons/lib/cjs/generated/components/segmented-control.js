"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentedControl = void 0;
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
exports.SegmentedControl = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "segmented-control", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M360 200A85 85 0 0 1 275 285H125A85 85 0 0 1 125 115H275A85 85 0 0 1 360 200M390 200A115 115 0 0 0 275 85H125A115 115 0 0 0 125 315H275A115 115 0 0 0 390 200M153.76 200A28.74 28.74 0 1 1 96.26 200A28.74 28.74 0 0 1 153.76 200M183.76 200A58.76 58.76 0 1 0 66.24 200A58.76 58.76 0 0 0 183.76 200" : "M285 160A65 65 0 0 1 220 225H100A65 65 0 1 1 100 95H220A65 65 0 0 1 285 160M120 160A20 20 0 1 1 80 160A20 20 0 0 1 120 160M150 160A50 50 0 1 0 50 160A50 50 0 0 0 150 160M315 160A95 95 0 0 0 220 65H100A95 95 0 1 0 100 255H220A95 95 0 0 0 315 160", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.SegmentedControl.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.SegmentedControl.displayName = `Blueprint6.Icon.SegmentedControl`;
exports.default = exports.SegmentedControl;
//# sourceMappingURL=segmented-control.js.map