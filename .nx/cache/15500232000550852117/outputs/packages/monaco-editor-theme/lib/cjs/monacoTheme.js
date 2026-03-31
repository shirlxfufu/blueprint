"use strict";
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonacoThemeDark = exports.MonacoThemeLight = void 0;
const colors_1 = require("@blueprintjs/colors");
exports.MonacoThemeLight = {
    base: "vs",
    colors: {
        "editor.background": colors_1.Colors.WHITE,
        "editor.foreground": colors_1.Colors.DARK_GRAY1,
    },
    inherit: false,
    rules: [
        token("attribute.name", colors_1.Colors.ORANGE3),
        token("attribute.value", colors_1.Colors.LIME2),
        token("comment", colors_1.Colors.GRAY2),
        token("delimiter", colors_1.Colors.DARK_GRAY5),
        token("function", colors_1.Colors.BLUE3),
        token("identifier", colors_1.Colors.TURQUOISE2),
        token("keyword", colors_1.Colors.VIOLET4),
        token("number", colors_1.Colors.ROSE2),
        token("operator", colors_1.Colors.VIOLET4),
        token("string", colors_1.Colors.LIME2),
        token("tag", colors_1.Colors.FOREST3),
        token("type.identifier", colors_1.Colors.GOLD2),
    ],
};
exports.MonacoThemeDark = {
    base: "vs-dark",
    colors: {
        "editor.background": colors_1.Colors.BLACK,
        "editor.foreground": colors_1.Colors.GRAY5,
    },
    inherit: false,
    rules: [
        token("attribute.name", colors_1.Colors.ORANGE4),
        token("attribute.value", colors_1.Colors.LIME4),
        token("comment", colors_1.Colors.GRAY2),
        token("delimiter", colors_1.Colors.LIGHT_GRAY3),
        token("function", colors_1.Colors.BLUE4),
        token("identifier", colors_1.Colors.TURQUOISE3),
        token("keyword", colors_1.Colors.VIOLET4),
        token("number", colors_1.Colors.ROSE4),
        token("operator", colors_1.Colors.VIOLET5),
        token("string", colors_1.Colors.LIME4),
        token("tag", colors_1.Colors.FOREST3),
        token("type.identifier", colors_1.Colors.GOLD5),
    ],
};
function token(tokenName, color) {
    return { foreground: color, token: tokenName };
}
//# sourceMappingURL=monacoTheme.js.map