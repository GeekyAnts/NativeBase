import React, { useContext, memo, forwardRef } from 'react';
import { Pressable, IPressableProps } from '../Pressable';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Center } from '../../composites/Center';
import { useFormControlContext } from '../../composites/FormControl';
import Box from '../Box';
import { mergeRefs } from './../../../utils';
import type { ICheckboxProps } from './types';
import { useToggleState } from '@react-stately/toggle';
import { CheckboxGroupContext } from './CheckboxGroup';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { CheckIcon } from '../Icon/Icons';

const Checkbox = ({ icon, wrapperRef, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext = useFormControlContext();

  const checkboxGroupContext = React.useContext(CheckboxGroupContext);
  const {
    _interactionBox: { _pressed: _iterationBoxPressed, ..._interactionBox },
    _checkbox: {
      _checked: _checboxChecked,
      _disabled: _checkboxDisabled,
      _invalid: _checkboxInvalid,
      ..._checkbox
    },
    _icon,
    isInvalid,
    ...themedProps
  } = usePropsResolution('Checkbox', {
    ...checkboxGroupContext,
    ...formControlContext,
    ...props,
  });

  const state = useToggleState({
    ...props,
    defaultSelected: props.defaultIsChecked,
    isSelected: props.isChecked,
  });
  const groupState = useContext(CheckboxGroupContext);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  const { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...themedProps,
          value: themedProps.value,
        },
        groupState.state,
        ref
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(themedProps, state, ref);

  const { checked, disabled } = inputProps;

  const sizedIcon = icon
    ? () =>
        React.cloneElement(
          icon,
          {
            ..._icon,
          },
          icon.props.children
        )
    : null;
  return (
    <Pressable
      {...(inputProps as IPressableProps)}
      ref={mergeRefs([ref, wrapperRef])}
      accessibilityRole="checkbox"
    >
      {({ isPressed }: any) => {
        return (
          <Center
            flexDirection="row"
            justifyContent="center "
            alignItems="center"
            borderRadius="full"
            {...themedProps}
          >
            <Center>
              {/* Interaction Wrapper */}
              <Box
                {..._interactionBox}
                {...(isPressed && _iterationBoxPressed)}
                p={5}
                w="100%"
                height="100%"
                zIndex={-1}
              />
              {/* Checkbox */}
              <Center
                {..._checkbox}
                {...(checked && _checboxChecked)}
                {...(disabled && _checkboxDisabled)}
                {...(isInvalid && _checkboxInvalid)}
              >
                {icon && sizedIcon && checked ? (
                  sizedIcon()
                ) : (
                  <CheckIcon {..._icon} opacity={checked ? 1 : 0} />
                )}
              </Center>
            </Center>
            {/* Label */}
            {props.children}
          </Center>
        );
      }}
    </Pressable>
  );
};

export default memo(forwardRef(Checkbox));
