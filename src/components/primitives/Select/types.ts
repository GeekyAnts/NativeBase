import type { IButtonProps } from '../Button';
import type { ITextProps } from '../Text';
import type {
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  TypographyProps,
} from 'styled-system';
import type { TextInputProps } from 'react-native';
import type {
  customBorderProps,
  customExtraProps,
  customOutlineProps,
  customShadowProps,
  customLayoutProps,
  customBackgroundProps,
  customTypographyProps,
} from '../../../utils/customProps';

export type IPickerProps = ColorProps &
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
    children?: React.ReactElement;
    // Have direct implementation
    selectedValue?: string;
    onValueChange?: (itemValue: string, itemIndex?: number) => void;
    _item?: ITextProps; //itemStyle
    isDisabled?: boolean; //enabled

    // Can be mimic
    placeholder?: string;

    // Figureout a way
    _placeholder?: ITextProps;
    selectedItemBg?: string;
    _selectedItem?: ITextProps;
    dropdownIcon?: JSX.Element;

    // Don't think it can be mimic
    // dropdownOpenIcon?: JSX.Element;
    // dropdownCloseIcon?: JSX.Element;
  };

export type ISelectProps = IButtonProps & {
  placeholder?: string;
  _placeholder?: ITextProps;
  selectedValue?: string;
  onValueChange: (itemValue: string, itemIndex?: number) => void;
  _item?: ITextProps;
  selectedItemBg?: string;
  _selectedItem?: ITextProps;
  isDisabled?: boolean;
  dropdownIcon?: JSX.Element;
  dropdownOpenIcon?: JSX.Element;
  dropdownCloseIcon?: JSX.Element;
};

export type ISelectItemProps = IButtonProps & {
  label: string;
  value: string;
  _label?: ITextProps;
};

export type ISelectComponentType = ((props: ISelectProps) => JSX.Element) & {
  Item: React.MemoExoticComponent<(props: ISelectItemProps) => JSX.Element>;
  Picker: React.MemoExoticComponent<(props: IPickerProps) => JSX.Element>;
};
