"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
const react_1 = require("@testing-library/react");
const react_2 = require("react");
const core_1 = require("@blueprintjs/core");
const vitest_1 = require("@blueprintjs/test-commons/vitest");
const common_1 = require("../../common");
const box_1 = require("./box");
const NS = common_1.Classes.getClassNamespace();
(0, vitest_1.describe)("<Box>", () => {
    (0, vitest_1.test)("should render content", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box).toBeInTheDocument();
    });
    (0, vitest_1.test)("should render as a div by default", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box.tagName).toBe("DIV");
    });
    (0, vitest_1.test)("should pass through data attributes", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { "data-test": "foo", children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box.dataset.test).toBe("foo");
    });
    (0, vitest_1.test)("should support className", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { className: "foo", children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box).toHaveClass("foo");
    });
    (0, vitest_1.test)("should support style", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { style: { fontWeight: 700 }, children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box).toHaveStyle({ fontWeight: 700 });
    });
    (0, vitest_1.test)("should support computed class names", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { display: "flex", margin: 2, children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box).toHaveClass(`${NS}-flex`);
        (0, vitest_1.expect)(box).toHaveClass(`${NS}-margin-2`);
    });
    (0, vitest_1.test)("should support flexGrow, flexShrink, and flexBasis props", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { flexGrow: 1, flexShrink: 0, flexBasis: 0, children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box).toHaveClass(`${NS}-flex-grow-1`);
        (0, vitest_1.expect)(box).toHaveClass(`${NS}-flex-shrink-0`);
        (0, vitest_1.expect)(box).toHaveClass(`${NS}-flex-basis-0`);
    });
    (0, vitest_1.test)("should attach ref", () => {
        const ref = (0, react_2.createRef)();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { ref: ref, children: "Test" }));
        (0, vitest_1.expect)(ref.current).toBeInstanceOf(HTMLDivElement);
        (0, vitest_1.expect)(ref.current).toBeInTheDocument();
    });
    (0, vitest_1.test)("should not support unsupported/invalid props in types", () => {
        // "foo" is not a valid HTML attribute
        // @ts-expect-error
        (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { foo: "bar", children: "Test" }));
        const box = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(box).toHaveAttribute("foo", "bar");
    });
    (0, vitest_1.describe)("asChild", () => {
        (0, vitest_1.test)("should render as child with asChild prop", () => {
            (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { asChild: true, "data-test": "foo", children: (0, jsx_runtime_1.jsx)(core_1.Button, { intent: "primary", children: "Test" }) }));
            const button = react_1.screen.getByRole("button", { name: /test/i });
            (0, vitest_1.expect)(button).toHaveClass(common_1.Classes.BOX);
            (0, vitest_1.expect)(button).toHaveClass(core_1.Classes.BUTTON);
            (0, vitest_1.expect)(button).toHaveClass(core_1.Classes.INTENT_PRIMARY);
            (0, vitest_1.expect)(button).toHaveAttribute("data-test", "foo");
        });
        (0, vitest_1.test)("should merge styles with asChild prop", () => {
            (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { asChild: true, style: { fontWeight: 700 }, children: (0, jsx_runtime_1.jsx)(core_1.Button, { style: { color: "blue" }, children: "Test" }) }));
            const button = react_1.screen.getByRole("button", { name: /test/i });
            (0, vitest_1.expect)(button).toHaveStyle({ fontWeight: 700 });
        });
        (0, vitest_1.test)("should remove margin on wrapped component", () => {
            (0, react_1.render)((0, jsx_runtime_1.jsx)(box_1.Box, { asChild: true, marginYEnd: 0, children: (0, jsx_runtime_1.jsx)(core_1.H1, { children: "Test" }) }));
            const h1 = react_1.screen.getByRole("heading", { name: /test/i });
            (0, vitest_1.expect)(h1).toHaveClass(`${NS}-margin-block-end-0`);
        });
    });
});
//# sourceMappingURL=box.test.js.map