/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */
import { strictEqual } from "assert";
import Enzyme from "enzyme";
import { createElement } from "react";
function isReactClass(Component) {
    return (typeof Component !== "undefined" &&
        typeof Component.prototype !== "undefined" &&
        typeof Component.prototype.constructor !== "undefined" &&
        typeof Component.prototype.render !== "undefined");
}
/** Janky heuristic for detecting function components. */
function isReactFunctionComponent(Component, name) {
    return typeof Component === "function" && name.charAt(0) === name.charAt(0).toUpperCase();
}
/**
 * Tests that each ComponentClass in Components can be isomorphically rendered on the server.
 *
 * @param Components Namespace import of all components to test.
 * @param config Configuration per component. This is a mapped type supporting all keys in Components.
 * @param options Test generator options.
 */
export function generateIsomorphicTests(Components, config = {}, options = {}) {
    function render(name, extraProps) {
        const { children, props } = config[name] || {};
        const finalProps = extraProps ? Object.assign(Object.assign({}, props), extraProps) : props;
        // Render to static HTML, just as a server would.
        // We care merely that `render()` succeeds: it can be server-rendered.
        // Errors will fail the test and log full stack traces to the console. Nifty!
        const element = createElement(Components[name], finalProps, children);
        return Enzyme.render(element);
    }
    const { excludedSymbols = [], testFunctionComponents = true } = options;
    Object.keys(Components)
        .sort()
        .filter(name => excludedSymbols.indexOf(name) === -1 &&
        (isReactClass(Components[name]) ||
            (testFunctionComponents && isReactFunctionComponent(Components[name], name))))
        .forEach(componentName => {
        const { className, skip } = config[componentName] || {};
        if (skip) {
            it.skip(`<${componentName}>`);
            return;
        }
        it(`<${componentName}>`, () => render(componentName));
        if (className === false) {
            it.skip(`<${componentName} className>`);
        }
        else {
            it(`<${componentName} className>`, () => {
                const testClass = "test-test-test";
                const doc = render(componentName, { className: testClass });
                strictEqual(doc.find(`.${testClass}`).length + doc.filter(`.${testClass}`).length, 1);
            });
        }
    });
}
//# sourceMappingURL=generateIsomorphicTests.js.map