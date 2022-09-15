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
import { stylingProps } from '../../../theme/tools/utils';
import { combineContextAndProps } from '../../../utils';
import SizedIcon from './SizedIcon';
import { Stack } from '../Stack';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import { getThemeProps } from '../../../core';
import { useColorMode } from '../../../core/color-mode';
import { Platform } from 'react-native';
import { useNativeBase } from '../../../hooks';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { extractFilteredProps } from '../../../utils/extractFilteredProps';

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
    groupItemInputProps,
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
    const { theme } = useNativeBase();

    const { checked: isChecked, disabled: isDisabled } = inputProps;

    const { focusProps, isFocusVisible } = useFocusRing();
    const state = {
      isInvalid,
      isReadOnly,
      isFocusVisible: isFocusVisibleProp || isFocusVisible,
      isDisabled,
      isIndeterminate,
      isChecked,
      isHovered: isHovered || isHoveredProp,
    };
    const { colorMode } = useColorMode();
    const providerId = useNativeBaseConfig('NativeBase').providerId;

    const { styleFromProps, stateStyleFromProps } = getThemeProps(
      theme,
      providerId,
      'Checkbox',
      { colorMode, platform: Platform.OS },
      state,
      combinedProps
    );

    const filterProps = [
      ...stylingProps.margin,
      ...stylingProps.layout,
      ...stylingProps.flexbox,
      ...stylingProps.position,
      '_text',
    ];

    const {
      icon,
      _interactionBox,
      _icon,
      _stack,
      _text,
      stateProps,
      ...resolvedProps
    } = usePropsResolution(
      'Checkbox',
      {
        ...combinedProps,
      },
      state
    );

    const {
      layoutStyles,
      nonLayoutStyles,
      stateLayoutStyles,
      stateNonLayoutStyles,
      layoutProps,
      nonLayoutProps,
      stateLayoutProps,
      stateNonLayoutProps,
    } = extractFilteredProps(
      filterProps,
      resolvedProps,
      stateProps,
      stateStyleFromProps,
      styleFromProps
    );

    const component = React.useMemo(() => {
      return (
        <Stack
          {..._stack}
          INTERNAL_themeStyle={[layoutStyles, _stack.INTERNAL_themeStyle]}
          {...layoutProps}
          stateProps={{
            ...stateLayoutProps,
            INTERNAL_themeStyle: [stateLayoutStyles],
          }}
        >
          <Center>
            <Box {..._interactionBox} />
            <Center
              {...nonLayoutProps}
              //@ts-ignore
              INTERNAL_themeStyle={[nonLayoutStyles]}
              stateProps={{
                ...stateNonLayoutProps,
                INTERNAL_themeStyle: [stateNonLayoutStyles],
              }}
            >
              <SizedIcon
                icon={icon}
                _icon={{
                  ..._icon,
                }}
                isChecked={isChecked}
              />
            </Center>
          </Center>
          {/* Label */}
          {wrapStringChild(resolvedProps?.children, _text)}
        </Stack>
      );
    }, [
      _stack,
      layoutStyles,
      layoutProps,
      _interactionBox,
      nonLayoutProps,
      nonLayoutStyles,
      stateLayoutProps,
      stateNonLayoutProps,
      stateLayoutStyles,
      stateNonLayoutStyles,
      icon,
      _icon,
      isChecked,
      resolvedProps?.children,
      _text,
    ]);

    const mergedWrapperRef = React.useMemo(
      () => mergeRefs([wrapperRef, _ref]),
      [wrapperRef]
    );

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
