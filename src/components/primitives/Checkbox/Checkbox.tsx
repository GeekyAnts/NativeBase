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
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { composeEventHandlers } from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';

const combineContextAndProps = (context: any, props: any) => {
  return {
    ...context,
    ...props,
  };
};

const Checkbox = ({ wrapperRef, ...props }: ICheckboxProps, ref: any) => {
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const formControlContext = useFormControlContext();

  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = combineContextAndProps(formControlContext, props);

  const checkboxGroupContext = React.useContext(CheckboxGroupContext);

  const _ref = React.useRef();
  const mergedRef = mergeRefs([ref, _ref]);

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
          ...combinedProps,
          'aria-label': combinedProps.accessibilityLabel,
          'value': combinedProps.value,
        },
        groupState.state,
        //@ts-ignore
        mergedRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        {
          ...combinedProps,
          'aria-label': combinedProps.accessibilityLabel,
        },
        state,
        //@ts-ignore
        mergedRef
      );

  const { checked: isChecked, disabled: isDisabled } = inputProps;
  const sizedIcon = (icon: JSX.Element, _icon: any) =>
    icon ? (
      React.cloneElement(icon, {
        ..._icon,
      })
    ) : (
      <CheckIcon {..._icon} />
    );

  const {
    icon,
    _interactionBox,
    _icon,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...resolvedProps
  } = usePropsResolution(
    'Checkbox',
    {
      ...checkboxGroupContext,
      ...combinedProps,
    },
    {
      isInvalid,
      isReadOnly,
      isDisabled,
      isIndeterminate,
      isChecked,
      isHovered,
      isPressed,
      isFocused,
    }
  );

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    '_text',
  ]);

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(resolvedProps)) {
    return null;
  }
  return (
    <Pressable
      {...(pressableProps as IPressableProps)}
      ref={mergeRefs([ref, wrapperRef])}
      accessibilityRole="checkbox"
      onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
      onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
      // @ts-ignore - web only
      onHoverIn={composeEventHandlers(onHoverIn, hoverProps.onHoverIn)}
      // @ts-ignore - web only
      onHoverOut={composeEventHandlers(onHoverOut, hoverProps.onHoverOut)}
      // @ts-ignore - web only
      onFocus={composeEventHandlers(
        composeEventHandlers(onFocus, focusProps.onFocus)
        // focusRingProps.onFocu
      )}
      // @ts-ignore - web only
      onBlur={composeEventHandlers(
        composeEventHandlers(onBlur, focusProps.onBlur)
        // focusRingProps.onBlur
      )}
    >
      <Center {...layoutProps} flexDirection="row" borderRadius="full">
        <Center>
          {/* Interaction Wrapper */}
          <Box
            {..._interactionBox}
            // {...(!isChecked && _unchecked?._interactionBox)}
            // {...(isChecked && _checked?._interactionBox)}
            // {...(themedProps.isIndeterminate &&
            //   _indeterminate?._interactionBox)}
            // {...(isPressed && _pressed._interactionBox)}
            // {...(isInvalid && _invalid?._interactionBox)}
            // {...(isReadOnly && _readOnly?._interactionBox)}
            // {...(isDisabled && _disabled?._interactionBox)}
            p={5}
            w="100%"
            height="100%"
            zIndex={-1}
          />
          {/* Checkbox */}
          <Center
            {...nonLayoutProps}
            // {...(!isChecked && _unchecked)}
            // {...(isChecked && _checked)}
            // {...(isPressed && _pressed)}
            // {...(themedProps.isIndeterminate && _indeterminate)}
            // {...(isInvalid && _invalid)}
            // {...(isReadOnly && _readOnly)}
            // {...(isDisabled && _disabled)}
          >
            {sizedIcon(icon, _icon)}
          </Center>
        </Center>
        {/* Label */}
        {props.children}
      </Center>
    </Pressable>
  );
};

export default memo(forwardRef(Checkbox));
