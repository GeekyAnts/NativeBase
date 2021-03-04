export const InputChange = '__input_change__';
export const InputBlur = '__input_blur__';

export const ItemClick = '__item_click__';

export const ToggleButtonClick = '__togglebutton_click__';

export const FunctionToggleMenu = '__function_toggle_menu__';
export const FunctionOpenMenu = '__function_open_menu__';
export const FunctionCloseMenu = '__function_close_menu__';

export const FunctionSelectItem = '__function_select_item__';
export const FunctionSetInputValue = '__function_set_input_value__';

export const FunctionReset = '__function_reset__';
export const ControlledPropUpdatedSelectedItem =
  '__controlled_prop_updated_selected_item__';

export type IItem = any;
export type IUseTypeaheadProps = {
  isOpen?: boolean;
  items: IItem[];
  itemToString: (item?: any) => string;
  selectedItem?: IItem;
  onInputValueChange?: ({ inputValue }: { inputValue: string }) => any;
  onSelectedItemChange?: (item: IItem) => any;
};
