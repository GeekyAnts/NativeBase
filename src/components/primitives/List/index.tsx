import ListDefault from './List';
import ListItem from './ListItem';
import ListIcon from './ListIcon';
import ListOrdered from './Ordered';
import ListUnordered from './Unordered';
import type { IListComponentType } from './types';

let ListTemp: any = ListDefault;
ListTemp.Item = ListItem;
ListTemp.Icon = ListIcon;
ListTemp.Ordered = ListOrdered;
ListTemp.Unordered = ListUnordered;

// To add typings
const List = ListTemp as IListComponentType;

export { List };
export type { IListProps, IListItemProps } from './types';
