"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Satellite = void 0;
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
exports.Satellite = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "satellite", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M358.1 283.3400000000001C358.1 291.74 354.76 299.78 348.8200000000001 305.7200000000001L305.72 348.8A31.66 31.66 0 0 1 260.96 348.8L167.84 255.72L165.74 253.4A31.68 31.68 0 0 1 165.74 213.28L167.84 210.96L210.96 167.84A31.68 31.68 0 0 1 253.4 165.74L255.72 167.84L348.82 260.96A31.6 31.6 0 0 1 358.1 283.34M328.1 283.34A1.6 1.6 0 0 0 327.62 282.16L234.5199999999999 189.06A1.66 1.66 0 0 0 232.1799999999999 189.06L189.04 232.1600000000001A1.6 1.6 0 0 0 188.56 233.34Q188.56 234.02 189.04 234.5L282.14 327.62A1.66 1.66 0 0 0 284.48 327.62L327.6 284.5A1.6 1.6 0 0 0 328.08 283.3400000000001M310.6 243.94A15 15 0 1 1 289.4 222.74L328.8 183.34L300 154.54L260.6 193.94A15 15 0 1 1 239.4 172.74L289.3999999999999 122.74A15 15 0 0 1 310.6 122.74L360.6 172.74A15 15 0 0 1 360.6 193.94zM192.8 361.64A15 15 0 0 1 172.74 360.6L122.74 310.6A15 15 0 0 1 122.74 289.4L172.74 239.4A15 15 0 1 1 193.94 260.6L154.54 300L183.34 328.8L222.74 289.4A15 15 0 1 1 243.9400000000001 310.6L193.94 360.6zM210.6 210.6A15 15 0 0 1 189.4 210.6L164.4 185.6A15 15 0 1 1 185.6 164.4L210.6 189.4A15 15 0 0 1 210.6 210.6M131.68 158.34A15 15 0 0 1 101.68 158.34A56.68 56.68 0 0 1 158.34 101.68A15 15 0 0 1 158.34 131.68A26.6 26.6 0 0 0 131.68 158.34M65 150A15 15 0 0 1 35 150A115 115 0 0 1 150 35A15 15 0 0 1 150 65A85 85 0 0 0 65 150" : "M223.88 289.3400000000001A28 28 0 0 1 208.72 283.08L206.62 281.18L132.16 206.7L130.28 204.62A28.4 28.4 0 0 1 130.28 168.72L132.16 166.62L166.6 132.16A28.4 28.4 0 0 1 204.6 130.28L206.68 132.16L281.2 206.6C285.84 211.26 288.7200000000001 217.36 289.36 223.86L289.5 226.66L289.36 229.44A28.4 28.4 0 0 1 281.2 246.68L246.7 281.2A28.4 28.4 0 0 1 226.66 289.5zM258.8 226.68L186.68 154.56L154.56 186.68L226.68 258.8zM250.6 197.26A15 15 0 1 1 229.4 176.06L258.8 146.66L240 127.86L210.6 157.26A15 15 0 1 1 189.4 136.06L229.4 96.06A15 15 0 0 1 250.6 96.06L290.6 136.06A15 15 0 0 1 290.6 157.26zM156.14 291.64A15 15 0 0 1 136.06 290.6L96.06 250.6A15 15 0 0 1 96.06 229.4L136.06 189.4A15 15 0 1 1 157.26 210.6L127.88 240L146.68 258.8L176.08 229.4A15 15 0 1 1 197.28 250.6L157.28 290.6zM170.6 170.6A15 15 0 0 1 149.4 170.6L129.4 150.6A15 15 0 1 1 150.6 129.4L170.6 149.4A15 15 0 0 1 170.6 170.6M108.32 126.66A15 15 0 0 1 78.32 126.66A48.34 48.34 0 0 1 126.66 78.32A15 15 0 0 1 126.66 108.32A18.34 18.34 0 0 0 108.32 126.66M55 120A15 15 0 0 1 25 120A95 95 0 0 1 120 25A15 15 0 0 1 120 55A65 65 0 0 0 55 120", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Satellite.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Satellite.displayName = `Blueprint6.Icon.Satellite`;
exports.default = exports.Satellite;
//# sourceMappingURL=satellite.js.map