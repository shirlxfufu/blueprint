import type { ReactWrapper } from "enzyme";
import { type HTMLInputProps } from "@blueprintjs/core";
import { type Film } from "../../__examples__";
import type { ListItemsProps } from "../../common/listItemsProps";
export declare function selectComponentSuite<P extends ListItemsProps<Film>, S>(render: (props: ListItemsProps<Film>) => ReactWrapper<P, S>, findInput?: (wrapper: ReactWrapper<P, S>) => ReactWrapper<HTMLInputProps>, findItems?: (wrapper: ReactWrapper<P, S>) => ReactWrapper): void;
