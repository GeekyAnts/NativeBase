import React from 'react';
import Text from '../Text';
import type { ISelectProps } from './types';
import { usePopover } from '../../../core';
import Button from '../Button';
import { ScrollView } from 'react-native';
import { SelectContext } from './Context';
import { useThemeProps } from '../../../hooks';
import { useHover } from '@react-native-aria/interactions';

const Select = (
  { onValueChange, children, ...props }: ISelectProps,
  ref: any
) => {
  const {
    _item,
    _placeholder,
    selectedValue,
    placeholder,
    selectedItemBg,
    _selectedItem,
    _hover,
    isDisabled,
    dropdownIcon,
    dropdownOpenIcon,
    dropdownCloseIcon,
    width,
    style,
    ...newProps
  } = useThemeProps('Select', props);
  let triggerRef = React.useRef();
  const { isHovered } = useHover({}, ref ?? triggerRef);
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
          _selectedItem,
          onValueChange,
          itemsList,
          _item,
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
  const placeholderProps = selectedItem ? {} : _placeholder;
  return (
    <SelectContext.Provider
      value={{
        isPicker: false,
      }}
    >
      <Button
        onPress={openMenu}
        width={width}
        ref={ref ?? triggerRef}
        {...newProps}
        justifyContent="space-between"
        {...(isHovered && _hover)}
        style={style}
      >
        <Text opacity={selectedItem ? undefined : 0.5} {...placeholderProps}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        {icon}
      </Button>
    </SelectContext.Provider>
  );
};
export default React.forwardRef<any, ISelectProps>(Select);
