"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectComponentSuite = selectComponentSuite;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
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
const chai_1 = require("chai");
const sinon_1 = tslib_1.__importDefault(require("sinon"));
const core_1 = require("@blueprintjs/core");
const __examples__1 = require("../../__examples__");
function selectComponentSuite(render, findInput = wrapper => wrapper.find("input"), findItems = wrapper => wrapper.find("a")) {
    const testProps = {
        itemPredicate: __examples__1.filterFilm,
        itemRenderer: sinon_1.default.spy(__examples__1.renderFilm),
        items: __examples__1.TOP_100_FILMS.slice(0, 20),
        itemsEqual: __examples__1.areFilmsEqual,
        onActiveItemChange: sinon_1.default.spy(),
        onItemSelect: sinon_1.default.spy(),
        onQueryChange: sinon_1.default.spy(),
        query: "19",
    };
    beforeEach(() => {
        testProps.itemRenderer.resetHistory();
        testProps.onActiveItemChange.resetHistory();
        testProps.onItemSelect.resetHistory();
        testProps.onQueryChange.resetHistory();
    });
    describe("common behavior", () => {
        it("itemRenderer is called for each child", () => {
            const wrapper = render(testProps);
            // each item is rendered once
            chai_1.assert.lengthOf(wrapper.find(`.${core_1.Classes.MENU_ITEM}`).hostNodes(), 15, "re-render");
            wrapper.setProps({ query: "1999" });
            wrapper.update();
            chai_1.assert.lengthOf(wrapper.find(`.${core_1.Classes.MENU_ITEM}`).hostNodes(), 2, "re-render");
        });
        it("renders noResults when given empty list", () => {
            const wrapper = render({ ...testProps, items: [], noResults: (0, jsx_runtime_1.jsx)("address", {}) });
            chai_1.assert.lengthOf(wrapper.find("address"), 1, "should find noResults");
        });
        it("renders noResults when filtering returns empty list", () => {
            const wrapper = render({
                ...testProps,
                noResults: (0, jsx_runtime_1.jsx)("address", {}),
                query: "non-existent film name",
            });
            chai_1.assert.lengthOf(wrapper.find("address"), 1, "should find noResults");
        });
        it("clicking item invokes onItemSelect and changes active item", () => {
            const wrapper = render(testProps);
            findItems(wrapper).at(4).simulate("click");
            chai_1.assert.strictEqual(testProps.onItemSelect.args[0][0].rank, 6, "onItemSelect");
            chai_1.assert.strictEqual(testProps.onActiveItemChange.args[0][0].rank, 6, "onActiveItemChange");
        });
        it("clicking item resets state when resetOnSelect=true", () => {
            const wrapper = render({
                ...testProps,
                query: "19",
                resetOnQuery: false,
                resetOnSelect: true,
            });
            findItems(wrapper).at(3).simulate("click");
            const ranks = testProps.onActiveItemChange.args.map(args => args[0].rank);
            // clicking changes to 5, then resets to 1
            chai_1.assert.deepEqual(ranks, [5, 1]);
            chai_1.assert.strictEqual(testProps.onQueryChange.lastCall.args[0], "");
        });
        it("querying does not reset active item when resetOnQuery=false", () => {
            const wrapper = render({ ...testProps, query: "19", resetOnQuery: false });
            // more specific query does not change active item.
            wrapper.setProps({ query: "199" });
            chai_1.assert.strictEqual(testProps.onActiveItemChange.lastCall, null);
        });
        it("querying resets active item when resetOnQuery=true", () => {
            const wrapper = render({ ...testProps, query: "19", resetOnQuery: true });
            // more specific query picks the first item.
            wrapper.setProps({ query: "199" });
            chai_1.assert.strictEqual(testProps.onActiveItemChange.lastCall.args[0].rank, 1);
        });
        it("querying resets active item if it does not match", () => {
            const wrapper = render({ ...testProps, query: "19", resetOnQuery: false });
            // a different query altogether invalidates the previous active item, so QL chooses the first.
            wrapper.setProps({ query: "Forrest" });
            chai_1.assert.strictEqual(testProps.onActiveItemChange.lastCall.args[0].title, "Forrest Gump");
        });
    });
    describe("keyboard", () => {
        it("arrow down invokes onActiveItemChange with next filtered item", () => {
            const wrapper = render(testProps);
            findInput(wrapper).simulate("keydown", { key: "ArrowDown" }).simulate("keydown", { key: "ArrowDown" });
            chai_1.assert.equal(testProps.onActiveItemChange.lastCall.args[0].rank, 3);
        });
        it("arrow up invokes onActiveItemChange with previous filtered item", () => {
            const wrapper = render(testProps);
            findInput(wrapper).simulate("keydown", { key: "ArrowUp" });
            chai_1.assert.equal(testProps.onActiveItemChange.lastCall.args[0].rank, 20);
        });
        it("arrow up/down does not invokes onActiveItemChange, when all items are disabled", () => {
            const wrapper = render({ ...testProps, itemDisabled: () => true });
            findInput(wrapper).simulate("keydown", { key: "ArrowDown" });
            chai_1.assert.isNull(testProps.onActiveItemChange.lastCall);
            findInput(wrapper).simulate("keyup", { key: "ArrowUp" });
            chai_1.assert.isNull(testProps.onActiveItemChange.lastCall);
        });
        it("enter invokes onItemSelect with active item", () => {
            const wrapper = render(testProps);
            findInput(wrapper).simulate("keydown", { key: "Enter" });
            findInput(wrapper).simulate("keyup", { key: "Enter" });
            const activeItem = testProps.onActiveItemChange.lastCall.args[0];
            chai_1.assert.equal(testProps.onItemSelect.lastCall.args[0], activeItem);
        });
    });
    describe("create", () => {
        const testCreateProps = {
            ...testProps,
            createNewItemFromQuery: sinon_1.default.spy(),
            createNewItemRenderer: () => (0, jsx_runtime_1.jsx)("textarea", {}),
            noResults: (0, jsx_runtime_1.jsx)("address", {}),
        };
        beforeEach(() => {
            testCreateProps.createNewItemFromQuery.resetHistory();
        });
        it("doesn't render create item if input is empty", () => {
            const wrapper = render({
                ...testCreateProps,
                query: "",
            });
            chai_1.assert.lengthOf(findCreateItem(wrapper), 0, "should not find createItem");
        });
        it("doesn't render create item if query is non-empty and matches one of the items", () => {
            const EXISTING_FILM_TITLE = __examples__1.TOP_100_FILMS[0].title;
            const wrapper = render({
                ...testCreateProps,
                // We need this callback to return a real item this time, and we
                // don't need to spy on it.
                createNewItemFromQuery: __examples__1.createFilm,
                query: EXISTING_FILM_TITLE,
            });
            chai_1.assert.lengthOf(wrapper.find("address"), 0, "should not find noResults");
            chai_1.assert.lengthOf(findCreateItem(wrapper), 0, "should not find createItem");
        });
        it("renders create item if query is not empty and doesn't match any items exactly", () => {
            const wrapper = render({
                ...testCreateProps,
                query: __examples__1.TOP_100_FILMS[0].title + " a few extra chars",
            });
            chai_1.assert.lengthOf(wrapper.find("address"), 0, "should not find noResults");
            chai_1.assert.lengthOf(findCreateItem(wrapper), 1, "should find createItem");
        });
        it("renders create item if filtering returns empty list", () => {
            const wrapper = render({
                ...testCreateProps,
                query: "non-existent film name",
            });
            chai_1.assert.lengthOf(wrapper.find("address"), 0, "should not find noResults");
            chai_1.assert.lengthOf(findCreateItem(wrapper), 1, "should find createItem");
        });
        it("enter invokes createNewItemFromQuery", () => {
            const wrapper = render({
                ...testCreateProps,
                query: "non-existent film name",
            });
            findInput(wrapper).simulate("keyup", { key: "Enter" });
            chai_1.assert.equal(testCreateProps.createNewItemFromQuery.args[0][0], "non-existent film name");
        });
        it("when createNewItemFromQuery returns an array, it should invoke onItemSelect once per each item in the array", () => {
            const wrapper = render({
                ...testCreateProps,
                createNewItemFromQuery: __examples__1.createFilms,
                query: "non-existent film name, second film name",
            });
            chai_1.assert.lengthOf(findCreateItem(wrapper), 1, "should find createItem");
            findInput(wrapper).simulate("keydown", { key: "Enter" });
            findInput(wrapper).simulate("keyup", { key: "Enter" });
            chai_1.assert.isTrue(testCreateProps.onItemSelect.calledTwice, "should invoke onItemSelect twice");
            chai_1.assert.equal(testCreateProps.onItemSelect.args[0][0].title, "non-existent film name", "should create and select first item");
            chai_1.assert.equal(testCreateProps.onItemSelect.args[1][0].title, "second film name", "should create and select second item");
        });
        it("when create item is rendered, arrow down invokes onActiveItemChange with activeItem=null and isCreateNewItem=true", () => {
            const wrapper = render({
                ...testCreateProps,
                query: __examples__1.TOP_100_FILMS[0].title,
            });
            findInput(wrapper).simulate("keydown", { key: "ArrowDown" });
            chai_1.assert.isNull(testProps.onActiveItemChange.lastCall.args[0]);
            chai_1.assert.isTrue(testProps.onActiveItemChange.lastCall.args[1]);
            findInput(wrapper).simulate("keydown", { key: "ArrowDown" });
            chai_1.assert.equal(testProps.onActiveItemChange.lastCall.args[0].rank, __examples__1.TOP_100_FILMS[0].rank);
            chai_1.assert.isFalse(testProps.onActiveItemChange.lastCall.args[1]);
        });
        it("when create item is rendered, arrow up invokes onActiveItemChange with an `CreateNewItem`", () => {
            const wrapper = render({
                ...testCreateProps,
                query: __examples__1.TOP_100_FILMS[0].title,
            });
            findInput(wrapper).simulate("keydown", { key: "ArrowUp" });
            chai_1.assert.isNull(testProps.onActiveItemChange.lastCall.args[0]);
            chai_1.assert.isTrue(testProps.onActiveItemChange.lastCall.args[1]);
            findInput(wrapper).simulate("keydown", { key: "ArrowUp" });
            chai_1.assert.equal(testProps.onActiveItemChange.lastCall.args[0].rank, __examples__1.TOP_100_FILMS[0].rank);
            chai_1.assert.isFalse(testProps.onActiveItemChange.lastCall.args[1]);
        });
        it("when create item is rendered, updating the query to exactly match one of the items hides the create item", () => {
            const wrapper = render({
                ...testCreateProps,
                // Again, we need this callback to return a real item this time.
                createNewItemFromQuery: __examples__1.createFilm,
                query: "non-empty, non-matching initial value",
            });
            chai_1.assert.lengthOf(findCreateItem(wrapper), 1, "should find createItem");
            const EXISTING_FILM_TITLE = __examples__1.TOP_100_FILMS[0].title;
            findInput(wrapper).simulate("change", { target: { value: EXISTING_FILM_TITLE } });
            chai_1.assert.lengthOf(findCreateItem(wrapper), 0, "should not find createItem");
        });
    });
    function findCreateItem(wrapper) {
        return wrapper.find("textarea");
    }
}
//# sourceMappingURL=selectComponentTestUtils.js.map