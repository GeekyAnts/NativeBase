import React, { memo, forwardRef } from 'react';
import { mergeRefs } from '../../../utils';
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

const Checkbox = (
  {
    wrapperRef,
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }: ICheckboxProps,
  ref: any
) => {
  const formControlContext = useFormControlContext();

  const {
    isInvalid,
    isReadOnly,
    isIndeterminate,
    ...combinedProps
  } = combineContextAndProps(formControlContext, props);

  const checkboxGroupContext = React.useContext(CheckboxGroupContext);
  const state = useToggleState({
    ...props,
    defaultSelected: props.defaultIsChecked,
    isSelected: props.isChecked,
  });

  const _ref = React.useRef();
  const mergedRef = mergeRefs([ref, _ref]);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  const { inputProps: groupItemInputProps } = checkboxGroupContext
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...combinedProps,
          'aria-label': combinedProps.accessibilityLabel,
          'value': combinedProps.value,
        },
        checkboxGroupContext.state,
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
      wrapperRef={wrapperRef}
      mergedRef={mergedRef}
      inputProps={inputProps}
      combinedProps={contextCombinedProps}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      isHovered={isHoveredProp}
      isIndeterminate={isIndeterminate}
      isFocusVisible={isFocusVisibleProp}
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
    mergedRef,
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp,
  }: any) => {
    const _ref = React.useRef();
    const { isHovered } = useHover({}, _ref);

    const { checked: isChecked, disabled: isDisabled } = inputProps;

    const { focusProps, isFocusVisible } = useFocusRing();

    const {
      icon,
      _interactionBox,
      _icon,
      ...resolvedProps
    } = usePropsResolution('Checkbox', combinedProps, {
      isInvalid,
      isReadOnly,
      isFocusVisible: isFocusVisibleProp || isFocusVisible,
      isDisabled,
      isIndeterminate,
      isChecked,
      isHovered: isHovered || isHoveredProp,
    });

    const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [
      ...stylingProps.margin,
      ...stylingProps.layout,
      ...stylingProps.flexbox,
      ...stylingProps.position,
      '_text',
    ]);

    const component = React.useMemo(() => {
      return (
        <Box
          {...layoutProps}
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
                isFocusVisible ||
                isFocusVisibleProp ||
                isHovered ||
                isHoveredProp
                  ? '200%'
                  : '0%'
              }
              w={
                isFocusVisible ||
                isFocusVisibleProp ||
                isHovered ||
                isHoveredProp
                  ? '200%'
                  : '0%'
              }
              pointerEvents="none"
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
    }, [
      _icon,
      _interactionBox,
      icon,
      isChecked,
      isDisabled,
      isFocusVisible,
      isHovered,
      layoutProps,
      nonLayoutProps,
      isHoveredProp,
      isFocusVisibleProp,
      resolvedProps?.children,
    ]);

    const mergedWrapperRef = React.useMemo(
      () => mergeRefs([wrapperRef, _ref]),
      [wrapperRef]
    );

    //TODO: refactor for responsive prop
    if (useHasResponsiveProps(resolvedProps)) {
      return null;
    }

    return (
      <Box
        // @ts-ignore - RN web supports accessibilityRole="label"
        accessibilityRole="label"
        ref={mergedWrapperRef}
      >
        <VisuallyHidden>
          {/* <input {...props.inputProps} {...props.focusProps} ref={props.mergedRef} /> */}
          <input {...inputProps} {...focusProps} ref={mergedRef} />
        </VisuallyHidden>

        {component}
      </Box>
    );
  }
);

export default memo(forwardRef(Checkbox));
