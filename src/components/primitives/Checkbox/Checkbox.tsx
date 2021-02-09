import React, { useContext } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
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
  let ref1 = React.useRef();

  let state = useToggleState(props);
  let groupState = useContext(CheckboxGroupContext);
  const { isHovered } = useHover({}, ref1);

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
        mergeRefs([ref, ref1])
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(
        props,
        state,
        //@ts-ignore
        mergeRefs([ref, ref1])
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

  return (
    <>
      {Platform.OS === 'web' ? (
        <label ref={mergeRefs([ref, ref1])}>
          <VisuallyHidden>
            <input {...inputProps} ref={mergeRefs([ref1, ref])}></input>
          </VisuallyHidden>

          {component}
        </label>
      ) : (
        //@ts-ignore
        <TouchableOpacity {...inputProps} ref={mergeRefs([ref, ref1])}>
          {component}
        </TouchableOpacity>
      )}
    </>
  );
};

export default React.memo(
  React.forwardRef<TouchableOpacity, ICheckboxProps>(Checkbox)
);
