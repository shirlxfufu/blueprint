"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudUpload = void 0;
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
exports.CloudUpload = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "cloud-upload", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M214.2 194.2C210.6 197.8 205.6 200 200 200S189.4 197.8 185.8 194.2L125.8 134.2000000000001A20.06 20.06 0 0 1 154.2 105.8L180 131.8V20C180 9 189 0 200 0S220 9 220 20V131.8L245.8 106C249.4 102.2000000000001 254.4 100 260 100A20.06 20.06 0 0 1 274.2000000000001 134.2000000000001zM300 320C297.6 320 295.2 319.4 292.8 319.2C276.6 366.2 232.4 400 180 400C113.8 400 60 346.2 60 280C60 279 60.2 278.2 60.2 277.2A79.6 79.6 0 0 1 0 200C0 155.8 35.8 120 80 120C80 136.6 86.8 151.6 97.6 162.4L157.6 222.4A59.86 59.86 0 0 0 242.4000000000001 222.4L302.4000000000001 162.4L302.2000000000001 162.2C312.6 151.8000000000001 319.2000000000001 137.6 319.6 121.8C365.6 131.2 400 171.6 400 220C400 275.2 355.2 320 300 320" : "M174.2 174.2C170.6 177.8 165.6 180 160 180S149.4 177.8 145.8 174.2L85.8 114.2A20.06 20.06 0 0 1 114.2 85.8L140 111.8V20C140 9 149 0 160 0S180 9 180 20V111.8L205.8 86C209.4 82.2 214.4 80 220 80A20.06 20.06 0 0 1 234.2 114.2zM240 240C239.4 240 238.6 240 238 239.8A100 100 0 0 1 40 220C40 217.8 40.2 215.6 40.4 213.4A69.9 69.9 0 0 1 41.8 86C40.8 90.6 40 95.2000000000001 40 100C40 116.6 46.8 131.6 57.6 142.4L117.6 202.4A59.86 59.86 0 0 0 202.4 202.4L262.4000000000001 142.4C273.2 131.6 280.0000000000001 116.6 280.0000000000001 100C280.0000000000001 96.8 279.6 93.6 279 90.6C303.4 104.4 320 130 320 160C320 204.2 284.2000000000001 240 240 240", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.CloudUpload.displayName = `Blueprint6.Icon.CloudUpload`;
exports.default = exports.CloudUpload;
//# sourceMappingURL=cloud-upload.js.map