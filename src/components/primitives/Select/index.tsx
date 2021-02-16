import React from 'react';
import Text from '../Text';
import { Item as SelectItem } from './Item';
import type {
  ISelectProps,
  ISelectItemProps,
  ISelectComponentType,
} from './types';
import { usePopover } from '../../../core';
import Button from '../Button';
import { ScrollView } from 'react-native';

const SelectMain = React.forwardRef<any, ISelectProps>(
  (
    {
      onValueChange,
      children,
      itemStyle,
      selectedValue,
      placeholder,
      selectedItemBg,
      selectedItemColor,
      isDisabled,
      dropdownIcon,
      dropdownOpenIcon,
      dropdownCloseIcon,
      width,
      style,
      ...props
    }: ISelectProps,
    ref: any
  ) => {
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
        setPopover(<ScrollView ref={ref}>{children}</ScrollView>, {
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
            selectedItemColor,
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
      selectedItemArray && selectedItemArray.length
        ? selectedItemArray[0]
        : null;
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
        pl={2}
        pr={0}
        width={width}
        ref={triggerRef}
        {...props}
        justifyContent="space-between"
        style={style}
      >
        <Text opacity={selectedItem ? undefined : 0.5}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        {icon}
      </Button>
    );
  }
);

const SelectTemp: any = SelectMain;
SelectTemp.Item = SelectItem;

const Select = SelectTemp as ISelectComponentType;

export default Select;
export type { ISelectProps, ISelectItemProps, ISelectComponentType };
