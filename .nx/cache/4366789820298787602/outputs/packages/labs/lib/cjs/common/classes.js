"use strict";
/* !
 * (c) Copyright 2025 Palantir Technologies Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOX = exports.getClassNamespace = void 0;
const core_1 = require("@blueprintjs/core");
const CORE_NS = core_1.Classes.getClassNamespace();
const NS = `${CORE_NS}-labs`;
/**
 * Returns the namespace prefix for all Blueprint CSS classes.
 * Customize this namespace at build time by defining it with `webpack.DefinePlugin`.
 */
function getClassNamespace() {
    return NS;
}
exports.getClassNamespace = getClassNamespace;
exports.BOX = `${NS}-box`;
//# sourceMappingURL=classes.js.map