import React, { useContext } from 'react';
import { mergeRefs } from './../../../utils';
import { useThemeProps } from '../../../hooks';
import { Center } from '../../composites/Center';
import { useFormControlContext } from '../../composites/FormControl';
import Box from '../Box';
import Icon from '../Icon';
import type { ICheckboxProps } from './types';
import { useToggleState } from '@react-stately/toggle';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { CheckboxGroupContext } from './CheckboxGroup';
import { useHover } from '@react-native-aria/interactions';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { useFocusRing } from '@react-native-aria/focus';

const Checkbox = ({ children, icon, ...props }: ICheckboxProps, ref: any) => {
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
    size,
    ...themedProps
  } = useThemeProps('Checkbox', {
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
          value: themedProps.value,
        },
        groupState.state,
        //@ts-ignore
        mergedRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        themedProps,
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
            size,
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
            <Icon
              name="check"
              {..._icon}
              size={size}
              opacity={checked ? 1 : 0}
            />
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
      ref={_ref}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={mergedRef} />
      </VisuallyHidden>

      {component}
    </Box>
  );
};

export default React.memo(React.forwardRef(Checkbox));
