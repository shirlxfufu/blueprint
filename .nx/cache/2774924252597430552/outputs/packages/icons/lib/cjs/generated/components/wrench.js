"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrench = void 0;
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
exports.Wrench = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "wrench", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M224.8 362.3A115 115 0 0 0 293.14 356.64A15 15 0 0 0 298.54 332.56L241.3 270.56L246.46 246.48L270.54 241.2800000000001L332.5800000000001 298.5200000000001L333.98 299.68A15 15 0 0 0 356.64 293.14A115 115 0 0 0 266 136.04A115.2 115.2 0 0 0 208.88 142.58L125.14 50.82L124.66 50.3200000000001A52.6 52.6 0 0 0 50.34 124.6800000000001Q50.56 124.9200000000001 50.82 125.1200000000001L142.52 208.96A115 115 0 0 0 224.8 362.3000000000001M64.94 87.5000000000001A22.56 22.56 0 0 1 103.46 71.5600000000001L194 170.74L195.82 172.44A15 15 0 0 0 211.82 174.0200000000001A85.04 85.04 0 0 1 333.02 231.3400000000001C335.0800000000001 240.6200000000001 335.52 250.1200000000001 334.48 259.4600000000001L285.18 214A15 15 0 0 0 271.86 210.36L230.7 219.18A15 15 0 0 0 219.18 230.72L210.34 271.86A15 15 0 0 0 213.98 285.18L259.48 334.5A85 85 0 0 1 174 211.88A15 15 0 0 0 170.7 194.06L71.54 103.46L70.06 101.8A22.6 22.6 0 0 1 64.94 87.48" : "M179.18 292.78A95 95 0 0 0 235.62 288.08A15 15 0 0 0 241.02 264.02L196.28 215.56L199.68 199.7L215.52 196.3L264 241.04A15 15 0 0 0 288.08 235.64A95 95 0 0 0 213.2 105.88A95 95 0 0 0 168 110.6L102.32 38.64L101.86 38.14A45.06 45.06 0 0 0 38.14 101.86L38.64 102.32L110.52 168.04A95 95 0 0 0 105.84 213.26A95 95 0 0 0 179.18 292.7800000000001M54.94 69.98A15.06 15.06 0 0 1 80.46 59.24L152.96 138.6L154.8 140.3A15 15 0 0 0 170.8 141.88A65 65 0 0 1 265 201.12L230.16 169A15 15 0 0 0 216.84 165.34L183.92 172.44A15 15 0 0 0 172.4 183.94L165.34 216.88A15 15 0 0 0 168.9599999999999 230.2L201.12 265.06A65 65 0 0 1 141.86 170.86A15 15 0 0 0 138.58 153.06L59.28 80.58A15 15 0 0 1 54.94 70.02", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Wrench.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Wrench.displayName = `Blueprint6.Icon.Wrench`;
exports.default = exports.Wrench;
//# sourceMappingURL=wrench.js.map