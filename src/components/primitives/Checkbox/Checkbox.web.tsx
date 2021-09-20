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
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { combineContextAndProps } from '../../../utils';
import SizedIcon from './SizedIcon';

const Checkbox = ({ wrapperRef, ...props }: ICheckboxProps, ref: any) => {
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
  const { isHovered } = useHover({}, _ref);

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

  const { focusProps, isFocusVisible } = useFocusRing();

  const { icon, _interactionBox, _icon, ...resolvedProps } = usePropsResolution(
    'Checkbox',
    {
      ...checkboxGroupContext,
      ...combinedProps,
    },
    {
      isInvalid,
      isReadOnly,
      isFocusVisible,
      isDisabled,
      isIndeterminate,
      isChecked,
      isHovered,
    }
  );

  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
    ...stylingProps.margin,
    ...stylingProps.layout,
    ...stylingProps.flexbox,
    ...stylingProps.position,
    '_text',
  ]);

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
        <Center {...nonLayoutProps}>
          {/* {iconResolver()} */}
          <SizedIcon icon={icon} _icon={_icon} isChecked={isChecked} />
        </Center>
      </Center>
      {/* Label */}
      {resolvedProps?.children}
    </Box>
  );
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(resolvedProps)) {
    return null;
  }
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
