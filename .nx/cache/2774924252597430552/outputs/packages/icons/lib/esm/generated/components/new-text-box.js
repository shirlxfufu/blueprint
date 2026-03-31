import { jsx as _jsx } from "react/jsx-runtime";
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
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const NewTextBox = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    const style = { transformOrigin: "center" };
    return (_jsx(SVGIconContainer, { iconName: "new-text-box", ref: ref, ...props, children: _jsx("path", { d: isLarge ? "M160 75V325A15 15 0 0 0 190 325V75A15 15 0 0 0 160 75M390 125A27.52 27.52 0 0 0 362.5 97.5H237.5A15 15 0 0 0 237.5 127.5H360V272.5H237.5A15 15 0 0 0 237.5 302.5H362.5C368.88 302.5 375.0200000000001 300.28 379.92 296.26L381.96 294.46L383.76 292.42C387.76 287.52 390 281.38 390 275zM175 302.5A15 15 0 0 0 175 272.5H40V127.5H175A15 15 0 0 0 175 97.5H37.5A27.52 27.52 0 0 0 10 125V275C10 282.3 12.88 289.3 18.04 294.46L20.08 296.26C24.98 300.26 31.12 302.5 37.5 302.5zM118.76 240A15 15 0 0 0 118.76 210H81.26A15 15 0 0 0 81.26 240zM85 175V225A15 15 0 0 0 115 225V175A15 15 0 0 0 85 175" : "M125 60V75H30C24.2 75 18.6 77.02 14.16 80.66L12.32 82.32A25 25 0 0 0 5 100V220C5 226.64 7.64 233 12.32 237.68L14.16 239.34A25 25 0 0 0 30 245H125V260A15 15 0 0 0 155 260V60A15 15 0 0 0 125 60M35 105H125V215H35zM65 140V165A15 15 0 0 0 65 195H95A15 15 0 0 0 95 165V140A15 15 0 0 0 65 140M315 100C315 94.2 312.98 88.6 309.3400000000001 84.16L307.68 82.32A25 25 0 0 0 290 75H190A15 15 0 0 0 190 105H285V215H190A15 15 0 0 0 190 245H290C295.8 245 301.4 242.98 305.84 239.34L307.68 237.68C312.36 232.98 315 226.64 315 220z", fillRule: "evenodd", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})`, style: style }) }));
});
NewTextBox.defaultProps = {
    size: IconSize.STANDARD,
};
NewTextBox.displayName = `Blueprint6.Icon.NewTextBox`;
export default NewTextBox;
//# sourceMappingURL=new-text-box.js.map