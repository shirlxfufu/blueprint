"use strict";
/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
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
exports.selectPopoverTestSuite = selectPopoverTestSuite;
const tslib_1 = require("tslib");
const chai_1 = require("chai");
const sinon = tslib_1.__importStar(require("sinon"));
const core_1 = require("@blueprintjs/core");
const __examples__1 = require("../../__examples__");
/**
 * Common tests for popover functionality in select components.
 *
 * @param render should ensure the component is attached to a DOM node so that we can get accurate DOM measurements.
 */
function selectPopoverTestSuite(render, findPopover = wrapper => wrapper.find(`.${core_1.Classes.POPOVER}`), findTarget = wrapper => wrapper.find(`.${core_1.Classes.POPOVER_TARGET}`)) {
    const defaultProps = {
        itemPredicate: __examples__1.filterFilm,
        itemRenderer: sinon.spy(__examples__1.renderFilm),
        items: __examples__1.TOP_100_FILMS.slice(0, 20),
        itemsEqual: __examples__1.areFilmsEqual,
        onActiveItemChange: sinon.spy(),
        onItemSelect: sinon.spy(),
        onQueryChange: sinon.spy(),
        query: "19",
    };
    const defaultPopoverProps = {
        isOpen: true,
        usePortal: false,
    };
    describe("popoverProps functionality", () => {
        it("matchTargetWidth: true makes popover same width as target", () => {
            const wrapper = render({
                ...defaultProps,
                popoverProps: { ...defaultPopoverProps, matchTargetWidth: true },
            });
            const popoverWidth = findPopover(wrapper).hostNodes().getDOMNode().clientWidth;
            const targetWidth = findTarget(wrapper).hostNodes().getDOMNode().clientWidth;
            chai_1.assert.notEqual(popoverWidth, 0, "popover width should be > 0");
            chai_1.assert.notEqual(targetWidth, 0, "target width should be > 0");
            chai_1.assert.closeTo(targetWidth, popoverWidth, 1, "popover width should be close to target width");
            wrapper.detach();
        });
        it("targetTagName allows customizing the target element", () => {
            const targetTagName = "a";
            const wrapper = render({
                ...defaultProps,
                popoverProps: { ...defaultPopoverProps, targetTagName },
            });
            const anchorElement = wrapper.find(`${targetTagName}.${core_1.Classes.POPOVER_TARGET}`);
            chai_1.assert.isTrue(anchorElement.exists(), `Expected to find popover target element with tag name '${targetTagName}'`);
            wrapper.detach();
        });
    });
}
//# sourceMappingURL=selectPopoverTestUtils.js.map