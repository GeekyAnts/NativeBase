import type { IStackProps } from '../Stack';
import type { IPressableProps } from '../Pressable';
import type { IIconProps } from '../Icon/types';
import type { ITextProps } from '../Text';

export interface IListProps extends IStackProps {
  /**
   * List's Children.
   */
  children: JSX.Element[] | JSX.Element;
  /**
   * Is ListItem Unordered?.
   */
  unordered?: boolean;
  /**
   * Is ListItem Unordered?.
   */
  ul?: boolean;
  /**
   * Is ListItem Ordered?.
   */
  ordered?: boolean;
  /**
   * Is ListItem Ordered?.
   */
  ol?: boolean;
  /**
   * common _hover that is passed to all the children.
   */
  _hover?: any;
  /**
   * common _focus that is passed to all the children.
   */
  _focus?: any;
  /**
   * common _pressed that is passed to all the children.
   */
  _pressed?: any;
  /**
   * Ordered List index starting value.
   * @default 0
   */
  start?: number;
  /**
   * Props to style the commonly all the List.Item's text.
   */
  _text?: any;
}

export interface IListItemProps extends IPressableProps {
  /**
   * Is ListItem Unordered?.
   */
  unordered?: boolean;
  /**
   * Is ListItem Unordered?.
   */
  ul?: boolean;
  /**
   * Is ListItem Ordered?.
   */
  ordered?: boolean;
  /**
   * Is ListItem Ordered?.
   */
  ol?: boolean;
  /**
   * Ordered List index starting value.
   * @default 0
   */
  start?: number;
  /**
   * Props to style the child text.
   */
  _text?: ITextProps;
}
export type IListComponentType = ((
  props: IListProps & { ref?: any }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: IListItemProps & { ref?: any }) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (props: IIconProps & { ref?: any }) => JSX.Element
  >;
  Ordered: React.MemoExoticComponent<
    (props: IListProps & { ref?: any }) => JSX.Element
  >;
  Unordered: React.MemoExoticComponent<
    (props: IListProps & { ref?: any }) => JSX.Element
  >;
};
