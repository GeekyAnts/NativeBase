import React, { useContext } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Hoverable } from './../../../utils';
import { useThemeProps } from '../../../hooks';
import { Center } from '../../composites/Center';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import Box from '../Box';
import Icon from '../Icon';
import { CheckboxContext } from './CheckboxGroup';
import type { ICheckboxProps } from './props';
import { AriaInputWrapper, useFocusRing } from 'react-native-aria';
import { useCheckbox, useCheckboxGroupItem } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import mergeRefs from '../../../utils/mergeRefs';

const Checkbox = ({ icon, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );

  const checkboxGroupContext: any = React.useContext(CheckboxContext);
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
  let groupState = useContext(checkboxGroupContext);
  let { inputProps } = groupState
    ? useCheckboxGroupItem(
        {
          ...props,
          value: props.value,
        },
        groupState,
        mergeRefs([ref, ref1])
      )
    : useCheckbox(props, state, mergeRefs([ref, ref1]));
  let { isFocusVisible, focusProps } = useFocusRing();
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

  return (
    <AriaInputWrapper
      {...inputProps}
      activeOpacity={1}
      ref={mergeRefs([ref, ref1])}
      {...focusProps}
    >
      <Hoverable>
        {(isHovered: boolean) => {
          const outlineColor =
            isHovered && !isDisabled
              ? activeColor
              : isChecked
              ? isDisabled
                ? borderColor
                : activeColor
              : borderColor;
          return (
            <Box
              borderWidth={isFocusVisible ? 1 : 0}
              borderColor="blue.500"
              borderRadius={4}
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
                  isChecked
                    ? isDisabled
                      ? borderColor
                      : activeColor
                    : 'transparent'
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
        }}
      </Hoverable>
    </AriaInputWrapper>
  );
};

export default React.memo(
  React.forwardRef<TouchableOpacity, ICheckboxProps>(Checkbox)
);
