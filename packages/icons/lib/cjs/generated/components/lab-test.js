"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabTest = void 0;
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
exports.LabTest = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "lab-test", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M260 360A20 20 0 0 0 260 320V240L340 80V60A20 20 0 0 0 320 40H80A20 20 0 0 0 60 60V80L140 240V320A20 20 0 1 0 140 360zM220 320H180V240L140 160H260L220 240z" : "M220 300A20 20 0 0 0 220 260V200L280 60V35A15 15 0 0 0 265 20H55A15 15 0 0 0 40 35V60L100 200V260A20 20 0 1 0 100 300zM180 260H140V200L105.72 120H214.28L180 200z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.LabTest.displayName = `Blueprint6.Icon.LabTest`;
exports.default = exports.LabTest;
//# sourceMappingURL=lab-test.js.map