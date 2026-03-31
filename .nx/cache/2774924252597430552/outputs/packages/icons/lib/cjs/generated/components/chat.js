"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
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
exports.Chat = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "chat", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M65 156.44L102.42 186.68L104.54 188.12A15 15 0 0 0 111.84 190.02H260V322.5H65zM290 187.52A27.52 27.52 0 0 0 262.5 160H117.14L59.44 113.34A15 15 0 0 0 35 125V325C35 332.28 37.88 339.28 43.04 344.44L45.08 346.26C49.98 350.26 56.12 352.48 62.5 352.48H262.5C268.88 352.48 275.02 350.28 279.92 346.26L281.9600000000001 344.4600000000001L283.76 342.42C287.76 337.52 290 331.38 290 324.98zM365 50A15 15 0 0 0 340.56 38.36L282.86 85.02H137.5A27.52 27.52 0 0 0 110 112.5V175A15 15 0 0 0 140 175V115H288.1600000000001L290.7000000000001 114.78A15 15 0 0 0 297.5800000000001 111.66L335 81.42V247.5H275A15 15 0 0 0 275 277.5H337.5C343.88 277.5 350.0200000000001 275.3 354.92 271.28L356.96 269.48L358.76 267.44C362.76 262.54 365 256.4 365 250z" : "M55 131.42L80.04 151.66L82.16 153.1A15 15 0 0 0 89.48 155H205V255H55zM235 150A25 25 0 0 0 210 125H115V95H230.52L233.06 94.8A15 15 0 0 0 239.9600000000001 91.66L265.0000000000001 71.42V195H235.0000000000001zM235 225H270C275.8 225 281.4 222.98 285.84 219.34L287.68 217.68L289.3400000000001 215.84C292.98 211.4 295 205.8 295 200V40A15 15 0 0 0 270.56 28.34L225.2200000000001 65H110A25 25 0 0 0 85 90V117.1L49.44 88.34A15 15 0 0 0 25 100V260A25 25 0 0 0 50 285H210A25 25 0 0 0 235 260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Chat.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Chat.displayName = `Blueprint6.Icon.Chat`;
exports.default = exports.Chat;
//# sourceMappingURL=chat.js.map