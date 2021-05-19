import type { IBoxProps } from '../Box';
import type { IButtonProps } from '../Button';
import type { IActionsheetContentProps } from '../../composites/Actionsheet/types';

export interface ISelectProps extends IBoxProps {
  /**
   * The placeholder that describes the Select.
   */
  placeholder?: string;
  /**
   * The placeholder text color
   */
  placeholderTextColor?: string;
  /**
   * Item props passed here will be passed to each Select.Item component.
   */
  _item?: IButtonProps;
  /**
   * Item props passed here will be passed to the selected Select.Item component.
   */
  _selectedItem?: IButtonProps;
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
   * props to be passed to underlying ActionSheet.Content. Select uses ActionSheet underneath.
   */
  _actionSheetContent?: IActionsheetContentProps;
  /**
   * Ref to be attached to the Select wrapper
   */
  wrapperRef?: any;
}

export interface ISelectItemProps extends IButtonProps {
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
  props: ISelectProps & { ref?: any }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (props: ISelectItemProps & { ref?: any }) => JSX.Element
  >;
};
