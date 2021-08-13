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
import { extractInObject, stylingProps } from '../../../theme/tools/utils';

const Checkbox = (
  { icon, children, wrapperRef, ...props }: ICheckboxProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const checkboxGroupContext = React.useContext(CheckboxGroupContext);
  const {
    _interactionBox,
    _disabled,
    _invalid,
    _pressed,
    _checked,
    _unchecked,
    _indeterminate,
    _icon,
    _readOnly,
    isInvalid,
    isReadOnly,
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

  const [layoutProps, nonLayoutProps] = extractInObject(themedProps, [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    '_text',
  ]);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  const { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...nonLayoutProps,
          value: themedProps.value,
        },
        groupState.state,
        ref
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(nonLayoutProps, state, ref);

  const [, pressableProps] = extractInObject(inputProps, [
    ...stylingProps.border,
    ...stylingProps.background,
    ...stylingProps.flexbox,
    ...stylingProps.layout,
    ...stylingProps.padding,
    ...stylingProps.margin,
  ]);

  const sizedIcon = (icon: JSX.Element, _icon: any) =>
    React.cloneElement(
      icon,
      {
        ..._icon,
      },
      icon.props.children
    );

  const { checked: isChecked, disabled: isDisabled } = inputProps;

  function iconResolver(isPressed?: any) {
    if (sizedIcon) {
      if (isDisabled && _disabled?.icon) {
        return sizedIcon(_disabled?.icon, {
          ..._icon,
          ..._disabled?._icon,
        });
      } else if (isReadOnly && _readOnly?.icon) {
        return sizedIcon(_readOnly?.icon, {
          ..._icon,
          ..._readOnly?._icon,
        });
      } else if (isInvalid && _invalid?.icon) {
        return sizedIcon(_invalid?.icon, {
          ..._icon,
          ..._invalid?._icon,
        });
      } else if (isPressed && _pressed?.icon) {
        return sizedIcon(_pressed?.icon, {
          ..._icon,
          ..._pressed?._icon,
        });
      } else if (!isChecked && _unchecked?.icon) {
        return sizedIcon(_unchecked?.icon, { ..._icon, ..._unchecked?._icon });
      } else if (isChecked) {
        if (_checked?.icon) {
          return sizedIcon(_checked?.icon, { ..._icon, ..._checked?._icon });
        } else if (icon) {
          return sizedIcon(icon, { ..._icon });
        } else {
          return <CheckIcon name="check" {..._icon} opacity={1} />;
        }
      } else if (themedProps.isIndeterminate && _indeterminate?.icon) {
        return sizedIcon(_indeterminate?.icon, {
          ..._icon,
          ..._indeterminate?._icon,
        });
      }
    }
    return <CheckIcon name="check" {..._icon} opacity={isChecked ? 1 : 0} />;
  }
  return (
    <Pressable
      {...(pressableProps as IPressableProps)}
      ref={mergeRefs([ref, wrapperRef])}
      accessibilityRole="checkbox"
    >
      {({ isPressed }: any) => {
        return (
          <Center {...layoutProps} flexDirection="row" borderRadius="full">
            <Center>
              {/* Interaction Wrapper */}
              <Box
                {..._interactionBox}
                {...(!isChecked && _unchecked?._interactionBox)}
                {...(isChecked && _checked?._interactionBox)}
                {...(themedProps.isIndeterminate &&
                  _indeterminate?._interactionBox)}
                {...(isPressed && _pressed._interactionBox)}
                {...(isInvalid && _invalid?._interactionBox)}
                {...(isReadOnly && _readOnly?._interactionBox)}
                {...(isDisabled && _disabled?._interactionBox)}
                p={5}
                w="100%"
                height="100%"
                zIndex={-1}
              />
              {/* Checkbox */}
              <Center
                {...nonLayoutProps}
                {...(!isChecked && _unchecked)}
                {...(isChecked && _checked)}
                {...(isPressed && _pressed)}
                {...(themedProps.isIndeterminate && _indeterminate)}
                {...(isInvalid && _invalid)}
                {...(isReadOnly && _readOnly)}
                {...(isDisabled && _disabled)}
              >
                {iconResolver(isPressed)}
              </Center>
            </Center>
            {/* Label */}
            {children}
          </Center>
        );
      }}
    </Pressable>
  );
};

export default memo(forwardRef(Checkbox));
