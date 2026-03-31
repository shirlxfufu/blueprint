"use strict";
/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const postcss_value_parser_1 = tslib_1.__importDefault(require("postcss-value-parser"));
const stylelint_1 = tslib_1.__importDefault(require("stylelint"));
const cssSyntax_1 = require("../utils/cssSyntax");
const ruleName = "@blueprintjs/prefer-spacing-variable";
const GRID_SIZE_VARIABLE = "pt-grid-size";
const SPACING_VARIABLE = "pt-spacing";
const messages = stylelint_1.default.utils.ruleMessages(ruleName, {
    expected: (unfixed, fixed) => `Use \`${fixed}\` instead of \`${unfixed}\` (deprecated). See: https://github.com/palantir/blueprint/wiki/Spacing-System-Migration:-10px-to-4px`,
});
const ruleImpl = (enabled, options, context) => (root, result) => {
    var _a, _b;
    if (!enabled) {
        return;
    }
    const validOptions = stylelint_1.default.utils.validateOptions(result, ruleName, {
        actual: enabled,
        optional: false,
        possible: [true, false],
    }, {
        actual: options,
        optional: true,
        possible: {
            disableFix: [true, false],
            variablesImportPath: [cssSyntax_1.isCssSyntaxToStringMap],
        },
    });
    if (!validOptions) {
        return;
    }
    const disableFix = (_a = options === null || options === void 0 ? void 0 : options.disableFix) !== null && _a !== void 0 ? _a : false;
    const cssSyntax = (0, cssSyntax_1.getCssSyntax)(((_b = root.source) === null || _b === void 0 ? void 0 : _b.input.file) || "");
    if (cssSyntax === cssSyntax_1.CssSyntax.OTHER) {
        return;
    }
    const variablePrefix = cssSyntax_1.BpVariablePrefixMap[cssSyntax];
    const gridSizeVariable = `${variablePrefix}${GRID_SIZE_VARIABLE}`;
    const spacingVariable = `${variablePrefix}${SPACING_VARIABLE}`;
    root.walkDecls(decl => {
        // Skip declarations that don't contain grid-size variables
        if (!decl.value.includes(gridSizeVariable)) {
            return;
        }
        if (context.fix && !disableFix) {
            // Convert the entire value using string replacement
            const newValue = convertGridSizeToSpacing(decl.value, gridSizeVariable, spacingVariable);
            decl.value = newValue;
        }
        else {
            // Report warnings for each variable usage
            const parsedValue = (0, postcss_value_parser_1.default)(decl.value);
            parsedValue.walk(node => {
                if (node.type !== "word") {
                    return;
                }
                const isGridSizeVariable = node.value.includes(gridSizeVariable);
                if (isGridSizeVariable) {
                    const namespace = getVarNamespace(node.value);
                    const isNamespaced = namespace !== undefined;
                    const targetVar = isNamespaced ? `${namespace}.${spacingVariable}` : spacingVariable;
                    const startIndex = declarationValueIndex(decl) + node.sourceIndex;
                    stylelint_1.default.utils.report({
                        endIndex: startIndex + node.value.length,
                        index: startIndex,
                        message: messages.expected(node.value, targetVar),
                        node: decl,
                        result,
                        ruleName,
                    });
                }
            });
        }
    });
};
function getVarNamespace(value) {
    if (value.includes(".")) {
        return value.split(".")[0];
    }
    return undefined;
}
/**
 * Converts grid-size variables to spacing variables, maintains original computed value.
 */
function convertGridSizeToSpacing(value, gridVar, spacingVar) {
    let result = value;
    // Check if there's a namespaced variable (e.g., bp.$pt-grid-size)
    const namespacedMatch = value.match(new RegExp(`(\\w+)\\.\\$${GRID_SIZE_VARIABLE}`));
    if (namespacedMatch) {
        // Process namespaced variable
        const namespace = namespacedMatch[1];
        const namespacedGridVar = `${namespace}.${gridVar}`;
        const namespacedSpacingVar = `${namespace}.${spacingVar}`;
        result = processVariableConversions(result, namespacedGridVar, namespacedSpacingVar);
    }
    else {
        // Process non-namespaced variables
        result = processVariableConversions(result, gridVar, spacingVar);
    }
    return result;
}
/**
 * Process variable conversions for a specific variable pair
 */
function processVariableConversions(value, fromVar, toVar) {
    let result = value;
    const escapedFrom = fromVar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Handle right-side multiplication: $var * N -> $var * (N * 2.5)
    result = result.replace(new RegExp(`${escapedFrom}\\s*\\*\\s*(\\d*\\.?\\d+)`, "g"), (_match, multiplier) => {
        const newValue = parseFloat(multiplier) * 2.5;
        return `${toVar} * ${formatNumber(newValue)}`;
    });
    // Handle left-side multiplication: N * $var -> (N * 2.5) * $var
    result = result.replace(new RegExp(`(\\d*\\.?\\d+)\\s*\\*\\s*${escapedFrom}`, "g"), (_match, multiplier) => {
        const newValue = parseFloat(multiplier) * 2.5;
        return `${formatNumber(newValue)} * ${toVar}`;
    });
    // Handle division: $var / N -> $var / (N / 2.5)
    result = result.replace(new RegExp(`${escapedFrom}\\s*\\/\\s*(\\d*\\.?\\d+)`, "g"), (_match, divisor) => {
        const newValue = parseFloat(divisor) / 2.5;
        return `${toVar} / ${formatNumber(newValue)}`;
    });
    // Handle simple variable replacement (no adjacent math operations)
    result = result.replace(new RegExp(`${escapedFrom}(?!\\s*[*/])`, "g"), `${toVar} * 2.5`);
    return result;
}
function formatNumber(num) {
    return num % 1 === 0 ? num.toString() : num.toString();
}
/**
 * Returns the index of the start of the declaration value.
 */
function declarationValueIndex(decl) {
    const beforeColon = decl.toString().indexOf(":");
    const afterColon = decl.raw("between").length - decl.raw("between").indexOf(":");
    return beforeColon + afterColon;
}
ruleImpl.ruleName = ruleName;
ruleImpl.messages = messages;
exports.default = stylelint_1.default.createPlugin(ruleName, ruleImpl);
//# sourceMappingURL=prefer-spacing-variable.js.map