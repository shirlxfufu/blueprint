"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
const classnames_1 = tslib_1.__importDefault(require("classnames"));
const react_1 = require("react");
const common_1 = require("../../common");
const slot_1 = require("../slot/slot");
const buildStyles_1 = require("./buildStyles");
/**
 * Box component.
 *
 * @see https://blueprintjs.com/docs/#labs/components/box
 */
exports.Box = (0, react_1.forwardRef)(function Box({ asChild, className, ...props }, ref) {
    const Component = asChild ? slot_1.Slot : "div";
    const { generatedClassNames, passThroughProps } = (0, react_1.useMemo)(() => (0, buildStyles_1.buildStyles)(props), [props]);
    return ((0, jsx_runtime_1.jsx)(Component, { ...passThroughProps, className: (0, classnames_1.default)(className, common_1.Classes.BOX, generatedClassNames), ref: ref }));
});
exports.Box.displayName = `${common_1.DISPLAYNAME_PREFIX}.Box`;
//# sourceMappingURL=box.js.map