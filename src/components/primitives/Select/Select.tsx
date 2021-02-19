import React from 'react';
import Text from '../Text';
import type { ISelectProps } from './types';
import { usePopover } from '../../../core';
import Button from '../Button';
import { ScrollView } from 'react-native';
import { SelectContext } from './Context';
import { useThemeProps } from '../../../hooks';
import { useHover } from '@react-native-aria/interactions';

import { Picker as RNPicker } from '@react-native-picker/picker';
import styled from 'styled-components/native';
import {
  border,
  flex,
  space,
  color,
  flexbox,
  layout,
  typography,
} from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import { Platform } from 'react-native';

const StyledNativePicker = styled(RNPicker)<ISelectProps>(
  flex,
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const Select = (
  {
    onValueChange,
    selectedValue,
    children,
    dropdownIcon,
    dropdownOpenIcon,
    dropdownCloseIcon,
    ...props
  }: ISelectProps,
  ref: any
) => {
  const {
    variant,
    _item,
    _ios,
    _web,
    _android,
    _placeholder,
    placeholder,
    selectedItemBg,
    _selectedItem,
    _hover,
    isInvalid,
    _isInvalid,
    isDisabled,
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

  console.log('newProps = ', newProps);
  console.log('varaiant = ', variant);

  const StyledSelect = (
    <Button
      onPress={openMenu}
      width={width}
      ref={ref ?? triggerRef}
      {...newProps}
      justifyContent="space-between"
      {...(isInvalid && _isInvalid)}
      {...(isHovered && _hover)}
      style={style}
    >
      <Text opacity={selectedItem ? undefined : 0.5} {...placeholderProps}>
        {selectedItem ? selectedItem.label : placeholder}
      </Text>
      {icon}
    </Button>
  );
  const NativeSelect = (
    <StyledNativePicker
      // Not getting ref on web
      ref={ref ?? triggerRef}
      enabled={!isDisabled}
      itemStyle={_item}
      {...newProps}
      onValueChange={onValueChange}
      selectedValue={selectedValue}
      {...(Platform.OS === 'ios' && _ios)}
      {...(Platform.OS === 'android' && _android)}
      {...(Platform.OS === 'web' && _web)}
      {...(isInvalid && _isInvalid)}
      {...(isHovered && _hover)}
    >
      {children}
    </StyledNativePicker>
  );
  return (
    <SelectContext.Provider
      value={{
        variant: variant,
      }}
    >
      {variant === 'styled' ? StyledSelect : NativeSelect}
    </SelectContext.Provider>
  );
};

export default React.forwardRef<any, ISelectProps>(Select);
