import type {
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  TypographyProps,
} from 'styled-system';
import type { TextInputProps, TextStyle } from 'react-native';
import type {
  customBorderProps,
  customExtraProps,
  customOutlineProps,
  customShadowProps,
  customLayoutProps,
  customBackgroundProps,
  customTypographyProps,
} from '../../../utils/customProps';
import type { ITextProps } from '../Text';

export type IInputProps = ColorProps &
  TextInputProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customTypographyProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    children?: string | JSX.Element[] | JSX.Element;
    placeholder?: string;
    isInvalid?: boolean;
    variant?: string;
    isDisabled?: boolean;
    successMessage?: string;
    size?: string;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isFullWidth?: boolean;
    focusBorderColor?: string;
    errorBorderColor?: string;
    ariaLabel?: string;
    InputLeftElement?: JSX.Element | JSX.Element[];
    InputRightElement?: JSX.Element | JSX.Element[];
    type?: 'text' | 'password' | string;
    label?: string;
    _label?: ITextProps;
  };
