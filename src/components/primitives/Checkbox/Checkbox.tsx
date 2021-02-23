import React, { useContext } from 'react';
import {
  TouchableOpacity,
  Platform,
  TouchableOpacityProps,
} from 'react-native';
import { mergeRefs } from './../../../utils';
import { useThemeProps } from '../../../hooks';
import { Center } from '../../composites/Center';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import Icon from '../Icon';
import type { ICheckboxProps } from './types';
import { useToggleState } from '@react-stately/toggle';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { CheckboxGroupContext } from './CheckboxGroup';
import { useHover } from '@react-native-aria/interactions';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';
import { useFocusRing } from '@react-native-aria/focus';

const Checkbox = ({ icon, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );

  const checkboxGroupContext = React.useContext(CheckboxGroupContext);
  const {
    activeColor,
    borderColor,
    iconColor,
    size,
    ...newProps
  } = useThemeProps('Checkbox', {
    ...checkboxGroupContext,
    ...formControlContext,
    ...props,
  });
  let _ref = React.useRef();
  const mergedRef = mergeRefs([ref, _ref]);
  let state = useToggleState({
    ...props,
    defaultSelected: props.defaultIsChecked,
    isSelected: props.isChecked,
  });
  let groupState = useContext(CheckboxGroupContext);
  const { isHovered } = useHover({}, _ref);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  let { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...props,
          value: props.value,
        },
        groupState.state,
        //@ts-ignore
        mergedRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        props,
        state,
        //@ts-ignore
        mergedRef
      );

  const isChecked = inputProps.checked;
  const isDisabled = inputProps.disabled;
  const sizedIcon = icon
    ? () =>
        React.cloneElement(
          icon,
          {
            size,
            color: icon.props.color ? icon.props.color : iconColor,
          },
          icon.props.children
        )
    : null;
  const outlineColor =
    isHovered && !isDisabled
      ? activeColor
      : isChecked
      ? isDisabled
        ? borderColor
        : activeColor
      : borderColor;
  const component = (
    <Box
      flexDirection="row"
      alignItems="center"
      {...newProps}
      opacity={isDisabled ? 0.4 : 1}
      {...(Platform.OS === 'web'
        ? {
            disabled: isDisabled,
            cursor: isDisabled ? 'not-allowed' : 'auto',
          }
        : {})}
    >
      <Center
        backgroundColor={
          isChecked ? (isDisabled ? borderColor : activeColor) : 'transparent'
        }
        borderColor={outlineColor}
        borderWidth={1}
        borderRadius={4}
        p={1}
      >
        {icon && sizedIcon && isChecked ? (
          sizedIcon()
        ) : (
          <Icon
            name="check-bold"
            type="MaterialCommunityIcons"
            size={size}
            color={iconColor}
            opacity={isChecked ? 1 : 0}
          />
        )}
      </Center>
      {props.children}
    </Box>
  );

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <>
      {Platform.OS === 'web' ? (
        <Box
          // @ts-ignore - RN web supports accessibilityRole="label"
          accessibilityRole="label"
          ref={mergedRef}
          outlineWidth={isFocusVisible ? 1 : 0}
          outlineColor={activeColor}
          outlineStyle={'solid'}
        >
          <VisuallyHidden>
            <input {...inputProps} {...focusProps} ref={mergedRef}></input>
          </VisuallyHidden>

          {component}
        </Box>
      ) : (
        <TouchableOpacity
          {...(inputProps as TouchableOpacityProps)}
          ref={mergedRef}
        >
          {component}
        </TouchableOpacity>
      )}
    </>
  );
};

export default React.memo(React.forwardRef(Checkbox));
