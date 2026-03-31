"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedSubscribed = void 0;
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
exports.FeedSubscribed = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "feed-subscribed", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M50 100A50 50 0 0 1 50 0A50 50 0 0 1 50 100M60 360C95.2 360 128.8 353.8 160.2 342.6C160.8 356.8 166.4 369.6 175.2 379.6C139.2 392.6 100.6 400 60 400C49 400 40 391 40 380S49 360 60 360M266.4 266.6A19.8 19.8 0 0 1 294.4000000000001 266.6L394.0000000000001 366.2C397.8000000000001 369.6 400.0000000000001 374.6 400.0000000000001 380.2C400.0000000000001 391.2 391.0000000000001 400.2 380.0000000000001 400.2A20 20 0 0 1 366.0000000000001 394.4000000000001L280.6000000000001 309L235.0000000000001 354.6A20 20 0 0 1 221.0000000000001 360.4000000000001C210.0000000000001 360.4000000000001 201.2000000000001 351.4000000000001 201.2000000000001 340.4000000000001C201.2000000000001 334.8 203.4000000000001 330 207.0000000000001 326.4000000000001zM60 200C49 200 40 191 40 180S49 160 60 160C115.2 160 160 115.2 160 60C160 49 169 40 180 40S200 49 200 60C200 137.4 137.4 200 60 200M338.8 253.8L322.4 237.4L322 237.8C318 233.8 313.6 230.4 308.6 227.6A296 296 0 0 0 360 60C360 49 369 40 380 40S400 49 400 60C400 132.2 377.2 198.8 338.8 253.8M60 300C49 300 40 291 40 280S49 260 60 260C170.4 260 260 170.4 260 60C260 49 269 40 280 40S300 49 300 60C300 192.6 192.6 300 60 300" : "M60 280C81.2 280 101.6 276.8 121.2 271C123.8 285.2 131.6 297.4 142.2 306.2C116.4 315 88.8 320 60 320C49 320 40 311 40 300S49 280 60 280M40 80C18 80 0 62 0 40S18 0 40 0S80 18 80 40S62 80 40 80M206.4 206.6A19.8 19.8 0 0 1 234.4 206.6L314 286.2C317.8 289.8 320 294.6 320 300.2C320 311.2 311 320 300 320C294.4000000000001 320 289.6 317.8 286 314.2L220.4 248.6L194.6 274.4A20 20 0 0 1 180.6 280.2A20 20 0 0 1 160.6 260.4C160.6 255 162.8 250 166.4 246.4zM281 196L262.4000000000001 177.4L262 177.8C258.6 174.4 255.0000000000001 171.2 250.8 168.8C269.4000000000001 136.8 280 99.6 280 60C280 49 289 40 300 40S320 49 320 60C320 110 305.4 156.4 281 196M60 160C49 160 40 151 40 140S49 120 60 120C93.2 120 120 93.2 120 60C120 49 129 40 140 40S160 49 160 60C160 115.2 115.2 160 60 160M178.2 178.2L177.6 177.6L137.6 217.6L138.2 218.2C136 220.4 133.6 222.2 131.6 224.8A178 178 0 0 1 60 240C49 240 40 231 40 220S49 200 60 200C137.4 200 200 137.4 200 60C200 49 209 40 220 40S240 49 240 60C240 97.4 228.6 132.2 209 161.2C196.8 163.4 186.4 169.6 178.2 178.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.FeedSubscribed.displayName = `Blueprint6.Icon.FeedSubscribed`;
exports.default = exports.FeedSubscribed;
//# sourceMappingURL=feed-subscribed.js.map