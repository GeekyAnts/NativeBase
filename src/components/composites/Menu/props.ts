import type {
  ViewStyle,
  TextStyle,
  TouchableNativeFeedbackProps,
  TouchableHighlightProps,
} from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customTypographyProps,
} from '../../../utils/customProps';

export type IMenuProps = BorderProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customTypographyProps &
  customBackgroundProps &
  TypographyProps &
  PositionProps &
  BorderProps & {
    trigger: (_props: any, state: { open: boolean }) => JSX.Element;
    children: JSX.Element | Array<JSX.Element>;
    onOpen?: () => void;
    onClose?: () => void;
    offsetSpace?: number;
    closeOnSelect?: boolean;
    testID?: string;
    style?: ViewStyle;
    shadowOffset?: any;
    shadowOpacity?: number;
    shadowColor?: string;
    elevation?: number;
    shadow?: number;
  };

export type IMenuItemProps = BorderProps &
  customBorderProps &
  customBackgroundProps &
  TouchableNativeFeedbackProps &
  TouchableHighlightProps & {
    children: string | JSX.Element | Array<JSX.Element>;
    isDisabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
  };

export type IMenuItemOptionProps = IMenuItemProps & {
  value: string | number;
};
export type IMenuGroupProps = {
  title: string;
  children: JSX.Element | Array<JSX.Element>;
};

export type IMenuContextProps = {
  closeMenu: () => void;
  open: boolean;
  closeOnSelect?: boolean;
};

export type IMenuOptionGroupProps = IMenuGroupProps & {
  type: 'radio' | 'checkbox';
  defaultValue?: string | number | Array<string> | Array<number>;
  value?: string | number | Array<string> | Array<number>;
  onChange?: (val: any) => void;
};

export type IMenuOptionContextProps = {
  values: Array<string | number>;
  onChange: (val: string | number) => void;
  type: 'radio' | 'checkbox';
};
