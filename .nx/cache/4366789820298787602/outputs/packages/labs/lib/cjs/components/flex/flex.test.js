"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
const react_1 = require("@testing-library/react");
const vitest_1 = require("vitest");
const core_1 = require("@blueprintjs/core");
const common_1 = require("../../common");
const flex_1 = require("./flex");
const NS = common_1.Classes.getClassNamespace();
(0, vitest_1.describe)("<Flex>", () => {
    (0, vitest_1.it)("should render content", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(flex_1.Flex, { children: "Test" }));
        const flex = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(flex).toBeInTheDocument();
    });
    (0, vitest_1.it)("should always set display flex", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(flex_1.Flex, { children: "Test" }));
        const flex = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-flex`);
    });
    (0, vitest_1.it)("should pass through Box props", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(flex_1.Flex, { gap: 2, flexDirection: "column", "data-testid": "flex-test", children: "Test" }));
        const flex = react_1.screen.getByTestId("flex-test");
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-gap-2`);
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-flex-column`);
    });
    (0, vitest_1.it)("should support className", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(flex_1.Flex, { className: "custom-class", children: "Test" }));
        const flex = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(flex).toHaveClass("custom-class");
        (0, vitest_1.expect)(flex).toHaveClass(common_1.Classes.BOX);
    });
    (0, vitest_1.it)("should support style prop", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(flex_1.Flex, { style: { fontWeight: 700 }, children: "Test" }));
        const flex = react_1.screen.getByText(/test/i);
        (0, vitest_1.expect)(flex).toHaveStyle({ fontWeight: 700 });
    });
    (0, vitest_1.it)("should support asChild prop", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(flex_1.Flex, { asChild: true, gap: 2, children: (0, jsx_runtime_1.jsx)(core_1.Button, { intent: "primary", children: "Test" }) }));
        const button = react_1.screen.getByRole("button", { name: /test/i });
        (0, vitest_1.expect)(button).toHaveClass(common_1.Classes.BOX);
        (0, vitest_1.expect)(button).toHaveClass(core_1.Classes.BUTTON);
        (0, vitest_1.expect)(button).toHaveClass(`${NS}-flex`);
        (0, vitest_1.expect)(button).toHaveClass(`${NS}-gap-2`);
    });
    (0, vitest_1.it)("should support all flex-related props", () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(flex_1.Flex, { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 3, "data-testid": "flex-all-props", children: "Test" }));
        const flex = react_1.screen.getByTestId("flex-all-props");
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-flex-row`);
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-flex-wrap`);
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-justify-center`);
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-items-center`);
        (0, vitest_1.expect)(flex).toHaveClass(`${NS}-gap-3`);
    });
});
//# sourceMappingURL=flex.test.js.map