import { jsx as _jsx } from "react/jsx-runtime";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button, Classes as CoreClasses } from "@blueprintjs/core";
import { Classes } from "../../common";
import { Flex } from "./flex";
const NS = Classes.getClassNamespace();
describe("<Flex>", () => {
    it("should render content", () => {
        render(_jsx(Flex, { children: "Test" }));
        const flex = screen.getByText(/test/i);
        expect(flex).toBeInTheDocument();
    });
    it("should always set display flex", () => {
        render(_jsx(Flex, { children: "Test" }));
        const flex = screen.getByText(/test/i);
        expect(flex).toHaveClass(`${NS}-flex`);
    });
    it("should pass through Box props", () => {
        render(_jsx(Flex, { gap: 2, flexDirection: "column", "data-testid": "flex-test", children: "Test" }));
        const flex = screen.getByTestId("flex-test");
        expect(flex).toHaveClass(`${NS}-gap-2`);
        expect(flex).toHaveClass(`${NS}-flex-column`);
    });
    it("should support className", () => {
        render(_jsx(Flex, { className: "custom-class", children: "Test" }));
        const flex = screen.getByText(/test/i);
        expect(flex).toHaveClass("custom-class");
        expect(flex).toHaveClass(Classes.BOX);
    });
    it("should support style prop", () => {
        render(_jsx(Flex, { style: { fontWeight: 700 }, children: "Test" }));
        const flex = screen.getByText(/test/i);
        expect(flex).toHaveStyle({ fontWeight: 700 });
    });
    it("should support asChild prop", () => {
        render(_jsx(Flex, { asChild: true, gap: 2, children: _jsx(Button, { intent: "primary", children: "Test" }) }));
        const button = screen.getByRole("button", { name: /test/i });
        expect(button).toHaveClass(Classes.BOX);
        expect(button).toHaveClass(CoreClasses.BUTTON);
        expect(button).toHaveClass(`${NS}-flex`);
        expect(button).toHaveClass(`${NS}-gap-2`);
    });
    it("should support all flex-related props", () => {
        render(_jsx(Flex, { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 3, "data-testid": "flex-all-props", children: "Test" }));
        const flex = screen.getByTestId("flex-all-props");
        expect(flex).toHaveClass(`${NS}-flex-row`);
        expect(flex).toHaveClass(`${NS}-flex-wrap`);
        expect(flex).toHaveClass(`${NS}-justify-center`);
        expect(flex).toHaveClass(`${NS}-items-center`);
        expect(flex).toHaveClass(`${NS}-gap-3`);
    });
});
//# sourceMappingURL=flex.test.js.map