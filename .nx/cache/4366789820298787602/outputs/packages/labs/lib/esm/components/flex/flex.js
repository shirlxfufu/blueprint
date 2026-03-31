import { jsx as _jsx } from "react/jsx-runtime";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
import { forwardRef } from "react";
import { DISPLAYNAME_PREFIX } from "../../common";
import { Box } from "../box/box";
/**
 * Flex component.
 */
export const Flex = forwardRef(function Flex(props, ref) {
    return _jsx(Box, { ...props, display: "flex", ref: ref });
});
Flex.displayName = `${DISPLAYNAME_PREFIX}.Flex`;
//# sourceMappingURL=flex.js.map