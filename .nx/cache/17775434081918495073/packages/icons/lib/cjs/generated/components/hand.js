"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hand = void 0;
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
exports.Hand = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "hand", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M340 300C331.6 300 324.2000000000001 294.6 321.4 287.2L287.6 200H272.2000000000001L299 333.4C299.6 335.4 300.0000000000001 337.6 300.0000000000001 340A19.96 19.96 0 0 1 260.4000000000001 343.8H260.2000000000001L231.4 200H220V380C220 391 211 400 200 400S180 391 180 380V200H176L139.4 344.8A19.94 19.94 0 0 1 104.8 353L104.2 352.4000000000001C104 352 103.8 351.8 103.6 351.6C103.4 351.2 103.4 351 103.2 350.8V350.6C103 350.4000000000001 102.8 350.2000000000001 102.8 350V349.8C102.4 349.6 102.4 349.4000000000001 102.2 349.2000000000001C102.2 349.2000000000001 102.2 349 102 349C102 348.8 102 348.6 101.8 348.4000000000001C101.8 348.4000000000001 101.8 348.2000000000001 101.6 348.2000000000001C101.6 348.0000000000001 101.4 347.8000000000001 101.4 347.6C101.4 347.6 101.4 347.4000000000001 101.2 347.4000000000001C101.2 347.2000000000001 101 347.0000000000001 101 346.8000000000001S101 346.6 100.8 346.4000000000001C100.8 346.2000000000001 100.6 346.0000000000001 100.6 345.8000000000001S100.6 345.6000000000001 100.4000000000001 345.4000000000001C100.4000000000001 345.2000000000001 100.2000000000001 345.0000000000001 100.2000000000001 344.8000000000001V344.4000000000001C100.2000000000001 344.2000000000001 100.2000000000001 344.0000000000001 100.0000000000001 343.8000000000001V340C100.0000000000001 339 100.0000000000001 338.2 100.2000000000001 337.2L129.2000000000001 132.2L120 146V145.8L76.8 211H76.6A19.6 19.6 0 0 1 60 220C49 220 40 211 40 200C40 196 41.2 192.2 43.4 189L120 31.2C141.2 12 169.2 0 200 0C266.2 0 320 53.8 320 120V156.8L320.2000000000001 157.4V158.6L359.0000000000001 273.6A20.06 20.06 0 0 1 340 300" : "M300 220C300 231 291 240 280 240C271.8 240 264.8 235.2 261.8 228.2V228S261.8 227.8 261.6 227.8L231.4 160H224.2L239.8 256.8C240 257.8 240 259 240 260A20 20 0 0 1 200.2 263.2V263L183.6 160H180V300C180 311 171 320 160 320S140 311 140 300V160H138.2L119.6 263.6A20 20 0 0 1 100 280C89 280 80 271 80 260C80 259 80 257.8 80.2 256.8L105.2 100H104.4L56.6 171.2C53 176.4 47 180 40 180C29 180 20 171 20 160C20 156.6 20.8 153.4 22.4 150.6L82.4 36.8H82.6V36.6A100.04 100.04 0 0 1 260 100V111.8L298.6 212.8C299.6 215 300 217.4 300 220", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Hand.displayName = `Blueprint6.Icon.Hand`;
exports.default = exports.Hand;
//# sourceMappingURL=hand.js.map