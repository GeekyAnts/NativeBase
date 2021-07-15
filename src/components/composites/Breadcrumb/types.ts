import type { ViewStyle } from 'react-native';
import type {
  IBoxProps,
  IFlexProps,
  ITextProps,
  ILinkProps,
  IIconProps,
} from '../../primitives';

export type IBreadcrumbItemContext = {
  isCurrent?: boolean;
  allChildren?: boolean;
};

export type IBreadcrumbProps = IBoxProps &
  IFlexProps &
  ITextProps & {
    style?: ViewStyle;
    children?: JSX.Element[] | JSX.Element | any;
    spacing?: number;
    separator?: string | JSX.Element | JSX.Element[] | any;
    maxItems?: number | number[];
    _button?: any;
  };
export type IBreadcrumbItemProps = IBreadcrumbProps & {
  isCurrent?: boolean;
};
export type IBreadcrumbIconProps = IIconProps & {
  _current?: any;
};
export type IBreadcrumbTextProps = ITextProps & {
  _current?: any;
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
  Icon: React.MemoExoticComponent<
    (props: IIconProps & { ref?: any }) => JSX.Element
  >;
  Text: React.MemoExoticComponent<
    (props: ITextProps & { ref?: any }) => JSX.Element
  >;
};
