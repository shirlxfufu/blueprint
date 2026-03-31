"use strict";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const tslib_1 = require("tslib");
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
/**
 * Slot component.
 */
exports.Slot = (0, react_1.forwardRef)(function Slot({ children, ...props }, ref) {
    if ((0, react_1.isValidElement)(children)) {
        return (0, react_1.cloneElement)(children, {
            ...props,
            ...children.props,
            className: (0, classnames_1.default)(props.className, children.props.className),
            ref,
            style: {
                ...props.style,
                ...children.props.style,
            },
        });
    }
    if (react_1.Children.count(children) > 1) {
        throw new TypeError("Only single element child is allowed in Slot");
    }
    return null;
});
//# sourceMappingURL=slot.js.map