import type { ReactWrapper } from "enzyme";
import { type Film } from "../../__examples__";
import type { ListItemsProps } from "../../common/listItemsProps";
import type { SelectPopoverProps } from "../../common/selectPopoverProps";
type EnzymeLocator<P, S> = (wrapper: ReactWrapper<P, S>) => ReactWrapper;
/**
 * Common tests for popover functionality in select components.
 *
 * @param render should ensure the component is attached to a DOM node so that we can get accurate DOM measurements.
 */
export declare function selectPopoverTestSuite<P extends ListItemsProps<Film>, S>(render: (props: ListItemsProps<Film> & SelectPopoverProps) => ReactWrapper<P, S>, findPopover?: EnzymeLocator<P, S>, findTarget?: EnzymeLocator<P, S>): void;
export {};
