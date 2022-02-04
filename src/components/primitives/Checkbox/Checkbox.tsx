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
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { composeEventHandlers, combineContextAndProps } from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import {
  useHover,
  useFocus,
  useIsPressed,
} from '../../primitives/Pressable/Pressable';
import SizedIcon from './SizedIcon';

const Checkbox = ({ wrapperRef, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext = useFormControlContext();

  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = combineContextAndProps(formControlContext, props);

  const checkboxGroupContext = useContext(CheckboxGroupContext);
  const state = useToggleState({
    ...combinedProps,
    defaultSelected: combinedProps.defaultIsChecked,
    isSelected: combinedProps.isChecked,
  });

  const _ref = React.useRef();
  const mergedRef = mergeRefs([ref, _ref]);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  const { inputProps: groupItemInputProps } = checkboxGroupContext
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        combinedProps,
        checkboxGroupContext.state,
        //@ts-ignore
        mergedRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        combinedProps,
        state,
        //@ts-ignore
        mergedRef
      );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inputProps = React.useMemo(() => groupItemInputProps, [
    groupItemInputProps.checked,
    groupItemInputProps.disabled,
  ]);

  const [contextCombinedProps] = React.useState({
    ...checkboxGroupContext,
    ...combinedProps,
  });

  return (
    <CheckboxComponent
      inputProps={inputProps}
      combinedProps={contextCombinedProps}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isIndeterminate={isIndeterminate}
      wrapperRef={wrapperRef}
    />
  );
};
const CheckboxComponent = React.memo(
  ({
    wrapperRef,
    inputProps,
    combinedProps,
    isInvalid,
    isReadOnly,
    isIndeterminate,
  }: any) => {
    const _ref = React.useRef();
    const { hoverProps, isHovered } = useHover();
    const { pressableProps, isPressed } = useIsPressed();
    const { focusProps, isFocused } = useFocus();

    const { checked: isChecked, disabled: isDisabled } = inputProps;

    const {
      icon,
      _interactionBox,
      _icon,
      // destructuring pressable props and passing it manually
      onPress,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      onFocus,
      onBlur,
      ...resolvedProps
    } = usePropsResolution('Checkbox', inputProps, {
      isInvalid,
      isReadOnly,
      isIndeterminate,
      isDisabled,
      isChecked,
      isHovered,
      isPressed,
      isFocused,
    });

    const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
      ...stylingProps.margin,
      ...stylingProps.layout,
      ...stylingProps.flexbox,
      ...stylingProps.position,
      '_text',
    ]);

    const [
      accessibilityProps,
      nonAccessibilityProps,
    ] = extractInObject(nonLayoutProps, [
      'accessibilityRole',
      'accessibilityState',
    ]);

    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(resolvedProps)) {
      return null;
    }

    return (
      <Pressable
        {...(pressableProps as IPressableProps)}
        {...accessibilityProps}
        onPress={onPress}
        ref={mergeRefs([_ref, wrapperRef])}
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
        <Box {...layoutProps}>
          <Center>
            {/* Interaction Wrapper */}
            <Box
              {..._interactionBox}
              p={5}
              w="100%"
              height="100%"
              zIndex={-1}
            />
            {/* Checkbox */}
            <Center {...nonAccessibilityProps}>
              <SizedIcon icon={icon} _icon={_icon} isChecked={isChecked} />
            </Center>
          </Center>
          {/* Label */}
          {combinedProps.children}
        </Box>
      </Pressable>
    );
  }
);

export default memo(forwardRef(Checkbox));
