import { type GenerateIsomorphicTestsOptions, type IsomorphicTestConfig } from "./generateIsomorphicTests.js";
/**
 * Tests that each ComponentClass in Components can be isomorphically rendered on the server.
 *
 * Should be called inside a `describe()` block. The calling test file should use
 * a node environment to simulate a true server environment (no DOM).
 *
 * @param Components Namespace import of all components to test.
 * @param config Configuration per component. This is a mapped type supporting all keys in Components.
 * @param options Test generator options.
 */
export declare function generateIsomorphicTestsVitest<T extends {
    [name: string]: any;
}>(Components: T, config?: {
    [P in keyof T]?: IsomorphicTestConfig;
}, options?: GenerateIsomorphicTestsOptions): void;
