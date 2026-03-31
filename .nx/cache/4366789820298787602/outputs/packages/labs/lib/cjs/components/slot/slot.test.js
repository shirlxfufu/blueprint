"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
const react_1 = require("@testing-library/react");
const react_2 = require("react");
const vitest_1 = require("vitest");
const slot_1 = require("./slot");
(0, vitest_1.describe)("<Slot>", () => {
    (0, vitest_1.it)("merges props into a single child", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(slot_1.Slot, { "data-test": "bar", children: (0, jsx_runtime_1.jsx)("button", { id: "foo", children: "Test" }) }));
        const button = react_1.screen.getByRole("button", { name: /test/i });
        (0, vitest_1.expect)(button).toHaveAttribute("id", "foo");
        (0, vitest_1.expect)(button).toHaveAttribute("data-test", "bar");
    });
    (0, vitest_1.it)("merges className and style", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(slot_1.Slot, { className: "outer", style: { fontWeight: 700 }, children: (0, jsx_runtime_1.jsx)("button", { className: "inner", style: { fontStyle: "italic" }, children: "Test" }) }));
        const button = react_1.screen.getByRole("button", { name: /test/i });
        (0, vitest_1.expect)(button).toHaveClass("outer");
        (0, vitest_1.expect)(button).toHaveClass("inner");
        (0, vitest_1.expect)(button).toHaveStyle({ fontWeight: 700 });
        (0, vitest_1.expect)(button).toHaveStyle({ fontStyle: "italic" });
    });
    (0, vitest_1.it)("forwards ref to the child", () => {
        const ref = (0, react_2.createRef)();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(slot_1.Slot, { ref: ref, children: (0, jsx_runtime_1.jsx)("button", { children: "Test" }) }));
        (0, vitest_1.expect)(ref.current).toBeInstanceOf(HTMLButtonElement);
        (0, vitest_1.expect)(ref.current).toBeInTheDocument();
    });
    (0, vitest_1.it)("returns null if no children are provided", () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(slot_1.Slot, {}));
        (0, vitest_1.expect)(container.firstChild).toBeNull();
    });
    (0, vitest_1.it)("throws an error when multiple children are provided", () => {
        // suppress error logging to keep test output clean
        const stderrWriteSpy = vitest_1.vi.spyOn(process.stderr, "write").mockImplementation(vitest_1.vi.fn());
        const consoleErrorSpy = vitest_1.vi.spyOn(console, "error").mockImplementation(vitest_1.vi.fn());
        (0, vitest_1.expect)(() => {
            (0, react_1.render)((0, jsx_runtime_1.jsxs)(slot_1.Slot, { children: [(0, jsx_runtime_1.jsx)("button", { children: "First" }), (0, jsx_runtime_1.jsx)("button", { children: "Second" })] }));
        }).toThrow("Only single element child is allowed in Slot");
        stderrWriteSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });
});
//# sourceMappingURL=slot.test.js.map