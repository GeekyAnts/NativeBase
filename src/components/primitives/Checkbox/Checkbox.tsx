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
  const { hoverProps, isHovered } = useHover();
  const { pressableProps, isPressed } = useIsPressed();
  const { focusProps, isFocused } = useFocus();
  const formControlContext = useFormControlContext();

  const combinedProps = combineContextAndProps(formControlContext, props);

  const _ref = React.useRef();
  const mergedRef = mergeRefs([ref, _ref]);

  const state = useToggleState({
    ...combinedProps,
    defaultSelected: combinedProps.defaultIsChecked,
    isSelected: combinedProps.isChecked,
  });
  const groupState = useContext(CheckboxGroupContext);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  const { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        combinedProps,
        groupState.state,
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

  const {
    checked: isChecked,
    disabled: isDisabled,
    isInvalid,
    isReadOnly,
    isIndeterminate,
  } = inputProps;

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

  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(resolvedProps)) {
    return null;
  }
  return (
    <Pressable
      {...(pressableProps as IPressableProps)}
      onPress={onPress}
      // alignItems="flex-start"
      //some input props
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
      <Box {...layoutProps}>
        <Center>
          {/* Interaction Wrapper */}
          <Box {..._interactionBox} p={5} w="100%" height="100%" zIndex={-1} />
          {/* Checkbox */}
          <Center {...nonLayoutProps}>
            <SizedIcon icon={icon} _icon={_icon} isChecked={isChecked} />
          </Center>
        </Center>
        {/* Label */}
        {combinedProps.children}
      </Box>
    </Pressable>
  );
};

export default memo(forwardRef(Checkbox));
