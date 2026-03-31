/**
 * Runtime helper that converts <Box> style-props into utility class names.
 *
 * The implementation is intentionally simple:
 *   1. A prop key that exists in the `styles` map is considered a style prop.
 *      Its value is run through a converter (created via `appendValue` or
 *      `mapping`) which returns the corresponding class string, e.g.
 *      `display="flex"` → `"flex"`.
 *   2. Any prop that is *not* in the map is assumed to be a valid intrinsic
 *      DOM attribute (e.g. `id`, `title`) or a component-specific prop and is
 *      therefore forwarded untouched.
 *
 * Returns an object with two pieces of information:
 *   • `generatedClassNames` – an array of class names to apply to the element.
 *   • `passThroughProps`    – the remaining props to forward.
 *
 * @param props - The props object to convert.
 * @returns An object with `generatedClassNames` and `passThroughProps`.
 */
export declare function buildStyles<T extends Record<string, any>>(props: T): {
    generatedClassNames: string[];
    passThroughProps: Record<string, unknown>;
};
