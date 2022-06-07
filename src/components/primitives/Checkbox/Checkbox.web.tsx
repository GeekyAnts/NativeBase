import React, { memo, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
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
import {
  extractInObject,
  getFilteredStyleSheet,
  stylingProps,
} from '../../../theme/tools/utils';
import { combineContextAndProps } from '../../../utils';
import SizedIcon from './SizedIcon';
import { Stack } from '../Stack';
import { wrapStringChild } from '../../../utils/wrapStringChild';
import { updateComponentThemeMap } from '../../../utils/styled';
import {
  getResolvedStyleSheet,
  log as resolveComponentThemeLog,
  getResolvedProps,
  getThemeProps,
} from '../../../core';
import { useColorMode } from '../../../core/color-mode';

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
    const { unResolvedProps, styleFromProps, restDefaultProps } = getThemeProps(
      'Checkbox',
      colorMode,
      state,
      combinedProps
    );
    const stackDefaultProps = getThemeProps('Checkbox.Stack', colorMode, state);
    const iconDefaultProps = getThemeProps('Checkbox.Icon', colorMode, state);

    // console.log('Checkbox log1 22222222', iconDefaultProps, stackDefaultProps);

    const filterProps = [
      ...stylingProps.margin,
      ...stylingProps.layout,
      ...stylingProps.flexbox,
      ...stylingProps.position,
      '_text',
    ];
    const [layoutStyles, nonLayoutStyles] = extractInObject(
      styleFromProps,

      filterProps
    );
    // console.log('nonLayoutStyles LayoutStyles', layoutStyles, nonLayoutStyles);
    const { icon, _interactionBox, _icon, _stack, _text, ...resolvedProps } = {
      ...restDefaultProps,
      ...usePropsResolution(
        'Checkbox',
        { ...unResolvedProps, ...combinedProps },
        state
      ),
    };
    console.log('Checkbox log2', resolvedProps);

    const [layoutProps, nonLayoutProps] = extractInObject(
      resolvedProps,
      filterProps
    );
    const component = React.useMemo(() => {
      return (
        <Stack
          {..._stack}
          INTERNAL_themeStyle={[layoutStyles, stackDefaultProps.style]}
          {...layoutProps}
          {...stackDefaultProps.restDefaultProps}
        >
          <Center>
            {/* <Box {..._interactionBox} /> */}

            <Center INTERNAL_themeStyle={nonLayoutStyles} {...nonLayoutProps}>
              <SizedIcon
                icon={icon}
                _icon={{
                  ...iconDefaultProps.restDefaultProps,
                  ..._icon,
                  INTERNAL_themeStyle: iconDefaultProps.style,
                }}
                isChecked={isChecked}
              />
            </Center>
          </Center>
          {/* Label */}
          {/* {resolvedProps?.children} */}
          {wrapStringChild(resolvedProps?.children, _text)}
        </Stack>
      );
    }, [
      _icon,
      _stack,
      _text,
      _interactionBox,
      icon,
      isChecked,
      nonLayoutProps,
      layoutProps,
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
