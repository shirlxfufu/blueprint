"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionMinimal = void 0;
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
exports.FunctionMinimal = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "function-minimal", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M300 360A20 20 0 1 0 300 320H259.24A30 30 0 0 1 229.7 295.46H229.72L219.92 240H281.5800000000001A20 20 0 0 0 281.5800000000001 200H212.82L194.66 97.58V97.48A70 70 0 0 0 131.86 40.28L125.78 40H80A20 20 0 1 0 80 80H125.76A30 30 0 0 1 155.3 104.62L172.18 200H100A20 20 0 0 0 100 240H179.28L190.34 302.42V302.52A70 70 0 0 0 259.26 360z" : "M250 300A20 20 0 1 0 250 260H213.38A20 20 0 0 1 193.72 243.58L186.7 200H220A20 20 0 1 0 220 160H180.26L165.72 69.66L165.64 69.26A60 60 0 0 0 106.64 20H80A20 20 0 1 0 80 60H106.62A20 20 0 0 1 126.28 76.42L139.74 160H100A20 20 0 0 0 100 200H146.18L154.28 250.34L154.36 250.74A60 60 0 0 0 213.36 299.98z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FunctionMinimal.displayName = `Blueprint6.Icon.FunctionMinimal`;
exports.default = exports.FunctionMinimal;
//# sourceMappingURL=function-minimal.js.map