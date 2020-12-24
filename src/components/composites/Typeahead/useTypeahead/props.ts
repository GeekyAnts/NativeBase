type IItem = any;
export type IUseTypeaheadProps = {
  isOpen?: boolean;
  items: IItem[];
  itemToString: (item?: any) => string;
  selectedItem?: IItem;
  onInputValueChange?: ({ inputValue }: { inputValue: string }) => any;
  onSelectedItemChange?: (item: IItem) => any;
};
