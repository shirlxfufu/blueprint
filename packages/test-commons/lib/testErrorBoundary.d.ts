import { Component, type ReactNode } from "react";
export interface TestErrorBoundaryProps {
    children?: ReactNode;
    expectedErrorString: string;
}
export interface TestErrorBoundaryState {
    didCatch: boolean;
}
/**
 * Use this component when you want to validate component errors _during the component lifecycle_.
 * Note that this is not useful in validating errors thrown in component constructors.
 */
export declare class TestErrorBoundary extends Component<TestErrorBoundaryProps, TestErrorBoundaryState> {
    state: {
        didCatch: boolean;
    };
    componentDidCatch(error: Error, _info: any): void;
    render(): ReactNode;
}
