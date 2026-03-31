"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessage = void 0;
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
exports.SendMessage = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "send-message", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M35.08 397.3L387.86 218.8C399.26 213.04 403.36 199.94 397.02 189.56C394.88 186.04 391.7000000000001 183.16 387.86 181.2L35.06 2.6999999999999C23.66 -3.0600000000001 9.3 0.6999999999999 2.98 11.0599999999999C1 14.26 0 16.34 0 20V160L220 200L0 240V378.5C0 390.38 10.58 400 23.6 400C27.62 400 31.58 399.06 35.08 397.3" : "M307.98 139.8L30.54 2.5C19.84 -2.84 7.04 0.88 2.12 11.04A19 19 0 0 0 0 20V120L160 160L0 200V300C0 310.56 8.14 320 20.08 320C23.46 320 28.4 319.2 31.42 317.68L308.06 178.6A21.68 21.68 0 0 0 307.96 139.82", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.SendMessage.displayName = `Blueprint6.Icon.SendMessage`;
exports.default = exports.SendMessage;
//# sourceMappingURL=send-message.js.map