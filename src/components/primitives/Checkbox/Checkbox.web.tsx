import React, { useContext, memo, forwardRef } from 'react';
import { mergeRefs } from './../../../utils';
// import { usePropsResolution } from '../../../hooks/useThemeProps';
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
import { CheckIcon, MoonIcon } from '../Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { usePropsResolutionTest } from '../../../hooks/useThemeProps/usePropsResolutionTest';

const Checkbox = (
  {
    icon,
    wrapperRef,
    isInvalid,
    isReadOnly,
    isIndeterminate,

    ...props
  }: ICheckboxProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();
  const checkboxGroupContext = React.useContext(CheckboxGroupContext);

  const groupState = useContext(CheckboxGroupContext);
  const _ref = React.useRef();
  const mergedRef = mergeRefs([ref, _ref]);
  const { isHovered } = useHover({}, _ref);
  const { focusProps: isFocusVisibleProps, isFocusVisible } = useFocusRing();

  const state = useToggleState({
    ...props,
    defaultSelected: props.defaultIsChecked,
    isSelected: props.isChecked,
  });

  const { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...props,
          'aria-label': props.accessibilityLabel,
          'value': props.value,
        },
        groupState.state,
        //@ts-ignore
        mergedRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        {
          ...props,
          'aria-label': props.accessibilityLabel,
        },
        state,
        //@ts-ignore
        mergedRef
      );

  const { checked: isChecked, disabled: isDisabled } = inputProps;
  const { _interactionBox, _icon, ...resolvedProps } = usePropsResolutionTest(
    'Checkbox',
    {
      ...checkboxGroupContext,
      ...formControlContext,
      ...props,
    },
    {
      isDisabled,
      isChecked,
      isReadOnly,
      isFocused: isFocusVisible,
      isInvalid,
      isHovered,
      isIndeterminate,
    }
  );
  const { children, ...remainingProps } = resolvedProps;

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.

  const sizedIcon = () =>
    //@ts-ignore
    React.cloneElement(icon, {
      ..._icon,
    });
  const component = (
    <Box
      {...remainingProps}
      flexDirection="row"
      alignItems="center"
      opacity={isDisabled ? 0.4 : 1}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
    >
      <Center>
        {/* Interaction Box */}
        <Box
          {..._interactionBox}
          style={{
            // @ts-ignore - only for web"
            transition: 'height 200ms, width 200ms',
          }}
          h={
            isFocusVisible || isHovered || isChecked || isInvalid
              ? '200%'
              : '100%'
          }
          w={
            isFocusVisible || isHovered || isChecked || isInvalid
              ? '200%'
              : '100%'
          }
          zIndex={-1}
        />
        {/* Checkbox */}
        <Center>
          {icon && sizedIcon && isChecked ? (
            sizedIcon()
          ) : isChecked ? (
            <CheckIcon name="check" {..._icon} />
          ) : (
            <MoonIcon {..._icon}></MoonIcon>
          )}
        </Center>
      </Center>
      {/* Label */}
      {children}
    </Box>
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      // @ts-ignore - RN web supports accessibilityRole="label"
      accessibilityRole="label"
      ref={mergeRefs([wrapperRef, _ref])}
    >
      <VisuallyHidden>
        <input {...inputProps} {...isFocusVisibleProps} ref={mergedRef} />
      </VisuallyHidden>

      {component}
    </Box>
  );
};

export default memo(forwardRef(Checkbox));
