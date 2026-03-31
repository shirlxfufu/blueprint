"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoomToFit = void 0;
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
exports.ZoomToFit = React.forwardRef((props, ref) => {
    const isLarge = (props.size ?? iconTypes_1.IconSize.STANDARD) >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "zoom-to-fit", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M20 260C31 260 40 269 40 280V360H120C131 360 140 369 140 380S131 400 120 400H20C9 400 0 391 0 380V280C0 269 9 260 20 260M120 240A20.06 20.06 0 0 1 85.8 254.2L45.8 214.2C42.2 210.6 40 205.6 40 200S42.2 189.4 45.8 185.8L85.8 145.8A20.06 20.06 0 0 1 114.2 174.2L88.2 200L114 225.8C117.8 229.4 120 234.4 120 240M160 280C165.6 280 170.6 282.2 174.2 285.8L200 311.8L225.8 286C229.4 282.2 234.4 280 240 280A20.06 20.06 0 0 1 254.2 314.2L214.2 354.2C210.6 357.8 205.6 360 200 360S189.4 357.8 185.8 354.2L145.8 314.2A20.06 20.06 0 0 1 160 280M120 40H40V120C40 131 31 140 20 140S0 131 0 120V20C0 9 9 0 20 0H120C131 0 140 9 140 20S131 40 120 40M280 160A20.06 20.06 0 0 1 314.2000000000001 145.8L354.2000000000001 185.8C357.8 189.4 360 194.4 360 200S357.8 210.6 354.2000000000001 214.2L314.2000000000001 254.2A20.06 20.06 0 0 1 285.8 225.8L311.8 200L286 174.2C282.2000000000001 170.6 280 165.6 280 160M380 400H280C269 400 260 391 260 380S269 360 280 360H360V280C360 269 369 260 380 260S400 269 400 280V380C400 391 391 400 380 400M240 120C234.4 120 229.4 117.8 225.8 114.2000000000001L200 88.2L174.2 114A19.4 19.4 0 0 1 160 120A20.06 20.06 0 0 1 145.8 85.8L185.8 45.8C189.4 42.2 194.4 40 200 40S210.6 42.2 214.2 45.8L254.2 85.8A20.06 20.06 0 0 1 240 120M380 140C369 140 360 131 360 120V40H280C269 40 260 31 260 20S269 0 280 0H380C391 0 400 9 400 20V120C400 131 391 140 380 140" : "M220 120A20.06 20.06 0 0 1 254.2 105.8L294.2000000000001 145.8C297.8 149.4 300 154.4 300 160S297.8 170.6 294.2000000000001 174.2L254.2 214.2A20.06 20.06 0 0 1 225.8 185.8L251.8 160L226 134.2C222.2 130.6 220 125.6 220 120M20 220C31 220 40 229 40 240V280H80C91 280 100 289 100 300S91 320 80 320H20C9 320 0 311 0 300V240C0 229 9 220 20 220M100 200A20.06 20.06 0 0 1 65.8 214.2L25.8 174.2C22.2 170.6 20 165.6 20 160S22.2 149.4 25.8 145.8L65.8 105.8A20.06 20.06 0 0 1 94.2 134.2L68.2 160L94 185.8C97.8 189.4 100 194.4 100 200M120 220C125.6 220 130.6 222.2 134.2 225.8L160 251.8L185.8 226C189.4 222.2 194.4 220 200 220A20.06 20.06 0 0 1 214.2 254.2L174.2 294.2C170.6 297.8 165.6 300 160 300S149.4 297.8 145.8 294.2L105.8 254.2A20.06 20.06 0 0 1 120 220M300 100C289 100 280 91 280 80V40H240C229 40 220 31 220 20S229 0 240 0H300C311 0 320 9 320 20V80C320 91 311 100 300 100M300 320H240C229 320 220 311 220 300S229 280 240 280H280V240C280 229 289 220 300 220S320 229 320 240V300C320 311 311 320 300 320M80 40H40V80C40 91 31 100 20 100S0 91 0 80V20C0 9 9 0 20 0H80C91 0 100 9 100 20S91 40 80 40M200 100C194.4 100 189.4 97.8 185.8 94.2L160 68.2L134.2 94A19.4 19.4 0 0 1 120 100A20.06 20.06 0 0 1 105.8 65.8L145.8 25.8C149.4 22.2 154.4 20 160 20S170.6 22.2 174.2 25.8L214.2 65.8A20.06 20.06 0 0 1 200 100", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.ZoomToFit.displayName = `Blueprint6.Icon.ZoomToFit`;
exports.default = exports.ZoomToFit;
//# sourceMappingURL=zoom-to-fit.js.map