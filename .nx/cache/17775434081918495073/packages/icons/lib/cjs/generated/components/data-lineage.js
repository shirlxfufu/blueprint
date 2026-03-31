"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLineage = void 0;
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
exports.DataLineage = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "data-lineage", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M21.06 400C9.4 400 0 390.58 0 378.94V315.8C0 304.2 9.42 294.76 21.06 294.76H86.56A126.6 126.6 0 0 1 161.12 200A126.6 126.6 0 0 1 86.56 105.26L21.06 105.28A21.06 21.06 0 0 1 0 84.22V21.06C0 9.4 9.42 0 21.06 0H169.76C181.38 0 190.82 9.42 190.82 21.06V84.2000000000001C190.82 95.8 181.38 105.24 169.76 105.24H108.12A105.8 105.8 0 0 0 212.02 189.44V147.34C212.02 135.74 221.44 126.3 233.06 126.3H378.94C390.58 126.3 400 135.72 400 147.34V252.64C400 264.24 390.58 273.68 378.94 273.68H233.06C221.44 273.68 212.02 264.26 212.02 252.64V210.52A105.8 105.8 0 0 0 108.14 294.7200000000001H169.76C181.38 294.7200000000001 190.82 304.16 190.82 315.78V378.94A21.06 21.06 0 0 1 169.76 400z" : "M21.34 320C9.54 320 0 310.44 0 298.6600000000001V256C0 244.2 9.56 234.66 21.34 234.66H66.14A106.8 106.8 0 0 1 124.14 159.98A106.8 106.8 0 0 1 66.14 85.32H21.34A21.3 21.3 0 0 1 0 64V21.34C0 9.54 9.56 0 21.34 0H128C139.8 0 149.34 9.56 149.34 21.34V64C149.34 75.8 139.78 85.34 128 85.34H88.02A85.4 85.4 0 0 0 166.42 149.22L170.66 149.34V128C170.66 116.2 180.22 106.66 192 106.66H298.66C310.46 106.66 320 116.22 320 128V192C320 203.8 310.44 213.34 298.66 213.34H192C180.2 213.34 170.66 203.78 170.66 192V170.66A85.4 85.4 0 0 0 88.02 234.66H128C139.8 234.66 149.34 244.22 149.34 256V298.6600000000001C149.34 310.46 139.78 320 128 320z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.DataLineage.displayName = `Blueprint6.Icon.DataLineage`;
exports.default = exports.DataLineage;
//# sourceMappingURL=data-lineage.js.map