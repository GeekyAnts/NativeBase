import type { ViewStyle } from 'react-native';
import type {
  IBoxProps,
  IFlexProps,
  ITextProps,
  ILinkProps,
} from '../../primitives';

export type IBreadcrumbProps = IBoxProps &
  IFlexProps &
  ITextProps & {
    style?: ViewStyle;
    children?: JSX.Element[] | JSX.Element | any;
    spacing?: number;
    separator?: string | JSX.Element | JSX.Element[];
  };
export type IBreadcrumbItemProps = IBreadcrumbProps & {
  isCurrentPage?: boolean;
};
export type IBreadcrumbComponentType = ((
  props: IBreadcrumbProps & { ref?: any }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: IBreadcrumbItemProps & { ref?: any }) => JSX.Element
  >;
  Link: React.MemoExoticComponent<
    (props: ILinkProps & { ref?: any }) => JSX.Element
  >;
};
