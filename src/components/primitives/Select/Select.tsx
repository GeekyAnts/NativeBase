import React from 'react';
import Text from '../Text';
import type { ISelectProps } from './types';
import { usePopover } from '../../../core';
import Button from '../Button';
import { ScrollView } from 'react-native';
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
import { useToken } from '../../../hooks/useToken';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';

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
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
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
    _isDisabled,
    width,
    style,
    color,
    androidMode,
    androidIconColor,
    androidPrompt,
    ...newProps
  } = useThemeProps('Select', { ...formControlContext, ...props });
  let triggerRef = React.useRef();
  const { isHovered } = useHover({}, ref ?? triggerRef);
  let [isOpen, toggle] = React.useState<boolean>(false);
  const updatedChildren = React.Children.map(children, (child: any) => {
    return React.cloneElement(
      child,
      {
        variant: variant,
      },
      child.props.children
    );
  });

  let itemsList: Array<{ label: string; value: string }> = React.Children.map(
    updatedChildren,
    (child: any) => {
      return {
        label: child.props.label,
        value: child.props.value,
      };
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
          variant: 'styled',
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

  const StyledSelect = (
    <Button
      onPress={openMenu}
      width={width}
      ref={ref ?? triggerRef}
      {...newProps}
      justifyContent="space-between"
      {...(isDisabled && _isDisabled)}
      {...(isInvalid && _isInvalid)}
      {...(isHovered && _hover)}
      {...(Platform.OS === 'web'
        ? {
            disabled: isDisabled,
            cursor: isDisabled ? 'not-allowed' : 'auto',
          }
        : {})}
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
      {...newProps}
      color={color}
      onValueChange={onValueChange}
      selectedValue={selectedValue}
      mode={androidMode}
      prompt={androidPrompt}
      dropdownIconColor={useToken('colors', androidIconColor)}
      itemStyle={{
        color: useToken('colors', color),
        ..._item,
      }}
      {...(Platform.OS === 'ios' && _ios)}
      {...(Platform.OS === 'android' && _android)}
      {...(Platform.OS === 'web' && _web)}
      {...(isDisabled && _isDisabled)}
      {...(isInvalid && _isInvalid)}
      {...(isHovered && _hover)}
    >
      {updatedChildren}
    </StyledNativePicker>
  );
  return variant === 'styled' ? StyledSelect : NativeSelect;
};

export default React.forwardRef(Select);
