"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clipboard = void 0;
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
exports.Clipboard = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "clipboard", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M340 62.5A27.52 27.52 0 0 0 312.5 35H87.5A27.52 27.52 0 0 0 60 62.5V325C60 332.3 62.88 339.3 68.04 344.46L70.08 346.26C74.98 350.26 81.12 352.5 87.5 352.5H150A15 15 0 0 0 150 322.5H90V65H310V322.5H250A15 15 0 0 0 250 352.5H312.5C318.88 352.5 325.0200000000001 350.28 329.92 346.26L331.96 344.4600000000001L333.76 342.42C337.76 337.52 340 331.38 340 325zM200 377.5A77.5 77.5 0 0 0 277.5 300V287.5A15 15 0 0 0 262.5 272.5H137.5A15 15 0 0 0 122.5 287.5V300L122.6 303.8400000000001A77.5 77.5 0 0 0 200 377.5M200 347.5C187.4 347.5 175.32 342.5 166.4 333.6C158.08 325.28 153.24 314.2 152.6 302.5H247.4000000000001A47.46 47.46 0 0 1 200 347.5" : "M75 55H245V255H223.22Q224.98 247.66 225 240V230A15 15 0 0 0 210 215H110A15 15 0 0 0 95 230V240L95.08 243.22Q95.4 249.22 96.78 255H75zM160 275A35 35 0 0 1 125.4 245H194.6A35 35 0 0 1 160 275M275 50A25 25 0 0 0 250 25H70A25 25 0 0 0 45 50V260C45 266.64 47.64 273 52.32 277.68L54.16 279.3400000000001A25 25 0 0 0 70 285H113.12L114.04 285.96A65 65 0 0 0 205.96 285.96L206.88 285H250C255.8 285 261.4 282.98 265.84 279.3400000000001L267.68 277.68L269.3400000000001 275.84C272.98 271.4 275 265.8 275 260z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Clipboard.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Clipboard.displayName = `Blueprint6.Icon.Clipboard`;
exports.default = exports.Clipboard;
//# sourceMappingURL=clipboard.js.map