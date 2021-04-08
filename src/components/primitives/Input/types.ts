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
    size?: string;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isFullWidth?: boolean;
    InputLeftElement?: JSX.Element | JSX.Element[];
    InputRightElement?: JSX.Element | JSX.Element[];
    type?: 'text' | 'password' | string;
    // Interaction Props
    _hover?: any;
    _focus?: any;
    _disabled?: any;
    _invalid?: any;
    // Platform Specific Props
    _ios?: any;
    _web?: any;
    _andriod?: any;
    // These porps are currently on hold
    // label?: string;
    // _label?: ITextProps;
  };
