/// <reference types="react" />
export interface CodeExampleProps {
    children?: React.ReactNode;
    className?: string;
    id: string;
    previewCode: string;
    sourceCode: string;
}
export declare const CodeExample: React.FC<CodeExampleProps>;
export declare function CodeSandboxIcon(): import("react/jsx-runtime").JSX.Element;
