"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsUpdated = void 0;
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
exports.NotificationsUpdated = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "notifications-updated", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M200 0C222 0 240 18 240 40H160C160 18 178 0 200 0M240 356.68A59.88 59.88 0 0 1 160 300.2C160 284.04 166.38 269.06 177.52 257.92L236.92 198.12A59.8 59.8 0 0 1 320 196.68V120C320 109 329 100 340 100S360 91 360 80S351 60 340 60H60C49 60 40 69 40 80S49 100 60 100S80 109 80 120V240C80 292.2 113.4 336.2 160 352.6V360C160 382 178 400 200 400S240 382 240 360zM265.2 226.4L205.8 286.2000000000001A19.4 19.4 0 0 0 200 300.2000000000001C200 311.2000000000001 208.8 320.2000000000001 219.8 320.2000000000001C225.2 320.2000000000001 230.2 318 233.8 314.4L279.4 268.8L364.8 354.2000000000001A20 20 0 0 0 378.8 360C389.8 360 398.8 351 398.8 340C398.8 334.4 396.6 329.4 392.8 326L293.2 226.4A19.8 19.8 0 0 0 265.2 226.4" : "M160 0C182 0 200 18 200 40H120C120 18 138 0 160 0M227.98 273.34L219.72 265.1A60 60 0 0 1 180 280.2A60 60 0 0 1 120 220.4C120 204.4 126.4 189.24 137.52 178.12L177.56 138.28A59.8 59.8 0 0 1 260 136.32V120C260 109 269 100 280 100S300 91 300 80S291 60 280 60H40C29 60 20 69 20 80S29 100 40 100S60 109 60 120V200C60 248.6 94.6 289 140.4 298C140.4 298.8 140 299.2 140 300C140 311 149 320 160 320S180 311 180 300C180 299.2 179.6 298.8 179.6 298A99.4 99.4 0 0 0 227.98 273.3400000000001M205.8 166.6L165.8 206.4A20 20 0 0 0 160 220.4A20 20 0 0 0 180 240.2C185.4 240.2 190.4 238 194 234.4L219.8 208.6L285.4 274.2C289 277.8 293.8 280 299.3999999999999 280C310.4 280 319.3999999999999 271.2 319.3999999999999 260.2000000000001C319.3999999999999 254.6 317.2 249.8 313.3999999999999 246.2L233.8 166.6A19.8 19.8 0 0 0 205.7999999999999 166.6", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.NotificationsUpdated.displayName = `Blueprint6.Icon.NotificationsUpdated`;
exports.default = exports.NotificationsUpdated;
//# sourceMappingURL=notifications-updated.js.map