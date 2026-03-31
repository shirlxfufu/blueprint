"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clip = void 0;
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
exports.Clip = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "clip", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M335 287.5V335H287.5A15 15 0 0 0 287.5 365H350A15 15 0 0 0 365 350V287.5A15 15 0 0 0 335 287.5M35 112.5A15 15 0 0 0 65 112.5V65H112.5A15 15 0 0 0 112.5 35H50A15 15 0 0 0 35 50zM335 112.5A15 15 0 0 0 365 112.5V50A15 15 0 0 0 350 35H287.5A15 15 0 0 0 287.5 65H335zM35 287.5V350A15 15 0 0 0 50 365H112.5A15 15 0 0 0 112.5 335H65V287.5A15 15 0 0 0 35 287.5M250 204.9A50 50 0 1 0 150 204.9A50 50 0 0 0 250 204.9M220 204.9A20 20 0 1 1 200 184.9V154.9A50 50 0 1 0 200 254.9A50 50 0 0 0 200 154.9V184.9A20 20 0 0 1 220 204.9" : "M265 230V265H230A15 15 0 0 0 230 295H280A15 15 0 0 0 295 280V230A15 15 0 0 0 265 230M25 90A15 15 0 0 0 55 90V55H90A15 15 0 0 0 90 25H40A15 15 0 0 0 25 40zM265 90A15 15 0 0 0 295 90V40A15 15 0 0 0 280 25H230A15 15 0 0 0 230 55H265zM25 230V280A15 15 0 0 0 40 295H90A15 15 0 0 0 90 265H55V230A15 15 0 0 0 25 230M200 163.92A40 40 0 1 0 120 163.92A40 40 0 0 0 200 163.92M170 163.92A10 10 0 1 1 160 153.92V123.92A40 40 0 1 0 160 203.92A40 40 0 0 0 160 123.92V153.92A10 10 0 0 1 170 163.92", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Clip.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Clip.displayName = `Blueprint6.Icon.Clip`;
exports.default = exports.Clip;
//# sourceMappingURL=clip.js.map