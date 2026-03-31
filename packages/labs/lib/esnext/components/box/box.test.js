import { jsx as _jsx } from "react/jsx-runtime";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Button, Classes as CoreClasses, H1 } from "@blueprintjs/core";
import { describe, expect, test } from "@blueprintjs/test-commons/vitest";
import { Classes } from "../../common";
import { Box } from "./box";
const NS = Classes.getClassNamespace();
describe("<Box>", () => {
    test("should render content", () => {
        render(_jsx(Box, { children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box).toBeInTheDocument();
    });
    test("should render as a div by default", () => {
        render(_jsx(Box, { children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box.tagName).toBe("DIV");
    });
    test("should pass through data attributes", () => {
        render(_jsx(Box, { "data-test": "foo", children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box.dataset.test).toBe("foo");
    });
    test("should support className", () => {
        render(_jsx(Box, { className: "foo", children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box).toHaveClass("foo");
    });
    test("should support style", () => {
        render(_jsx(Box, { style: { fontWeight: 700 }, children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box).toHaveStyle({ fontWeight: 700 });
    });
    test("should support computed class names", () => {
        render(_jsx(Box, { display: "flex", margin: 2, children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box).toHaveClass(`${NS}-flex`);
        expect(box).toHaveClass(`${NS}-margin-2`);
    });
    test("should support flexGrow, flexShrink, and flexBasis props", () => {
        render(_jsx(Box, { flexGrow: 1, flexShrink: 0, flexBasis: 0, children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box).toHaveClass(`${NS}-flex-grow-1`);
        expect(box).toHaveClass(`${NS}-flex-shrink-0`);
        expect(box).toHaveClass(`${NS}-flex-basis-0`);
    });
    test("should attach ref", () => {
        const ref = createRef();
        render(_jsx(Box, { ref: ref, children: "Test" }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
        expect(ref.current).toBeInTheDocument();
    });
    test("should not support unsupported/invalid props in types", () => {
        // "foo" is not a valid HTML attribute
        // @ts-expect-error
        render(_jsx(Box, { foo: "bar", children: "Test" }));
        const box = screen.getByText(/test/i);
        expect(box).toHaveAttribute("foo", "bar");
    });
    describe("asChild", () => {
        test("should render as child with asChild prop", () => {
            render(_jsx(Box, { asChild: true, "data-test": "foo", children: _jsx(Button, { intent: "primary", children: "Test" }) }));
            const button = screen.getByRole("button", { name: /test/i });
            expect(button).toHaveClass(Classes.BOX);
            expect(button).toHaveClass(CoreClasses.BUTTON);
            expect(button).toHaveClass(CoreClasses.INTENT_PRIMARY);
            expect(button).toHaveAttribute("data-test", "foo");
        });
        test("should merge styles with asChild prop", () => {
            render(_jsx(Box, { asChild: true, style: { fontWeight: 700 }, children: _jsx(Button, { style: { color: "blue" }, children: "Test" }) }));
            const button = screen.getByRole("button", { name: /test/i });
            expect(button).toHaveStyle({ fontWeight: 700 });
        });
        test("should remove margin on wrapped component", () => {
            render(_jsx(Box, { asChild: true, marginYEnd: 0, children: _jsx(H1, { children: "Test" }) }));
            const h1 = screen.getByRole("heading", { name: /test/i });
            expect(h1).toHaveClass(`${NS}-margin-block-end-0`);
        });
    });
});
//# sourceMappingURL=box.test.js.map