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
  props: IBreadcrumbProps
) => JSX.Element) & {
  Item: React.MemoExoticComponent<(props: IBreadcrumbItemProps) => JSX.Element>;
  Link: React.MemoExoticComponent<(props: ILinkProps) => JSX.Element>;
};
