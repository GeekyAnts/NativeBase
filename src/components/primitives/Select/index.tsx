import React from 'react';
import Text from '../Text';
import Icon from '../Icon';
import SelectItem from './Item';
import type { ISelectProps, ISelectItemProps } from './props';
import { usePopover } from '../../../core';
import Button from '../Button';
import { ScrollView } from 'react-native';
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
  dropdownOpenIcon,
  dropdownCloseIcon,
  width,
  bg,
  backgroundColor,
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
      setPopover(<ScrollView>{children}</ScrollView>, {
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
          itemStyle,
          width,
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
  let icon =
    !dropdownOpenIcon && !dropdownCloseIcon && dropdownIcon
      ? dropdownIcon
      : isOpen
      ? dropdownOpenIcon
        ? dropdownOpenIcon
        : null
      : dropdownCloseIcon
      ? dropdownCloseIcon
      : null;
  return (
    <Button
      onPress={openMenu}
      px={1}
      width={width}
      ref={triggerRef}
      {...props}
      justifyContent="space-between"
    >
      <Text>{selectedItem ? selectedItem.label : ''}</Text>
      {icon}
    </Button>
  );
}

Select.Item = SelectItem;

export default Select;
export type { ISelectProps, ISelectItemProps };
