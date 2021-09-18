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
      {...inputProps}
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
          <Box {..._interactionBox} p={5} w="100%" height="100%" zIndex={-1} />
          {/* Checkbox */}
          <Center {...nonLayoutProps}>
            <SizedIcon icon={icon} _icon={_icon} isChecked={isChecked} />
          </Center>
        </Center>
        {/* Label */}
        {combinedProps.children}
      </Center>
    </Pressable>
  );
};

export default memo(forwardRef(Checkbox));
