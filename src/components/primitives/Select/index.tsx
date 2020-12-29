import React from 'react';
import View from '../View';
import Text from '../Text';
import SelectItem from './Item';
import type { ISelectProps, ISelectItemProps } from './props';
import { usePopover } from '../../../core';
import { TouchableOpacity } from 'react-native';

function Select({
  onValueChange,
  children,
  itemStyle,
  selectedValue,
  label,
  placeholder,
  selectedItemBg,
  isDisabled,
  dropdownIcon,
  ...props
}: ISelectProps) {
  let triggerRef = React.useRef();
  let [isOpen, toggle] = React.useState<boolean>(false);
  let itemsList: Array<{ label: string; value: string }> = React.Children.map(
    children,
    (child: any) => {
      return { label: child.props.label, value: child.props.value };
    }
  );
  const { setPopover, closePopover } = usePopover();
  const closeMenu = () => {
    closePopover();
    toggle(false);
  };
  const openMenu = () => {
    if (!isDisabled) {
      setPopover(<View>{children}</View>, {
        triggerRef,
        animationDuration: 200,
        onClose: closeMenu,
        placeOverTriggerElement: false,
        parentComponentConfig: {
          open: isOpen,
          closeMenu,
          closeOnSelect: true,
          selectedValue,
          selectedItemBg,
          onValueChange,
          itemsList,
        },
      });
      toggle(true);
    }
  };
  const selectedItemArray = itemsList.filter(
    (item: any) => item.value === selectedValue
  );
  const selectedItem =
    selectedItemArray && selectedItemArray.length ? selectedItemArray[0] : null;
  return (
    <View ref={triggerRef} bg="red.200" {...props}>
      <TouchableOpacity onPress={openMenu}>
        {selectedItem ? <Text>{selectedItem.label}</Text> : null}
      </TouchableOpacity>
    </View>
  );
}

Select.Item = SelectItem;

export default Select;
export type { ISelectProps, ISelectItemProps };
