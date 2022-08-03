import type { InterfaceBoxProps } from '../Box';
import type { IButtonProps } from '../Button';
import type {
  IActionsheetContentProps,
  IActionsheetProps,
} from '../../composites/Actionsheet/types';
import type { MutableRefObject } from 'react';
import type { CustomProps, ResponsiveValue } from '../../../components/types';
import type { IColors } from '../../../theme/base/colors';
import type { IFlatListProps } from '../../../components/basic/FlatList';
import type { InterfaceButtonProps } from '../Button/types';

export interface InterfaceSelectProps extends InterfaceBoxProps<ISelectProps> {
  /**
   * The placeholder that describes the Select.
   */
  placeholder?: string;
  /**
   * The Selected Item text color.
   */
  color?: ResponsiveValue<IColors | (string & {})>;
  /**
   * The placeholder text color
   */
  placeholderTextColor?: ResponsiveValue<IColors | (string & {})>;
  /**
   * Item props passed here will be passed to each Select.Item component.
   */
  _item?: Partial<IButtonProps>;
  /**
   * Item props passed here will be passed to the selected Select.Item component.
   */
  _selectedItem?: Partial<IButtonProps>;
  /**
   * Currently selected value. Useful for controlling the Select state
   */
  selectedValue?: string;
  /**
   * Default selected value.
   */
  defaultValue?: string;
  /**
   * Callback to be invoked when Select value is changed
   */
  onValueChange?: (itemValue: string) => void;
  /**
   * Whether Select is disabled
   */
  isDisabled?: boolean;
  /**
   * Whether Select is hovered
   */
  isHovered?: boolean;
  /**
   * Whether Select is focused
   */
  isFocused?: boolean;
  /**
   * If true, the focus ring of select will be visible.
   */
  isFocusVisible?: boolean;
  /**
   * If given, updates the dropdown Icon
   */
  dropdownIcon?: JSX.Element;
  /**
   * If given, updates the dropdown Icon when opened
   */
  dropdownOpenIcon?: JSX.Element;
  /**
   * If given, updates the dropdown Icon when closed
   */
  dropdownCloseIcon?: JSX.Element;
  /**
   * Variant of the Select
   * @default outline
   */
  variant?: 'outline' | 'filled' | 'underlined' | 'unstyled' | 'rounded';
  /**
   * Callback to be invoked when Select Dropdown or BottomSheet is opened.
   */
  onOpen?: (nativeEvent: any) => void;
  /**
   * Callback to be invoked when Select Dropdown or BottomSheet is closed.
   */
  onClose?: (nativeEvent: any) => void;
  /**
   * props to be passed to underlying ActionSheet. Select uses ActionSheet underneath.
   */
  _actionSheet?: Partial<IActionsheetProps>;
  /**
   * props to be passed to underlying ActionSheet.Content. Select uses ActionSheet underneath.
   */
  _actionSheetContent?: Partial<IActionsheetContentProps>;
  /**
   * props to be passed to underlying Flatlist in ActionSheet.Content.
   */
  _actionSheetBody?: Partial<IFlatListProps<any>>;
  /**
   * Ref to be attached to the Select wrapper
   */
  wrapperRef?: MutableRefObject<any>;
}

export interface ISelectItemProps extends InterfaceButtonProps {
  /**
   * The label which will be displayed.
   */
  label: string;
  /**
   * The value to be used for the item. This is the value that will be returned on form submission.
   */
  value: string;
}

export type ISelectComponentType = ((
  props: ISelectProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: ISelectItemProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
export type ISelectProps = InterfaceSelectProps & CustomProps<'Select'>;
