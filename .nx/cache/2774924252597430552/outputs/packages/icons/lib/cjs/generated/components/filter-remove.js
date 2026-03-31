"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterRemove = void 0;
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
exports.FilterRemove = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "filter-remove", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M337.48 340L341.44 339.7Q345.38 339.12 349 337.46L352.5 335.54L355.6600000000001 333.14Q358.66 330.5 360.76 327.14L362.6400000000001 323.64L363.98 319.88A27.6 27.6 0 0 0 357.8400000000001 294L357.6800000000001 293.82L252.4800000000001 181.56V95.86A27.6 27.6 0 0 0 240.2600000000001 72.96L190.2600000000001 39.64A27.54 27.54 0 0 0 147.4800000000001 62.48V181.6L42.32 293.8400000000001L42.2 294A27.6 27.6 0 0 0 37.4 323.6L39.24 327.1A27.6 27.6 0 0 0 62.44 340zM173.44 197.76A15 15 0 0 0 177.48 187.5V67.1800000000001L222.48 97.1800000000001V187.5A15 15 0 0 0 226.54 197.7600000000001L331.7399999999999 310H68.28zM289.4 148.1A15 15 0 0 0 310.6 148.1L385.6 73.1A15 15 0 1 0 364.4000000000001 51.9L289.4000000000001 126.9A15 15 0 0 0 289.4000000000001 148.1000000000001M364.4 148.1A15 15 0 1 0 385.6 126.9L310.6 51.9A15 15 0 1 0 289.3999999999999 73.1z" : "M270 275L273.6 274.74Q277.2 274.2200000000001 280.48 272.7L283.64 270.96L286.52 268.76Q289.24 266.36 291.16 263.3L292.86 260.1L294.1 256.7A25 25 0 0 0 288.5 233.18L288.34 233V233.02L205 144.08V76.7L204.8 73.64A25 25 0 0 0 196.3 57.76L193.86 55.88L153.86 29.22A25 25 0 0 0 118.56 37.14A25 25 0 0 0 115 49.98V144.08L31.7 233.02L31.54 233.18A25.04 25.04 0 0 0 49.98 275zM289.4000000000001 120.6A15 15 0 0 0 310.6 99.4L291.2200000000001 80L310.6200000000001 60.6A15 15 0 0 0 289.42 39.4L270.0200000000001 58.8L250.62 39.4A15 15 0 0 0 229.42 60.6L248.8 80L229.4 99.4A15 15 0 1 0 250.6 120.6L270 101.2zM140.94 160.26A15 15 0 0 0 145.02 150V59.38L175.02 79.38V150A15 15 0 0 0 179.06 160.26L258.46 245H61.6z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FilterRemove.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.FilterRemove.displayName = `Blueprint6.Icon.FilterRemove`;
exports.default = exports.FilterRemove;
//# sourceMappingURL=filter-remove.js.map