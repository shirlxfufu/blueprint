"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronUp = void 0;
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
exports.ChevronUp = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "chevron-up", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M334.2000000000001 154.2L214.2 274.2000000000001C210.6 277.8 205.6 280 200 280S189.4 277.8 185.8 274.2L65.8 154.2A20.06 20.06 0 0 1 94.2 125.8L200 231.8L305.8 126C309.4 122.2000000000001 314.4 120 320 120A20.06 20.06 0 0 1 334.2000000000001 154.2" : "M254.2 134.2L174.2 214.2C170.6 217.8 165.6 220 160 220S149.4 217.8 145.8 214.2L65.8 134.2A20.06 20.06 0 0 1 94.2 105.8L160 171.8L225.8 106C229.4 102.2 234.4 100 240 100A20.06 20.06 0 0 1 254.2 134.2", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ChevronUp.displayName = `Blueprint6.Icon.ChevronUp`;
exports.default = exports.ChevronUp;
//# sourceMappingURL=chevron-up.js.map