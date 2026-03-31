import { jsx as _jsx } from "react/jsx-runtime";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 */
import classNames from "classnames";
import { forwardRef, useMemo } from "react";
import { Classes, DISPLAYNAME_PREFIX } from "../../common";
import { Slot } from "../slot/slot";
import { buildStyles } from "./buildStyles";
/**
 * Box component.
 *
 * @see https://blueprintjs.com/docs/#labs/components/box
 */
export const Box = forwardRef(function Box({ asChild, className, ...props }, ref) {
    const Component = asChild ? Slot : "div";
    const { generatedClassNames, passThroughProps } = useMemo(() => buildStyles(props), [props]);
    return (_jsx(Component, { ...passThroughProps, className: classNames(className, Classes.BOX, generatedClassNames), ref: ref }));
});
Box.displayName = `${DISPLAYNAME_PREFIX}.Box`;
//# sourceMappingURL=box.js.map