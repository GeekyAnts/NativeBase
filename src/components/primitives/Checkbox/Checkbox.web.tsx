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
import { extractInObject, stylingProps } from '../../../theme/tools/utils';

const Checkbox = ({ icon, wrapperRef, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext = useFormControlContext();
  const checkboxGroupContext = React.useContext(CheckboxGroupContext);
  const {
    _interactionBox,
    _disabled,
    _invalid,
    _focus,
    _hover,
    _checked,
    _unchecked,
    _indeterminate,
    _icon,
    _readOnly,
    isInvalid,
    isReadOnly,
    isIndeterminate,
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
          'aria-label': themedProps.accessibilityLabel,
          'value': themedProps.value,
        },
        groupState.state,
        //@ts-ignore
        mergedRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        {
          ...nonLayoutProps,
          'aria-label': themedProps.accessibilityLabel,
        },
        state,
        //@ts-ignore
        mergedRef
      );

  const { checked: isChecked, disabled: isDisabled } = inputProps;
  const sizedIcon = (icon: JSX.Element, _icon: any) =>
    React.cloneElement(
      icon,
      {
        ..._icon,
      },
      icon.props.children
    );

  function iconResolver() {
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
    } else if (isHovered && _hover?.icon) {
      return sizedIcon(_hover?.icon, {
        ..._icon,
        ..._hover?._icon,
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
    } else if (isIndeterminate && _indeterminate?.icon) {
      return sizedIcon(_indeterminate?.icon, {
        ..._icon,
        ..._indeterminate?._icon,
      });
    } else if (isFocusVisible && _focus?.icon) {
      return sizedIcon(_focus?.icon, {
        ..._icon,
        ..._focus?._icon,
      });
    }
    return <CheckIcon name="check" {..._icon} opacity={isChecked ? 1 : 0} />;
  }

  const { focusProps, isFocusVisible } = useFocusRing();
  const component = (
    <Box
      {...layoutProps}
      flexDirection="row"
      alignItems="center"
      opacity={isDisabled ? 0.4 : 1}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
    >
      <Center>
        {/* Interaction Box */}
        <Box
          {..._interactionBox}
          {...(!isChecked && _unchecked?._interactionBox)}
          {...(isChecked && _checked?._interactionBox)}
          {...(isIndeterminate && _indeterminate?._interactionBox)}
          {...(isFocusVisible && _focus?._interactionBox)}
          {...(isHovered && _hover?._interactionBox)}
          {...(isInvalid && _invalid?._interactionBox)}
          {...(isReadOnly && _readOnly?._interactionBox)}
          {...(isDisabled && _disabled?._interactionBox)}
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
        <Center
          {...nonLayoutProps}
          {...(!isChecked && _unchecked)}
          {...(isChecked && _checked)}
          {...(isIndeterminate && _indeterminate)}
          {...(isFocusVisible && _focus)}
          {...(isHovered && _hover)}
          {...(isInvalid && _invalid)}
          {...(isReadOnly && _readOnly)}
          {...(isDisabled && _disabled)}
        >
          {iconResolver()}
        </Center>
      </Center>
      {/* Label */}
      {props.children}
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
