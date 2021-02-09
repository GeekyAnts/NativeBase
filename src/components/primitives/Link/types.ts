import type {
  ViewStyle,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native';
import type { BorderProps, FlexboxProps, LayoutProps } from 'styled-system';
import type { ITextProps } from '../Text';

export type ILinkProps = ITextProps &
  ViewProps &
  LayoutProps &
  FlexboxProps &
  TouchableWithoutFeedbackProps &
  BorderProps & {
    style?: ViewStyle;
    children?: string | JSX.Element | JSX.Element[] | any;
    href?: string | undefined;
    size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xsm' | number;
    isUnderlined?: boolean | undefined;
    onClick?: any;
    isExternal?: boolean;
  };

export type IUseLinkProp = {
  href?: string;
  isExternal?: boolean;
  onClick: any;
};
