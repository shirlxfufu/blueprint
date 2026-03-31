import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { Slot } from "./slot";
describe("<Slot>", () => {
    it("merges props into a single child", () => {
        render(_jsx(Slot, { "data-test": "bar", children: _jsx("button", { id: "foo", children: "Test" }) }));
        const button = screen.getByRole("button", { name: /test/i });
        expect(button).toHaveAttribute("id", "foo");
        expect(button).toHaveAttribute("data-test", "bar");
    });
    it("merges className and style", () => {
        render(_jsx(Slot, { className: "outer", style: { fontWeight: 700 }, children: _jsx("button", { className: "inner", style: { fontStyle: "italic" }, children: "Test" }) }));
        const button = screen.getByRole("button", { name: /test/i });
        expect(button).toHaveClass("outer");
        expect(button).toHaveClass("inner");
        expect(button).toHaveStyle({ fontWeight: 700 });
        expect(button).toHaveStyle({ fontStyle: "italic" });
    });
    it("forwards ref to the child", () => {
        const ref = createRef();
        render(_jsx(Slot, { ref: ref, children: _jsx("button", { children: "Test" }) }));
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
        expect(ref.current).toBeInTheDocument();
    });
    it("returns null if no children are provided", () => {
        const { container } = render(_jsx(Slot, {}));
        expect(container.firstChild).toBeNull();
    });
    it("throws an error when multiple children are provided", () => {
        // suppress error logging to keep test output clean
        const stderrWriteSpy = vi.spyOn(process.stderr, "write").mockImplementation(vi.fn());
        const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(vi.fn());
        expect(() => {
            render(_jsxs(Slot, { children: [_jsx("button", { children: "First" }), _jsx("button", { children: "Second" })] }));
        }).toThrow("Only single element child is allowed in Slot");
        stderrWriteSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });
});
//# sourceMappingURL=slot.test.js.map