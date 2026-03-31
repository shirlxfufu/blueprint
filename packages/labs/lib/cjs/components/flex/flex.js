"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
const react_1 = require("react");
const common_1 = require("../../common");
const box_1 = require("../box/box");
/**
 * Flex component.
 */
exports.Flex = (0, react_1.forwardRef)(function Flex(props, ref) {
    return (0, jsx_runtime_1.jsx)(box_1.Box, { ...props, display: "flex", ref: ref });
});
exports.Flex.displayName = `${common_1.DISPLAYNAME_PREFIX}.Flex`;
//# sourceMappingURL=flex.js.map