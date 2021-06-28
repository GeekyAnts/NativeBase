import React, { useContext, memo, forwardRef } from 'react';
import { mergeRefs } from './../../../utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { Center } from '../../composites/Center';
import { useFormControlContext } from '../../composites/FormControl';
import Box from '../Box';
import type { ICheckboxProps } from './types';
import { useToggleState } from '@react-stately/toggle';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { CheckboxGroupContext } from './CheckboxGroup';
import { useHover } from '@react-native-aria/interactions';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { useFocusRing } from '@react-native-aria/focus';
import { CheckIcon } from '../Icon/Icons';

const Checkbox = (
  { children, icon, wrapperRef, ...props }: ICheckboxProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();
  const checkboxGroupContext = React.useContext(CheckboxGroupContext);
  const {
    _interactionBox: {
      _hover: _iterationBoxHover,
      _focus: _iterationBoxFocus,
      _disabled: _iterationBoxDisabled,
      ..._interactionBox
    },
    _checkbox: {
      _checked: _checkboxChecked,
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
  const _ref = React.useRef();
  const mergedRef = mergeRefs([ref, _ref]);
  const state = useToggleState({
    ...props,
    defaultSelected: props.defaultIsChecked,
    isSelected: props.isChecked,
  });
  const groupState = useContext(CheckboxGroupContext);
  const { isHovered } = useHover({}, _ref);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  const { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...themedProps,
          'aria-label': themedProps.accessibilityLabel,
          'value': themedProps.value,
        },
        groupState.state,
        //@ts-ignore
        mergedRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        { ...themedProps, 'aria-label': themedProps.accessibilityLabel },
        state,
        //@ts-ignore
        mergedRef
      );

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
  const { focusProps, isFocusVisible } = useFocusRing();

  const component = (
    <Box
      flexDirection="row"
      alignItems="center"
      {...themedProps}
      opacity={disabled ? 0.4 : 1}
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <Center>
        {/* Interaction Box */}
        <Box
          {..._interactionBox}
          {...(isFocusVisible && _iterationBoxFocus)}
          {...(isHovered && _iterationBoxHover)}
          {...(disabled && _iterationBoxDisabled)}
          {...(disabled && _iterationBoxDisabled)}
          style={{
            // @ts-ignore - only for web"
            transition: 'height 200ms, width 200ms',
          }}
          h={isFocusVisible || isHovered ? '200%' : '100%'}
          w={isFocusVisible || isHovered ? '200%' : '100%'}
          zIndex={-1}
        />
        {/* Checkbox */}
        <Center
          {..._checkbox}
          {...(checked && _checkboxChecked)}
          {...(disabled && _checkboxDisabled)}
          {...(isInvalid && _checkboxInvalid)}
        >
          {icon && sizedIcon && checked ? (
            sizedIcon()
          ) : (
            <CheckIcon name="check" {..._icon} opacity={checked ? 1 : 0} />
          )}
        </Center>
      </Center>
      {children}
    </Box>
  );

  return (
    <Box
      // @ts-ignore - RN web supports accessibilityRole="label"
      accessibilityRole="label"
      ref={mergeRefs([wrapperRef, _ref])}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={mergedRef} />
      </VisuallyHidden>

      {component}
    </Box>
  );
};

export default memo(forwardRef(Checkbox));
