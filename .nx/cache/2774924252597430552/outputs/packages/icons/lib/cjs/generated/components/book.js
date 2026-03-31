"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
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
exports.Book = React.forwardRef((props, ref) => {
    const isLarge = props.size >= iconTypes_1.IconSize.LARGE;
    const pixelGridSize = isLarge ? iconTypes_1.IconSize.LARGE : iconTypes_1.IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return ((0, jsx_runtime_1.jsx)(svgIconContainer_1.SVGIconContainer, { iconName: "book", ref: ref, ...props, children: (0, jsx_runtime_1.jsx)("path", { d: isLarge ? "M153.76 350A15 15 0 0 0 183.76 350V231.24L206.24 249.2200000000001A15 15 0 0 0 224.98 249.2200000000001L247.5 231.2200000000001V350A15 15 0 0 0 277.5 350V200A15 15 0 0 0 253.12 188.28L215.6 218.3L178.12 188.3A15.02 15.02 0 0 0 153.74 200zM60 75V312.5A52.5 52.5 0 0 0 112.5 365H325A15 15 0 0 0 340 350V112.5A15 15 0 0 0 325 97.5H112.5A22.5 22.5 0 0 1 90 75A15 15 0 0 0 60 75M90 122.36A52 52 0 0 0 112.5 127.5H310V335H112.5A22.52 22.52 0 0 1 90 312.5zM60 75A15 15 0 0 0 90 75V65H300A15 15 0 0 0 300 35H75A15 15 0 0 0 60 50z" : "M45 250A45 45 0 0 0 90 295H260A15 15 0 0 0 275 280V90A15 15 0 0 0 260 75H90A15 15 0 0 1 75 60V55H240A15 15 0 0 0 240 25H60A15 15 0 0 0 45 40zM150 191.24L163.1 201.72A15 15 0 0 0 181.86 201.72L195 191.22V265H150zM75 102.38C79.78 104.08 84.84 105 90 105H245V265H225V160A15 15 0 0 0 200.62 148.28L172.48 170.8L144.38 148.28A15 15 0 0 0 120 160V265H90A15 15 0 0 1 75 250z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
exports.Book.defaultProps = {
    size: iconTypes_1.IconSize.STANDARD,
};
exports.Book.displayName = `Blueprint6.Icon.Book`;
exports.default = exports.Book;
//# sourceMappingURL=book.js.map