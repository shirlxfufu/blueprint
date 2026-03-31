import { type ComponentClass, type FC, type ReactNode } from "react";
export declare function isReactClass(Component: any): Component is ComponentClass<any>;
/** Janky heuristic for detecting function components. */
export declare function isReactFunctionComponent(Component: any, name: string): Component is FC<any>;
export interface IsomorphicTestConfig {
    /** Required `children` for successful render. */
    children?: ReactNode;
    /** Whether to test `className`. */
    className?: boolean;
    /** Required `props` for successful render. */
    props?: Record<string, unknown>;
    /** Whether to skip this component entirely. */
    skip?: boolean;
}
export interface GenerateIsomorphicTestsOptions {
    /**
     * Exclude these exports from being tested.
     *
     * @default []
     */
    excludedSymbols?: string[];
    /**
     * Whether to try and detect and test function components.
     *
     * @default true
     */
    testFunctionComponents?: boolean;
}
/**
 * Filters a namespace of exports down to just the React component names.
 */
export declare function getComponentNames<T extends {
    [name: string]: any;
}>(Components: T, options?: GenerateIsomorphicTestsOptions): string[];
/**
 * Tests that each ComponentClass in Components can be isomorphically rendered on the server.
 *
 * @param Components Namespace import of all components to test.
 * @param config Configuration per component. This is a mapped type supporting all keys in Components.
 * @param options Test generator options.
 */
export declare function generateIsomorphicTests<T extends {
    [name: string]: any;
}>(Components: T, config?: {
    [P in keyof T]?: IsomorphicTestConfig;
}, options?: GenerateIsomorphicTestsOptions): void;
