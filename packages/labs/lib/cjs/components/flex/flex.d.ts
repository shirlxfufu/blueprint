import type { BoxProps } from "../box/boxProps";
export type FlexProps = Omit<BoxProps, "display">;
/**
 * Flex component.
 */
export declare const Flex: import("react").ForwardRefExoticComponent<FlexProps & import("react").RefAttributes<HTMLDivElement>>;
